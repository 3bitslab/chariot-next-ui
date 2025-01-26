"use client";

import { drawerAtom } from "@/atoms/drawer";
import { languageAtom } from "@/atoms/language";
import { analyticsConsentAtom, dntStatusAtom } from "@/atoms/analytics";
import { Analytics } from "@/utils/mixpanel";
import { useAtom } from "jotai";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { AnalyticsConsentDialog } from "./AnalyticsConsentDialog";

export function AnalyticsProvider() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [drawer] = useAtom(drawerAtom);
    const [language] = useAtom(languageAtom);
    const [hasConsent] = useAtom(analyticsConsentAtom);
    const [dntEnabled] = useAtom(dntStatusAtom);

    useEffect(() => {
        if (hasConsent) {
            Analytics.initialize();
        }
    }, [hasConsent, dntEnabled]);

    // Track page views
    useEffect(() => {
        if (hasConsent && pathname) {
            Analytics.track("Page View", {
                path: pathname,
                search: searchParams.toString(),
                url: `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`,
            });
        }
    }, [pathname, searchParams, hasConsent]);

    // Track drawer opens
    useEffect(() => {
        if (hasConsent && drawer) {
            Analytics.track("Drawer Opened", {
                drawer_type: drawer,
            });
        }
    }, [drawer, hasConsent]);

    // Track language changes
    useEffect(() => {
        if (hasConsent) {
            Analytics.track("Language Changed", {
                language,
            });
        }
    }, [language, hasConsent]);

    if (!hasConsent && dntEnabled) {
        return <AnalyticsConsentDialog />;
    }

    return null;
}
