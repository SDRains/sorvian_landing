"use client";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import PricingHero from "./components/pricing/PricingHero";
import PricingTiers from "./components/pricing/PricingTiers";
import CloudDeepDive from "./components/pricing/CloudDeepDive";
import CustomEnterpriseSection from "./components/pricing/CustomEnterpriseSection";

export default function PricingPage() {
    return (
        <main className="bg-zinc-950">
            <Navigation />
            <PricingHero />
            <PricingTiers />
            <CloudDeepDive />
            <CustomEnterpriseSection />
            <Footer />
        </main>
    );
}
