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
        <article className={`rounded-xl flex items-end justify-between p-8 ${bg}`}>
            <div className="">
                <h3 className="text-base font-semibold tracking-[0.03em] text-white">
                    {title}
                </h3>
                <p className="mt-3 text-sm leading-6 tracking-[0.02em] text-[#efede8a6]">
                    {text}
                </p>
            </div>
            <span> 
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
                <path d="M1 10.548L23.0588 10.548" stroke="#FAFAF9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.3383 0.900018L24.217 10.6267L14.3383 20.3535" stroke="#FAFAF9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </span>
        </article>
    );
}

export function ContentSections() {
    return (
        <>
            <section className="py-40">
                <h2 className="text-3xl font-semibold leading-tight text-white md:text-[2.5rem]">
                    Not sure where to start?
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 tracking-[0.03em] text-[#efede8a6]">
                    Programs offer day-to-day guidance on an interactive
                    calendar to keep you on track.
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {featureCards.map((card) => (
                        <FeatureCard key={card.title} {...card} />
                    ))}
                </div>
            </section>

            <section className="space-y-16 pb-40 flex flex-col gap-14">
                <article className="grid gap-20 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                    <div>
                        <h3 className="text-3xl font-semibold text-white">
                            Work out at home for free.
                        </h3>
                        <p className="mt-5 text-sm leading-7 tracking-[0.02em] text-[#efede8a6]">
                            We believe fitness should be accessible to everyone,
                            everywhere, regardless of income or access to a gym.
                            With hundreds of professional workouts, healthy
                            recipes and informative articles, as well as one of
                            the most positive communities on the web, you will
                            have everything you need to reach your goals.
                        </p>
                        <Link href="/" className="mt-6 inline-flex items-center gap-2">
                            <span className="text-sm font-semibold leading-6 tracking-[0.02em] text-[#0070C9]">See More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
                            <path d="M1 10.548L23.0588 10.548" stroke="#FAFAF9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.3383 0.900018L24.217 10.6267L14.3383 20.3535" stroke="#FAFAF9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                    <div className="overflow-hidden bg-[#303030]">
                        <Image
                            src="/images/section-home-workout.png"
                            alt="Work out at home"
                            width={640}
                            height={540}
                            unoptimized
                            className="w-full object-cover"
                        />
                    </div>
                </article>

                <article className="grid gap-20 lg:grid-cols-[1fr_1.3fr] lg:items-center">
                <div className="order-1 overflow-hidden bg-[#303030] lg:order-1">
                        <Image
                            src="/images/section-training.png"
                            alt="Training at gym"
                            width={560}
                            height={510}
                            unoptimized
                            className="object-cover"
                        />
                    </div>
                    <div className="order-2 lg:order-2">
                        <h3 className="text-3xl font-semibold text-white md:text-[3rem] md:leading-[1.2]">
                            Get more with low-cost training programs and
                            advanced features.
                        </h3>
                        <p className="mt-5 text-sm leading-7 tracking-[0.02em] text-[#efede8a6]">
                            Unlock deeper coaching, smarter tools and richer
                            content while keeping your training routine simple
                            and effective.
                        </p>
                        <Link href="/" className="mt-6 inline-flex items-center gap-2">
                            <span className="text-sm font-semibold leading-6 tracking-[0.02em] text-[#0070C9]">See More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
                            <path d="M1 10.548L23.0588 10.548" stroke="#FAFAF9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.3383 0.900018L24.217 10.6267L14.3383 20.3535" stroke="#FAFAF9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                </article>
            </section>
        </>
    );
}
