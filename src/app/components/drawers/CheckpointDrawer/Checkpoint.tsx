import React from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Clock } from "lucide-react";
import Divider from "../../Divider";
import { useTranslations } from "next-intl";

function formatDateAndTime(timestamp: string) {
    if (!timestamp || timestamp === "- - :- -") return "- - :- -";

    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return "--:--";

    const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    return date.toLocaleString("en-GB", options);
}

interface CheckpointProps {
    address: string;
    landmark?: string;
    history: { year: number; malaysia_time: string }[];
    delta: number | null;
    checkpointIndex: string;
}

function Checkpoint({
    address,
    landmark,
    history,
    delta,
    checkpointIndex,
}: CheckpointProps) {
    const getArrivalTime = (year: number) => {
        const entry = history.find((h) => h.year === year);
        return entry ? formatDateAndTime(entry.malaysia_time) : null;
    };

    const arrival2025 = getArrivalTime(2025);
    const arrival2024 = getArrivalTime(2024);
    const isDeltaAvailable = delta !== null && delta !== undefined;

    const t = useTranslations();

    return (
        <div className="flex flex-col rounded-xl bg-white p-5 shadow dark:bg-primary-800">
            {/* Header */}
            <div className="flex flex-row justify-between items-center flex-wrap gap-2">
                {/* Left section: Index and Checkpoint Name */}
                <div className="flex flex-row items-center gap-4">
                    {/* Checkpoint Index (Locked Shape) */}
                    <div
                        className="relative flex items-center justify-center rounded-full bg-[#88c1d0] border-4 border-white shadow 
                        w-8 h-8 min-w-8 min-h-8 aspect-square font-bold text-white text-base flex-shrink-0"
                    >
                        <span>{checkpointIndex + 1}</span>
                    </div>

                    {/* Checkpoint Name */}
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center text-lg font-semibold text-primary-900 dark:text-primary-50">
                            <span>{landmark || address}</span>
                        </div>

                        {landmark && (
                            <div className="text-sm text-primary-600 leading-tight dark:text-primary-100">
                                {address}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right section: Percentage Badge */}
                {isDeltaAvailable ? (
                    <Badge
                        className="flex items-center gap-1 text-sm font-medium"
                        variant={delta > 0 ? "destructive" : "constructive"}
                    >
                        {delta > 0 ? (
                            <ArrowDown size={15} />
                        ) : (
                            <ArrowUp size={15} />
                        )}
                        <span>
                            {Math.abs(delta!)}s{" "}
                            {delta! > 0
                                ? t("common.badge.slower")
                                : t("common.badge.faster")}
                        </span>
                    </Badge>
                ) : (
                    <Badge
                        className="flex items-center gap-1 text-sm font-medium"
                        variant="secondary"
                    >
                        <Clock size={15} /> {t("common.badge.pending")}
                    </Badge>
                )}
            </div>

            <div className="mt-2">
                <Divider />
            </div>

            {/* Body */}
            <div className="pt-2 sm:pl-12">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                    <div className="flex flex-col">
                        <span className="text-xs font-medium text-primary-500 uppercase dark:text-primary-100">
                            2025 {t("common.terms.arrival")}
                        </span>
                        <span className="text-base font-semibold text-primary-800 dark:text-primary-100">
                            {arrival2025 || "- - : - -"}
                        </span>
                    </div>
                    {arrival2024 && (
                        <div className="flex flex-col md:text-right opacity-75">
                            <span className="text-xs font-medium text-primary-500 uppercase dark:text-primary-100">
                                2024 {t("common.terms.arrival")}
                            </span>
                            <span className="text-base font-semibold text-primary-800 dark:text-primary-100">
                                {arrival2024}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Checkpoint;
