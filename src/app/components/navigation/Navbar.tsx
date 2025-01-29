import React, { useState } from "react";
import SettingsDrawer from "../drawers/SettingsDrawer";
import TrackerTypeDrawer from "../drawers/TrackerTypeDrawer";
import SupportDrawer from "../drawers/SupportDrawer/SupportDrawer";
import { Announcement } from "../shared/Announcement";

function Navbar() {
    const [showAnnouncement, setShowAnnouncement] = useState(true);

    return (
        <>
            {showAnnouncement && (
                <Announcement
                    message="Welcome to the Penang Silver Chariot Tracker! The chariot is scheduled to depart on Monday, February 10, 2025, at 7:00 AM. "
                    onFinish={() => setShowAnnouncement(false)}
                />
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
