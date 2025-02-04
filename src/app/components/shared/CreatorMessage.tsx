"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface CreatorMessageProps {
    message: string;
    onClose?: () => void;
}

export const CreatorMessage = ({ message, onClose }: CreatorMessageProps) => {
    useEffect(() => {
        if (onClose) {
            const timer = setTimeout(() => {
                onClose();
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [onClose]);

    return (
        <div className="w-full z-[408]">
            <div className="relative mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-sm sm:text-base leading-tight sm:leading-normal font-semibold text-center bg-gradient-to-r from-purple-200/95 via-purple-300/95 to-purple-200/95 dark:from-primary-800/95 dark:via-primary-700/95 dark:to-primary-800/95 text-purple-950 dark:text-primary-100 border-b border-purple-300 dark:border-primary-600">
                <div className="pr-8">{message}</div>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                        aria-label="Close message"
                    >
                        <X size={18} />
                    </button>
                )}
            </div>
        </div>
    );
};
