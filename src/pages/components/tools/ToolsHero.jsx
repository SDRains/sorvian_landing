"use client";

import { Wrench, ArrowRight, ShieldCheck } from "lucide-react";

function ToolsHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-32 pb-24">
            {/* Background — "Triad" theme: three colored corner glows for the three tools */}
            <div className="absolute inset-0">
                {/* Three corner glows — emerald (KB RAG), indigo (Security), amber (Doc Analyzer) */}
                <div className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-emerald-500/15 rounded-full blur-3xl" />
                <div className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-amber-500/12 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 left-1/3 w-[650px] h-[650px] bg-indigo-500/12 rounded-full blur-3xl" />

                {/* Offset double-layer dot pattern (more textural than the standard grid) */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, rgba(255,255,255,1) 1.5px, transparent 1.5px), radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
                        backgroundSize: "44px 44px, 44px 44px",
                        backgroundPosition: "0 0, 22px 22px",
                    }}
                />

                {/* Top aurora */}
                <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-zinc-800/60 backdrop-blur-sm border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
                    <Wrench className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-zinc-200">The Sorvian Toolset</span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
                    Three Tools.
                    <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        One Secure Foundation.
                    </span>
                </h1>

                {/* Subhead */}
                <p className="text-base md:text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Knowledge Base RAG, Security Layer, and Document Analyzer — three
                    purpose-built products that share the same distillation pipeline,
                    the same trust boundary, and the same six security principles. No
                    bolt-ons. No exceptions.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <button className="cursor-pointer bg-emerald-500 text-zinc-950 px-6 py-3 rounded-full font-medium hover:bg-emerald-400 transition-all flex items-center gap-2 group">
                        Book a Demo
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a
                        href="#overview"
                        className="cursor-pointer bg-zinc-800 border border-zinc-700 text-white px-6 py-3 rounded-full font-medium hover:bg-zinc-700 transition-all flex items-center gap-2"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        Explore the Tools
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ToolsHero;
