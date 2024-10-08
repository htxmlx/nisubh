"use client";

import Section from "@/components/common/section";
import { usePosts } from "@/lib/hooks/usePosts";
import React, { useState } from "react";
import { CloseTo } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/common/PostCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
    const [postCount, setPostCount] = useState(10);
    const [closeToFilter, setCloseToFilter] = useState<CloseTo | undefined>(
        undefined
    );
    const { data, isPending, isFetching } = usePosts(postCount, closeToFilter);

    if (isPending)
        return (
            <Section>
                <div className="flex gap-2">
                    <Skeleton className="h-4 w-10" />
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-4 w-16" />
                </div>
                {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="flex flex-col space-y-3">
                        <Skeleton className="h-[125px] w-full max-w-sm rounded-xl" />
                    </div>
                ))}
            </Section>
        );

    const filterOptions = [
        { label: "All", value: undefined },
        { label: "Main", value: CloseTo.main },
        { label: "West", value: CloseTo.west },
        { label: "Both", value: CloseTo.both },
    ];

    function handleFilterClick(value: CloseTo | undefined) {
        setCloseToFilter(value);
        setPostCount(postCount + 10);
    }

    return (
        <Section>
            <div className="flex gap-2">
                {filterOptions.map((option) => (
                    <Badge
                        key={option.label}
                        onClick={() => handleFilterClick(option.value)}
                        className="cursor-pointer"
                        variant={
                            closeToFilter === option.value
                                ? "default"
                                : "secondary"
                        }
                    >
                        {option.label}
                    </Badge>
                ))}
            </div>

            <ul className="space-y-2">
                {data?.map((post) => (
                    <li key={post.id}>
                        <PostCard {...post} />
                    </li>
                ))}
            </ul>
            {postCount <= 10 && (
                <Button
                    onClick={() => setPostCount(postCount + 10)}
                    disabled={isFetching}
                >
                    {isFetching ? "Loading..." : "Show More"}
                </Button>
            )}
        </Section>
    );
}
