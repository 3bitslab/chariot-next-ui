"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import { useAtom } from "jotai";
import { isPinVerifiedAtom } from "@/atoms/pin";
import { PinDialog } from "@/app/components/shared/PinDialog";

const isProd = process.env.NODE_ENV === "production";

export default function Page() {
    const [isPinVerified] = useAtom(isPinVerifiedAtom);
    const Map = useMemo(
        () =>
            dynamic(() => import("@/app/components/map/"), {
                ssr: false,
            }),
        []
    );

    const shouldShowMap = !isProd || isPinVerified;

    return (
        <>
            {isProd && !isPinVerified && <PinDialog />}
            {shouldShowMap && <Map posix={[5.41613, 100.33944]} />}
        </>
    );
}
