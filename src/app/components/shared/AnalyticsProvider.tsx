"use client";

import { drawerAtom } from "@/atoms/drawer";
import { languageAtom } from "@/atoms/language";
import { Analytics } from "@/utils/mixpanel";
import { useAtom } from "jotai";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function AnalyticsProvider() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [drawer] = useAtom(drawerAtom);
    const [language] = useAtom(languageAtom);

    // Track page views
    useEffect(() => {
        if (pathname) {
            Analytics.track("Page View", {
                path: pathname,
                search: searchParams.toString(),
                url: `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`,
            });
        }
    }, [pathname, searchParams]);

    // Track drawer opens
    useEffect(() => {
        if (drawer) {
            Analytics.track("Drawer Opened", {
                drawer_type: drawer,
            });
        }
    }, [drawer]);

    // Track language changes
    useEffect(() => {
        Analytics.track("Language Changed", {
            language,
        });
    }, [language]);

    return null;
}
