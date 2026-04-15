"use client";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import PageHead from "./components/PageHead";
import SecurityHero from "./components/security/SecurityHero";
import PrinciplesSection from "./components/security/PrinciplesSection";
import TrustBoundarySection from "./components/security/TrustBoundarySection";
import AccessControlSection from "./components/security/AccessControlSection";
import DeploymentSecuritySection from "./components/security/DeploymentSecuritySection";

export default function SecurityPage() {
    return (
        <main className="bg-zinc-950">
            <PageHead
                name="Security"
                description="Zero-trust security architecture for enterprise AI. Six non-negotiable principles, a fully enforced trust boundary, role-scoped access, and deployment options from fully-managed AWS Cloud to on-premise air-gap."
                path="/security"
            />
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
