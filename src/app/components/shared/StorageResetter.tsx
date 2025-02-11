"use client";

import { useEffect } from "react";
import { env } from "@/env";

export function StorageResetter() {
    useEffect(() => {
        // Only clear storage during return journey
        if (env.NEXT_PUBLIC_JOURNEY === "return") {
            localStorage.removeItem("vehicle-tracker");
        }
    }, []);

    return null;
}
