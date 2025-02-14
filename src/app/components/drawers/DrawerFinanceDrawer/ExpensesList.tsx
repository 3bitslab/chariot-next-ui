import React from "react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

interface Expense {
    name: string;
    amount: number;
    note?: string;
}

const expenses: Expense[] = [
    { name: "banners", amount: 255 },
    {
        name: "gps",
        amount: 117,
        note: "gpsNote",
    },
    { name: "hosting", amount: 377 },
    { name: "domain", amount: 49 },
];

const ExpensesList = () => {
    const t = useTranslations("Financial");
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg mb-4">
                <span className="font-semibold">{t("totalExpenses")}</span>
                <Badge variant="default" className="text-lg">
                    {t("currency")} {total}
                </Badge>
            </div>
            <div className="flex flex-col gap-y-3 h-[40vh] overflow-y-auto">
                {expenses.map((expense, index) => (
                    <div
                        key={index}
                        className="flex flex-col p-3 bg-secondary/10 rounded-lg"
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                                {t(`expenseItems.${expense.name}`)}
                            </span>
                            <Badge variant="secondary">
                                {t("currency")} {expense.amount}
                            </Badge>
                        </div>
                        {expense.note && (
                            <span className="text-xs text-muted-foreground mt-2">
                                {t(`expenseItems.${expense.note}`)}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpensesList;
