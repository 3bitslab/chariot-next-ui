import { TSelectableItem } from "@/constants/types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

function Selectables({
    currentValue,
    items,
    onItemChange,
}: {
    currentValue: string;
    items: TSelectableItem[];
    onItemChange: (value: string) => void;
}) {
    return (
        <RadioGroup
            dir="ltr"
            value={currentValue}
            onValueChange={onItemChange}
            className="gap-y-5 md:flex md:w-full md:gap-x-10"
        >
            {items.map((item) => (
                <div className="flex items-center space-x-2" key={item.title}>
                    <div>{item.logo}</div>
                    <div className="flex flex-col px-2 md:px-0">
                        <span className="text-lg font-semibold text-primary-850 dark:text-primary-50 capitalize">
                            {item.title}
                        </span>
                        <span className="text-sm text-primary-800 dark:text-primary-100">
                            {item.description}
                        </span>
                    </div>
                    <RadioGroupItem value={item.value} id={item.title} />
                </div>
            ))}
        </RadioGroup>
    );
}

export default Selectables;
