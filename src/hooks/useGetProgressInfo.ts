import locationService from "@/services/locationService";
import { useQuery } from "@tanstack/react-query";
import { TLocationResponse, TTrackerType } from "../constants/types";
import {
    MAP_COORDINATES,
    VERBOSE_DEPARTURE_COORDINATES,
} from "../constants/coordinates";
import { useEffect, useState } from "react";
import { env } from "@/env";
import { useAtom } from "jotai";
import { vehicleAtom } from "@/atoms/vehicle";

export const useGetProgressInfo = () => {
    const [type] = useAtom(vehicleAtom);
    const [vehiclePosition, setVehiclePosition] = useState<{
        lat: number;
        lng: number;
    }>({ lat: MAP_COORDINATES.start[0], lng: MAP_COORDINATES.start[1] });
    const [lastUpdatedAt, setLastUpdatedAt] = useState<Date | null>(null);

    const isMock = env.NEXT_PUBLIC_USE_MOCK_DATA;
    const [mockData, setMockData] = useState<TLocationResponse | null>(null);

    const { data, isFetching, isError, dataUpdatedAt } = useQuery({
        queryKey: ["getProgressInfo", type],
        queryFn: async ({ queryKey: [, type] }) => {
            if (isMock) return null;

            const location = await locationService.getLocationByType(
                type as TTrackerType
            );

            return location;
        },
        refetchInterval: 1000 * 30,
    });

    useEffect(() => {
        if (data) {
            setVehiclePosition({
                lat: data.latitude,
                lng: data.longitude,
            });
        }
    }, [data]);

    useEffect(() => {
        if (data || isMock) {
            setLastUpdatedAt(new Date(dataUpdatedAt));
        }
    }, [dataUpdatedAt, data, isMock]);

    useEffect(() => {
        if (isMock) {
            let index = 0;

            const interval = setInterval(() => {
                const mockPayload = VERBOSE_DEPARTURE_COORDINATES[index];

                setMockData({
                    latitude: mockPayload.lat,
                    longitude: mockPayload.lon,
                    roadName: mockPayload.roadName,
                    progress: (
                        ((index + 1) / VERBOSE_DEPARTURE_COORDINATES.length) *
                        100
                    ).toString(),
                } as TLocationResponse);

                setVehiclePosition({
                    lat: mockPayload.lat,
                    lng: mockPayload.lon,
                });
                setLastUpdatedAt(new Date());

                index = (index + 1) % VERBOSE_DEPARTURE_COORDINATES.length;
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isMock, type]);

    return {
        data: isMock ? mockData : data,
        isFetching: isMock ? false : isFetching,
        isError,
        vehiclePosition,
        lastUpdatedAt,
    };
};
