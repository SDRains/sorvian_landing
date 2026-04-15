"use client";

import { ArrowRight, Mail, Briefcase } from "lucide-react";

function AboutCTA() {
    return (
        <section className="relative py-28 bg-stone-50 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-200/50 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-200/40 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="text-sm font-medium text-amber-600 mb-3 tracking-wide">
                        Come say hi
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-[1.05] mb-5">
                        The story&apos;s still
                        <br />
                        <span className="relative inline-block">
                            <span className="relative z-10">being written.</span>
                            <span className="absolute left-0 right-0 bottom-2 h-4 bg-emerald-200/60 -skew-x-6 -z-0" />
                        </span>
                    </h2>
                    <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
                        Whether you want to use the platform, work on the platform, or
                        just talk shop — we&apos;d love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    {/* Careers CTA */}
                    <a
                        href="/careers"
                        className="group relative overflow-hidden rounded-3xl bg-white border border-stone-200 p-8 hover:shadow-xl hover:shadow-stone-900/5 hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-amber-200 to-rose-200 rounded-full opacity-40 group-hover:opacity-70 transition-opacity" />
                        <div className="relative">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-5 shadow-lg shadow-amber-500/30">
                                <Briefcase className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-2">
                                Join the team
                            </p>
                            <h3 className="text-2xl font-bold text-stone-900 mb-3">
                                We&apos;re hiring.
                            </h3>
                            <p className="text-stone-600 mb-5 leading-relaxed">
                                Engineering, research, consulting — nine open roles right now,
                                all remote-first.
                            </p>
                            <span className="inline-flex items-center gap-2 text-amber-600 group-hover:text-amber-700 font-semibold">
                                See open roles
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </a>

                    {/* Contact CTA */}
                    <a
                        href="/contact"
                        className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-8 text-white hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                        <div className="relative">
                            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm ring-1 ring-white/30 flex items-center justify-center mb-5">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs font-semibold tracking-widest uppercase text-emerald-100 mb-2">
                                Reach out
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                Let&apos;s have a conversation.
                            </h3>
                            <p className="text-emerald-50 mb-5 leading-relaxed">
                                Demos, questions, partnerships, or a quick hello. Real humans
                                reply, usually within a day.
                            </p>
                            <span className="inline-flex items-center gap-2 text-white group-hover:translate-x-0 font-semibold">
                                Start a conversation
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AboutCTA;
