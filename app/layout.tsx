import { AppToaster } from "@/components/layout/sonner-toaster";
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
            <body className={cn("antialiased")}>
                {children}
                <AppToaster />
            </body>
        </html>
    );
}
