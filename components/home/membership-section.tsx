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
            className={`rounded-xl p-8 ${highlight ? "bg-[#323443]" : "bg-[#232532]"}`}
        >
            <h3 className="text-3xl font-semibold text-white">{title}</h3>
            <p className="mt-6 text-base leading-8 tracking-[0.02em] text-[#efede8a6]">
                {description}
            </p>
            <ul className="mt-6 space-y-2 text-base leading-8 tracking-[0.02em] text-[#efede8a6]">
                {items.map((item) => (
                    <li key={item}>• {item}</li>
                ))}
            </ul>
            <button
                className={`mt-8 rounded-[0.625rem] px-6 py-3 font-['Poppins'] text-base font-semibold ${highlight ? "bg-[#0070C9] text-white" : "bg-transparent text-[#0070C9]"}`}
            >
                {actionText}
                
            </button>
        </article>
    );
}

export function MembershipSection() {
    return (
        <section className="pb-20">
            <h2 className="text-4xl mb-5 font-medium leading-[1.3] tracking-[0.016em] text-white md:text-[3.125rem]">
                Membership
            </h2>
            <span className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="1312" height="1" viewBox="0 0 1312 1" fill="none">
            <path opacity="0.4" d="M0 0.25H1312" stroke="white" stroke-width="0.5"/>
            </svg>
            </span>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
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
            <div className="mt-8 flex justify-end">
                <a
                    href="#top"
                    className="rounded-lg bg-[#FAFAF9] px-5 py-2 font-['Poppins'] text-base font-semibold text-[#303030]"
                >
                    Back to Top
                </a>
            </div>
        </section>
    );
}
