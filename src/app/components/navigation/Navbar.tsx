import React from "react";
import ThemeDrawer from "../drawers/ThemeDrawer";
import TrackerTypeDrawer from "../drawers/TrackerTypeDrawer";
import SupportDrawer from "../drawers/SupportDrawer/SupportDrawer";

function Navbar() {
    return (
        <div className="absolute z-[410] top-5 left-0 right-0 mx-auto w-fit">
            <div className="flex flex-row space-x-2 md:space-x-3 lg:space-x-4 grow">
                <TrackerTypeDrawer />
                <SupportDrawer />
                <ThemeDrawer />
            </div>
        </div>
    );
}

export default Navbar;
