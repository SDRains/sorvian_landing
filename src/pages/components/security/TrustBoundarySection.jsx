"use client";

import { Check, X, ArrowRight, Shield, Cloud } from "lucide-react";

const stays = [
    "Raw documents, files, and attachments",
    "Personally identifiable information (PII)",
    "Proprietary IP, schematics, and source code",
    "Customer records and financial details",
    "Internal codenames and identifiers",
    "Sensitivity-tagged source artifacts",
];

const leaves = [
    "Sanitized summaries of derived content",
    "Anonymized queries with stripped context",
    "Embeddings and vectorized representations",
    "Pattern-based entity references (no raw values)",
    "Task-scoped reasoning prompts",
    "Result-shape hints and schema descriptors",
];

function TrustBoundarySection() {
    return (
        <section className="relative py-28 bg-zinc-950 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-300 font-medium">
                            The Trust Boundary
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        What Stays In.
                        <br />
                        <span className="text-zinc-500">What Goes Out.</span>
                    </h2>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                        The Sorvian boundary is enforced, not advisory. Everything on the
                        left is processed locally. Everything on the right is what frontier
                        models ever see.
                    </p>
                </div>

                {/* Two-column split */}
                <div className="relative grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-0 max-w-6xl mx-auto items-center">
                    {/* Left: What Stays */}
                    <div>
                        <div className="relative bg-gradient-to-br from-emerald-500/10 to-zinc-900 border border-emerald-500/30 rounded-3xl p-8 md:p-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center ring-1 ring-emerald-500/30">
                                    <Shield className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-0.5">
                                        Inside Your Walls
                                    </p>
                                    <h3 className="text-2xl font-bold text-white">Stays In</h3>
                                </div>
                            </div>
                            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                                Processed, classified, and stored locally within your
                                infrastructure. Never transmitted to an external model.
                            </p>
                            <ul className="space-y-3">
                                {stays.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-emerald-400" strokeWidth={3} />
                                        </div>
                                        <span className="text-sm text-zinc-200 leading-relaxed">
                                        {item}
                                    </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Middle: Boundary indicator */}
                    <div className="hidden md:flex flex-col items-center justify-center px-4 relative h-full">
                        {/* Vertical dashed line */}
                        <div className="absolute inset-y-8 left-1/2 -translate-x-1/2 w-px border-l-2 border-dashed border-zinc-700" />
                        <div className="relative z-10 flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-2xl shadow-black/50">
                                <ArrowRight className="w-5 h-5 text-emerald-400" />
                            </div>
                            <span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 whitespace-nowrap rotate-0">
                                Sanitized
                            </span>
                            <span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 whitespace-nowrap">
                                Egress
                            </span>
                        </div>
                    </div>

                    {/* Right: What Leaves */}
                    <div className="relative bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-11 h-11 rounded-xl bg-indigo-500/20 flex items-center justify-center ring-1 ring-indigo-500/30">
                                <Cloud className="w-5 h-5 text-indigo-400" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-0.5">
                                    Reaches Public Models
                                </p>
                                <h3 className="text-2xl font-bold text-white">Goes Out</h3>
                            </div>
                        </div>
                        <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                            Derived, anonymized, and stripped of sensitive context — the
                            minimum payload needed for frontier reasoning.
                        </p>
                        <ul className="space-y-3">
                            {leaves.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 text-indigo-300" strokeWidth={3} />
                                    </div>
                                    <span className="text-sm text-zinc-200 leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* "What never leaves" callout */}
                        <div className="mt-6 pt-6 border-t border-zinc-800">
                            <p className="text-xs font-semibold tracking-widest uppercase text-red-400 mb-3">
                                Never Transmitted
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Raw files", "PII", "Proprietary IP", "Customer records"].map(
                                    (t, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center gap-1.5 bg-red-500/10 border border-red-500/30 rounded-full px-3 py-1 text-xs text-red-300"
                                        >
                                            <X className="w-3 h-3" strokeWidth={3} />
                                            {t}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrustBoundarySection;
