import React from "react";
import AntPath from "../map/AntPath";
import {
    POLICE_COORD,
    ROADBLOCK_ANTPATH_2025,
    ROADBLOCK_ANTPATH_2023,
    ROADBLOCK_COORD_2025,
    ROADBLOCK_COORD_2023,
} from "@/constants/coordinates";
import RoadBlockMarker from "../markers/RoadBlock";
import PoliceMarker from "../markers/Police";
import { useAtomValue } from "jotai";
import { roadblockYearModesAtom } from "@/atoms/road-block";

function Roadblock() {
    const yearModes = useAtomValue(roadblockYearModesAtom);

    const coordinates = [
        ...(yearModes["2025"] ? ROADBLOCK_COORD_2025 : []),
        ...(yearModes["2023"] ? ROADBLOCK_COORD_2023 : []),
    ];

    const antPath = [
        ...(yearModes["2025"]
            ? [...ROADBLOCK_ANTPATH_2025, ...ROADBLOCK_ANTPATH_2023]
            : yearModes["2023"]
              ? ROADBLOCK_ANTPATH_2023
              : []),
    ];

    return (
        <>
            {antPath.map((position, index) => (
                <AntPath
                    key={`antpath-${index}`}
                    positions={position}
                    options={{
                        delay: 800,
                        hardwareAccelerated: true,
                        paused: true,
                        color: "red",
                        opacity: 0.9,
                        pulseColor: "white",
                        weight: 8,
                        lineCap: "square",
                        lineJoin: "mitre",
                    }}
                />
            ))}

            {coordinates.map((position, index) => (
                <RoadBlockMarker
                    key={`roadblock-${index}`}
                    position={position}
                />
            ))}

            {yearModes["2023"] &&
                POLICE_COORD.map((position, index) => (
                    <PoliceMarker key={`police-${index}`} position={position} />
                ))}
        </>
    );
}

export default Roadblock;
