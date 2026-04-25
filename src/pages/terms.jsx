"use client";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import PageHead from "./components/PageHead";
import TermsHero from "./components/terms/TermsHero";
import TermsContent from "./components/terms/TermsContent";

const EFFECTIVE_DATE = "April 25, 2026";

export default function TermsPage() {
    return (
        <main className="bg-white">
            <PageHead
                name="Terms of Service"
                description="The rules that govern your use of the Sorvian AI marketing site at sorvian.ai. Includes important provisions about arbitration and your legal rights."
                path="/terms"
            />
            <Navigation />
            <TermsHero effectiveDate={EFFECTIVE_DATE} />
            <TermsContent />
            <Footer />
        </main>
    );
}
