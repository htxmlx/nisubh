"use client";

import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react";
import { Button } from "./button";

export default function UnauthorizedPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full space-y-8 text-center">
                <AlertCircle className="mx-auto h-12 w-12 text-destructive" />
                <h1 className="text-xl font-bold tracking-tight text-primary">
                    Access Denied
                </h1>
                <p className="text-base text-muted-foreground">
                    Only landlord accounts can create listings. To upgrade to a
                    landlord account, please contact #09123133321.
                </p>

                <div className="flex flex-col">
                    <Button
                        variant="default"
                        className="w-full"
                        onClick={() => router.push("/sign-in")}
                    >
                        Sign In
                    </Button>
                    or
                    <Button
                        variant="default"
                        className="w-full"
                        onClick={() => router.back()}
                    >
                        Return to Previous Page
                    </Button>
                </div>
            </div>
        </div>
    );
}
