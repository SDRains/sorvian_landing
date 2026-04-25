"use client";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import PageHead from "./components/PageHead";
import PrivacyHero from "./components/privacy/PrivacyHero";
import PrivacyContent from "./components/privacy/PrivacyContent";

const EFFECTIVE_DATE = "April 25, 2026";

export default function PrivacyPage() {
    return (
        <main className="bg-white">
            <PageHead
                name="Privacy Policy"
                description="How Sorvian AI, LLC collects, uses, and protects personal information on the sorvian.ai marketing website."
                path="/privacy"
            />
            <Navigation />
            <PrivacyHero effectiveDate={EFFECTIVE_DATE} />
            <PrivacyContent />
            <Footer />
        </main>
    );
}
