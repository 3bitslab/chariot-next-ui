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
    | "drawerFinance";

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

export const drawerAtom = atom<DrawerState>(null);
