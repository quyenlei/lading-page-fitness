import Image from "next/image";
import { FeaturedInSection } from "./featured-in-section";

export function HeroSection() {
    return (
        <section className="relative px-4 lg:px-0 grid grid-cols-1 gap-10 pb-12 pt-6 sm:gap-12 sm:pb-16 sm:pt-8 md:gap-14 lg:min-h-185.25 lg:grid-cols-[1fr_25.5625rem] lg:items-start lg:gap-0 lg:pb-20 lg:pt-10">
            <div className="flex w-full max-w-220 flex-col gap-10 sm:gap-14 md:gap-20 lg:gap-40">
                <div>
                    <h1 className="text-[2.5rem] font-extrabold uppercase leading-[0.98] tracking-[-0.012em] text-[#FAFAF9] sm:text-[3.25rem] md:text-[3.5rem] lg:text-[10.75rem]">
                        workout
                        <br />
                        with me
                    </h1>
                    <p className="mt-5 max-w-140 text-sm leading-6 tracking-[0.03125em] text-[#efede8a6] sm:mt-6 sm:text-base md:mt-8">
                        A huge selection of health and fitness content, healthy
                        recipes and transformation stories to help you get fit and
                        stay fit.
                    </p>
                    <button
                        type="button"
                        className="mt-8 w-full rounded-[0.625rem] bg-[#E6533C] px-6 py-4 text-base font-semibold leading-[1.222] tracking-[0.0555em] text-white transition hover:opacity-90 sm:mt-10 sm:w-auto sm:px-6.25 sm:py-6 sm:text-[1.125rem] md:mt-12"
                    >
                        Join Club Now!
                    </button>
                </div>
                <FeaturedInSection />
            </div>

            <div className="relative mx-auto mt-2 w-full max-w-102.25 lg:mt-0 lg:-ml-40">
                <div className="overflow-hidden rounded-xl pt-8 sm:pt-12 lg:pt-16">
                    <Image
                        src="/images/hero-main-669d30.png"
                        alt="Fitness model"
                        width={409}
                        height={684}
                        sizes="(min-width: 1024px) 25rem, 100vw"
                        unoptimized
                        className="h-auto w-full max-h-[min(42rem,78vh)] object-cover object-top sm:max-h-[min(43rem,82vh)] lg:max-h-none lg:h-171"
                    />
                </div>

                <div className="absolute right-2 top-4 z-10 hidden h-24 w-45 rounded-xl bg-[#EF8964] sm:block sm:h-24 sm:w-40 md:right-3 md:top-8 md:h-27.5 md:w-45 lg:top-9 lg:-right-15">
                    <div className="flex h-full w-full flex-col gap-2 px-4 pt-3 sm:gap-3 sm:px-6.5 sm:pt-3.5">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#EFA082] sm:h-6 sm:w-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clipPath="url(#clip0_576_24495)">
                                    <path d="M14.8234 4.7254C14.6138 4.47501 14.2403 4.44209 13.9899 4.65089L12.349 6.02935L11.5943 4.15964C11.5675 4.08946 11.5267 4.03054 11.4799 3.97856C11.3257 3.63546 11.058 3.34088 10.6889 3.1702C10.5286 3.09742 10.3631 3.05843 10.1977 3.03937C10.1613 3.02031 10.1283 2.99518 10.0868 2.98219L7.19901 2.17729C7.03699 2.13311 6.87411 2.1617 6.74068 2.23967C6.58213 2.29339 6.4461 2.40862 6.38112 2.57584L5.29378 5.37175C5.17594 5.67586 5.3267 6.01896 5.63168 6.13852C5.93492 6.25635 6.27888 6.10473 6.39758 5.79975L7.31598 3.43879L8.63119 3.80441C8.59913 3.8564 8.56447 3.90491 8.53848 3.96036L6.85245 7.61488C6.82819 7.6686 6.81519 7.72318 6.79786 7.77863L4.7488 11.214L1.31955 12.3611C0.931399 12.6513 0.84909 13.198 1.13587 13.5862C1.42439 13.9752 1.97282 14.0575 2.36011 13.7707L5.86907 12.5621C5.97651 12.4841 6.05448 12.3819 6.1134 12.2718C6.15759 12.2251 6.20784 12.1878 6.24163 12.1297L7.46327 10.0816L9.63189 11.9296L7.31165 14.5444C6.99194 14.9049 7.024 15.4602 7.38616 15.7791C7.74745 16.1005 8.30108 16.0667 8.62252 15.7046L11.5181 12.4425C11.6082 12.342 11.6619 12.2259 11.6983 12.1046C11.7199 12.0388 11.7199 11.9703 11.7251 11.9019C11.7251 11.8672 11.7381 11.836 11.7355 11.804C11.7277 11.5648 11.6307 11.3327 11.4349 11.1672L9.43955 9.46554C9.58337 9.32864 9.70554 9.16576 9.79391 8.97428L11.0866 6.17491L11.5007 7.27785C11.5181 7.37575 11.551 7.47193 11.6203 7.5525C11.6827 7.62701 11.7624 7.6764 11.8473 7.71105C11.856 7.71539 11.8664 7.71625 11.8768 7.71885C11.9305 7.73791 11.9851 7.75611 12.0414 7.75871C12.1081 7.76477 12.1757 7.75611 12.2441 7.73705C12.2459 7.73618 12.2467 7.73618 12.2467 7.73618C12.2649 7.73185 12.2831 7.73531 12.3013 7.72752C12.3975 7.69113 12.4711 7.62961 12.5344 7.5577L14.8893 5.55889C15.1397 5.34835 15.034 4.9758 14.8234 4.7254Z" fill="white"/>
                                    <path d="M11.8446 3.30102C12.7562 3.30102 13.4951 2.56206 13.4951 1.65051C13.4951 0.738959 12.7562 0 11.8446 0C10.9331 0 10.1941 0.738959 10.1941 1.65051C10.1941 2.56206 10.9331 3.30102 11.8446 3.30102Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_576_24495">
                                        <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>

                        <div className="flex items-end gap-2">
                            <p className="text-4xl font-bold uppercase leading-[1.04] tracking-[-0.104em] text-[#FAFAF9] sm:text-5xl">
                                4,95
                            </p>
                            <p className="text-sm font-semibold leading-6 tracking-[0.03125em] text-[#efede8a6] sm:text-base">
                                km
                            </p>
                        </div>
                    </div>
                </div>

                <div className="absolute -left-2 bottom-28 z-10 hidden h-20 w-44 rounded-xl bg-[#303030] sm:-left-6 sm:bottom-36 sm:block sm:h-22 sm:w-48 md:-left-16 md:bottom-44 lg:-left-28 lg:bottom-52 lg:h-24 lg:w-51.5">
                    <div className="flex h-full items-center gap-2 px-4 sm:gap-3 sm:px-5.75">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EF8963] text-white sm:h-10 sm:w-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="h-8 w-8 sm:h-10 sm:w-10">
                                <circle cx="20" cy="20" r="20" fill="#EF8963"/>
                                <path d="M30 20L15 28.6603L15 11.3397L30 20Z" fill="#FAFAF9"/>
                            </svg>
                        </span>
                        <div>
                            <p className="text-xl font-semibold leading-none tracking-[0.0125em] text-[#FAFAF9] sm:text-2xl">
                                350+
                            </p>
                            <p className="mt-1 text-sm leading-5 tracking-[0.03125em] text-[#efede8a6] sm:mt-2 sm:text-base sm:leading-6">
                                Video tutorial
                            </p>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-20 right-2 z-10 hidden h-20 w-40 rounded-xl bg-[#7A29DC] px-4 py-3 sm:bottom-24 sm:right-3 sm:block sm:h-22 sm:w-44 sm:px-5 sm:py-4 md:bottom-28 lg:bottom-31 lg:-right-33 lg:h-24.5 lg:w-48.25 lg:py-4.25">
                    <p className="text-[2rem] font-semibold leading-none tracking-[0.025em] text-[#FAFAF9] sm:text-[2.25rem] lg:text-[2.5rem]">
                        500+
                    </p>
                    <p className="mt-1 text-xs leading-5 tracking-[0.0769em] text-[#efede8a6] sm:text-[0.8125rem] lg:mt-1.25">
                        Free Workout Videos
                    </p>
                </div>
            </div>
        </section>
    );
}
