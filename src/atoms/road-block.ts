import { atom } from "jotai";

export interface RoadblockYearModes {
    "2025": boolean;
    "2023": boolean;
}

export const roadBlockAtom = atom<boolean>(false);
export const selectedRoadblockAtom = atom<string | null>(null);
export const roadblockYearModesAtom = atom<RoadblockYearModes>({
    "2025": true,
    "2023": false,
});
