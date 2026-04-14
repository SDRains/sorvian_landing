"use client";

import { Sparkles, ArrowRight, Play, Layers } from "lucide-react";

function ProductHero() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-32 pb-24">
            {/* Background layers */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />

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
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-zinc-800/60 backdrop-blur-sm border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-zinc-200">The Sorvian Platform</span>
                    <span className="text-emerald-400 text-xs font-medium ml-1">
                        v1.0
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
                    One Pipeline.
                    <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        Every AI Workflow.
                    </span>
                </h1>

                {/* Subhead */}
                <p className="text-base md:text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Sorvian is built around one proprietary distillation pipeline — the
                    security and data layer beneath every RAG tool, document analyzer,
                    and AI workflow you run. Connect any data source, use any model, and
                    keep your raw data inside your walls.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <button className="cursor-pointer bg-emerald-500 text-zinc-950 px-6 py-3 rounded-full font-medium hover:bg-emerald-400 transition-all flex items-center gap-2 group">
                        Book a Demo
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a
                        href="#pipeline"
                        className="cursor-pointer bg-zinc-800 border border-zinc-700 text-white px-6 py-3 rounded-full font-medium hover:bg-zinc-700 transition-all flex items-center gap-2"
                    >
                        <Layers className="w-4 h-4" />
                        See the Pipeline
                    </a>
                    <button className="cursor-pointer text-zinc-400 hover:text-white px-4 py-3 font-medium transition-colors flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        Watch Video
                    </button>
                </div>

                {/* Feature chip strip */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-8 border-t border-zinc-800">
                    {[
                        "Any data source",
                        "Any frontier model",
                        "PII-safe by default",
                        "Cloud or on-premise",
                        "Role-scoped results",
                    ].map((item, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-2 bg-zinc-900/60 border border-zinc-800 rounded-full px-3.5 py-1.5 text-xs text-zinc-300"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductHero;
