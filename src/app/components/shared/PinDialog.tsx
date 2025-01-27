import { useState } from "react";
import { useAtom } from "jotai";
import { isPinVerifiedAtom } from "@/atoms/pin";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const CORRECT_PIN = "8gY#cV&2kZ@qX7rM5s!W$T9pL^A*JdN";

export function PinDialog() {
    const [pin, setPin] = useState("");
    const [error, setError] = useState(false);
    const [, setIsPinVerified] = useAtom(isPinVerifiedAtom);

    const handlePinSubmit = () => {
        if (pin === CORRECT_PIN) {
            setIsPinVerified(true);
            setError(false);
        } else {
            setError(true);
            setPin("");
        }
    };

    return (
        <Dialog open={true}>
            <DialogContent
                className="w-[90%] max-w-[400px] p-4 sm:p-6 md:max-w-md"
                onPointerDownOutside={(e) => e.preventDefault()}
            >
                <DialogHeader className="space-y-2">
                    <DialogTitle className="text-xl sm:text-2xl">
                        Enter PIN
                    </DialogTitle>
                    <DialogDescription className="text-sm sm:text-base">
                        Please enter the PIN to access the application.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 mt-4">
                    <input
                        type="password"
                        value={pin}
                        onChange={(e) => {
                            setPin(e.target.value);
                            setError(false);
                        }}
                        className="flex h-12 sm:h-10 w-full rounded-md border border-input bg-background px-4 py-2 text-base sm:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter PIN"
                    />
                    {error && (
                        <p className="text-sm text-red-500">
                            Incorrect PIN. Please try again.
                        </p>
                    )}
                    <Button
                        onClick={handlePinSubmit}
                        className="h-12 sm:h-10 text-base sm:text-sm"
                    >
                        Submit
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
