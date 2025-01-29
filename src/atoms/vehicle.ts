import { atomWithStorage } from "jotai/utils";
import { TTrackerType } from "../constants/types";

export const vehicleAtom = atomWithStorage<TTrackerType>(
    "vehicle-tracker",
    "chariot"
);
