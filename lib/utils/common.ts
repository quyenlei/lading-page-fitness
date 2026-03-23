import { NO_IMAGE_URL } from "@/lib/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function detectLocaleFromAcceptLanguage(
    acceptLanguage: string | null | undefined,
): "vi" | "en" {
    const value = acceptLanguage ?? "";

    if (value.toLowerCase().includes("en")) {
        return "en";
    }

    return "vi";
}

const LOCALE_COOKIE_KEY = "locale";

export function getClientLocaleFromCookie(): "vi" | "en" {
    if (typeof document === "undefined") return "en";
    const match = document.cookie
        .split(";")
        .map((c) => c.trim())
        .find((c) => c.startsWith(`${LOCALE_COOKIE_KEY}=`));
    if (!match) return "en";
    const value = decodeURIComponent(match.split("=")[1] ?? "").toLowerCase();
    return value === "vi" ? "vi" : "en";
}

export function generateThumbnailUrl(
    src?: string | null | undefined,
    width?: number,
    height?: number,
    zoomCrop = 1,
    enableWebp = true,
): string {
    if (!src) return NO_IMAGE_URL;

    const useWebp = enableWebp;

    let path =
        src.startsWith("http://") || src.startsWith("https://")
            ? (() => {
                  try {
                      return new URL(src).pathname;
                  } catch {
                      return src;
                  }
              })()
            : src;

    path = path.replace(/^\/+/, "");
    if (useWebp && !path.endsWith(".webp")) path += ".webp";

    const encodedPath = path.split("/").map(encodeURIComponent).join("/");
    const baseUrl = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/+$/, "");
    return `${baseUrl}/api/thumbs/${width}x${height}x${zoomCrop}/${encodedPath}`;
}

export function setClientLocaleCookie(locale: "vi" | "en"): void {
    if (typeof document === "undefined") return;
    const value = encodeURIComponent(locale);
    document.cookie = `${LOCALE_COOKIE_KEY}=${value}; path=/; max-age=${
        60 * 60 * 24 * 365
    }`;
}
