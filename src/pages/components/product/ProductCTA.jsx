"use client";

import {
    ArrowRight,
    Play,
    ShieldCheck,
    Cloud,
    Server,
    Check,
} from "lucide-react";

const quickAnswers = [
    "Run a live demo with your data",
    "Scope a Cloud or on-premise rollout",
    "Review the security architecture with your team",
    "Plan a connector or integration",
];

function ProductCTA() {
    return (
        <section className="relative py-28 bg-zinc-950 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                        backgroundSize: "56px 56px",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-zinc-800/60 backdrop-blur-sm border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-zinc-200">
                            Ready to unlock enterprise AI?
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
                        Full AI Capability.
                        <br />
                        <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                            Zero Data Exposure.
                        </span>
                    </h2>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                        Book a demo with the Sorvian team. We&apos;ll walk through the pipeline,
                        answer security questions, and help you pick the deployment path
                        that fits your environment.
                    </p>
                </div>

                {/* Primary CTA block */}
                <div className="relative max-w-4xl mx-auto mb-16">
                    <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 via-zinc-900 to-zinc-950 p-8 md:p-10">
                        <div
                            className="absolute inset-0 opacity-30"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at 20% 50%, rgba(16,185,129,0.35), transparent 50%)",
                            }}
                        />
                        <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
                            <div>
                                <p className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-3">
                                    In a 30-minute demo, we&apos;ll
                                </p>
                                <ul className="space-y-2.5 mb-6">
                                    {quickAnswers.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check
                                                className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5"
                                                strokeWidth={2.5}
                                            />
                                            <span className="text-zinc-200 leading-relaxed">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col gap-3 md:min-w-[200px]">
                                <button className="cursor-pointer bg-emerald-500 text-zinc-950 px-6 py-4 rounded-full font-semibold hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-emerald-500/30">
                                    Book a Demo
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="cursor-pointer bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 text-white px-6 py-4 rounded-full font-medium hover:bg-zinc-700 transition-all flex items-center justify-center gap-2">
                                    <Play className="w-4 h-4" />
                                    Watch Video
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Two deployment paths CTA */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-14">
                    <div className="group relative bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30 flex items-center justify-center">
                                <Cloud className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400">
                                    Fastest Path
                                </p>
                                <h3 className="text-lg font-bold text-white">
                                    Start on Sorvian Cloud
                                </h3>
                            </div>
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                            Fully managed on AWS with zero hardware setup. From signup to first
                            query in under an hour.
                        </p>
                        <button className="cursor-pointer inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors">
                            Start free
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="group relative bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-11 h-11 rounded-xl bg-zinc-800 ring-1 ring-zinc-700 flex items-center justify-center">
                                <Server className="w-5 h-5 text-zinc-300" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400">
                                    Strictest Posture
                                </p>
                                <h3 className="text-lg font-bold text-white">
                                    Talk On-Premise
                                </h3>
                            </div>
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                            Deploy Sorvian entirely on your own hardware. Air-gap capable.
                            Nothing leaves your infrastructure.
                        </p>
                        <button className="cursor-pointer inline-flex items-center gap-2 text-zinc-300 hover:text-white font-medium text-sm transition-colors">
                            Contact the team
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Stat strip */}
                <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto pt-10 border-t border-zinc-800">
                    <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold text-emerald-400 mb-1">
                            100%
                        </div>
                        <div className="text-xs md:text-sm text-zinc-400">
                            Data context retained
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold text-emerald-400 mb-1">
                            0%
                        </div>
                        <div className="text-xs md:text-sm text-zinc-400">
                            Sensitive data exposed
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold text-emerald-400 mb-1">
                            85%
                        </div>
                        <div className="text-xs md:text-sm text-zinc-400">
                            Cost reduction on document processing
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductCTA;
