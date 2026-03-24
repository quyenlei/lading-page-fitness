import { AppToaster } from "@/components/layout/sonner-toaster";
import { inter, poppins } from "@/app/fonts";
import { cn } from "@/lib/utils/common";
import type { Metadata } from "next";
import "./globals.css";

/** Canonical site origin for metadata (Open Graph, canonical URLs). README: `NEXT_PUBLIC_BASE_URL`. */
const METADATA_BASE_FALLBACK = "http://localhost:3000";

function getMetadataBase(): URL {
    const raw = process.env.NEXT_PUBLIC_BASE_URL?.trim().replace(/\/+$/, "");
    if (raw) {
        try {
            return new URL(raw);
        } catch {
            if (process.env.NODE_ENV === "development") {
                console.warn(
                    `[layout] NEXT_PUBLIC_BASE_URL is invalid (${JSON.stringify(process.env.NEXT_PUBLIC_BASE_URL)}). Using ${METADATA_BASE_FALLBACK}.`,
                );
            }
        }
    }
    return new URL(METADATA_BASE_FALLBACK);
}

export const metadata: Metadata = {
    metadataBase: getMetadataBase(),
    title: {
        default: "WORKOUT — Workout With Me | Free Fitness Videos & Programs",
        template: "%s | WORKOUT",
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head suppressHydrationWarning>
            </head>
            <body
                className={cn(
                    "antialiased bg-[#171717] text-[#FAFAF9]",
                    inter.variable,
                    poppins.variable,
                )}
            >
                {children}
                <AppToaster />
            </body>
        </html>
    );
}
