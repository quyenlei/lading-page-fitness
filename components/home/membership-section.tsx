const freeItems = [
    "~600 Full-Length Workout Videos",
    "Customizable Calendar",
    "Healthy Recipes",
    "Health and Fitness Articles",
    "Positive and Supportive Online Community",
    "No Credit Card Needed",
];

const plusItems = [
    "Ads-Free Website and Videos",
    "Surprise Me Workout Selection Tool",
    "Statistics for Your Activities",
    "Enter and Track Custom Workouts",
    "Exclusive Workouts and Challenges",
    "Video Tags and Routines",
    "Progress Trackers",
];

function MembershipCard({
    title,
    description,
    items,
    actionText,
    highlight,
}: {
    title: string;
    description: string;
    items: string[];
    actionText: string;
    highlight?: boolean;
}) {
    return (
        <article
            className={`rounded-xl p-5 sm:p-6 md:p-8 ${highlight ? "bg-[#323443]" : "bg-[#232532]"}`}
        >
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h3>
            <p className="mt-4 text-sm leading-7 tracking-[0.02em] text-[#efede8a6] sm:mt-5 sm:text-base sm:leading-8">
                {description}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 tracking-[0.02em] text-[#efede8a6] sm:mt-6 sm:text-base sm:leading-8">
                {items.map((item) => (
                    <li key={item}>• {item}</li>
                ))}
            </ul>
            <button
                type="button"
                className={`mt-6 w-full min-h-11 rounded-[0.625rem] px-6 py-3 font-['Poppins'] text-base font-semibold sm:mt-8 sm:w-auto ${highlight ? "bg-[#0070C9] text-white" : "bg-transparent text-[#0070C9]"}`}
            >
                {actionText}
            </button>
        </article>
    );
}

export function MembershipSection() {
    return (
        <section className="pb-12 sm:pb-16 md:pb-20 px-4 lg:px-0">
            <h2 className="mb-4 text-2xl font-medium leading-[1.3] tracking-[0.016em] text-white sm:mb-5 sm:text-3xl md:text-[3.125rem]">
                Membership
            </h2>
            <div className="h-px w-full bg-white/40" aria-hidden />
            <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-2">
                <MembershipCard
                    title="Join for Free"
                    description="Reach your fitness goals or maintain your healthy lifestyle with professional training and support from a positive and active online community."
                    items={freeItems}
                    actionText="See More"
                />
                <MembershipCard
                    title="WO Plus"
                    description="WO Plus includes everything you get with a free membership and adds brand new convenience features, fitness tools, and unique content."
                    items={plusItems}
                    actionText="Join Club Now!"
                    highlight
                />
            </div>
            <div className="mt-6 flex sm:mt-8 sm:justify-end">
                <a
                    href="#top"
                    className="inline-flex min-h-11 w-full items-center justify-center bg-[#FAFAF9] px-5 py-2 font-['Poppins'] text-base font-semibold text-[#303030] sm:w-auto"
                >
                    Back to Top
                </a>
            </div>
        </section>
    );
}
