"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface AnnouncementProps {
    message: string;
}

export const Announcement = ({ message }: AnnouncementProps) => {
    const [isVisible, setIsVisible] = useState(true);
    const { theme } = useTheme();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`
        fixed top-0 left-0 right-0 z-[409]
        transform transition-all duration-500 ease-in-out
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
        >
            <div
                className={`
        mx-auto px-4 py-2 max-w-3xl
        flex items-center justify-center
        text-sm font-medium text-center
        rounded-b-lg shadow-lg
        ${
            theme === "dark"
                ? "bg-primary-900/90 text-primary-100"
                : "bg-primary-100/90 text-primary-900"
        }
        backdrop-blur-sm
      `}
            >
                {message}
            </div>
        </div>
    );
};
