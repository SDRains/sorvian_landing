"use client";

import {
    Calendar,
    MessageSquare,
    Building2,
    ShieldCheck,
    ArrowRight,
    Mail,
} from "lucide-react";

const methods = [
    {
        icon: Calendar,
        accent: "emerald",
        eyebrow: "Most Popular",
        title: "Book a Demo",
        description:
            "A 30-minute live walkthrough of the pipeline, the toolset, and a role-scoped query against a sample dataset.",
        email: "demo@sorvian.ai",
        cta: "Schedule a Demo",
        featured: true,
    },
    {
        icon: MessageSquare,
        accent: "indigo",
        eyebrow: "General Inquiries",
        title: "Talk to Sales",
        description:
            "Pricing, tier fit, procurement questions, or a first conversation about your environment.",
        email: "sales@sorvian.ai",
        cta: "Contact Sales",
    },
    {
        icon: Building2,
        accent: "amber",
        eyebrow: "Large Deployments",
        title: "Enterprise Team",
        description:
            "Multi-region rollouts, custom connectors, bespoke SLAs, and strategic pricing — direct to our enterprise team.",
        email: "enterprise@sorvian.ai",
        cta: "Talk to Enterprise",
    },
    {
        icon: ShieldCheck,
        accent: "cyan",
        eyebrow: "Security & Compliance",
        title: "Security Review",
        description:
            "For security, risk, and compliance teams — architecture documentation, questionnaires, and direct engineering time.",
        email: "security@sorvian.ai",
        cta: "Request Security Packet",
    },
];

const accents = {
    emerald: {
        iconBg: "from-emerald-500 to-teal-600 shadow-emerald-500/30",
        eyebrow: "text-emerald-600",
        hoverBorder: "hover:border-emerald-300",
        link: "text-emerald-600 hover:text-emerald-700",
        featuredCard:
            "bg-gradient-to-br from-emerald-500/10 via-white to-teal-50 border-emerald-200",
        featuredEyebrow: "text-emerald-600",
    },
    indigo: {
        iconBg: "from-indigo-500 to-purple-600 shadow-indigo-500/30",
        eyebrow: "text-indigo-600",
        hoverBorder: "hover:border-indigo-300",
        link: "text-indigo-600 hover:text-indigo-700",
    },
    amber: {
        iconBg: "from-amber-500 to-orange-600 shadow-amber-500/30",
        eyebrow: "text-amber-600",
        hoverBorder: "hover:border-amber-300",
        link: "text-amber-600 hover:text-amber-700",
    },
    cyan: {
        iconBg: "from-cyan-500 to-teal-500 shadow-cyan-500/30",
        eyebrow: "text-cyan-600",
        hoverBorder: "hover:border-cyan-300",
        link: "text-cyan-600 hover:text-cyan-700",
    },
};

function ContactMethods() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl opacity-80" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-60" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-14 max-w-3xl mx-auto">
                    <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3">
                        Ways to Reach Us
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">
                        Pick the right door.
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        Different conversations deserve different paths. Start where it
                        fits — we&apos;ll route you the rest of the way.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {methods.map((m, i) => {
                        const a = accents[m.accent];
                        const Icon = m.icon;
                        return (
                            <div
                                key={i}
                                className={`group relative rounded-3xl p-6 md:p-7 border transition-all duration-300 ${
                                    m.featured
                                        ? `${a.featuredCard} shadow-xl shadow-emerald-500/10`
                                        : `bg-zinc-50 border-zinc-200 ${a.hoverBorder} hover:bg-white hover:shadow-lg hover:shadow-zinc-900/5`
                                }`}
                            >
                                {m.featured && (
                                    <div className="absolute -top-3 left-6 bg-emerald-500 text-zinc-950 text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                                        Start Here
                                    </div>
                                )}
                                <div
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.iconBg} shadow-lg flex items-center justify-center mb-5`}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <p
                                    className={`text-[10px] font-semibold tracking-widest uppercase ${
                                        m.featured ? a.featuredEyebrow : a.eyebrow
                                    } mb-2`}
                                >
                                    {m.eyebrow}
                                </p>
                                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                                    {m.title}
                                </h3>
                                <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                                    {m.description}
                                </p>
                                <div className="space-y-2">
                                    <a
                                        href={`mailto:${m.email}`}
                                        className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors"
                                    >
                                        <Mail className="w-3.5 h-3.5" />
                                        <span className="font-mono">{m.email}</span>
                                    </a>
                                    <button
                                        className={`cursor-pointer flex items-center gap-1.5 text-sm font-medium ${a.link} transition-colors group/cta`}
                                    >
                                        {m.cta}
                                        <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ContactMethods;
