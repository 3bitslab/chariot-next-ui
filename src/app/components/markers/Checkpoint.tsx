import React, { useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";

function CheckpointMarkers({
    position,
    index,
}: {
    position: LatLngExpression;
    index: number;
}) {
    const [scale, setScale] = useState(1);
    const map = useMap();

    useEffect(() => {
        const handleZoom = () => {
            const zoomLevel = map.getZoom();
            const newScale = Math.pow(0.9, 18 - zoomLevel);
            setScale(newScale);
        };

        map.on("zoom", handleZoom);
        return () => {
            map.off("zoom", handleZoom);
        };
    }, [map]);

    const iconHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="55" viewBox="0 0 50 60" style="transform: scale(${scale});">
            <!-- Outer Circle -->
            <circle cx="25" cy="25" r="22" fill="#88c1d0" stroke="white" stroke-width="4" />
            
            <!-- Index Number -->
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" font-weight="bold" fill="white">
                ${index + 1}
            </text>

            <!-- Small Pointer (Arrow) -->
            <polygon points="20,50 30,50 25,60" fill="white" />
        </svg>
    `;

    const icon = L.divIcon({
        html: iconHTML,
        className: "",
        iconAnchor: [25, 50],
        popupAnchor: [0, -40],
    });

    return <Marker position={position} icon={icon}></Marker>;
}

export default CheckpointMarkers;
