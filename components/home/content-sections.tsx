import Image from "next/image";
import Link from "next/link";

const featureCards = [
    {
        title: "Workout Videos",
        text: "Access to hundreds of free, full-length workout videos.",
        bg: "bg-[#323443]",
    },
    {
        title: "Workout Programs",
        text: "Affordable and effective workout programs.",
        bg: "bg-[#232532]",
    },
    {
        title: "Meal Plans",
        text: "Plans built with registered dietitians and nutritionists.",
        bg: "bg-[#323443]",
    },
    {
        title: "WO Plus All Access",
        text: "Add powerful features to your membership.",
        bg: "bg-[#4F5261]",
    },
];

function ArrowIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none" aria-hidden>
            <path
                d="M1 10.548L23.0588 10.548"
                stroke="#FAFAF9"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.3383 0.900018L24.217 10.6267L14.3383 20.3535"
                stroke="#FAFAF9"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function FeatureCard({
    title,
    text,
    bg,
}: {
    title: string;
    text: string;
    bg: string;
}) {
    return (
        <article
            className={`flex flex-col gap-4 rounded-xl p-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:p-6 md:p-8 ${bg}`}
        >
            <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold tracking-[0.03em] text-white">
                    {title}
                </h3>
                <p className="mt-2 text-sm leading-6 tracking-[0.02em] text-[#efede8a6] sm:mt-3">
                    {text}
                </p>
            </div>
            <span className="shrink-0 self-end sm:self-auto">
                <ArrowIcon />
            </span>
        </article>
    );
}

export function ContentSections() {
    return (
        <>
            <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 lg:px-0">
                <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-[2.5rem]">
                    Not sure where to start?
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 tracking-[0.03em] text-[#efede8a6] sm:mt-4 sm:text-base">
                    Programs offer day-to-day guidance on an interactive
                    calendar to keep you on track.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:gap-6 xl:grid-cols-4">
                    {featureCards.map((card) => (
                        <FeatureCard key={card.title} {...card} />
                    ))}
                </div>
            </section>

            <section className="flex flex-col px-4 lg:px-0 gap-10 pb-16 sm:gap-12 sm:pb-24 md:gap-14 md:pb-32 lg:gap-16 lg:pb-40">
                <article className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
                    <div className="min-w-0">
                        <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                            Work out at home for free.
                        </h3>
                        <p className="mt-4 text-sm leading-7 tracking-[0.02em] text-[#efede8a6] sm:mt-5">
                            We believe fitness should be accessible to everyone,
                            everywhere, regardless of income or access to a gym.
                            With hundreds of professional workouts, healthy
                            recipes and informative articles, as well as one of
                            the most positive communities on the web, you will
                            have everything you need to reach your goals.
                        </p>
                        <Link
                            href="/"
                            className="mt-5 inline-flex min-h-11 items-center gap-2 sm:mt-6"
                        >
                            <span className="text-sm font-semibold leading-6 tracking-[0.02em] text-[#0070C9]">
                                See More
                            </span>
                            <ArrowIcon />
                        </Link>
                    </div>
                    <div className="overflow-hidden bg-[#303030]">
                        <Image
                            src="/images/section-home-workout.png"
                            alt="Work out at home"
                            width={640}
                            height={540}
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            unoptimized
                            className="h-auto w-full max-h-[min(20rem,55vh)] object-cover sm:max-h-[min(24rem,60vh)] lg:max-h-none"
                        />
                    </div>
                </article>

                <article className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-20">
                    <div className="order-1 overflow-hidden bg-[#303030] lg:order-1">
                        <Image
                            src="/images/section-training.png"
                            alt="Training at gym"
                            width={560}
                            height={510}
                            sizes="(min-width: 1024px) 45vw, 100vw"
                            unoptimized
                            className="h-auto w-full max-h-[min(20rem,55vh)] object-cover sm:max-h-[min(24rem,60vh)] lg:max-h-none"
                        />
                    </div>
                    <div className="order-2 min-w-0 lg:order-2">
                        <h3 className="text-2xl font-semibold text-white sm:text-3xl md:text-[3rem] md:leading-[1.2]">
                            Get more with low-cost training programs and
                            advanced features.
                        </h3>
                        <p className="mt-4 text-sm leading-7 tracking-[0.02em] text-[#efede8a6] sm:mt-5">
                            Unlock deeper coaching, smarter tools and richer
                            content while keeping your training routine simple
                            and effective.
                        </p>
                        <Link
                            href="/"
                            className="mt-5 inline-flex min-h-11 items-center gap-2 sm:mt-6"
                        >
                            <span className="text-sm font-semibold leading-6 tracking-[0.02em] text-[#0070C9]">
                                See More
                            </span>
                            <ArrowIcon />
                        </Link>
                    </div>
                </article>
            </section>
        </>
    );
}
