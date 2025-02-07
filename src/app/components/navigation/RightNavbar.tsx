import { Route, Plus, Minus, Locate } from "lucide-react";
import React from "react";
import { useMap } from "react-leaflet";
import { LatLngBounds } from "leaflet";
import DevelopersDrawer from "../drawers/DevelopersDrawer/DevelopersDrawer";
import { MAP_COORDINATES } from "@/constants/coordinates";
import { useGetProgressInfo } from "@/hooks/useGetProgressInfo";
import RoadblockDrawer from "../drawers/RoadblockDrawer/RoadblockDrawer";

function RightNavbar() {
    const map = useMap();
    const { vehiclePosition } = useGetProgressInfo();

    const handleZoomIn = () => map.setZoom(map.getZoom() + 1);
    const handleZoomOut = () => map.setZoom(map.getZoom() - 1);
    const handleFocus = () => map.setView(vehiclePosition, 25);
    const handleOverview = () => {
        const bounds = new LatLngBounds(
            [
                MAP_COORDINATES.start,
                MAP_COORDINATES.end,
                vehiclePosition,
            ].filter((coord) => coord)
        );

        map.fitBounds(bounds, {
            padding: [50, 50],
            maxZoom: 15,
        });
    };

    return (
        <>
            {/* Default Right Sidebar for Large Screens */}
            <div className="absolute z-[410] bottom-1/4 right-0 lg:bottom-10 mb-4 lg:mb-0 fade-in flex flex-col [@media(max-height:500px)]:hidden">
                <div className="flex flex-col px-3 py-4 m-4 space-y-8 rounded-full bg-primary-50 dark:bg-primary-900">
                    <RoadblockDrawer position="right" />
                    <DevelopersDrawer />
                    <button onClick={handleOverview}>
                        <Route className="stroke-primary-850 dark:stroke-primary-150 size-4 lg:size-6" />
                    </button>
                </div>

                <div className="flex flex-col px-3 py-4 m-4 space-y-8 rounded-full bg-primary-50 dark:bg-primary-900">
                    <button onClick={handleZoomIn}>
                        <Plus className="stroke-primary-850 dark:stroke-primary-150 size-4 lg:size-6" />
                    </button>
                    <button onClick={handleZoomOut}>
                        <Minus className="stroke-primary-850 dark:stroke-primary-150 size-4 lg:size-6" />
                    </button>
                    <button onClick={handleFocus}>
                        <Locate className="stroke-primary-850 dark:stroke-primary-150 size-4 lg:size-6" />
                    </button>
                </div>
            </div>

            {/* Left & Right Split Sidebar for Smaller Screens (Height < 500px) */}
            <div className="absolute z-[410] top-1/4 bottom-1/4 left-0 flex-col justify-around space-y-4 p-3 bg-primary-50 dark:bg-primary-900 rounded-r-full hidden [@media(max-height:500px)]:flex">
                <RoadblockDrawer position="left" />
                <DevelopersDrawer />
                <button onClick={handleOverview}>
                    <Route className="stroke-primary-850 dark:stroke-primary-150 size-5" />
                </button>
            </div>

            <div className="absolute z-[410] top-1/4 bottom-1/4 right-0 flex-col justify-around space-y-4 p-3 bg-primary-50 dark:bg-primary-900 rounded-l-full hidden [@media(max-height:500px)]:flex">
                <button onClick={handleZoomIn}>
                    <Plus className="stroke-primary-850 dark:stroke-primary-150 size-5" />
                </button>
                <button onClick={handleZoomOut}>
                    <Minus className="stroke-primary-850 dark:stroke-primary-150 size-5" />
                </button>
                <button onClick={handleFocus}>
                    <Locate className="stroke-primary-850 dark:stroke-primary-150 size-5" />
                </button>
            </div>
        </>
    );
}

export default RightNavbar;
