import React from "react";
import { Badge } from "@/components/ui/badge";
import { Clock, Info } from "lucide-react";
import { PoliceIcon } from "../../markers/Police";
import { RoadblockIcon } from "../../markers/RoadBlock";
import { useTranslations } from "next-intl";
import { useAtom } from "jotai";
import { roadBlockAtom, selectedRoadblockAtom } from "@/atoms/road-block";
import { drawerAtom } from "@/atoms/drawerAtom";

const Roadblock = ({
    streetName,
    duration,
    type,
    note,
}: {
    streetName: string;
    duration: string;
    type: "closure" | "control";
    note?: string;
}) => {
    const [, setSelectedRoadblock] = useAtom(selectedRoadblockAtom);
    const [, setIsDisplayedOnMap] = useAtom(roadBlockAtom);
    const [, setCurrentDrawer] = useAtom(drawerAtom);
    const badgeVariant = {
        closure: "destructive",
        control: "constructive",
    };
    const Icon = type === "closure" ? RoadblockIcon : PoliceIcon;
    const t = useTranslations();

    return (
        <div
            className="flex flex-col sm:flex-row rounded-xl bg-white p-4 sm:p-5 shadow dark:bg-primary-800 cursor-pointer hover:bg-primary-50 dark:hover:bg-primary-700 transition-colors"
            onClick={() => {
                setSelectedRoadblock((prev) =>
                    prev === streetName ? null : streetName
                );
                setIsDisplayedOnMap(true);
                setCurrentDrawer(null);
            }}
        >
            {/* Left section: Icon and Street Name */}
            <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                <Icon className="size-10 lg:size-12 flex-shrink-0" />

                {/* Street Name and Time */}
                <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0">
                    <div className="text-base sm:text-lg font-semibold text-primary-900 dark:text-primary-50 break-words">
                        {streetName}
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-x-1 sm:gap-x-2 text-xs sm:text-sm text-primary-600 dark:text-primary-100">
                            <Clock size={12} opacity={0.7} />
                            <span>{duration}</span>
                        </div>
                        {note && (
                            <div className="flex items-start gap-x-1 sm:gap-x-2 text-xs text-primary-500 dark:text-primary-200">
                                <Info
                                    size={12}
                                    opacity={0.7}
                                    className="mt-0.5"
                                />
                                <span>{note}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Right section: Type Badge (moves to bottom right on small screens) */}
            <div className="flex sm:items-center sm:justify-end mt-2 sm:mt-0 self-end sm:self-auto">
                <Badge
                    className="text-xs sm:text-sm font-medium flex items-center gap-1 px-2 sm:px-3 py-1"
                    variant={
                        badgeVariant[type] as "constructive" | "destructive"
                    }
                >
                    {t(`Roadblock.${type}`)}
                </Badge>
            </div>
        </div>
    );
};

export default Roadblock;
