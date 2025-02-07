import { atom } from "jotai";

export type DrawerType =
    | "settings"
    | "language"
    | "theme"
    | "tracker"
    | "about"
    | "checkpoint"
    | "developers"
    | "roadblock"
    | "support";

export type DrawerPosition = "right" | "left";

export type DrawerState = {
    type: DrawerType;
    position: DrawerPosition;
} | null;

export const drawerAtom = atom<DrawerState>(null);
