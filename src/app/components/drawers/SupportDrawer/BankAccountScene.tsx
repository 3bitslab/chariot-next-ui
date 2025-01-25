import { CopyIcon, DownloadIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";
import Divider from "../../Divider";
import { useTranslations } from "next-intl";

function BankAccountScene() {
    const t = useTranslations("Support.scene");

    const bankAccountDetails = [
        { title: t("bankName"), value: "HSBC Bank Malaysia Berhad" },
        { title: t("accountName"), value: "Manickam Murugappan" },
        { title: t("accountNumber"), value: "371348475025" },
        {
            title: t("reference"),
            value: "Penang Thaipusam SCT 2025",
        },
    ];

    const handleCopyToClipboard = (value: string, label: string) => {
        navigator.clipboard.writeText(value);
        toast.success(t("copied", { field: label }));
    };

    return (
        <div className="flex flex-col gap-y-2 items-center justify-center">
            <div className="flex flex-col items-center gap-y-2">
                <span className="font-bold text-primary-850 dark:text-primary-100">
                    {t("malaysiaQR")}
                </span>
                <div className="relative p-2 bg-white rounded-lg shadow-lg">
                    <Image
                        alt="QR Code"
                        src="/assets/ManickamQR.jpeg"
                        width={180}
                        height={180}
                        className="rounded-md"
                    />
                    {/* Download QR Button */}
                    <button
                        onClick={() => {
                            const link = document.createElement("a");
                            link.href = "/assets/ManickamQR.jpeg";
                            link.download =
                                "PenangThaipusamSilverChariotDonation.jpeg";
                            link.click();
                        }}
                        className="absolute bottom-2 right-2 bg-gray-900 text-white p-1 rounded-md hover:bg-gray-700 transition"
                    >
                        <DownloadIcon size={16} />
                    </button>
                </div>
            </div>
            <Divider />
            <div className="flex flex-col items-center gap-y-2 w-full">
                <span className="font-bold text-primary-850 dark:text-primary-50">
                    {t("detail")}
                </span>
                <div className="flex flex-col gap-y-3 rounded-lg bg-primary-100 p-3 w-full md:w-fit md:items-center dark:bg-primary-850">
                    {bankAccountDetails.map((detail) => (
                        <div
                            key={detail.title}
                            className="flex items-center gap-x-1"
                        >
                            <span className="font-bold">{detail.title}: </span>
                            <span>{detail.value}</span>
                            {[
                                t("accountName"),
                                t("accountNumber"),
                                t("reference"),
                            ].includes(detail.title) && (
                                <button
                                    onClick={() =>
                                        handleCopyToClipboard(
                                            detail.value,
                                            detail.title
                                        )
                                    }
                                    className="hover:cursor-pointer dark:text-primary-50 text-primary-900"
                                >
                                    <CopyIcon size={15} />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BankAccountScene;
