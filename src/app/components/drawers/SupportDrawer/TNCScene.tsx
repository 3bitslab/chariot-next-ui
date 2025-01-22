import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import { useTranslations } from "next-intl";

function TNCScene({
    handleSceneChange,
}: {
    handleSceneChange: (scene: 0 | 1) => void;
}) {
    const [isAccepted, setIsAccepted] = useState<boolean>(false);
    const t = useTranslations("Support.tnc");

    return (
        <div className="text-primary-850 dark:text-primary-100 flex flex-col items-center w-full gap-y-3">
            <div className="gap-y-2 rounded-md border border-[#CBD5E1] p-2 flex flex-col w-full h-40 overflow-y-auto">
                <span>{t("title")}</span>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>{t("items.independentInitiative")}</li>
                    <li>{t("items.purposeOfDonations")}</li>
                    <li>{t("items.ownershipAndManagement")}</li>
                    <li>{t("items.nonRefundableContributions")}</li>
                    <li>{t("items.transparencyAndAccountability")}</li>
                    <li>{t("items.noAffiliationDisclaimer")}</li>
                    <li>{t("items.acceptanceOfTerms")}</li>
                </ol>
            </div>
            <div className="flex items-center justify-center gap-x-2">
                <Checkbox
                    onCheckedChange={(checked) =>
                        setIsAccepted(checked as boolean)
                    }
                    className="border-[#CBD5E1]"
                />
                <span className="text-sm">{t("acceptTerms")}</span>
            </div>
            <Button
                disabled={!isAccepted}
                onClick={() => handleSceneChange(1)}
                variant="outline"
                className="flex justify-center gap-x-2 items-center bg-primary-600 text-primary-150 dark:bg-primary-50 dark:text-primary-800"
            >
                <HeartIcon strokeWidth={1} />
                <span>{t("supportNow")}</span>
            </Button>
        </div>
    );
}

export default TNCScene;
