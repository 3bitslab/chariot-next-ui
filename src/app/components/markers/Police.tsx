import React, { useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";

function PoliceMarker({ position }: { position: LatLngExpression }) {
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

    const barrierIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><path style="fill:#464655" d="M44.138 317.793v8.828c0 34.127 128.981 79.448 211.862 79.448s211.862-45.321 211.862-79.448v-8.828H44.138z"/><path style="fill:#556ea0" d="M459.034 150.069 256 105.931 52.966 150.069 0 211.862l44.138 79.448h423.724L512 211.862z"/><path style="fill:#4b5f91" d="M52.966 150.069 0 211.862l44.138 79.448H256V105.931z"/><path style="fill:#707487" d="M44.138 291.31h423.724v35.31H44.138z"/><path style="fill:#5b5d6e" d="M467.862 300.138H44.138a8.829 8.829 0 0 1 0-17.656h423.724a8.829 8.829 0 0 1 0 17.656z"/><path style="fill:#ffd782" d="M256 256c-24.376 0-44.138-19.762-44.138-44.138v-35.31a8.829 8.829 0 0 1 8.828-8.828h70.621a8.829 8.829 0 0 1 8.828 8.828v35.31C300.138 236.238 280.376 256 256 256z"/><path style="fill:#ffc36e" d="M220.69 167.724a8.829 8.829 0 0 0-8.828 8.828v35.31C211.862 236.238 231.624 256 256 256v-88.276h-35.31z"/></svg>`;

    const encodedSVG = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(barrierIconSVG)}`;

    const iconHTML = `
      <div class="relative w-[45px] h-[45px] bg-[#ADD8E6] rounded-full border-4 border-white flex items-center justify-center shadow-md scale-[${scale}]">
        <img src="${encodedSVG}" class="w-[80%] h-[80%]" alt="Police Icon" />
        <div class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
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

export default PoliceMarker;

export const PoliceIcon = ({ className = "" }) => {
    return (
        <div
            className={`relative bg-[#ADD8E6] rounded-full border-4 border-white flex items-center justify-center shadow-md ${className}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-[70%] h-[70%]"
            >
                <path
                    fill="#464655"
                    d="M44.138 317.793v8.828c0 34.127 128.981 79.448 211.862 79.448s211.862-45.321 211.862-79.448v-8.828H44.138z"
                />
                <path
                    fill="#556ea0"
                    d="M459.034 150.069 256 105.931 52.966 150.069 0 211.862l44.138 79.448h423.724L512 211.862z"
                />
                <path
                    fill="#4b5f91"
                    d="M52.966 150.069 0 211.862l44.138 79.448H256V105.931z"
                />
                <path fill="#707487" d="M44.138 291.31h423.724v35.31H44.138z" />
                <path
                    fill="#5b5d6e"
                    d="M467.862 300.138H44.138a8.829 8.829 0 0 1 0-17.656h423.724a8.829 8.829 0 0 1 0 17.656z"
                />
                <path
                    fill="#ffd782"
                    d="M256 256c-24.376 0-44.138-19.762-44.138-44.138v-35.31a8.829 8.829 0 0 1 8.828-8.828h70.621a8.829 8.829 0 0 1 8.828 8.828v35.31C300.138 236.238 280.376 256 256 256z"
                />
                <path
                    fill="#ffc36e"
                    d="M220.69 167.724a8.829 8.829 0 0 0-8.828 8.828v35.31C211.862 236.238 231.624 256 256 256v-88.276h-35.31z"
                />
            </svg>
        </div>
    );
};
