import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Box, User2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

export default function Header() {
    return (
        <div className="absolute inset-x-2 border top-2 p-5 z-50 bg-background rounded-xl flex justify-between items-center">
            <div className="flex items-center gap-2">
                <Box /> NISU BH
            </div>
            <SignedOut>
                <Link
                    className={buttonVariants({
                        variant: "ghost",
                        size: "icon",
                    })}
                    href="/sign-in"
                >
                    <User2 className="size-5" />
                    <span className="sr-only">User profile</span>
                </Link>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    );
}
