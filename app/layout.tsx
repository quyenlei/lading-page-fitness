import { AppToaster } from "@/components/layout/sonner-toaster";
import { inter, poppins } from "@/app/fonts";
import { cn } from "@/lib/utils/common";
import "./globals.css";

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
