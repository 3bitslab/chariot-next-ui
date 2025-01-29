import React, { useState, useEffect } from "react";
import SettingsDrawer from "../drawers/SettingsDrawer";
import TrackerTypeDrawer from "../drawers/TrackerTypeDrawer";
import SupportDrawer from "../drawers/SupportDrawer/SupportDrawer";
import { Announcement } from "../shared/Announcement";

function Navbar() {
    const [showAnnouncement, setShowAnnouncement] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAnnouncement(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showAnnouncement && (
                <Announcement message="Welcome to Chariot! Track your journey in real-time." />
            )}
            <div
                className={`
                absolute z-[410] left-0 right-0 mx-auto w-fit
                transition-all duration-500 ease-in-out
                ${showAnnouncement ? "top-12" : "top-5"}
            `}
            >
                <div className="flex flex-row space-x-2 md:space-x-3 lg:space-x-4 grow">
                    <TrackerTypeDrawer />
                    <SupportDrawer />
                    <SettingsDrawer />
                </div>
            </div>
        </>
    );
}

export default Navbar;
