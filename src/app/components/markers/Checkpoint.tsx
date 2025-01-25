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
        <div 
            class="relative flex items-center justify-center w-[45px] h-[45px] bg-[#88c1d0] text-white text-[16px] font-bold rounded-full border-[4px] border-white shadow-md"
            style="transform: scale(${scale});"
        >
            ${index + 1}
            <!-- Small Pointer (Arrow) -->
            <div class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-x-[10px] border-x-transparent border-t-[10px] border-t-white"></div>
        </div>
    `;

    const icon = L.divIcon({
        html: iconHTML,
        className: "",
        iconAnchor: [22, 45],
        popupAnchor: [0, -40],
    });

    return <Marker position={position} icon={icon}></Marker>;
}

export default CheckpointMarkers;
