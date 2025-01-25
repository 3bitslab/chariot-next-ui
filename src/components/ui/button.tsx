import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 md:[&_svg]:size-5 lg:[&_svg]:size-6 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default:
                    "bg-primary-50 text-primary-800 shadow hover:bg-primary-50/80 dark:bg-primary-900 dark:text-primary-150 dark:hover:bg-primary-900/80",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                    "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground dark:text-primary-900 dark:hover:bg-primary-900 dark:hover:text-primary-150",
                secondary:
                    "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                dialog: "bg-primary-800 text-primary-50 shadow dark:bg-primary-50 dark:text-primary-800",
            },
            size: {
                default:
                    "h-9 md:h-10 lg:h-11 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 text-sm md:text-base lg:text-lg",
                sm: "h-8 md:h-9 lg:h-10 rounded-md px-3 md:px-4 lg:px-5 text-xs md:text-sm lg:text-base",
                lg: "h-10 md:h-11 lg:h-12 rounded-md px-8 md:px-10 lg:px-12 text-base md:text-lg lg:text-xl",
                icon: "h-9 w-9 md:h-10 md:w-10 lg:h-11 lg:w-11",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
