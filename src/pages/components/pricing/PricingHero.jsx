"use client";

import { Tags, ArrowRight, ShieldCheck } from "lucide-react";

function PricingHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-32 pb-20">
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                        backgroundSize: "56px 56px",
                    }}
                />
                <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 bg-zinc-800/60 backdrop-blur-sm border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
                    <Tags className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-zinc-200">Pricing &amp; Plans</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
                    Three Tiers.
                    <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        One Security Standard.
                    </span>
                </h1>

                <p className="text-base md:text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Every plan runs the same Sorvian software, the same distillation
                    pipeline, and the same six security principles. Tiers differ by where
                    the infrastructure lives and how much control your team holds — pick
                    the one that fits your security posture.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#plans"
                        className="cursor-pointer bg-emerald-500 text-zinc-950 px-6 py-3 rounded-full font-medium hover:bg-emerald-400 transition-all flex items-center gap-2 group"
                    >
                        Compare Plans
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#cloud"
                        className="cursor-pointer bg-zinc-800 border border-zinc-700 text-white px-6 py-3 rounded-full font-medium hover:bg-zinc-700 transition-all flex items-center gap-2"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        Why Start on Cloud
                    </a>
                </div>
            </div>
        </section>
    );
}

export default PricingHero;
