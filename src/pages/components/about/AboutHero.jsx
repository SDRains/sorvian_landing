"use client";

import { Sparkles, ArrowRight } from "lucide-react";

function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-stone-50 pt-36 pb-24">
            {/* Soft organic blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-amber-200/50 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 right-1/3 w-[500px] h-[500px] bg-emerald-200/40 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
                    {/* Left: Copy */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-stone-200 rounded-full px-4 py-2 mb-8 shadow-sm">
                            <Sparkles className="w-4 h-4 text-amber-500" />
                            <span className="text-sm text-stone-700 font-medium">
                                Our story
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 tracking-tight leading-[1.02] mb-8">
                            Hi, we&apos;re
                            <br />
                            <span className="relative inline-block">
                                <span className="relative z-10">Sorvian.</span>
                                <span className="absolute left-0 right-0 bottom-2 h-4 bg-emerald-200/60 -skew-x-6 -z-0" />
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-stone-700 leading-relaxed mb-8 max-w-xl">
                            We got tired of watching teams choose between{" "}
                            <span className="text-emerald-700 font-semibold">
                                useful AI
                            </span>{" "}
                            and{" "}
                            <span className="text-amber-700 font-semibold">
                                safe data
                            </span>
                            . So we built the layer that lets you have both.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <a
                                href="#story"
                                className="cursor-pointer bg-stone-900 text-white px-6 py-3 rounded-full font-medium hover:bg-stone-800 transition-all flex items-center gap-2 group"
                            >
                                Read our story
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/careers"
                                className="cursor-pointer text-stone-700 hover:text-stone-900 font-medium inline-flex items-center gap-2 underline decoration-amber-400 decoration-2 underline-offset-4 hover:decoration-amber-500 transition-colors"
                            >
                                Come work with us
                            </a>
                        </div>
                    </div>

                    {/* Right: Abstract portrait/visual */}
                    <div className="relative">
                        {/* Stack of colored offset cards — abstract "team" shape */}
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            {/* Back card */}
                            <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gradient-to-br from-amber-300 to-rose-300 rounded-[40px] transform rotate-[-6deg]" />
                            {/* Middle card */}
                            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-[40px] transform rotate-[4deg]" />
                            {/* Front card with quote */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[60%] bg-white rounded-[32px] shadow-2xl shadow-stone-900/10 p-8 flex flex-col justify-between border border-stone-100">
                                <div className="text-4xl text-emerald-500 font-serif leading-none">
                                    &ldquo;
                                </div>
                                <p className="text-stone-700 leading-relaxed italic">
                                    Enterprise AI shouldn&apos;t ask you to pick between the
                                    answers you need and the data you protect.
                                </p>
                                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-stone-100">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-xs font-bold">
                                        S
                                    </div>
                                    <p className="text-xs text-stone-500">
                                        — The Sorvian team
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutHero;
