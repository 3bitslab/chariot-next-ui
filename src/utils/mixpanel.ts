import { env } from "@/env";
import mixpanel from "mixpanel-browser";
import {
    BaseEventProperties,
    EventName,
    EventProperties,
} from "@/types/analytics";

const MIXPANEL_TOKEN = env.NEXT_PUBLIC_MIXPANEL_TOKEN;
const BATCH_INTERVAL = 2000; // 2 seconds
const MAX_BATCH_SIZE = 20;
const MAX_RETRIES = 3;

type QueuedEvent<T extends EventName> = {
    eventName: T;
    properties: EventProperties<T>;
    retryCount: number;
};

type AnyQueuedEvent = {
    [K in EventName]: QueuedEvent<K>;
}[EventName];

let isInitialized = false;
let eventQueue: AnyQueuedEvent[] = [];
let batchTimeout: NodeJS.Timeout | null = null;
const processedEventIds = new Set<string>();

// Clear processed event IDs after 1 hour to prevent memory bloat
let clearEventsInterval: NodeJS.Timeout | null = null;

const startEventsCleaning = () => {
    clearEventsInterval = setInterval(() => {
        processedEventIds.clear();
    }, 3600000);
};

const stopEventsCleaning = () => {
    if (clearEventsInterval) {
        clearInterval(clearEventsInterval);
        clearEventsInterval = null;
    }
};

const isDntEnabled = () => {
    if (typeof window === "undefined") return false;
    return window.navigator.doNotTrack === "1";
};

const generateEventId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

const initialize = () => {
    if (!isInitialized && typeof window !== "undefined" && MIXPANEL_TOKEN) {
        mixpanel.init(MIXPANEL_TOKEN, {
            debug: process.env.NODE_ENV !== "production",
            track_pageview: true,
            verbose: true,
            ignore_dnt: true,
            persistence: "localStorage",
            batch_requests: true,
        });
        isInitialized = true;
        startEventsCleaning();

        // Cleanup on page unload
        window.addEventListener("unload", () => {
            stopEventsCleaning();
            if (batchTimeout) {
                clearTimeout(batchTimeout);
                batchTimeout = null;
            }
            // Process any remaining events synchronously
            if (eventQueue.length) {
                eventQueue.forEach(({ eventName, properties }) => {
                    mixpanel.track(eventName, properties);
                });
            }
        });
    }
};

const processBatch = async () => {
    if (!eventQueue.length) return;

    const batch = eventQueue.slice(0, MAX_BATCH_SIZE);
    eventQueue = eventQueue.slice(MAX_BATCH_SIZE);

    try {
        await Promise.all(
            batch.map(({ eventName, properties }) =>
                mixpanel.track(eventName, properties)
            )
        );

        if (process.env.NODE_ENV !== "production") {
            console.log(
                `[Mixpanel] Successfully sent batch of ${batch.length} events`
            );
        }
    } catch (error) {
        const failedEvents = batch.map((event) => ({
            ...event,
            retryCount: event.retryCount + 1,
        }));

        // Only retry events that haven't exceeded max retries
        const eventsToRetry = failedEvents.filter(
            (e) => e.retryCount < MAX_RETRIES
        );
        if (eventsToRetry.length) {
            eventQueue = [...eventsToRetry, ...eventQueue];
        }

        if (process.env.NODE_ENV !== "production") {
            console.error("[Mixpanel] Failed to send batch:", error);
            if (failedEvents.length !== eventsToRetry.length) {
                console.warn(
                    `[Mixpanel] Dropped ${
                        failedEvents.length - eventsToRetry.length
                    } events after ${MAX_RETRIES} retries`
                );
            }
        }
    }

    if (eventQueue.length) {
        scheduleBatch();
    }
};

const scheduleBatch = () => {
    if (batchTimeout) return;

    batchTimeout = setTimeout(() => {
        batchTimeout = null;
        processBatch();
    }, BATCH_INTERVAL);
};

function track<T extends EventName>(
    eventName: T,
    properties: Omit<EventProperties<T>, keyof BaseEventProperties>
): void {
    if (typeof window === "undefined" || !MIXPANEL_TOKEN || !isInitialized) {
        return;
    }

    const eventId = generateEventId();

    // Prevent duplicate events in the same session
    if (processedEventIds.has(eventId)) {
        if (process.env.NODE_ENV !== "production") {
            console.warn(`[Mixpanel] Duplicate event detected: ${eventName}`);
        }
        return;
    }

    processedEventIds.add(eventId);

    const enrichedProperties = {
        ...properties,
        eventId,
        timestamp: Date.now(),
    } as EventProperties<T>;

    const queuedEvent: QueuedEvent<T> = {
        eventName,
        properties: enrichedProperties,
        retryCount: 0,
    };

    eventQueue.push(queuedEvent as AnyQueuedEvent);

    if (process.env.NODE_ENV !== "production") {
        console.log(
            `[Mixpanel] Queued event: ${eventName}`,
            enrichedProperties
        );
    }

    scheduleBatch();
}

export const Analytics = {
    track,
    initialize,
    isDntEnabled,
    __cleanup: stopEventsCleaning, // Exposed for testing purposes
};
