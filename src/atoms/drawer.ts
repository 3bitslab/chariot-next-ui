import { atom } from "jotai";

// List of valid drawer parameters
const DRAWER_PARAMS = [
    "settings",
    "language",
    "theme",
    "tracker",
    "about",
    "checkpoint",
    "developers",
    "roadblock",
    "support",
    "finance",
] as const;

export type DrawerType =
    | "settings"
    | "language"
    | "theme"
    | "tracker"
    | "about"
    | "checkpoint"
    | "developers"
    | "roadblock"
    | "support"
    | "finance";

export type DrawerPosition = "right" | "left";

export type DrawerState =
    | (
          | {
                type: "roadblock";
                position: DrawerPosition;
            }
          | {
                type: Exclude<DrawerType, "roadblock">;
            }
      )
    | null;

// Base atom to store the drawer state
const drawerAtomBase = atom<DrawerState>(null);

// Wrapper atom that handles URL parameter sync and cleanup
export const drawerAtom = atom(
    (get) => {
        const baseState = get(drawerAtomBase);

        // If we already have a state, use it
        if (baseState !== null) return baseState;

        // Otherwise check URL parameters (only on client-side)
        if (typeof window === "undefined") return null;

        const searchParams = new URLSearchParams(window.location.search);
        const drawerParam = Array.from(searchParams.keys()).find((param) =>
            DRAWER_PARAMS.includes(param as DrawerType)
        );

        if (drawerParam) {
            if (drawerParam === "roadblock") {
                return { type: "roadblock", position: "right" };
            }
            return { type: drawerParam as Exclude<DrawerType, "roadblock"> };
        }

        return null;
    },
    (get, set, newValue: DrawerState) => {
        set(drawerAtomBase, newValue);

        // Skip URL manipulation on server-side
        if (typeof window === "undefined") return;

        const searchParams = new URLSearchParams(window.location.search);

        // First remove any existing drawer parameters
        let paramRemoved = false;
        DRAWER_PARAMS.forEach((param) => {
            if (searchParams.has(param)) {
                searchParams.delete(param);
                paramRemoved = true;
            }
        });

        // If setting a new drawer state, add the parameter
        if (newValue !== null) {
            searchParams.set(newValue.type, "");
            paramRemoved = true;
        }

        // Update URL if any changes were made
        if (paramRemoved) {
            const newUrl = `${window.location.pathname}${
                searchParams.toString() ? `?${searchParams.toString()}` : ""
            }`;
            window.history.replaceState({}, "", newUrl);
        }
    }
);
