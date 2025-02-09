"use client";

import { useEffect, useState } from "react";
import React from "react";
import { Navigation2 } from "lucide-react";
import { convertDateToReadableDate } from "../../utils/helpers";
import CheckpointDrawer from "./drawers/CheckpointDrawer/CheckpointDrawer";
import { useTranslations } from "next-intl";

function SummaryWindow({
    progress,
    roadName,
    lastUpdatedAt,
    tracker,
}: {
    progress: number;
    roadName: string;
    lastUpdatedAt: Date | null;
    tracker: "kavadi" | "chariot";
}) {
    const [fillPercentage, setFillPercentage] = useState(0);
    const [displayText, setDisplayText] = useState<string>("");

    useEffect(() => {
        let animationFrameId: number;

        const updateProgressBar = (timestamp: number) => {
            const startTime = timestamp;
            const duration = 2000;

            const animate = () => {
                const elapsed = timestamp - startTime;

                setFillPercentage(() => Number(progress));

                if (elapsed < duration) {
                    animationFrameId = requestAnimationFrame(animate);
                }
            };

            animate();
        };

        animationFrameId = requestAnimationFrame(updateProgressBar);

        return () => cancelAnimationFrame(animationFrameId);
    }, [progress]);

    const t = useTranslations();

    useEffect(() => {
        if (!lastUpdatedAt) {
            setDisplayText("Loading...");
            return;
        }

        setDisplayText(convertDateToReadableDate(lastUpdatedAt, t));

        const intervalId = setInterval(() => {
            setDisplayText(convertDateToReadableDate(lastUpdatedAt, t));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [lastUpdatedAt, t]);

    const progressBarStyles = {
        width: `${fillPercentage}%`,
        transition: "width 0.2s ease-in-out",
    };

    const navigationIconStyles = {
        left:
            fillPercentage !== 0
                ? `calc(${fillPercentage}% - 20px)`
                : `calc(${fillPercentage}% - 10px)`,
        transition: "left 0.2s ease-in-out",
    };

    return (
        <div
            className={
                "absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 dark:bg-primary-950 bg-primary-50 bg-opacity-70 dark:bg-opacity-70 h-auto z-50 w-11/12 md:w-1/2 lg:w-1/3 rounded-xl px-8 py-5 space-y-4 my-fade-in-up"
            }
        >
            <div className="relative items-center flex w-full justify-center">
                {/* Current Road Name */}
                <span className="text-xl lg:text-2xl text-center dark:text-primary-100 text-primary-800 font-inter">
                    {roadName}
                </span>
                <div className="flex items-center absolute right-0 justify-center">
                    <CheckpointDrawer />
                </div>
            </div>

            {/* Progress bar */}
            <div
                className={`relative w-full h-1 bg-opacity-50 rounded-full ${
                    tracker === "kavadi"
                        ? "dark:bg-[#4A5680] bg-[#A8B3D4]"
                        : "dark:bg-[#8A6B99] bg-[#C1A8D4]"
                }`}
            >
                <div
                    className={`absolute top-0 left-0 h-1 rounded-full bg-opacity-80 ${
                        tracker === "kavadi"
                            ? "dark:bg-[#6B7FE3] bg-[#3F51B5]"
                            : "dark:bg-[#BE4DFF] bg-[#9D00FF]"
                    }`}
                    style={progressBarStyles}
                ></div>
                <Navigation2
                    className={`absolute text-4xl rotate-90 -top-2.5 ${
                        tracker === "kavadi"
                            ? "dark:text-[#6B7FE3] text-[#3F51B5] fill-[#3F51B5] dark:fill-[#6B7FE3]"
                            : "dark:text-[#BE4DFF] text-[#9D00FF] fill-[#9D00FF] dark:fill-[#BE4DFF]"
                    }`}
                    style={navigationIconStyles}
                />
            </div>

            {/* Info metadata. */}
            <div className="flex justify-center text-center">
                {/* Current Road Name */}
                <span className="text-sm lg:text-md dark:text-primary-100/80 text-primary-800/80 font-inter">
                    {useTranslations("common")("lastUpdated")}: {displayText}
                </span>
            </div>
        </div>
    );
}

export default SummaryWindow;
