"use client";

import { MessageSquare, ArrowRight, Clock } from "lucide-react";

function ContactHero() {
    return (
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-32 pb-20">
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
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
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-zinc-200">Contact Sorvian</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
                    Let&apos;s Talk.
                    <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        Pick the path that fits.
                    </span>
                </h1>

                <p className="text-base md:text-lg text-zinc-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                    Whether you&apos;re scoping a first rollout, running a security review,
                    or looking for pricing on a multi-region deployment — our team will
                    get back to you within one business day.
                </p>

                <div className="inline-flex items-center gap-2 text-sm text-zinc-400">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>
                        Average response time:{" "}
                        <span className="text-emerald-400 font-medium">under 24 hours</span>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default ContactHero;
