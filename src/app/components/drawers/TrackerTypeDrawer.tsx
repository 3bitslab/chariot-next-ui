import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import Selectables from "../shared/Selectables";
import { TSelectableItem, TTrackerType } from "@/constants/types";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { vehicleAtom } from "@/atoms/vehicle";
import Divider from "../Divider";
import ChariotIcon from "../icons/Chariot";
import KavadiIcon from "../icons/Kavadi";
import { useTranslations } from "next-intl";

function TrackerTypeDrawer() {
    const [tracker, setTracker] = useAtom(vehicleAtom);
    const t = useTranslations("Tracker");

    const onItemChange = (data: string) => {
        setTracker(data as TTrackerType);
    };

    const selectableItems: TSelectableItem[] = [
        {
            title: t("chariot.title"),
            value: "chariot",
            description: t("chariot.description"),
            logo: (
                <ChariotIcon className="fill-primary-800 dark:fill-primary-250 w-16 h-16" />
            ),
        },
        {
            title: t("kavadi.title"),
            value: "kavadi",
            description: t("kavadi.description"),
            logo: (
                <KavadiIcon className="fill-primary-800 dark:fill-primary-250 w-16 h-16" />
            ),
        },
    ];

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button>
                    <div className="[&__svg]:!size-5">
                        {
                            selectableItems.find(
                                (item) => item.value === tracker
                            )?.logo
                        }
                    </div>
                    <span className="capitalize">{t(`${tracker}.title`)}</span>
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
