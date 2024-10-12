import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { MapPinHouse, User2 } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Header() {
    return (
        <div className="absolute inset-x-2 border top-2 py-3 px-2 z-50 bg-background rounded-xl flex justify-between items-center">
            <div className="flex items-center gap-2">
                <MapPinHouse />{" "}
                <h1 className="font-bold">
                    NISU<span className="text-green-500">BH</span>
                </h1>
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
