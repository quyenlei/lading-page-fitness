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
    return (
        <header className="py-12 mx-auto max-w-328">
            <nav className="flex flex-wrap items-center justify-between gap-4">
                <a className="text-xl font-bold tracking-[0.02em] text-white">
                    {brand}
                </a>
                <ul className="flex flex-wrap items-center gap-5">
                    {navItems.map((item, index) => (
                        <li
                            key={item}
                            className={
                                index === 0
                                    ? "text-base font-bold text-white"
                                    : "text-xs uppercase tracking-[0.04em] text-[#efede8a6]"
                            }
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
