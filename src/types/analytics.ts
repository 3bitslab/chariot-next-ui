export type BaseEventProperties = {
    eventId: string;
    timestamp: number;
};

export type PageViewEvent = BaseEventProperties & {
    path: string;
    search: string;
    url: string;
};

export type DrawerEvent = BaseEventProperties & {
    drawer_type: string;
};

export type LanguageEvent = BaseEventProperties & {
    language: string;
};

export type EventTypeMap = {
    "Page View": PageViewEvent;
    "Drawer Opened": DrawerEvent;
    "Language Changed": LanguageEvent;
};

export type EventName = keyof EventTypeMap;
export type EventProperties<T extends EventName> = EventTypeMap[T];
