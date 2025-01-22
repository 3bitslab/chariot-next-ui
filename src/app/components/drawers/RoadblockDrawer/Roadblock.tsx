import React from "react";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { PoliceIcon } from "../../markers/Police";
import { RoadblockIcon } from "../../markers/RoadBlock";
import { useTranslations } from "next-intl";

const Roadblock = ({
    streetName,
    duration,
    type,
}: {
    streetName: string;
    duration: string;
    type: "closure" | "control";
}) => {
    const badgeVariant = {
        closure: "destructive",
        control: "constructive",
    };
    const Icon = type === "closure" ? RoadblockIcon : PoliceIcon;
    const t = useTranslations();

    return (
        <div className="flex flex-col sm:flex-row rounded-xl bg-white p-4 sm:p-5 shadow dark:bg-primary-800">
            {/* Left section: Icon and Street Name */}
            <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                <Icon className="size-10 lg:size-12 flex-shrink-0" />

                {/* Street Name and Time */}
                <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0">
                    <div className="text-base sm:text-lg font-semibold text-primary-900 dark:text-primary-50 break-words">
                        {streetName}
                    </div>
                    <div className="flex items-center gap-x-1 sm:gap-x-2 text-xs sm:text-sm text-primary-600 dark:text-primary-100">
                        <Clock size={12} opacity={0.7} />
                        <span>{duration}</span>
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
