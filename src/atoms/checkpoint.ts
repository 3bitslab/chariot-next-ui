import { atom } from "jotai";

export const checkpointAtom = atom<boolean>(false);
export const selectedCheckpointAtom = atom<number | null>(null);
