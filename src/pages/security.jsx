"use client";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import SecurityHero from "./components/security/SecurityHero";
import PrinciplesSection from "./components/security/PrinciplesSection";
import TrustBoundarySection from "./components/security/TrustBoundarySection";
import AccessControlSection from "./components/security/AccessControlSection";
import DeploymentSecuritySection from "./components/security/DeploymentSecuritySection";

export default function SecurityPage() {
    return (
        <main className="bg-zinc-950">
            <Navigation />
            <SecurityHero />
            <PrinciplesSection />
            <TrustBoundarySection />
            <AccessControlSection />
            <DeploymentSecuritySection />
            <Footer />
        </main>
    );
}
