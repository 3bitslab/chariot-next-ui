import { atomWithStorage } from "jotai/utils";

// Check DNT status once during initialization
const checkDNT = () => {
    if (typeof window === "undefined") return false;
    return window.navigator.doNotTrack === "1";
};

// Initialize consent based on DNT status
const initialConsent = !checkDNT();

export const analyticsConsentAtom = atomWithStorage(
    "analytics-consent",
    initialConsent
);
export const dntStatusAtom = atomWithStorage("dnt-status", checkDNT());
