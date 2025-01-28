import { vehicleAtom } from "@/atoms/vehicle";
import { TTrackerType } from "@/constants/types";
import locationService from "@/services/locationService";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { toast } from "sonner";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export const useGetCheckpoints = () => {
    const [type] = useAtom(vehicleAtom);
    const t = useTranslations();

    const { data, isFetching, error } = useQuery({
        queryKey: ["getCheckpoints", type],
        queryFn: async ({ queryKey: [, type] }) => {
            return await locationService.getCheckpointsByType(
                type as TTrackerType
            );
        },
        // TODO:REVERT
        refetchInterval: 1000 * 1,
        placeholderData: (prev) => prev,
        retry: 1,
        gcTime: 0,
        staleTime: 1000 * 30,
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
