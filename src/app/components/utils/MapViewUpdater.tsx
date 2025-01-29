import { LatLngExpression } from "leaflet";
import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import { useAtom } from "jotai";
import { vehicleAtom } from "@/atoms/vehicle";

export const MapViewUpdater = ({
    vehiclePosition,
}: {
    vehiclePosition: LatLngExpression;
}) => {
    const map = useMap();
    const [tracker] = useAtom(vehicleAtom);
    const initialZoomDone = useRef(false);

    useEffect(() => {
        if (vehiclePosition) {
            if (!initialZoomDone.current) {
                map.setView(vehiclePosition, 25);
                initialZoomDone.current = true;
            } else {
                map.panTo(vehiclePosition);
            }
        }
    }, [vehiclePosition, map]);

    useEffect(() => {
        if (vehiclePosition && initialZoomDone.current) {
            map.flyTo(vehiclePosition, map.getZoom());
        }
    }, [tracker, vehiclePosition, map]);

    return null;
};
