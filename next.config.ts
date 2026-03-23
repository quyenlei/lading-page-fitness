import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        optimizePackageImports: ["lucide-react"],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
            {
                protocol: "http",
                hostname: "**",
            },
        ],
        unoptimized: process.env.NODE_ENV !== "production",
    },
    compress: true,
    poweredByHeader: false,
};

export default nextConfig;