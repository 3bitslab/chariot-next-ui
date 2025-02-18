"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function Page() {
    const Map = useMemo(
        () =>
            dynamic(() => import("@/app/components/map/"), {
                ssr: false,
            }),
        []
    );

    return (
        <main>
            <h1 className="sr-only">
                Chariot Tracker - Real-time Thaipusam Silver Chariot Location
            </h1>

            <div className="sr-only">
                <h2>Real-time Chariot Tracking System</h2>
                <p>
                    Get instant location updates, checkpoint alerts, and live
                    route tracking for Penang Thaipusam 2025. Join 38,000+ users
                    for the most accurate silver chariot tracking experience.
                </p>

                <h2>Why Choose Chariot Tracker?</h2>
                <ul>
                    <li>Real-time GPS tracking with live updates</li>
                    <li>
                        Multi-language support (English, Tamil, Malay, Chinese)
                    </li>
                    <li>Interactive map with checkpoint markers</li>
                    <li>Instant checkpoint notifications</li>
                    <li>Roadblock and traffic information</li>
                    <li>Historical tracking data</li>
                </ul>

                <h2>Track the Sacred Journey</h2>
                <p>
                    Follow the silver chariot&apos;s journey from Kovil Veedu
                    George Town&apos;s heritage zone to the Nattukkottai
                    Chettiar Temple. Get precise location updates every few
                    seconds, optimized for George Town&apos;s urban environment.
                </p>
            </div>

            <Map />
        </main>
    );
}
