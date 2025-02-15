import React from "react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

interface Donation {
    name: string;
    amount: number;
}

// Names are pre-masked to protect privacy in the bundle and alphabetical order
const donations: Donation[] = [
    { name: "A***** S****** A/P C******", amount: 50 },
    { name: "C*** Y*** Y**", amount: 20 },
    { name: "J***** A** S* F***", amount: 50 },
    { name: "K******* A/L M A********", amount: 10 },
    { name: "L** E S****", amount: 30 },
    { name: "L****** M******* A/P K**", amount: 5 },
    { name: "M***** A/P R**********", amount: 30 },
    { name: "M**** A/L N*******", amount: 100 },
    { name: "M****** M********", amount: 100 },
    { name: "N******* A/L R*********", amount: 50 },
    { name: "P***** A/P S**********", amount: 30 },
    { name: "S.P. P********* A/L S******", amount: 51 },
    { name: "S******* A/L M*****", amount: 5 },
    { name: "S******* A/L S******", amount: 10 },
    { name: "T*** A* P***", amount: 405 },
    { name: "T********* A/P P*********", amount: 25 },
];

const DonationsList = () => {
    const t = useTranslations("Financial");
    const total = donations.reduce((sum, donation) => sum + donation.amount, 0);

    return (
        <div className="flex flex-col">
            <div className="flex flex-col p-4 bg-primary/10 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                    <span className="font-semibold">{t("totalDonations")}</span>
                    <Badge variant="default" className="text-lg">
                        {t("currency")} {total}
                    </Badge>
                </div>
                <span className="text-xs text-muted-foreground/75 mt-2">
                    {t("donationNotice")}
                </span>
            </div>
            <div className="flex flex-col gap-y-3">
                {donations.map((donation, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg"
                    >
                        <span className="text-sm font-medium">
                            {donation.name}
                        </span>
                        <Badge variant="default">
                            {t("currency")} {donation.amount}
                        </Badge>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonationsList;
