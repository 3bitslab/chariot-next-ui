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
                        We&apos;re committed to making Chariot Tracker better
                        for you! By allowing anonymous analytics, you help us
                        understand how people use our app and what we can
                        improve.
                        <br />
                        <br />
                        Your feedback through usage patterns helps us create a
                        better experience for everyone in our community.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center pt-4">
                    <Button onClick={() => setConsent(true)}>Accept</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
