/** In-page anchors — ids must exist on the landing sections. */
export type HeaderNavItem = {
    label: string;
    /** DOM id without # */
    sectionId: string;
};

export const HEADER_NAV_ITEMS: HeaderNavItem[] = [
    { label: "Workout", sectionId: "workout" },
    { label: "Workouts", sectionId: "workouts" },
    { label: "Programs", sectionId: "programs" },
    { label: "Healthy Living", sectionId: "healthy-living" },
    { label: "Community", sectionId: "membership" },
    { label: "About", sectionId: "about-section" },
    { label: "Store", sectionId: "membership" },
];
