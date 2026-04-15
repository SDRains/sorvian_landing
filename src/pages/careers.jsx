"use client";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import PageHead from "./components/PageHead";
import CareersHero from "./components/careers/CareersHero";
import LifeAtSorvian from "./components/careers/LifeAtSorvian";
import OpenPositionsSection from "./components/careers/OpenPositionsSection";

export default function CareersPage() {
    return (
        <main className="bg-zinc-950">
            <PageHead
                name="Careers"
                description="Help build the security and data layer every enterprise AI workflow needs. Remote-first roles across backend engineering, AI/ML, and customer-facing consulting."
                path="/careers"
            />
            <Navigation />
            <CareersHero />
            <LifeAtSorvian />
            <OpenPositionsSection />
            <Footer />
        </main>
    );
}
