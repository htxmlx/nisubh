import { Post, Rating } from "@prisma/client";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "../ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    BathIcon,
    BedIcon,
    Droplets,
    LocateIcon,
    School,
    WifiIcon,
} from "lucide-react";
import Link from "next/link";
import { PostWithRating } from "@/types";

export function PostCard({
    id,
    address,
    images,
    title,
    price,
    averageRating,
    ratings,
    bathroom_no,
    bedroom_no,
    close_to,
    watersupply_available,
    wifi_available,
}: PostWithRating) {
    console.log(ratings);
    return (
        <Card className="p-2">
            <Carousel
                opts={{
                    align: "start",
                }}
            >
                <CarouselContent>
                    {images.length &&
                        images.map((item) => (
                            <CarouselItem className="basis-2/5">
                                <Card className="p-1 relative aspect-square rounded-lg overflow-hidden">
                                    <Image
                                        src={item}
                                        alt="image"
                                        fill
                                        objectFit="cover"
                                    />
                                </Card>
                            </CarouselItem>
                        ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <Link href={`/details?id=${id}`} className="space-y-2">
                <h1 className="text-sm">{title}</h1>
                <StarRating
                    total={ratings?.length}
                    averageRating={averageRating}
                />
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <LocateIcon className="size-3" />
                    <span>{address}</span>
                </div>
                <p className="text-xs text-green-500">₱ {price}</p>
                <div className="flex gap-2 ">
                    {bathroom_no && (
                        <Badge
                            variant="outline"
                            className="space-x-1 text-xs font-normal"
                        >
                            <BathIcon className="size-3" />
                            <span>{bathroom_no} Bathroom</span>
                        </Badge>
                    )}

                    {bedroom_no && (
                        <Badge
                            variant="outline"
                            className="space-x-1 text-xs font-normal"
                        >
                            <BedIcon className="size-3" />
                            <span>{bedroom_no} Bathroom</span>
                        </Badge>
                    )}
                    {close_to && (
                        <Badge
                            variant="outline"
                            className="space-x-1 text-xs font-normal"
                        >
                            <School className="size-3" />
                            <span>Near {close_to} campus </span>
                        </Badge>
                    )}
                </div>
            </Link>
        </Card>
    );
}

interface StarRatingProps {
    averageRating: number | null;
    total: number;
}

function StarRating({ averageRating, total }: StarRatingProps) {
    const starCount = averageRating !== null ? Math.floor(averageRating) : 0;

    return (
        <div className="flex items-center font-normal gap-0.5">
            <span className="text-xs">{starCount}.0</span>
            {[...Array(5)].map((_, index) => (
                <span key={index}>
                    {index < starCount ? (
                        <StarFilledIcon className="text-yellow-500" />
                    ) : (
                        <StarFilledIcon className="text-gray-300" />
                    )}{" "}
                </span>
            ))}
            <span className="text-xs">({total})</span>
        </div>
    );
}
