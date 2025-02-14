import { vehicleAtom } from "@/atoms/vehicle";
import { TTrackerType } from "@/constants/types";
import locationService from "@/services/locationService";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { toast } from "sonner";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { env } from "@/env";
import { getCheckpointsByType } from "@/mocks/checkpointsData";

export const useGetCheckpoints = () => {
    const [type] = useAtom(vehicleAtom);
    const t = useTranslations();
    const isMock = env.NEXT_PUBLIC_USE_MOCK_DATA;

    const { data, isFetching, error } = useQuery({
        queryKey: ["getCheckpoints", type],
        queryFn: async ({ queryKey: [, type] }) => {
            if (isMock) {
                return getCheckpointsByType(type as TTrackerType);
            }
            return await locationService.getCheckpointsByType(
                type as TTrackerType
            );
        },
        refetchInterval: isMock
            ? false
            : 1000 * env.NEXT_PUBLIC_FETCH_INTERVAL_SECONDS,
        placeholderData: (prev) => prev,
        retry: 1,
        gcTime: 0,
        staleTime: 1000 * env.NEXT_PUBLIC_FETCH_INTERVAL_SECONDS,
        networkMode: "online",
    });

    useEffect(() => {
        if (error) {
            toast.error(
                error instanceof Error
                    ? t(error.message)
                    : t("errors.fetchCheckpoints")
            );
        }
    }, [error, t]);

    return {
        data,
        isFetching,
        error,
    };
};
