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
    | "support"
    | null;

export const drawerAtom = atom<DrawerType>(null);
