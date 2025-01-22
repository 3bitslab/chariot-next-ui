import React, { use } from "react";
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
        <div className="flex flex-col rounded-xl bg-white p-5 shadow dark:bg-primary-800">
            {/* Header */}
            <div className="flex flex-row justify-between items-center">
                {/* Left section: Icon and Street Name */}
                <div className="flex flex-row items-center gap-4">
                    <Icon size={48} />

                    {/* Street Name and Time */}
                    <div className="flex flex-col gap-1">
                        <div className="text-lg font-semibold text-primary-900 dark:text-primary-50">
                            {streetName}
                        </div>
                        <div className="flex items-center gap-x-2 text-sm text-primary-600 dark:text-primary-100">
                            <Clock size={15} opacity={0.7} />
                            <span>{duration}</span>
                        </div>
                    </div>
                </div>

                {/* Right section: Type Badge */}
                <Badge
                    className="text-sm font-medium flex items-center gap-1 px-3 py-1"
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
