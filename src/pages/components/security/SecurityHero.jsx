"use client";

import { ShieldCheck, ArrowRight, Lock } from "lucide-react";

function SecurityHero() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-32 pb-24">
            {/* Background layers */}
            <div className="absolute inset-0">
                {/* Radial glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                        backgroundSize: "56px 56px",
                    }}
                />

                {/* Top aurora */}
                <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-zinc-800/60 backdrop-blur-sm border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-zinc-200">Security Architecture</span>
                    <span className="text-emerald-400 text-xs font-medium ml-1">
                        v1.0
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
                    Security Isn&apos;t a Feature.
                    <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        It&apos;s the Foundation.
                    </span>
                </h1>

                {/* Subhead */}
                <p className="text-base md:text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Sorvian operates on a zero-trust policy toward public AI models. Every
                    principle, pipeline stage, and deployment tier is designed so your raw
                    data, PII, and proprietary IP never leave your control — no exceptions,
                    no edge cases, no &quot;acceptable risk.&quot;
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <button className="cursor-pointer bg-emerald-500 text-zinc-950 px-6 py-3 rounded-full font-medium hover:bg-emerald-400 transition-all flex items-center gap-2 group">
                        Book a Security Review
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a
                        href="#principles"
                        className="cursor-pointer bg-zinc-800 border border-zinc-700 text-white px-6 py-3 rounded-full font-medium hover:bg-zinc-700 transition-all flex items-center gap-2"
                    >
                        <Lock className="w-4 h-4" />
                        Read the Principles
                    </a>
                </div>

                {/* Stat strip */}
                <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto pt-10 border-t border-zinc-800">
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">
                            0
                        </div>
                        <div className="text-xs md:text-sm text-zinc-400">
                            Raw documents sent to public models
                        </div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">
                            100%
                        </div>
                        <div className="text-xs md:text-sm text-zinc-400">
                            Of PII stripped before boundary crossing
                        </div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">
                            6
                        </div>
                        <div className="text-xs md:text-sm text-zinc-400">
                            Non-negotiable security principles
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SecurityHero;
