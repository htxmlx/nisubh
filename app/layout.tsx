import BottomBar from "@/components/BottomBar";
import RQProvider from "@/components/RQProvider";
import TopBar from "@/components/TopBar";
import { siteConfig } from "@/config/site";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    applicationName: siteConfig.name,
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    manifest: "/manifest.json",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black",
        title: siteConfig.name,
        // startUpImage: [],
    },
    formatDetection: {
        telephone: false,
    },
    openGraph: {
        type: "website",
        siteName: siteConfig.name,
        title: {
            default: siteConfig.name,
            template: `%s - ${siteConfig.name}`,
        },
        description: siteConfig.description,
    },
    twitter: {
        card: "summary",
        title: {
            default: siteConfig.name,
            template: `%s - ${siteConfig.name}`,
        },
        description: siteConfig.description,
    },
};

export const viewport: Viewport = {
    themeColor: "#FFFFFF",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <RQProvider>
                        <TopBar />
                        {children}
                        <BottomBar />
                    </RQProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
