import { env } from "@/env";
import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = env.NEXT_PUBLIC_MIXPANEL_TOKEN;

type PropertyValue = string | number | boolean | null | undefined;

type TrackProperties = {
    [key: string]:
        | PropertyValue
        | PropertyValue[]
        | Record<string, PropertyValue>;
};

let isInitialized = false;

const isDntEnabled = () => {
    if (typeof window === "undefined") return false;
    return window.navigator.doNotTrack === "1";
};

const initialize = () => {
    if (!isInitialized && typeof window !== "undefined" && MIXPANEL_TOKEN) {
        mixpanel.init(MIXPANEL_TOKEN, {
            debug: process.env.NODE_ENV !== "production",
            track_pageview: true,
            verbose: true,
            ignore_dnt: true,
        });
        isInitialized = true;
    }
};

const track = (eventName: string, properties?: TrackProperties) => {
    if (typeof window !== "undefined" && MIXPANEL_TOKEN && isInitialized) {
        mixpanel.track(eventName, properties);
    }
};

export const Analytics = {
    track,
    initialize,
    isDntEnabled,
};
