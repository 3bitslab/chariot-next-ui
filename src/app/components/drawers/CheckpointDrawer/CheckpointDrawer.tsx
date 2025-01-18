import React from "react";
import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Flag } from "lucide-react";
import Checkpoint from "./Checkpoint";
import Divider from "../../Divider";
import { checkpointAtom } from "@/atoms/checkpoint";
import { useAtom } from "jotai";
import { Switch } from "@/components/ui/switch";
import { useGetCheckpoints } from "@/hooks/useGetCheckpoints";

function CheckpointDrawer() {
    const [isDisplayedOnMap, setIsDisplayedOnMap] = useAtom(checkpointAtom);

    const { data: checkpoints } = useGetCheckpoints();

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button>
                    <Flag
                        size={18}
                        className="stroke-primary-850 dark:stroke-dark_inversed-850"
                    />
                </button>
            </DrawerTrigger>
            <DrawerContent className="px-3 w-full">
                <div className="py-5 gap-y-3 flex flex-col w-full max-h-[50%] overflow-auto">
                    <DrawerTitle className="py-3 flex justify-between items-center">
                        <span className="font-semibold opacity-80 text-primary-800 dark:text-dark_inversed-800">
                            Checkpoints
                        </span>
                        <div className="flex items-center space-x-2">
                            <Switch
                                checked={isDisplayedOnMap}
                                onCheckedChange={setIsDisplayedOnMap}
                            />
                            <label className="text-sm font-medium">
                                {isDisplayedOnMap
                                    ? "Hide on Map"
                                    : "Show on Map"}
                            </label>
                        </div>
                    </DrawerTitle>
                    <Divider />
                    <div className="flex flex-col gap-y-4 overflow-y-auto">
                        {checkpoints &&
                            checkpoints.map((checkpoint) => (
                                <Checkpoint
                                    key={checkpoint._id}
                                    address={`${checkpoint.address.house_number ? checkpoint.address.house_number + ", " : ""}${
                                        checkpoint.address.road
                                            ? checkpoint.address.road + ", "
                                            : ""
                                    }${checkpoint.address.city ? checkpoint.address.city : ""}`}
                                    landmark={checkpoint.address.name || ""}
                                    history={checkpoint.history}
                                    delta={checkpoint.timeDifference ?? null}
                                    checkpointIndex={checkpoint.checkpointIndex}
                                />
                            ))}
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default CheckpointDrawer;
