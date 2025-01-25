import React, { useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";

function RoadBlockMarker({ position }: { position: LatLngExpression }) {
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

    const barrierIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002" xml:space="preserve"><path style="fill:#fb0125;stroke:#000;stroke-width:2" d="M88.209 465.263H45.432V23.832a8.215 8.215 0 0 1 8.216-8.216h26.346a8.215 8.215 0 0 1 8.216 8.216v441.431h-.001zM465.926 465.263h-42.777V23.832a8.215 8.215 0 0 1 8.216-8.216h26.346a8.215 8.215 0 0 1 8.216 8.216v441.431h-.001z"/><path style="fill:#ba041f;stroke:#000;stroke-width:2" d="M423.15 329.845h42.777v30.389H423.15zM45.433 329.845H88.21v30.389H45.433z"/><path style="fill:#cc111e;stroke:#000;stroke-width:2" d="M79.993 15.616H54.149a8.215 8.215 0 0 1 8.216 8.216v441.431h25.844V23.832a8.215 8.215 0 0 0-8.216-8.216z"/><path style="fill:#9a0314;stroke:#000;stroke-width:2" d="M62.369 329.845h25.844v30.389H62.369z"/><path style="fill:#c7c5cb;stroke:#000;stroke-width:2" d="M107.889 465.263H25.752a6.696 6.696 0 0 0-6.696 6.696v17.732a6.696 6.696 0 0 0 6.696 6.696h82.138a6.696 6.696 0 0 0 6.696-6.696v-17.732a6.698 6.698 0 0 0-6.697-6.696z"/><path style="fill:#aeadb3;stroke:#000;stroke-width:2" d="M88.209 465.263v31.123h19.68a6.696 6.696 0 0 0 6.696-6.696v-17.732a6.696 6.696 0 0 0-6.696-6.696l-19.68.001z"/><path style="fill:#cc111e;stroke:#000;stroke-width:2" d="M457.71 15.616h-26.346l-.015.001a8.216 8.216 0 0 1 8.2 8.215v441.431h26.376V23.832a8.214 8.214 0 0 0-8.215-8.216z"/><path style="fill:#9a0314;stroke:#000;stroke-width:2" d="M439.548 329.845h26.376v30.389h-26.376z"/><path style="fill:#c7c5cb;stroke:#000;stroke-width:2" d="M485.606 465.263h-82.138a6.696 6.696 0 0 0-6.696 6.696v17.732a6.696 6.696 0 0 0 6.696 6.696h82.138a6.696 6.696 0 0 0 6.696-6.696v-17.732a6.695 6.695 0 0 0-6.696-6.696z"/><path style="fill:#fb0125;stroke:#000;stroke-width:2" d="M492.182 329.847H19.176c-6.316 0-11.438-5.12-11.438-11.438V66.5c0-6.316 5.12-11.438 11.438-11.438h473.008c6.316 0 11.438 5.12 11.438 11.438v251.91c-.002 6.317-5.122 11.437-11.44 11.437z"/><path style="fill:#f2f2f2;stroke:#000;stroke-width:2" d="M275.755 55.062h-59.699l-95.012 274.785h59.699zM7.738 96.416l14.298-41.354h-2.862c-6.316 0-11.438 5.12-11.438 11.438v29.916h.002zM89.197 55.062 7.738 290.652v27.758c0 6.316 5.12 11.438 11.438 11.438h34.709l95.012-274.785h-59.7zM402.613 55.062h-59.699l-95.012 274.785h59.699zM503.62 129.827V66.5c0-6.316-5.12-11.438-11.438-11.438h-22.409l-95.012 274.785h59.699l69.16-200.02z"/></svg>`;

    const encodedSVG = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(barrierIconSVG)}`;

    const iconHTML = `
      <div class="relative w-[45px] h-[45px] bg-[#ffc5b7] rounded-full border-4 border-white flex items-center justify-center shadow-md scale-[${scale}]">
        <img src="${encodedSVG}" class="w-[60%] h-[60%]" alt="Roadblock Icon" />
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

export default RoadBlockMarker;

export const RoadblockIcon = ({ className = "" }) => {
    return (
        <div
            className={`relative bg-[#ffc5b7] rounded-full border-4 border-white flex items-center justify-center shadow-md ${className}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-[60%] h-[60%]"
            >
                <path
                    fill="#fb0125"
                    stroke="#000"
                    strokeWidth="2"
                    d="M88.209 465.263H45.432V23.832a8.215 8.215 0 0 1 8.216-8.216h26.346a8.215 8.215 0 0 1 8.216 8.216v441.431h-.001zM465.926 465.263h-42.777V23.832a8.215 8.215 0 0 1 8.216-8.216h26.346a8.215 8.215 0 0 1 8.216 8.216v441.431h-.001z"
                />
                <path
                    fill="#ba041f"
                    stroke="#000"
                    strokeWidth="2"
                    d="M423.15 329.845h42.777v30.389H423.15zM45.433 329.845H88.21v30.389H45.433z"
                />
                <path
                    fill="#cc111e"
                    stroke="#000"
                    strokeWidth="2"
                    d="M79.993 15.616H54.149a8.215 8.215 0 0 1 8.216 8.216v441.431h25.844V23.832a8.215 8.215 0 0 0-8.216-8.216z"
                />
                <path
                    fill="#9a0314"
                    stroke="#000"
                    strokeWidth="2"
                    d="M62.369 329.845h25.844v30.389H62.369z"
                />
                <path
                    fill="#c7c5cb"
                    stroke="#000"
                    strokeWidth="2"
                    d="M107.889 465.263H25.752a6.696 6.696 0 0 0-6.696 6.696v17.732a6.696 6.696 0 0 0 6.696 6.696h82.138a6.696 6.696 0 0 0 6.696-6.696v-17.732a6.698 6.698 0 0 0-6.697-6.696z"
                />
                <path
                    fill="#aeadb3"
                    stroke="#000"
                    strokeWidth="2"
                    d="M88.209 465.263v31.123h19.68a6.696 6.696 0 0 0 6.696-6.696v-17.732a6.696 6.696 0 0 0-6.696-6.696l-19.68.001z"
                />
                <path
                    fill="#cc111e"
                    stroke="#000"
                    strokeWidth="2"
                    d="M457.71 15.616h-26.346l-.015.001a8.216 8.216 0 0 1 8.2 8.215v441.431h26.376V23.832a8.214 8.214 0 0 0-8.215-8.216z"
                />
                <path
                    fill="#9a0314"
                    stroke="#000"
                    strokeWidth="2"
                    d="M439.548 329.845h26.376v30.389h-26.376z"
                />
                <path
                    fill="#c7c5cb"
                    stroke="#000"
                    strokeWidth="2"
                    d="M485.606 465.263h-82.138a6.696 6.696 0 0 0-6.696 6.696v17.732a6.696 6.696 0 0 0 6.696 6.696h82.138a6.696 6.696 0 0 0 6.696-6.696v-17.732a6.695 6.695 0 0 0-6.696-6.696z"
                />
                <path
                    fill="#fb0125"
                    stroke="#000"
                    strokeWidth="2"
                    d="M492.182 329.847H19.176c-6.316 0-11.438-5.12-11.438-11.438V66.5c0-6.316 5.12-11.438 11.438-11.438h473.008c6.316 0 11.438 5.12 11.438 11.438v251.91c-.002 6.317-5.122 11.437-11.44 11.437z"
                />
                <path
                    fill="#f2f2f2"
                    stroke="#000"
                    strokeWidth="2"
                    d="M275.755 55.062h-59.699l-95.012 274.785h59.699zM7.738 96.416l14.298-41.354h-2.862c-6.316 0-11.438 5.12-11.438 11.438v29.916h.002zM89.197 55.062 7.738 290.652v27.758c0 6.316 5.12 11.438 11.438 11.438h34.709l95.012-274.785h-59.7zM402.613 55.062h-59.699l-95.012 274.785h59.699zM503.62 129.827V66.5c0-6.316-5.12-11.438-11.438-11.438h-22.409l-95.012 274.785h59.699l69.16-200.02z"
                />
            </svg>
        </div>
    );
};
