"use client";

import { useAtom } from "jotai";
import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { drawerAtom, DRAWER_PARAMS, DrawerType } from "@/atoms/drawerAtom";

export function useDrawerUrlSync() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [drawer, setDrawer] = useAtom(drawerAtom);

    // On mount, sync URL parameters to atom state.
    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        const drawerParam = Array.from(params.keys()).find((param) =>
            DRAWER_PARAMS.includes(param as DrawerType)
        );

        if (drawerParam) {
            if (drawerParam === "roadblock") {
                setDrawer({ type: "roadblock", position: "right" });
            } else {
                setDrawer({
                    type: drawerParam as Exclude<DrawerType, "roadblock">,
                });
            }
        }
        // We want to run this only once on mount.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Whenever the drawer state changes, update the URL accordingly.
    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());

        // Remove all existing drawer parameters.
        DRAWER_PARAMS.forEach((param) => params.delete(param));

        // If there's a drawer state, add its parameter.
        if (drawer !== null) {
            params.set(drawer.type, "");
        }

        const queryString = params.toString() ? `?${params.toString()}` : "";
        // Use router.replace to update the URL without a full navigation.
        router.replace(`${pathname}${queryString}`);
        // We intentionally omit router and searchParams from deps to avoid loops.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [drawer]);
}
