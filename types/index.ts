import type { Post, Rating } from "@prisma/client";

export type PostWithRating = Post & {
    averageRating: number | null;
    ratings: Rating[];
};
