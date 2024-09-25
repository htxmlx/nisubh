"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Map, PlusCircle, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
    icon: React.ElementType;
    label: string;
    href: string;
}

function NavItem({ icon: Icon, label, href }: NavItemProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={cn(
                "flex flex-col items-center py-2 px-4 flex-1 transition-colors",
                isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
            )}
        >
            <Icon className="size-5" />
            <span className="text-xs mt-1">{label}</span>
        </Link>
    );
}

export default function BottomBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t z-10">
            <div className="flex justify-between items-center max-w-screen-sm mx-auto">
                <NavItem icon={Home} label="Home" href="/home" />
                <NavItem icon={Map} label="Map" href="/map" />
                <NavItem icon={PlusCircle} label="Create" href="/create" />
                <NavItem icon={Bookmark} label="Saved" href="/saved" />
            </div>
        </div>
    );
}
