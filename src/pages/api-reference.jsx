"use client";

import {
    Code2,
    Terminal,
    KeyRound,
    Webhook,
    Package,
    AlertTriangle,
    Gauge,
} from "lucide-react";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import PageHead from "./components/PageHead";
import ComingSoon from "./components/ComingSoon";

export default function ApiReferencePage() {
    return (
        <main className="bg-zinc-950">
            <PageHead
                name="API Reference"
                description="Full REST API reference for building on top of the Sorvian platform. Coming soon — get notified when the public API launches."
                path="/api-reference"
            />
            <Navigation />
            <ComingSoon
                icon={Code2}
                eyebrow="API Reference"
                title="A public API"
                subtitle="is coming."
                description="The Sorvian API will give you programmatic access to every core capability — ingestion, retrieval, role-scoped queries, and the security layer — with SDKs in the languages your team actually uses."
                timeline="Planned for early access in the coming months"
                accent="indigo"
                features={[
                    {
                        icon: Terminal,
                        title: "Full REST endpoint reference",
                        description:
                            "Every resource documented with request/response schemas, example payloads, and interactive try-it consoles.",
                    },
                    {
                        icon: KeyRound,
                        title: "Authentication &amp; API keys",
                        description:
                            "Issuing, rotating, and scoping API keys, plus SSO-based machine identity for enterprise tenants.",
                    },
                    {
                        icon: Package,
                        title: "First-party SDKs",
                        description:
                            "Official clients in Python, TypeScript, and Go — with typed surfaces for every endpoint.",
                    },
                    {
                        icon: Webhook,
                        title: "Webhooks &amp; events",
                        description:
                            "Subscribe to ingestion, classification, and audit events — with signature verification and replay support.",
                    },
                    {
                        icon: Gauge,
                        title: "Rate limits &amp; quotas",
                        description:
                            "Transparent limits per tenant and endpoint, with upgrade paths for enterprise throughput.",
                    },
                    {
                        icon: AlertTriangle,
                        title: "Error handling guide",
                        description:
                            "Canonical error codes, retry strategies, and patterns for handling transient versus permanent failures.",
                    },
                ]}
                meantime={[
                    {
                        href: "/product",
                        label: "Product overview",
                        description: "What the pipeline does today",
                    },
                    {
                        href: "/contact",
                        label: "Early-access interest",
                        description: "Talk to the team about API access",
                    },
                ]}
            />
            <Footer />
        </main>
    );
}
