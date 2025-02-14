import React from "react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

interface Expense {
    name: string;
    amount: number;
    note?: string;
}

const expenses: Expense[] = [
    { name: "Banners", amount: 255 },
    {
        name: "GPS",
        amount: 117,
        note: "* Exact GPS-related information is not disclosed due to proprietary technology.",
    },
    { name: "Website Hosting Fees", amount: 377 },
    { name: "Domain Cost", amount: 49 },
];

const ExpensesList = () => {
    const t = useTranslations("Financial");
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    return (
        <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg mb-4">
                <span className="font-semibold">{t("totalExpenses")}</span>
                <Badge variant="default" className="text-lg">
                    {t("currency")} {total}
                </Badge>
            </div>
            <div className="flex-1 rounded-md overflow-y-auto min-h-0 max-h-[calc(80vh-150px)]">
                <div className="flex flex-col gap-y-3 pb-4">
                    {expenses.map((expense, index) => (
                        <div
                            key={index}
                            className="flex flex-col p-3 bg-secondary/10 rounded-lg"
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">
                                    {expense.name}
                                </span>
                                <Badge variant="secondary">
                                    {t("currency")} {expense.amount}
                                </Badge>
                            </div>
                            {expense.note && (
                                <span className="text-xs text-muted-foreground mt-2">
                                    {expense.note}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExpensesList;
