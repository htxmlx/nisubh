"use client";

import { Menu, Search, User, Moon, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

export default function TopBar() {
    const { theme, setTheme } = useTheme();

    return (
        <nav className="fixed top-0 left-0 right-0 bg-background rounded-full m-2 border shadow-md z-10">
            <div className="flex items-center p-2 max-w-screen-sm mx-auto">
                <Link href="/">
                    <Button variant="ghost" size="icon">
                        <Image
                            src="/icons/logo.svg"
                            alt="logo"
                            width={25}
                            height={25}
                            className="dark:invert"
                        />
                        <span className="sr-only">Logo</span>
                    </Button>
                </Link>
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-5" />
                    <Input
                        type="search"
                        placeholder="search..."
                        className="w-full pl-10 pr-4 py-2 rounded-full border-input focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    />
                </div>

                <Button
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                    variant="ghost"
                    size="icon"
                >
                    <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
                <Button variant="ghost" size="icon">
                    <User className="size-5" />
                    <span className="sr-only">User profile</span>
                </Button>
            </div>
        </nav>
    );
}
