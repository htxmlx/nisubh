import { Button } from "./ui/button";
import { SlidersHorizontal } from "lucide-react";
import { Slider } from "./ui/slider";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { useRouter } from "next/navigation";

export default function MapSheet() {
    const router = useRouter();
    return (
        <div className="fixed bottom-16 mx-2 z-50 bg-background mt-5 w-fit rounded-full flex justify-between gap-5 p-4 border">
            <Drawer>
                <DrawerTrigger asChild>
                    <Button size="icon" variant="outline">
                        <SlidersHorizontal />
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="space-y-5 h-[50vh] max-w-md mx-auto flex flex-col items-center">
                    <h3 className="text-center">Map Type</h3>
                    <div className="flex gap-5">
                        <div
                            onClick={() => router.push("/map")}
                            className="rounded-lg overflow-hidden flex flex-col items-center"
                        >
                            <div className="aspect-video relative h-12">
                                <Image
                                    objectFit="cover"
                                    src="/icons/standard.png"
                                    fill
                                    alt="image"
                                />
                            </div>
                            Standard
                        </div>

                        <div
                            onClick={() => router.push("/map?id=satellite-v9")}
                            className="rounded-lg overflow-hidden flex flex-col items-center"
                        >
                            <div className="aspect-video relative h-12">
                                <Image
                                    objectFit="cover"
                                    src="/icons/satellite.png"
                                    fill
                                    alt="image"
                                />
                            </div>
                            Satellite
                        </div>

                        <div
                            onClick={() => router.push("/map?id=streets-v12")}
                            className="rounded-lg overflow-hidden flex flex-col items-center"
                        >
                            <div className="aspect-video relative h-12">
                                <Image
                                    objectFit="cover"
                                    src="/icons/street.png"
                                    fill
                                    alt="image"
                                />
                            </div>
                            Street
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
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
