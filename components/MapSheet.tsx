import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { SlidersHorizontal } from "lucide-react";
import { Slider } from "./ui/slider";
import { cn } from "@/lib/utils";

export default function MapSheet() {
    return (
        <div className="fixed z-50 bg-background mt-5 w-full rounded-full flex justify-between gap-5 p-4 border">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="secondary">
                        <SlidersHorizontal />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <div className="flex items-center gap-2">
                <span>₱0</span>
                <Slider
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    className={cn("w-52")}
                />
                <span>₱5000</span>
            </div>
        </div>
    );
}
