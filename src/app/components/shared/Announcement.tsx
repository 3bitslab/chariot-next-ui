"use client";

import Marquee from "react-fast-marquee";

interface AnnouncementProps {
    message: string;
    onFinish: () => void;
}

export const Announcement = ({ message, onFinish }: AnnouncementProps) => {
    return (
        <div className="fixed top-0 left-0 right-0 z-[409]">
            <div
                className=" mx-auto px-4 py-2
                text-sm font-medium
                rounded-b-lg shadow-lg
                dark:bg-primary-900/90 dark:text-primary-100
                bg-primary-100/90 text-primary-900"
            >
                <Marquee
                    speed={50}
                    gradient={false}
                    pauseOnHover={true}
                    delay={1}
                    loop={1}
                    onFinish={onFinish}
                >
                    {message}
                </Marquee>
            </div>
        </div>
    );
};
