import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../actions/getPosts";
import { CloseTo } from "@prisma/client";

const usePosts = (limit: number, filter?: CloseTo | undefined) => {
    return useQuery({
        queryKey: [`posts-${CloseTo}`, limit],
        queryFn: () => getPosts(limit, filter),
    });
};

export { usePosts, getPosts };
