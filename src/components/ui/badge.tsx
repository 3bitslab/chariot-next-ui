import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center rounded-xl border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary-900 text-primary-100 dark:bg-primary-100 dark:text-primary-900",
                secondary:
                    "border-transparent bg-[#F3F4F6] text-[#1A1021]/50 dark:bg-primary-150 dark:text-primary-800",
                destructive:
                    "border-transparent bg-[#D23131] text-[#F3EEF6] dark:bg-[#9B1B1B] dark:text-[#F3EEF6]/90",
                constructive:
                    "border-transparent bg-[#E4C529] text-black/70 dark:bg-[#B89E21] dark:text-white",
                outline: "text-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
