"use client";

import {
    Building2,
    UserCog,
    Handshake,
    Plug,
    FileCheck,
    Rocket,
    BadgeCheck,
    Clock,
    ArrowRight,
    Mail,
    Phone,
} from "lucide-react";

const offerings = [
    {
        icon: UserCog,
        title: "Dedicated solutions architect",
        description:
            "A named partner who knows your environment, your security posture, and your roadmap — from kickoff through every rollout.",
    },
    {
        icon: Handshake,
        title: "White-glove onboarding &amp; migration",
        description:
            "We scope your environment, connect your data sources, configure role scoping, and migrate existing knowledge bases alongside your team.",
    },
    {
        icon: Plug,
        title: "Custom connectors on request",
        description:
            "If your stack includes a system Sorvian doesn't ship with out of the box, we build the connector into the pipeline without compromising the security model.",
    },
    {
        icon: FileCheck,
        title: "Security questionnaire &amp; audit support",
        description:
            "Detailed documentation, architecture diagrams, and direct engineering time to support your procurement, security, and compliance review processes.",
    },
    {
        icon: BadgeCheck,
        title: "Custom SLA &amp; priority support",
        description:
            "Response-time commitments, named-contact escalation paths, and a dedicated support channel tuned to the tier of coverage you need.",
    },
    {
        icon: Rocket,
        title: "Private model hosting options",
        description:
            "For regulated environments: privately hosted frontier models, bring-your-own-key deployments, and region-locked inference routing.",
    },
    {
        icon: Building2,
        title: "Multi-region &amp; hybrid topologies",
        description:
            "Mix Cloud, Standard, and Fortress across geographies with federated identity, data residency controls, and unified role scoping.",
    },
    {
        icon: Clock,
        title: "Strategic pricing &amp; volume agreements",
        description:
            "Multi-year terms, volume discounting, usage-based or seat-based structures — scoped to how your organization actually buys software.",
    },
];

function CustomEnterpriseSection() {
    return (
        <section
            id="enterprise"
            className="relative py-28 bg-zinc-950 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                        backgroundSize: "56px 56px",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-zinc-800/60 backdrop-blur-sm border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                        <Building2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-zinc-200">Custom Enterprise</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        When the Standard Tiers
                        <br />
                        <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                            Aren&apos;t Enough.
                        </span>
                    </h2>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                        For organizations with multi-region requirements, bespoke
                        connectors, strict compliance needs, or custom pricing structures —
                        we build the deployment around your environment, not the other way
                        around.
                    </p>
                </div>

                {/* Premium treatment card */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-zinc-900 to-zinc-950 p-8 md:p-12">
                        <div
                            className="absolute inset-0 opacity-30"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at 85% 30%, rgba(16,185,129,0.25), transparent 55%)",
                            }}
                        />
                        <div className="relative grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
                            <div className="w-20 h-20 rounded-3xl bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-xl shadow-emerald-500/30">
                                <Handshake className="w-10 h-10 text-zinc-950" strokeWidth={2.5} />
                            </div>
                            <div>
                                <p className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-3">
                                    Built Around Your Environment
                                </p>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                                    A deployment designed with your team, not for them.
                                </h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    Every enterprise engagement starts with a scoping conversation
                                    with our engineering team. We review your architecture, your
                                    compliance obligations, and your integration surface — then
                                    design a Sorvian rollout that fits. No forced tiers, no
                                    one-size-fits-all packaging.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Offerings grid */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="text-center mb-10">
                        <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-3">
                            What Enterprise Includes
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            Services and capabilities on top of the standard tiers.
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {offerings.map((o, i) => (
                            <div
                                key={i}
                                className="group relative bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:ring-emerald-500 transition-colors">
                                        <o.icon className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <h4
                                            className="text-base font-semibold text-white mb-2"
                                            dangerouslySetInnerHTML={{ __html: o.title }}
                                        />
                                        <p
                                            className="text-sm text-zinc-400 leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: o.description }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 via-zinc-900 to-zinc-950 p-8 md:p-12">
                        <div
                            className="absolute inset-0 opacity-40"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at 20% 50%, rgba(16,185,129,0.35), transparent 50%)",
                            }}
                        />
                        <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
                            <div>
                                <p className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-3">
                                    Enterprise Contact
                                </p>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                                    Let&apos;s design your deployment.
                                </h3>
                                <p className="text-zinc-400 leading-relaxed mb-6 max-w-xl">
                                    A 30-minute discovery call is enough to sketch the shape of
                                    your Sorvian rollout — timeline, tier mix, integrations, and
                                    compliance touchpoints. No procurement paperwork required
                                    upfront.
                                </p>
                                <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                                    <a
                                        href="mailto:enterprise@sorvian.ai"
                                        className="inline-flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-colors"
                                    >
                                        <Mail className="w-4 h-4 text-emerald-400" />
                                        enterprise@sorvian.ai
                                    </a>
                                    <span className="inline-flex items-center gap-2 text-zinc-300">
                                        <Phone className="w-4 h-4 text-emerald-400" />
                                        Direct line available on request
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 md:min-w-[220px]">
                                <button className="cursor-pointer bg-emerald-500 text-zinc-950 px-6 py-4 rounded-full font-semibold hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-emerald-500/30">
                                    Talk to Enterprise
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="cursor-pointer bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 text-white px-6 py-4 rounded-full font-medium hover:bg-zinc-700 transition-all">
                                    Download Security Packet
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CustomEnterpriseSection;
