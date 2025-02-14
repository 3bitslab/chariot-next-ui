import { atom } from "jotai";

// List of valid drawer parameters
export const DRAWER_PARAMS = [
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
          | { type: "roadblock"; position: DrawerPosition }
          | { type: Exclude<DrawerType, "roadblock"> }
      )
    | null;

// A simple atom to hold the drawer state.
export const drawerAtom = atom<DrawerState>(null);
