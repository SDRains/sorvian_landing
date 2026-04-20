"use client";

import {
    BookOpen,
    Rocket,
    Plug,
    ShieldCheck,
    Sparkles,
    FileText,
    Wrench,
} from "lucide-react";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import PageHead from "./components/PageHead";
import ComingSoon from "./components/ComingSoon";

export default function DocumentationPage() {
    return (
        <main className="bg-zinc-950">
            <PageHead
                name="Documentation"
                description="Guides, tutorials, and reference material for the Sorvian platform. Coming soon — sign up to be notified when it's live."
                path="/documentation"
            />
            <Navigation />
            <ComingSoon
                icon={BookOpen}
                eyebrow="Documentation"
                title="The docs are"
                subtitle="on the way."
                description="We're writing end-to-end guides for every piece of the Sorvian platform — from the first connector to production rollout. The first set of docs will ship alongside general availability."
                timeline="Launching alongside general availability"
                accent="emerald"
                features={[
                    {
                        icon: Rocket,
                        title: "Getting started guides",
                        description:
                            "From signup to your first role-scoped query, including tenant setup and data source connection walkthroughs.",
                    },
                    {
                        icon: Plug,
                        title: "Integration walkthroughs",
                        description:
                            "Step-by-step setup for every connector — SharePoint, OneDrive, Drive, Teams, Slack, Jira, and more.",
                    },
                    {
                        icon: ShieldCheck,
                        title: "Security &amp; compliance guides",
                        description:
                            "Configuring role-based access control, audit logging, and tenant policies for regulated environments.",
                    },
                    {
                        icon: Wrench,
                        title: "Tool-by-tool guides",
                        description:
                            "Deep dives on Knowledge Base RAG, the Security Layer, and Document Analyzer — with real use-case recipes.",
                    },
                    {
                        icon: FileText,
                        title: "Best practices",
                        description:
                            "Sensitivity tagging strategies, connector hygiene, and patterns for large-scale document ingestion.",
                    },
                    {
                        icon: Sparkles,
                        title: "Release notes &amp; changelog",
                        description:
                            "Transparent, versioned history of what's changing in the pipeline and how it affects your deployment.",
                    },
                ]}
                meantime={[
                    {
                        href: "/product",
                        label: "Product overview",
                        description: "The platform in depth",
                    },
                    {
                        href: "/security",
                        label: "Security architecture",
                        description: "Six principles, end to end",
                    },
                ]}
            />
            <Footer />
        </main>
    );
}
