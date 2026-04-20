"use client";

import {
    Cloud,
    Server,
    Lock,
    Check,
    ArrowRight,
    Sparkles,
} from "lucide-react";

const tiers = [
    {
        name: "Cloud",
        icon: Cloud,
        price: "$",
        priceLabel: "Starting tier",
        tagline: "Fully managed on AWS",
        subtitle: "For teams that want enterprise-grade AI without managing infrastructure.",
        idealFor: "Most organizations, most teams, fastest path to production.",
        benefits: [
            "Hosted on hardened AWS infrastructure",
            "Isolated tenant environment per organization",
            "Zero hardware, zero DevOps setup",
            "Encryption in transit and at rest",
            "We never store your raw documents — only derived artifacts",
            "Same distillation pipeline, fully managed",
        ],
        cta: "Talk to Sales",
        ctaSecondary: "Book a Demo",
        highlighted: true,
        accent: "emerald",
    },
    {
        name: "Standard",
        icon: Server,
        price: "$$$",
        priceLabel: "Hybrid",
        tagline: "On-premise parsing, VPC-integrated",
        subtitle: "For IT-managed environments that want data boundaries to stay on-prem.",
        idealFor: "Regulated industries, VPC-aligned teams, hybrid security postures.",
        benefits: [
            "Runs on your hardware — workstation to server rack",
            "VPC-integrated pipeline",
            "Hybrid: local parsing + frontier reasoning",
            "Reduced token costs on large workloads",
            "Full infrastructure control for your IT team",
            "Same security principles, scaled to your walls",
        ],
        cta: "Contact Sales",
        highlighted: false,
        accent: "zinc",
    },
    {
        name: "Fortress",
        icon: Lock,
        price: "$$$$",
        priceLabel: "Maximum security",
        tagline: "Fully local, air-gap capable",
        subtitle: "For sovereign, classified, or highest-compliance environments.",
        idealFor: "Government, defense, regulated finance, air-gapped deployments.",
        benefits: [
            "Sorvian deployed entirely on your infrastructure",
            "Large models run internally — no external API calls",
            "Air-gap capable, sovereign-ready",
            "Updates delivered via secure install wizard",
            "Zero visibility into Sorvian from the outside",
            "Your logs, your storage, your access controls",
        ],
        cta: "Contact Sales",
        highlighted: false,
        accent: "zinc",
    },
];

const accentStyles = {
    emerald: {
        card: "bg-gradient-to-br from-emerald-500/15 via-zinc-900 to-zinc-950 border-emerald-500/40 hover:border-emerald-500/60",
        iconBg: "bg-emerald-500 shadow-lg shadow-emerald-500/30",
        iconColor: "text-zinc-950",
        name: "text-white",
        price: "text-emerald-400",
        tagline: "text-emerald-400",
        subtitle: "text-zinc-300",
        idealLabel: "text-emerald-400",
        idealText: "text-zinc-300",
        check: "text-emerald-400",
        benefit: "text-zinc-200",
        divider: "border-emerald-500/20",
        primaryBtn:
            "bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/30",
        secondaryBtn:
            "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 text-white hover:bg-zinc-700",
    },
    zinc: {
        card: "bg-zinc-900/60 border-zinc-800 hover:border-zinc-700",
        iconBg: "bg-zinc-800 border border-zinc-700",
        iconColor: "text-zinc-300",
        name: "text-white",
        price: "text-zinc-400",
        tagline: "text-zinc-400",
        subtitle: "text-zinc-400",
        idealLabel: "text-zinc-400",
        idealText: "text-zinc-400",
        check: "text-zinc-400",
        benefit: "text-zinc-300",
        divider: "border-zinc-800",
        primaryBtn:
            "bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-700",
    },
};

function PricingTiers() {
    return (
        <section id="plans" className="relative py-28 bg-zinc-950 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-300 font-medium">
                            Choose Your Tier
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        Pick Your Deployment.
                        <br />
                        <span className="text-zinc-500">Keep the Same Guarantees.</span>
                    </h2>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                        Not sure where to start? Most teams begin on <strong className="text-white">Cloud</strong> — it&apos;s the
                        fastest path with no hardware required — and move to Standard or
                        Fortress only when policy demands it.
                    </p>
                </div>

                {/* Pricing notice banner */}
                <div className="max-w-3xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-3 bg-zinc-900/60 border border-zinc-800 rounded-full px-4 py-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <p className="text-sm text-zinc-400">
                            <span className="text-white font-medium">
                                Pricing is tailored per organization.
                            </span>{" "}
                            Book a call to scope your environment and get a quote.
                        </p>
                    </div>
                </div>

                {/* Tiers */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {tiers.map((tier, i) => {
                        const a = accentStyles[tier.accent];
                        return (
                            <div
                                key={i}
                                className={`relative rounded-3xl border ${a.card} transition-all duration-300 overflow-hidden ${
                                    tier.highlighted ? "md:-translate-y-4 md:scale-[1.02]" : ""
                                }`}
                            >
                                {tier.highlighted && (
                                    <>
                                        <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-b-full" />

                                        {/* Recommended pill */}
                                        <div className="absolute top-3 right-8 bg-emerald-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                                            Recommended
                                        </div>
                                    </>
                                )}

                                <div className="p-8 md:p-9">
                                    {/* Icon */}
                                    <div
                                        className={`w-14 h-14 rounded-2xl ${a.iconBg} flex items-center justify-center mb-6`}
                                    >
                                        <tier.icon className={`w-7 h-7 ${a.iconColor}`} />
                                    </div>

                                    {/* Name + Price */}
                                    <div className="flex items-baseline gap-3 mb-1">
                                        <h3 className={`text-3xl font-bold ${a.name}`}>
                                            {tier.name}
                                        </h3>
                                        <span className={`text-lg font-semibold ${a.price}`}>
                                            {tier.price}
                                        </span>
                                    </div>
                                    <p className={`text-xs font-semibold tracking-widest uppercase ${a.tagline} mb-4`}>
                                        {tier.tagline}
                                    </p>

                                    <p className={`${a.subtitle} leading-relaxed mb-6`}>
                                        {tier.subtitle}
                                    </p>

                                    {/* Ideal for */}
                                    <div className={`border-t ${a.divider} pt-5 mb-6`}>
                                        <p className={`text-[10px] font-semibold tracking-widest uppercase ${a.idealLabel} mb-2`}>
                                            Ideal For
                                        </p>
                                        <p className={`text-sm ${a.idealText} leading-relaxed`}>
                                            {tier.idealFor}
                                        </p>
                                    </div>

                                    {/* Benefits */}
                                    <ul className="space-y-3 mb-8">
                                        {tier.benefits.map((b, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <Check
                                                    className={`w-5 h-5 ${a.check} flex-shrink-0 mt-0.5`}
                                                    strokeWidth={2.5}
                                                />
                                                <span className={`text-sm ${a.benefit} leading-relaxed`}>
                                                    {b}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTAs */}
                                    <div className="space-y-2">
                                        <button
                                            className={`cursor-pointer w-full py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2 group ${a.primaryBtn}`}
                                        >
                                            {tier.cta}
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        {tier.ctaSecondary && (
                                            <button
                                                className={`cursor-pointer w-full py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2 ${a.secondaryBtn}`}
                                            >
                                                {tier.ctaSecondary}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Common to all note */}
                <div className="mt-12 max-w-4xl mx-auto text-center">
                    <p className="text-sm text-zinc-500 leading-relaxed">
                        All tiers include: the full distillation pipeline, role-based access
                        control, SSO (Microsoft · Google · Okta), every current integration,
                        and the same six security principles.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default PricingTiers;
