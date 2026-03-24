"use client";

import { HEADER_NAV_ITEMS, type HeaderNavItem } from "@/components/layout/header-nav";
import { cn } from "@/lib/utils/common";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type HeaderProps = {
    brand?: string;
    /** Override default in-page nav; each item maps to a section `id`. */
    navItems?: HeaderNavItem[];
};

export function Header({
    brand = "WORKOUT",
    navItems = HEADER_NAV_ITEMS,
}: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const closeMenu = useCallback(() => setMenuOpen(false), []);

    const scrollToSection = useCallback((sectionId: string) => {
        const el = document.getElementById(sectionId);
        if (!el) return;

        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollIntoView({
            behavior: reduce ? "auto" : "smooth",
            block: "start",
        });

        const nextHash = `#${sectionId}`;
        if (typeof window !== "undefined" && window.location.hash !== nextHash) {
            window.history.replaceState(null, "", nextHash);
        }
    }, []);

    const onNavActivate = useCallback(
        (sectionId: string) => {
            closeMenu();
            requestAnimationFrame(() => {
                scrollToSection(sectionId);
            });
        },
        [closeMenu, scrollToSection],
    );

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        const onChange = () => {
            if (mq.matches) setMenuOpen(false);
        };
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 12);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    /** Deep link: /#section-id scrolls to target after load. */
    useEffect(() => {
        const raw = window.location.hash.replace(/^#/, "");
        if (!raw) return;
        const id = window.requestAnimationFrame(() => {
            document.getElementById(raw)?.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                    ? "auto"
                    : "smooth",
                block: "start",
            });
        });
        return () => window.cancelAnimationFrame(id);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 mx-auto w-full max-w-328 transition-[padding,background-color,box-shadow,backdrop-filter] duration-200 ease-out motion-reduce:transition-none",
                "px-4 py-6 sm:px-6 md:py-10 lg:px-0 lg:py-12",
                scrolled || menuOpen
                    ? " bg-[#171717]/92 py-4 md:py-6 lg:py-8"
                    : "bg-transparent",
            )}
        >
            <div
                id="header-mobile-nav"
                className={`fixed inset-0 z-40 transition-[opacity,visibility] duration-300 ease-out motion-reduce:transition-none lg:hidden ${
                    menuOpen
                        ? "visible opacity-100"
                        : "pointer-events-none invisible opacity-0"
                }`}
                role="dialog"
                aria-modal={menuOpen}
                aria-hidden={!menuOpen}
                aria-label="Navigation menu"
            >
                <button
                    type="button"
                    className={`absolute inset-0 cursor-default bg-black/70 transition-opacity duration-300 ease-out motion-reduce:transition-none ${
                        menuOpen ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                    tabIndex={menuOpen ? -1 : undefined}
                    onClick={closeMenu}
                />
                <div
                    className={`relative mx-auto flex h-full max-w-328 flex-col px-4 pb-8 pt-24 transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none sm:px-6 ${
                        menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-5 opacity-0"
                    }`}
                >
                    <ul className="flex flex-col gap-1 overflow-y-auto overscroll-contain">
                        {navItems.map((item, index) => (
                            <li
                                key={item.label}
                                className={`transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none ${
                                    menuOpen
                                        ? "translate-x-0 opacity-100"
                                        : "-translate-x-6 opacity-0"
                                }`}
                                style={{
                                    transitionDelay: menuOpen
                                        ? `${80 + index * 45}ms`
                                        : `${index * 25}ms`,
                                }}
                            >
                                <a
                                    href={`#${item.sectionId}`}
                                    className={`block rounded-md px-2 py-3 text-sm transition-colors hover:bg-white/10 ${
                                        index === 0
                                            ? "font-bold text-white"
                                            : "uppercase tracking-[0.04em] text-[#efede8a6]"
                                    }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onNavActivate(item.sectionId);
                                    }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <nav className="relative z-50 flex items-center justify-between gap-4" aria-label="Main">
                <Link
                    href="/"
                    className="shrink-0 text-lg font-bold tracking-[0.02em] text-white sm:text-xl"
                    onClick={closeMenu}
                >
                    {brand}
                </Link>
                <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white transition-transform duration-200 ease-out hover:bg-white/10 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none lg:hidden"
                    aria-expanded={menuOpen}
                    aria-controls="header-mobile-nav"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen((o) => !o)}
                >
                    {menuOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
                </button>
                <ul className="hidden flex-wrap items-center gap-4 lg:flex lg:gap-5">
                    {navItems.map((item, index) => (
                        <li key={item.label}>
                            <a
                                href={`#${item.sectionId}`}
                                className={
                                    index === 0
                                        ? "text-base font-bold text-white"
                                        : "text-xs uppercase tracking-[0.04em] text-[#efede8a6] transition-colors hover:text-white"
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.sectionId);
                                }}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
