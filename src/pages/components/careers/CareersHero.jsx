"use client";

import { Briefcase, ArrowRight, Globe } from "lucide-react";

function CareersHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-32 pb-20">
            {/* Background image layer */}
            <div className="absolute inset-0">
                <img
                    src="/earth.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay gradients to keep text legible */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950/90" />
                <div className="absolute inset-0 bg-zinc-950/40" />

                {/* Color accents layered on top of the image */}
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" />

                {/* Top emerald aurora for section continuity */}
                <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-emerald-500/15 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 bg-zinc-800/60 backdrop-blur-sm border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
                    <Briefcase className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-zinc-200">Careers at Sorvian</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
                    Build the Layer
                    <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        Between Data and AI.
                    </span>
                </h1>

                <p className="text-base md:text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    We&apos;re a remote-first team of engineers, researchers, and operators
                    building the security and data layer every enterprise AI workflow
                    needs. If you care about doing the hard thing the right way, you&apos;ll
                    feel at home here.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <a
                        href="#open-positions"
                        className="cursor-pointer bg-emerald-500 text-zinc-950 px-6 py-3 rounded-full font-medium hover:bg-emerald-400 transition-all flex items-center gap-2 group"
                    >
                        See Open Roles
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="mailto:careers@sorvian.ai"
                        className="cursor-pointer bg-zinc-800 border border-zinc-700 text-white px-6 py-3 rounded-full font-medium hover:bg-zinc-700 transition-all flex items-center gap-2"
                    >
                        careers@sorvian.ai
                    </a>
                </div>

                {/* Quick info strip */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-8 border-t border-zinc-800 text-sm text-zinc-400">
                    <span className="inline-flex items-center gap-2">
                        <Globe className="w-4 h-4 text-emerald-400" />
                        Remote-first · US &amp; Europe
                    </span>
                    <span className="text-zinc-700">·</span>
                    <span>Competitive equity &amp; comp</span>
                    <span className="text-zinc-700">·</span>
                    <span>Security-minded engineering culture</span>
                </div>
            </div>
        </section>
    );
}

export default CareersHero;
