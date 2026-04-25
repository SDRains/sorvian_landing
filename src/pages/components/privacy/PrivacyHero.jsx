"use client";

import { ShieldCheck, Calendar } from "lucide-react";

function PrivacyHero({ effectiveDate }) {
    return (
        <section className="relative overflow-hidden bg-zinc-950 pt-32 pb-16">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/10 rounded-full blur-3xl" />
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

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 bg-zinc-800/60 backdrop-blur-sm border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-zinc-200">Legal</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
                    Privacy Policy
                </h1>

                <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-6 leading-relaxed">
                    How Sorvian AI, LLC handles personal information collected through
                    our marketing site at sorvian.ai.
                </p>

                <div className="inline-flex items-center gap-2 text-sm text-zinc-500">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span>
                        Effective date:{" "}
                        <span className="text-zinc-300 font-medium">{effectiveDate}</span>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default PrivacyHero;
