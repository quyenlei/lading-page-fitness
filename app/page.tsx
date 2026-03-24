import { HomePage } from "@/components/home";
import { MainLayout } from "@/components/layout";
import type { Metadata } from "next";

const description =
    "Train at home with hundreds of free full-length workout videos, structured programs, meal plans, and a supportive fitness community. Join for free or upgrade to WO Plus for ads-free videos, stats, and exclusive content.";

export const metadata: Metadata = {
    description,
    keywords: [
        "workout",
        "fitness",
        "home workout",
        "free workout videos",
        "exercise programs",
        "meal plans",
        "healthy recipes",
        "online fitness community",
        "WO Plus",
        "training at home",
    ],
    authors: [{ name: "WORKOUT" }],
    creator: "WORKOUT",
    publisher: "WORKOUT",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "/",
        siteName: "WORKOUT",
        title: "WORKOUT — Workout With Me | Free Fitness Videos & Programs",
        description,
        images: [
            {
                url: "/images/section-training.png",
                width: 560,
                height: 510,
                alt: "Fitness training with WORKOUT — workout at home",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "WORKOUT — Workout With Me | Free Fitness Videos & Programs",
        description,
        images: ["/images/section-training.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    alternates: {
        canonical: "/",
    },
    category: "fitness",
};

export default function Home() {
    return (
        <MainLayout>
            <HomePage />
        </MainLayout>
    );
}
