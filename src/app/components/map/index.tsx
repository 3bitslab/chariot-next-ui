"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import Navbar from "../navigation/Navbar";
import RightNavbar from "../navigation/RightNavbar";
import SummaryWindow from "../SummaryWindow";
import AntPath from "./AntPath";
import {
    CHECKPOINTS,
    DEPARTURE_COORDINATES,
    MAP_COORDINATES,
    ROADBLOCK_LOCATIONS,
} from "@/constants/coordinates";
import { useTheme } from "next-themes";
import { endIcon, startIcon } from "@/constants/icons";
import { vehicleAtom } from "@/atoms/vehicle";
import { useAtom } from "jotai";
import { useGetProgressInfo } from "@/hooks/useGetProgressInfo";
import { generatePulsatingMarker } from "@/utils/helpers";
import { roadBlockAtom, selectedRoadblockAtom } from "@/atoms/road-block";
import Roadblock from "../road-block/Roadblock";
import CheckpointMarkers from "../markers/Checkpoint";
import { checkpointAtom, selectedCheckpointAtom } from "@/atoms/checkpoint";
import { findIndex, isEmpty, isEqual } from "lodash";
import { MapViewUpdater } from "../utils/MapViewUpdater";

const RoadblockMapUpdater = () => {
    const map = useMap();
    const [selectedRoadblock] = useAtom(selectedRoadblockAtom);

    useEffect(() => {
        if (selectedRoadblock && ROADBLOCK_LOCATIONS[selectedRoadblock]) {
            map.flyTo(ROADBLOCK_LOCATIONS[selectedRoadblock], 18);
        }
    }, [selectedRoadblock, map]);

    return null;
};

const CheckpointMapUpdater = () => {
    const map = useMap();
    const [selectedCheckpoint] = useAtom(selectedCheckpointAtom);

    useEffect(() => {
        if (selectedCheckpoint !== null && CHECKPOINTS[selectedCheckpoint]) {
            map.flyTo(CHECKPOINTS[selectedCheckpoint], 18);
        }
    }, [selectedCheckpoint, map]);

    return null;
};

interface MapProps {
    posix: LatLngExpression | LatLngTuple;
    zoom?: number;
}

const defaults = {
    zoom: 19,
};

const Map = ({ posix, zoom = defaults.zoom }: MapProps) => {
    const { theme } = useTheme();
    const polylineCoordsRef = useRef(DEPARTURE_COORDINATES);

    const [tracker] = useAtom(vehicleAtom);
    const [roadBlock] = useAtom(roadBlockAtom);
    const [checkpoint] = useAtom(checkpointAtom);

    const { data, vehiclePosition, lastUpdatedAt } = useGetProgressInfo();

    const fallback = {
        progress: 0,
        roadName: "Loading...",
    };

    const { progress, roadName } = data || fallback;

    const [traveledCoords, setTraveledCoords] = useState<number[][]>([]);
    const [remainingCoords, setRemainingCoords] = useState<number[][]>(
        polylineCoordsRef.current
    );

    const { traveled, remaining } = useMemo(() => {
        if (!vehiclePosition || isEmpty(polylineCoordsRef.current)) {
            return { traveled: [], remaining: polylineCoordsRef.current };
        }

        const closestIndex = findIndex(
            polylineCoordsRef.current,
            ([lat, lng]) =>
                lat === vehiclePosition.lat && lng === vehiclePosition.lng
        );

        return {
            traveled:
                closestIndex !== -1
                    ? polylineCoordsRef.current.slice(0, closestIndex + 1)
                    : [],
            remaining:
                closestIndex !== -1
                    ? polylineCoordsRef.current.slice(closestIndex)
                    : polylineCoordsRef.current,
        };
    }, [vehiclePosition]);

    useEffect(() => {
        setTraveledCoords((prev) =>
            isEqual(prev, traveled) ? prev : traveled
        );
        setRemainingCoords((prev) =>
            isEqual(prev, remaining) ? prev : remaining
        );
    }, [traveled, remaining]);

    return (
        <div>
            <SummaryWindow
                progress={Number(progress)}
                roadName={roadName}
                lastUpdatedAt={lastUpdatedAt}
                tracker={tracker}
            />
            <MapContainer
                center={posix}
                zoom={zoom}
                scrollWheelZoom={true}
                zoomControl={false}
                doubleClickZoom={false}
                className="fixed top-0 bottom-0 left-0 right-0 z-0"
            >
                <MapViewUpdater vehiclePosition={vehiclePosition} />
                <RoadblockMapUpdater />
                <CheckpointMapUpdater />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    className="z-0 dark:hue-rotate-180 dark:invert dark:grayscale-[50%]"
                />

                <AntPath
                    key={`${tracker}-traveled`}
                    positions={traveledCoords}
                    options={{
                        hardwareAccelerated: true,
                        color:
                            tracker === "kavadi"
                                ? theme === "dark"
                                    ? "#6B7FE3"
                                    : "#3F51B5"
                                : theme === "dark"
                                  ? "#BE4DFF"
                                  : "#9D00FF",
                        pulseColor:
                            tracker === "kavadi"
                                ? theme === "dark"
                                    ? "#6B7FE3"
                                    : "#3F51B5"
                                : theme === "dark"
                                  ? "#BE4DFF"
                                  : "#9D00FF",
                        paused: true,
                        opacity: 1,
                        weight: 8,
                        lineCap: "square",
                        lineJoin: "mitre",
                    }}
                />

                <AntPath
                    key={`${tracker}-remaining`}
                    positions={remainingCoords}
                    options={{
                        hardwareAccelerated: true,
                        color:
                            tracker === "kavadi"
                                ? theme === "dark"
                                    ? "#4A5680"
                                    : "#A8B3D4"
                                : theme === "dark"
                                  ? "#8A6B99"
                                  : "#C1A8D4",
                        pulseColor:
                            tracker === "kavadi"
                                ? theme === "dark"
                                    ? "#4A5680"
                                    : "#A8B3D4"
                                : theme === "dark"
                                  ? "#8A6B99"
                                  : "#C1A8D4",
                        paused: true,
                        opacity: 1,
                        weight: 8,
                        lineCap: "square",
                        lineJoin: "mitre",
                    }}
                />

                {roadBlock && <Roadblock></Roadblock>}

                {checkpoint &&
                    CHECKPOINTS.map((position, index) => (
                        <CheckpointMarkers
                            key={index}
                            position={position}
                            index={index}
                        />
                    ))}

                {/* Start Pin  */}
                <Marker
                    position={MAP_COORDINATES.start}
                    icon={startIcon}
                ></Marker>

                {/* End Pin */}
                <Marker position={MAP_COORDINATES.end} icon={endIcon}></Marker>

                {/* Chariot Pulsating Pin */}
                <Marker
                    position={vehiclePosition}
                    icon={generatePulsatingMarker(tracker, theme)}
                ></Marker>
                <Navbar />
                <RightNavbar />
            </MapContainer>
        </div>
    );
};

export default Map;
