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

    return <Map posix={[5.41613, 100.33944]} />;
}
