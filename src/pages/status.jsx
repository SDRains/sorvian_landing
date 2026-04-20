"use client";

import {
    Activity,
    Gauge,
    Clock,
    FileText,
    Calendar,
    Bell,
    CheckCircle2,
} from "lucide-react";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import PageHead from "./components/PageHead";
import ComingSoon from "./components/ComingSoon";

export default function StatusPage() {
    return (
        <main className="bg-zinc-950">
            <PageHead
                name="System Status"
                description="Real-time uptime and incident transparency for Sorvian Cloud. A public status page is launching soon."
                path="/status"
            />
            <Navigation />
            <ComingSoon
                icon={Activity}
                eyebrow="System Status"
                title="A public status"
                subtitle="page is on deck."
                description="We believe transparency is part of security. A real-time status page for Sorvian Cloud is being built — with per-service uptime, incident history, and subscription-based notifications."
                timeline="Shipping alongside Cloud general availability"
                accent="emerald"
                features={[
                    {
                        icon: Gauge,
                        title: "Real-time service health",
                        description:
                            "Per-service status for ingestion, retrieval, the security layer, and each integration — updated automatically.",
                    },
                    {
                        icon: Clock,
                        title: "Historical uptime",
                        description:
                            "Rolling 30, 90, and 365-day uptime numbers per service, so you can verify our operational track record.",
                    },
                    {
                        icon: FileText,
                        title: "Incident reports &amp; post-mortems",
                        description:
                            "When something breaks, we'll write it up — what happened, what we did, what we changed, and on what timeline.",
                    },
                    {
                        icon: Calendar,
                        title: "Scheduled maintenance",
                        description:
                            "Advance notice of any planned maintenance windows, with affected services and expected durations clearly called out.",
                    },
                    {
                        icon: Bell,
                        title: "Subscribe to updates",
                        description:
                            "Email, SMS, webhook, and RSS subscriptions — so your on-call knows before your users do.",
                    },
                    {
                        icon: CheckCircle2,
                        title: "Public transparency",
                        description:
                            "The same status dashboard we use internally, made available to every customer and prospect — without paywalls.",
                    },
                ]}
                meantime={[
                    {
                        href: "mailto:status@sorvian.ai",
                        label: "Questions about uptime",
                        description: "status@sorvian.ai",
                    },
                    {
                        href: "/security",
                        label: "Security architecture",
                        description: "How we protect what's running",
                    },
                ]}
            />
            <Footer />
        </main>
    );
}
