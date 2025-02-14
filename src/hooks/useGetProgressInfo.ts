import locationService from "@/services/locationService";
import { useQuery } from "@tanstack/react-query";
import { TLocationResponse, TTrackerType } from "../constants/types";
import { useEffect, useState } from "react";
import { env } from "@/env";
import { useAtom } from "jotai";
import { vehicleAtom } from "@/atoms/vehicle";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export const useGetProgressInfo = () => {
    const [type] = useAtom(vehicleAtom);
    const t = useTranslations();
    const [vehiclePosition, setVehiclePosition] = useState<{
        lat: number;
        lng: number;
    } | null>(null);
    const [lastUpdatedAt, setLastUpdatedAt] = useState<Date | null>(null);

    const isMock = env.NEXT_PUBLIC_USE_MOCK_DATA;
    const [mockData] = useState<TLocationResponse | null>(null);

    const { data, isFetching, isError, error, dataUpdatedAt } = useQuery({
        queryKey: ["getProgressInfo", type],
        queryFn: async ({ queryKey: [, type] }) => {
            if (isMock) return null;

            const location = await locationService.getLocationByType(
                type as TTrackerType
            );

            return location;
        },
        refetchInterval: 1000 * env.NEXT_PUBLIC_FETCH_INTERVAL_SECONDS,
    });

    useEffect(() => {
        if (error) {
            toast.error(
                error instanceof Error
                    ? t(error.message)
                    : t("errors.fetchLocation")
            );
        }
    }, [error, t]);

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
        if (isMock && type == "chariot") {
            setVehiclePosition({
                lat: 5.416352,
                lng: 100.339714,
            });
        } else {
            setVehiclePosition({
                lat: 5.416208,
                lng: 100.339395,
            });
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
