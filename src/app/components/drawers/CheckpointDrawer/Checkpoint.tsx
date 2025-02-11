import React, { memo } from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Clock, Check } from "lucide-react";
import Divider from "../../Divider";
import { useTranslations } from "next-intl";
import { vehicleAtom } from "@/atoms/vehicle";
import { useAtom } from "jotai";
import { checkpointAtom, selectedCheckpointAtom } from "@/atoms/checkpoint";
import { drawerAtom } from "@/atoms/drawer";
import { env } from "@/env";

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
        timeZone: "Asia/Kuala_Lumpur",
    };

    return date.toLocaleString("en-GB", options);
}

const ChariotBadge = memo(({ delta }: { delta: number | null }) => {
    const t = useTranslations();
    const isDeltaAvailable = delta !== null && delta !== undefined;

    if (!isDeltaAvailable) {
        return (
            <Badge
                className="inline-flex items-center gap-1 text-sm font-medium whitespace-nowrap"
                variant="secondary"
            >
                <Clock size={15} /> {t("common.badge.pending")}
            </Badge>
        );
    }

    return (
        <Badge
            className="inline-flex items-center gap-1 text-sm font-medium whitespace-nowrap"
            variant={delta > 0 ? "destructive" : "constructive"}
        >
            {delta > 0 ? <ArrowUp size={15} /> : <ArrowDown size={15} />}
            <span>{formatDelta(delta)} </span>
        </Badge>
    );
});

const KavadiBadge = memo(({ hasArrived }: { hasArrived: boolean }) => {
    const t = useTranslations();

    return (
        <Badge
            className="inline-flex items-center gap-1 text-sm font-medium whitespace-nowrap"
            variant={hasArrived ? "constructive" : "secondary"}
        >
            {hasArrived ? (
                <>
                    <Check size={15} /> {t("common.badge.arrived")}
                </>
            ) : (
                <>
                    <Clock size={15} /> {t("common.badge.pending")}
                </>
            )}
        </Badge>
    );
});

function formatDelta(delta: number) {
    if (delta === 0) return "0m";

    const absDelta = Math.abs(delta);
    const hours = Math.floor(absDelta / 60);
    const minutes = absDelta % 60;

    let formatted = "";
    if (hours > 0) formatted += `${hours}h `;
    if (minutes > 0 || hours === 0) formatted += `${minutes}m`;

    return formatted.trim();
}

interface CheckpointProps {
    address: string;
    landmark?: string;
    history: { year: number; utc_time: string }[];
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
    const getArrivalTime = (year: number): string | null => {
        const entry = history.find((h) => h.year === year);
        return entry ? formatDateAndTime(entry.utc_time) : null;
    };

    const arrival2025 = getArrivalTime(2025);
    const arrival2024 = getArrivalTime(2024);
    const [tracker] = useAtom(vehicleAtom);

    const t = useTranslations();
    const [, setSelectedCheckpoint] = useAtom(selectedCheckpointAtom);
    const [, setCurrentDrawer] = useAtom(drawerAtom);
    const [, setCheckpoint] = useAtom(checkpointAtom);

    const journey = env.NEXT_PUBLIC_JOURNEY || "departure";

    return (
        <div
            className="flex flex-col rounded-xl bg-white p-5 shadow dark:bg-primary-800 cursor-pointer hover:bg-primary-50 dark:hover:bg-primary-700 transition-colors"
            onClick={() => {
                setSelectedCheckpoint(parseInt(checkpointIndex));
                setCheckpoint(true);
                setCurrentDrawer(null);
            }}
        >
            {/* Header */}
            <div className="flex flex-row items-center gap-4">
                {/* Left: Index Circle */}
                <div className="relative flex items-center justify-center rounded-full bg-[#88c1d0] border-4 border-white shadow w-8 h-8 min-w-8 min-h-8 aspect-square font-bold text-white text-base flex-shrink-0">
                    <span>{checkpointIndex + 1}</span>
                </div>

                {/* Right: Landmark/Address & Badge */}
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col">
                        <div className="text-lg font-semibold text-primary-900 dark:text-primary-50">
                            {landmark || address}
                        </div>
                        {landmark && (
                            <div className="text-sm text-primary-600 leading-tight dark:text-primary-100">
                                {address}
                            </div>
                        )}
                    </div>

                    <div className="mt-0 ml-auto">
                        {tracker === "chariot" && journey == "departure" ? (
                            <ChariotBadge delta={delta} />
                        ) : (
                            <KavadiBadge hasArrived={!!arrival2025} />
                        )}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="mt-2">
                <Divider />
            </div>

            {/* Body */}
            <div className="pt-2 pl-12">
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

ChariotBadge.displayName = "ChariotBadge";
KavadiBadge.displayName = "KavadiBadge";

export default Checkpoint;
