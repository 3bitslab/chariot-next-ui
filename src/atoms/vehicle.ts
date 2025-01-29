import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { TTrackerType } from "../constants/types";
import { checkpointAtom } from "./checkpoint";
import { roadBlockAtom } from "./road-block";

const baseVehicleAtom = atomWithStorage<TTrackerType>(
    "vehicle-tracker",
    "chariot"
);

export const vehicleAtom = atom(
    (get) => get(baseVehicleAtom),
    (get, set, newValue: TTrackerType) => {
        set(baseVehicleAtom, newValue);
        set(checkpointAtom, false);
        set(roadBlockAtom, false);
    }
);
