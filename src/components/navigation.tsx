import { Map, MapPinHouse, PlusCircle, Rows2 } from "lucide-react";
import Link from "next/link";

export function Navigation() {
    const navItems = [
        { name: "Explore", icon: Map, href: "/" },
        { name: "Create", icon: PlusCircle, href: "/create" },
        { name: "Listings", icon: Rows2, href: "/listings" },
    ];
    return (
        <>
            <aside className="hidden md:flex flex-col w-64 bg-gray-100 border-r">
                <div className="flex items-center gap-2 p-5">
                    <MapPinHouse className="text-black fill-green-500" />{" "}
                    <h1 className="font-bold">
                        NISU<span className="text-green-500">BH</span>
                    </h1>
                </div>
                <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-gray-200"
                                >
                                    <item.icon className="w-6 h-6 mr-3" />
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t h-[8vh] z-50">
                <ul className="flex justify-around">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="flex flex-col items-center p-2 text-gray-700 hover:bg-gray-100"
                            >
                                <item.icon className="w-6 h-6 mb-1" />
                                <span className="text-xs">{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
