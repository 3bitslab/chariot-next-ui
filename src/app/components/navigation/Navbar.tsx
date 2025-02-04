import React, { useState } from "react";
import { useTranslations } from "next-intl";
import SettingsDrawer from "../drawers/SettingsDrawer";
import TrackerTypeDrawer from "../drawers/TrackerTypeDrawer";
import SupportDrawer from "../drawers/SupportDrawer/SupportDrawer";
import { Announcement } from "../shared/Announcement";
import { CreatorMessage } from "../shared/CreatorMessage";

function Navbar() {
    const [showAnnouncement, setShowAnnouncement] = useState(true);
    const [showCreatorMessage, setShowCreatorMessage] = useState(true);
    const t = useTranslations("Announcement");

    return (
        <div className="fixed w-full z-[400]">
            <div className="flex flex-col">
                {showAnnouncement && (
                    <Announcement
                        message={`${t("welcome")} ${t("departure")}`}
                        onFinish={() => setShowAnnouncement(false)}
                    />
                )}
                {showCreatorMessage && (
                    <CreatorMessage
                        message={t("creator")}
                        onClose={() => setShowCreatorMessage(false)}
                    />
                )}
            </div>
            <div
                className={`flex justify-center transition-all duration-500 ease-in-out ${!showAnnouncement && !showCreatorMessage ? "mt-5" : ""}`}
            >
                <div className="flex flex-row space-x-2 md:space-x-3 lg:space-x-4">
                    <TrackerTypeDrawer />
                    <SupportDrawer />
                    <SettingsDrawer />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
