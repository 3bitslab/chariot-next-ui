import { LatLngExpression } from "leaflet";
import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";

export const MapViewUpdater = ({
    vehiclePosition,
}: {
    vehiclePosition: LatLngExpression;
}) => {
    const map = useMap();

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

    return null;
};
