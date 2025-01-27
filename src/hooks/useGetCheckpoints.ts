import { vehicleAtom } from "@/atoms/vehicle";
import { TTrackerType } from "@/constants/types";
import locationService from "@/services/locationService";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { toast } from "sonner";
import { useEffect } from "react";

export const useGetCheckpoints = () => {
    const [type] = useAtom(vehicleAtom);

    const { data, isFetching, error } = useQuery({
        queryKey: ["getCheckpoints", type],
        queryFn: async ({ queryKey: [, type] }) => {
            return await locationService.getCheckpointsByType(
                type as TTrackerType
            );
        },
        refetchInterval: 1000 * 60,
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
                    ? error.message
                    : "An error occurred while fetching checkpoints"
            );
        }
    }, [error]);

    return {
        data,
        isFetching,
        error,
    };
};
