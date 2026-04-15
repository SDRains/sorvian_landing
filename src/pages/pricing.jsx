"use client";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import PageHead from "./components/PageHead";
import PricingHero from "./components/pricing/PricingHero";
import PricingTiers from "./components/pricing/PricingTiers";
import CloudDeepDive from "./components/pricing/CloudDeepDive";
import CustomEnterpriseSection from "./components/pricing/CustomEnterpriseSection";

export default function PricingPage() {
    return (
        <main className="bg-zinc-950">
            <PageHead
                name="Pricing"
                description="Three deployment tiers — Cloud, Standard, and Fortress — all running the same software, pipeline, and security principles. Start on Cloud for the fastest path to production, scale to on-premise when policy demands."
                path="/pricing"
            />
            <Navigation />
            <PricingHero />
            <PricingTiers />
            <CloudDeepDive />
            <CustomEnterpriseSection />
            <Footer />
        </main>
    );
}
