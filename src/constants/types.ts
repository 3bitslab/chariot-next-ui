import { ReactNode } from "react";

export type TSelectableItem = {
    title: string;
    value: string;
    description: string;
    logo: ReactNode;
};

export type TLocationResponse = {
    _id: string;
    timestamp: string;
    accuracy: number;
    age: number;
    latitude: number;
    longitude: number;
    speed: number;
    speed_accuracy: number;
    type: TTrackerType;
    isMapping: boolean;
    roadName: string;
    created_at: string;
    __v: number;
    ori_lat: number;
    ori_lon: number;
    ori_roadName: string;
    progress: string;
};

export type TCheckpointsResponse = {
    address: {
        house_number?: string;
        name?: string;
        road: string;
        city: string;
    };
    _id: string;
    checkpointIndex: string;
    coordinates: Location;
    visited: boolean;
    history: TCheckpointHistory[];
    type: Uppercase<TTrackerType>;
    __v: number;
    createdAt: string;
    updatedAt: string;
    timeDifference?: number;
};

type TCheckpointHistory = {
    year: number;
    utc_time: string;
    malaysia_time: string;
    _id: string;
};

export type TTrackerType = "chariot" | "kavadi";

export type Location = [number, number];
