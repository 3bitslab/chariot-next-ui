"use client";

import { motion } from "framer-motion";

interface AnnouncementProps {
    message: string;
    onFinish: () => void;
}

export const Announcement = ({ message, onFinish }: AnnouncementProps) => {
    return (
        <div className="fixed top-0 left-0 right-0 z-[409] overflow-hidden">
            <div className="mx-auto px-4 py-2 text-sm font-medium rounded-b-lg shadow-lg dark:bg-primary-900/90 dark:text-primary-100 bg-primary-100/90 text-primary-900 overflow-hidden">
                <motion.div
                    className="whitespace-nowrap inline-block"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 15,
                        ease: "linear",
                        delay: 1,
                    }}
                    onAnimationComplete={onFinish}
                >
                    {message}
                </motion.div>
            </div>
        </div>
    );
};
