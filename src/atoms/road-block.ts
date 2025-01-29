import { atom } from "jotai";

export const roadBlockAtom = atom<boolean>(false);
export const selectedRoadblockAtom = atom<string | null>(null);
