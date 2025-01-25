"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { analyticsConsentAtom } from "@/atoms/analytics";
import { useAtom } from "jotai";

export function AnalyticsConsentDialog() {
    const [, setConsent] = useAtom(analyticsConsentAtom);

    return (
        <Dialog open={true}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Analytics Consent Required</DialogTitle>
                    <DialogDescription>
                        We use analytics to improve your experience and
                        understand how our service is used. This helps us make
                        the Chariot Tracker better for everyone.
                        <br />
                        <br />
                        By clicking Accept, you agree to allow us to collect
                        anonymous usage data.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center pt-4">
                    <Button onClick={() => setConsent(true)}>Accept</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
