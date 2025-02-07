import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import React, { useMemo } from "react";
import Selectables from "../shared/Selectables";
import { TSelectableItem, TTrackerType } from "@/constants/types";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { vehicleAtom } from "@/atoms/vehicle";
import { drawerAtom } from "@/atoms/drawer";
import Divider from "../Divider";
import ChariotIcon from "../icons/Chariot";
import KavadiIcon from "../icons/Kavadi";
import { useTranslations } from "next-intl";
import { Analytics } from "@/utils/mixpanel";

function TrackerTypeDrawer() {
    const [tracker, setTracker] = useAtom(vehicleAtom);
    const [, setCurrentDrawer] = useAtom(drawerAtom);
    const t = useTranslations("Tracker");

    const onItemChange = (data: string) => {
        const newType = data as TTrackerType;
        const previousType = tracker;

        // Track the selection
        Analytics.track("Tracker Selected", {
            selectedType: newType,
            previousType: previousType,
        });

        // Track switches between types
        if (previousType !== newType) {
            Analytics.track("Tracker Switched", {
                fromType: previousType,
                toType: newType,
                switchCount: 1, // Mixpanel will increment this
            });
        }

        setTracker(newType);
    };

    const isReturnJourney = process.env.NEXT_PUBLIC_JOURNEY !== "departure";

    const selectableItems: TSelectableItem[] = useMemo(
        () => [
            {
                title: t("chariot.title"),
                value: "chariot",
                description: t("chariot.description"),
                logo: (
                    <ChariotIcon className="fill-primary-800 dark:fill-primary-250 size-14 lg:size-16" />
                ),
            },
            {
                title: t("kavadi.title"),
                value: "kavadi",
                description: t("kavadi.description"),
                logo: (
                    <KavadiIcon className="fill-primary-800 dark:fill-primary-250 size-14 lg:size-16" />
                ),
                disabled: isReturnJourney,
                disabledMessage: t("kavadi_return_disabled"),
            },
        ],
        [t, isReturnJourney]
    );

    return (
        <Drawer
            onOpenChange={(open) => {
                setCurrentDrawer(open ? { type: "tracker" } : null);
            }}
        >
            <DrawerTrigger asChild>
                <Button>
                    <div className="[&__svg]:!size-5">
                        {
                            selectableItems.find(
                                (item) => item.value === tracker
                            )?.logo
                        }
                    </div>
                    <span className="capitalize hidden min-[300px]:block">
                        {t(`${tracker}.title`)}
                    </span>
                    <ChevronDown />
                </Button>
            </DrawerTrigger>
            <DrawerContent className="px-3 w-full">
                <div className="py-5 gap-y-3 flex flex-col w-full">
                    <DrawerTitle className="font-control opacity-70 dark:opacity-90 py-3">
                        {t("drawerTitle")}
                    </DrawerTitle>
                    <Divider />
                    <Selectables
                        onItemChange={onItemChange}
                        items={selectableItems}
                        currentValue={tracker}
                    />
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default TrackerTypeDrawer;
