"use client";

import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type HeaderProps = {
    brand?: string;
    navItems?: string[];
};

const defaultNavItems = [
    "Workout",
    "Workouts",
    "Programs",
    "Healthy Living",
    "Community",
    "About",
    "Store",
];

export function Header({
    brand = "WORKOUT",
    navItems = defaultNavItems,
}: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = useCallback(() => setMenuOpen(false), []);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        const onChange = () => {
            if (mq.matches) setMenuOpen(false);
        };
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
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

    return (
        <header className="relative z-50 mx-auto w-full max-w-328 px-4 py-6 sm:px-6 md:py-10 lg:px-0 lg:py-12">
            {menuOpen ? (
                <div
                    id="header-mobile-nav"
                    className="fixed inset-0 z-40 lg:hidden"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Navigation menu"
                >
                    <div
                        className="absolute inset-0 cursor-default bg-black/70"
                        aria-hidden="true"
                        onClick={closeMenu}
                    />
                    <div className="relative mx-auto flex h-full max-w-328 flex-col px-4 pb-8 pt-24 sm:px-6">
                        <ul className="flex flex-col gap-1 overflow-y-auto overscroll-contain">
                            {navItems.map((item, index) => (
                                <li key={item}>
                                    <a
                                        href="#top"
                                        className={`block rounded-md px-2 py-3 text-sm transition-colors hover:bg-white/10 ${
                                            index === 0
                                                ? "font-bold text-white"
                                                : "uppercase tracking-[0.04em] text-[#efede8a6]"
                                        }`}
                                        onClick={closeMenu}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : null}
            <nav className="relative z-50 flex items-center justify-between gap-4" aria-label="Main">
                <a
                    href="#top"
                    className="shrink-0 text-lg font-bold tracking-[0.02em] text-white sm:text-xl"
                    onClick={closeMenu}
                >
                    {brand}
                </a>
                <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
                    aria-expanded={menuOpen}
                    aria-controls={menuOpen ? "header-mobile-nav" : undefined}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen((o) => !o)}
                >
                    {menuOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
                </button>
                <ul className="hidden flex-wrap items-center gap-4 lg:flex lg:gap-5">
                    {navItems.map((item, index) => (
                        <li key={item}>
                            <a
                                href="#top"
                                className={
                                    index === 0
                                        ? "text-base font-bold text-white"
                                        : "text-xs uppercase tracking-[0.04em] text-[#efede8a6] transition-colors hover:text-white"
                                }
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
