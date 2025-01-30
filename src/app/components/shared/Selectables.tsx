import { TSelectableItem } from "@/constants/types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import { toast } from "sonner";

function Selectables({
    currentValue,
    items,
    onItemChange,
}: {
    currentValue: string;
    items: TSelectableItem[];
    onItemChange: (value: string) => void;
}) {
    const handleChange = (value: string) => {
        const item = items.find((item) => item.value === value);
        if (item?.disabled) {
            toast.error(item.disabledMessage);
            return;
        }
        onItemChange(value);
    };

    return (
        <RadioGroup
            dir="ltr"
            value={currentValue}
            onValueChange={handleChange}
            className="gap-y-5 md:flex md:w-full md:gap-x-10"
        >
            {items.map((item) => (
                <label
                    key={item.title}
                    htmlFor={item.title}
                    className={`flex items-center justify-between w-full space-x-4 p-3 rounded-md ${
                        item.disabled
                            ? "opacity-50 cursor-not-allowed"
                            : "cursor-pointer"
                    }`}
                >
                    <div className="flex items-center space-x-2">
                        <div>{item.logo}</div>
                        <div className="flex flex-col px-2 md:px-0">
                            <span className="text-lg font-semibold text-primary-850 dark:text-primary-50 capitalize">
                                {item.title}
                            </span>
                            <span className="text-sm text-primary-800 dark:text-primary-100">
                                {item.description}
                            </span>
                            {item.disabled && (
                                <span className="text-sm text-red-500 mt-1">
                                    {item.disabledMessage}
                                </span>
                            )}
                        </div>
                    </div>
                    <RadioGroupItem
                        value={item.value}
                        id={item.title}
                        className="h-5 w-5"
                        disabled={item.disabled}
                    />
                </label>
            ))}
        </RadioGroup>
    );
}

export default Selectables;
