import {
    TCheckpointsResponse,
    TLocationResponse,
    TTrackerType,
} from "@/constants/types";
import { env } from "@/env";

class LocationService {
    async getLocationByType(type: TTrackerType): Promise<TLocationResponse> {
        const response = await fetch(
            `${env.NEXT_PUBLIC_API_URL}/api/location?type=${type.toUpperCase()}`
        );
        if (!response.ok) {
            throw new Error("errors.fetchLocation");
        }
        return await response.json();
    }

    async getCheckpointsByType(
        type: TTrackerType
    ): Promise<[TCheckpointsResponse]> {
        try {
            const response = await fetch(
                `${env.NEXT_PUBLIC_API_URL}/api/checkpoint?type=${type.toUpperCase()}`
            );

            if (!response.ok) {
                throw new Error("errors.fetchCheckpoints");
            }

            return await response.json();
        } catch (error) {
            if (
                error instanceof TypeError &&
                error.message.includes("Failed to fetch")
            ) {
                throw new Error("errors.connectionError");
            }
            throw error;
        }
    }
}

const locationService = new LocationService();

export default locationService;
