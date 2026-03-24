"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useLayoutEffect, useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

type LandingAnimationsRootProps = {
    children: ReactNode;
};

export function LandingAnimationsRoot({ children }: LandingAnimationsRootProps) {
    const rootRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const ctx = gsap.context(() => {
            const heroLines = gsap.utils.toArray<HTMLElement>(
                root.querySelectorAll("[data-anim='hero-line']"),
            );
            const heroSub = root.querySelector("[data-anim='hero-sub']");
            const heroCta = root.querySelector("[data-anim='hero-cta']");
            const heroVisual = root.querySelector("[data-anim='hero-visual-inner']");
            const heroStats = gsap.utils.toArray<HTMLElement>(
                root.querySelectorAll("[data-anim='hero-stat']"),
            );
            const featuredLabel = root.querySelector("[data-anim='featured-label']");
            const featuredLogos = gsap.utils.toArray<HTMLElement>(
                root.querySelectorAll("[data-anim='featured-logo']"),
            );

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            if (heroLines.length) {
                gsap.set(heroLines, { transformOrigin: "50% 100%" });
                tl.from(heroLines, {
                    yPercent: 130,
                    rotateX: -22,
                    opacity: 0,
                    duration: 1.05,
                    stagger: 0.12,
                    ease: "back.out(1.35)",
                });
            }

            if (heroSub) {
                tl.from(
                    heroSub,
                    { y: 48, opacity: 0, filter: "blur(8px)", duration: 0.75 },
                    "-=0.55",
                );
            }

            if (heroCta) {
                tl.from(
                    heroCta,
                    {
                        scale: 0.82,
                        opacity: 0,
                        duration: 0.6,
                        ease: "back.out(2.2)",
                    },
                    "-=0.45",
                );
            }

            if (heroVisual) {
                tl.from(
                    heroVisual,
                    {
                        scale: 1.18,
                        y: 56,
                        opacity: 0,
                        duration: 1.15,
                        ease: "power4.out",
                    },
                    heroLines.length ? "-=0.95" : 0,
                );
            }

            if (heroStats.length) {
                gsap.from(heroStats, {
                    scale: 0,
                    opacity: 0,
                    rotation: -14,
                    duration: 0.72,
                    stagger: 0.11,
                    ease: "back.out(2)",
                    delay: 0.35,
                });
            }

            if (featuredLabel) {
                gsap.from(featuredLabel, {
                    opacity: 0,
                    x: -28,
                    duration: 0.55,
                    delay: 0.25,
                    ease: "power2.out",
                });
            }

            if (featuredLogos.length) {
                gsap.from(featuredLogos, {
                    y: 28,
                    opacity: 0,
                    scale: 0.88,
                    duration: 0.5,
                    stagger: 0.07,
                    delay: 0.35,
                    ease: "back.out(1.4)",
                });
            }

            const scrollReveal = (
                selector: string,
                opts: { y?: number; scale?: number; start?: string } = {},
            ) => {
                const { y = 56, scale = 0.94, start = "top 86%" } = opts;
                const nodes = gsap.utils.toArray<HTMLElement>(
                    root.querySelectorAll(selector),
                );
                nodes.forEach((el) => {
                    gsap.from(el, {
                        y,
                        opacity: 0,
                        scale,
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start,
                            toggleActions: "play none none none",
                        },
                    });
                });
            };

            scrollReveal("[data-anim='section-intro']", { y: 40, scale: 0.98 });

            const featureGrid = root.querySelector("[data-anim='feature-grid']");
            if (featureGrid?.children.length) {
                gsap.from(featureGrid.children, {
                    y: 72,
                    opacity: 0,
                    scale: 0.9,
                    rotateZ: -2,
                    duration: 0.78,
                    stagger: 0.09,
                    ease: "back.out(1.25)",
                    scrollTrigger: {
                        trigger: featureGrid,
                        start: "top 84%",
                        toggleActions: "play none none none",
                    },
                });
            }

            const contentBlocks = gsap.utils.toArray<HTMLElement>(
                root.querySelectorAll("[data-anim='content-block']"),
            );
            contentBlocks.forEach((block, i) => {
                gsap.from(block, {
                    y: 64,
                    opacity: 0,
                    scale: 0.97,
                    duration: 0.95,
                    delay: i * 0.04,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: block,
                        start: "top 88%",
                        toggleActions: "play none none none",
                    },
                });
            });

            const membershipTitle = root.querySelector("[data-anim='membership-title']");
            if (membershipTitle) {
                gsap.from(membershipTitle, {
                    y: 36,
                    opacity: 0,
                    scale: 0.96,
                    duration: 0.8,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: membershipTitle,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                });
            }

            const membershipRule = root.querySelector("[data-anim='membership-rule']");
            if (membershipRule) {
                gsap.from(membershipRule, {
                    scaleX: 0,
                    opacity: 0,
                    duration: 0.65,
                    ease: "power2.out",
                    transformOrigin: "left center",
                    scrollTrigger: {
                        trigger: membershipRule,
                        start: "top 92%",
                        toggleActions: "play none none none",
                    },
                });
            }

            const membershipGrid = root.querySelector("[data-anim='membership-grid']");
            if (membershipGrid?.children.length) {
                gsap.from(membershipGrid.children, {
                    y: 80,
                    opacity: 0,
                    scale: 0.92,
                    duration: 0.85,
                    stagger: 0.14,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: membershipGrid,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }

            const backTop = root.querySelector("[data-anim='back-top']");
            if (backTop) {
                gsap.from(backTop, {
                    y: 24,
                    opacity: 0,
                    duration: 0.55,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: backTop,
                        start: "top 95%",
                        toggleActions: "play none none none",
                    },
                });
            }

            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });
        }, root);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <div ref={rootRef} className="contents">
            {children}
        </div>
    );
}
