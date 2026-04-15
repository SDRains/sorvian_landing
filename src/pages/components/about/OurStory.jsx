"use client";

import { Quote, Sparkles } from "lucide-react";

function OurStory() {
    return (
        <section id="story" className="relative py-28 bg-white overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -right-40 w-[400px] h-[400px] bg-amber-100 rounded-full blur-3xl opacity-60" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <div className="mb-14">
                    <p className="text-sm font-medium text-amber-600 mb-3 tracking-wide">
                        How we got here
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-[1.1] max-w-3xl">
                        The tools kept getting smarter.
                        <br />
                        <span className="text-stone-500">The rules kept getting harder.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-[1fr_1fr] gap-10 md:gap-16">
                    {/* Left column — narrative */}
                    <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
                        <p>
                            Sorvian started from a question we kept hearing from security,
                            engineering, and legal teams at the same company:{" "}
                            <em className="text-stone-900 not-italic font-medium">
                                &ldquo;Can we actually use this AI without ending up on the
                                front page?&rdquo;
                            </em>
                        </p>
                        <p>
                            The answer was usually some version of{" "}
                            <span className="text-amber-700 font-medium">
                                &ldquo;not really.&rdquo;
                            </span>{" "}
                            Teams either sent everything to a public model and crossed
                            their fingers, or redacted so much that the model came back
                            with confident, useless answers.
                        </p>
                        <p>
                            We thought the tradeoff was avoidable. A small group of us
                            started sketching what a middleware layer would look like —
                            something that could understand a company&apos;s data as deeply as a
                            frontier model, but without the data ever leaving the company&apos;s
                            walls. That sketch became the distillation pipeline.
                        </p>
                        <p>
                            A few years later, that&apos;s still what we&apos;re building. A bit bigger,
                            a lot more polished, and still pointed at the same problem:{" "}
                            <span className="text-emerald-700 font-semibold">
                                keeping the answers without giving up the data.
                            </span>
                        </p>
                    </div>

                    {/* Right column — image placeholder + pull quote */}
                    <div className="space-y-6">
                        {/* Image placeholder */}
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-stone-100 via-amber-50 to-rose-50 border border-stone-200 flex items-center justify-center">
                            {/* Decorative shapes instead of a real photo */}
                            <div className="absolute top-8 left-8 w-20 h-20 rounded-full bg-gradient-to-br from-emerald-300 to-teal-400 opacity-80" />
                            <div className="absolute top-16 right-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-300 to-orange-400 rotate-12 opacity-80" />
                            <div className="absolute bottom-12 left-1/3 w-24 h-24 rounded-[24px] bg-gradient-to-br from-rose-300 to-pink-400 -rotate-6 opacity-80" />
                            <div className="absolute bottom-8 right-8 w-28 h-12 rounded-full bg-gradient-to-br from-indigo-300 to-purple-400 opacity-70" />

                            {/* Center caption */}
                            <div className="relative z-10 bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl px-5 py-4 shadow-xl">
                                <div className="flex items-center gap-2 mb-1">
                                    <Sparkles className="w-4 h-4 text-amber-500" />
                                    <p className="text-[10px] font-semibold tracking-widest uppercase text-stone-600">
                                        The team
                                    </p>
                                </div>
                                <p className="text-sm font-medium text-stone-900">
                                    Builders, researchers, operators.
                                </p>
                            </div>
                        </div>

                        {/* Pull quote */}
                        <div className="relative bg-stone-50 border-l-4 border-emerald-500 rounded-r-2xl p-6">
                            <Quote className="w-6 h-6 text-emerald-500 mb-3" strokeWidth={2.5} />
                            <p className="text-stone-800 font-medium leading-relaxed">
                                We wanted to work on the problem every AI team is going to
                                run into — and we wanted to be the answer when they did.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurStory;
