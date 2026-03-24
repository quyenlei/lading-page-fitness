import { ContentSections } from "./content-sections";
import { HeroSection } from "./hero-section";
import { LandingAnimationsRoot } from "./landing-animations-root";
import { MembershipSection } from "./membership-section";

export function HomePage() {
    return (
        <LandingAnimationsRoot>
            <HeroSection />
            <ContentSections />
            <MembershipSection />
        </LandingAnimationsRoot>
    );
}
