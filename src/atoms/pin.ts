import { atomWithStorage } from "jotai/utils";

export const isPinVerifiedAtom = atomWithStorage<boolean>(
    "isPinVerified",
    false
);
