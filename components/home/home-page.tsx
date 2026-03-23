import { ContentSections } from "./content-sections";
import { HeroSection } from "./hero-section";
import { MembershipSection } from "./membership-section";

export function HomePage() {
    return (
        <>
            <HeroSection />
            <ContentSections />
            <MembershipSection />
        </>
    );
}
