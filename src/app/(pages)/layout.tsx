import { Navigation } from "@/components/navigation";
import React, { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Navigation />
            {children}
        </>
    );
}
