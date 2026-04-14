"use client";

import {
    Layers,
    ArrowRight,
    ShieldCheck,
    Lock,
    Building2,
    Cloud,
    Sparkles,
} from "lucide-react";

const capabilityGroups = [
    {
        eyebrow: "Understanding",
        title: "Multi-Model Comprehension",
        description:
            "A coordinated ensemble of models reads every document the way a subject-matter expert would — capturing structure, intent, and meaning, not just text.",
    },
    {
        eyebrow: "Protection",
        title: "Automated Governance",
        description:
            "Sensitive material is identified, classified, and transformed before it ever approaches the trust boundary. Governance is enforced inside the pipeline, not in a downstream policy layer.",
    },
    // {
    //     eyebrow: "Retrieval",
    //     title: "Query-Ready Intelligence",
    //     description:
    //         "The output is a rich, queryable layer designed to feed any frontier model on demand — with access controls, role scoping, and audit built in from the start.",
    // },
];

function PipelineSection() {
    return (
        <section id="pipeline" className="relative py-28 bg-white overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-teal-100 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-6">
                        <Layers className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-emerald-700 font-medium">
                            The Distillation Pipeline
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight leading-[1.1]">
                        Raw Data In.
                        <br />
                        <span className="text-zinc-500">Safe Intelligence Out.</span>
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        The distillation pipeline is Sorvian&apos;s core IP — a proprietary
                        middleware that transforms sensitive organizational data into a
                        queryable knowledge layer any frontier model can safely reason
                        over. The mechanics stay with us. The guarantees stay with you.
                    </p>
                </div>

                {/* High-level flow: Input → Pipeline (opaque) → Output */}
                <div className="max-w-6xl mx-auto mb-16 lg:mb-24">
                    <div className="grid md:grid-cols-[1fr_auto_1.2fr_auto_1fr] items-stretch gap-4 md:gap-2">
                        {/* Input: Your Data */}
                        <div className="relative bg-zinc-50 border border-zinc-200 rounded-2xl p-6 flex flex-col">
                            <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-zinc-300 to-zinc-400 rounded-b-full" />
                            <div className="w-11 h-11 rounded-xl bg-zinc-200 flex items-center justify-center mb-4">
                                <Building2 className="w-5 h-5 text-zinc-700" />
                            </div>
                            <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 mb-1">
                                Input
                            </p>
                            <h3 className="text-lg font-bold text-zinc-900 mb-2">
                                Your Organization&apos;s Data
                            </h3>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                Documents, knowledge bases, tickets, and conversations —
                                whatever format, wherever it lives.
                            </p>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:flex flex-col items-center justify-center px-2">
                            <ArrowRight className="w-6 h-6 text-emerald-500" />
                        </div>

                        {/* The Pipeline (opaque, featured) */}
                        <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-7 shadow-2xl shadow-emerald-500/30 overflow-hidden">
                            {/* Abstract background texture */}
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3), transparent 40%)",
                                }}
                            />
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                    backgroundSize: "24px 24px",
                                }}
                            />

                            <div className="relative w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm ring-1 ring-white/30 flex items-center justify-center mb-4">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <p className="relative text-[10px] font-semibold tracking-widest uppercase text-emerald-100 mb-1">
                                The Distillation Pipeline
                            </p>
                            <h3 className="relative text-xl md:text-2xl font-bold text-white mb-2">
                                Sorvian Middleware
                            </h3>
                            <p className="relative text-sm text-emerald-50 leading-relaxed">
                                A multi-model pipeline that parses, protects, and prepares
                                every artifact — running entirely before anything leaves
                                your boundary.
                            </p>

                            {/* Floating mini-chips suggesting capability without sequence */}
                            <div className="relative mt-4 flex flex-wrap gap-1.5">
                                {["Comprehension", "Governance", "Retrieval"].map((t) => (
                                    <span
                                        key={t}
                                        className="text-[10px] bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-0.5 text-white"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:flex flex-col items-center justify-center px-2">
                            <ArrowRight className="w-6 h-6 text-emerald-500" />
                        </div>

                        {/* Output: Safe Intelligence */}
                        <div className="relative bg-zinc-50 border border-zinc-200 rounded-2xl p-6 flex flex-col">
                            <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-b-full" />
                            <div className="w-11 h-11 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                                <Cloud className="w-5 h-5 text-indigo-600" />
                            </div>
                            <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 mb-1">
                                Output
                            </p>
                            <h3 className="text-lg font-bold text-zinc-900 mb-2">
                                Safe, Query-Ready Intelligence
                            </h3>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                A sanitized, role-scoped layer frontier models can reason
                                against — with your raw data left behind.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Capability groups (categorical, not sequential) */}
                <div className="max-w-6xl mx-auto mb-16 grid grid-cols-2 gap-12 items-center">
                    <div className="text-left mb-10">
                        <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3">
                            What the Pipeline Delivers
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">
                            Depth without the tradeoff.
                        </h3>
                        <p className="text-zinc-600 leading-relaxed max-w-2xl mx-auto">
                            Every document that flows through Sorvian emerges understood,
                            protected, and ready for retrieval — governed by the same six
                            security principles at every step.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {capabilityGroups.map((group, i) => (
                            <div
                                key={i}
                                className="group relative bg-zinc-50 border border-zinc-200 rounded-2xl p-6 hover:border-emerald-300 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
                            >
                                <p className="text-[10px] font-semibold tracking-widest uppercase text-emerald-600 mb-2">
                                    {group.eyebrow}
                                </p>
                                <h4 className="text-lg font-semibold text-zinc-900 mb-3">
                                    {group.title}
                                </h4>
                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    {group.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Closing callout */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-8 md:p-10">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
                                <ShieldCheck className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex-1">
                                <p className="text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-2">
                                    The Tradeoff Nobody Else Makes
                                </p>
                                <p className="text-xl md:text-2xl text-zinc-900 font-medium leading-snug mb-2">
                                    We keep the recipe.
                                    <br className="hidden md:block" />
                                    <span className="text-zinc-600">You keep the guarantees.</span>
                                </p>
                                <p className="text-zinc-600 leading-relaxed">
                                    The pipeline&apos;s inner workings are proprietary — but its
                                    behavior at the boundary is fully specified and auditable.
                                    Our security page explains exactly what leaves your walls
                                    and what never does.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                            <a
                                href="/security"
                                className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-5 py-2.5 rounded-full font-medium hover:bg-emerald-600 transition-colors text-sm"
                            >
                                Security Architecture
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <button className="cursor-pointer items-center justify-center gap-2 bg-white border border-zinc-300 text-zinc-700 px-5 py-2.5 rounded-full font-medium hover:bg-zinc-50 transition-colors text-sm">
                                Request a Technical Briefing
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PipelineSection;
