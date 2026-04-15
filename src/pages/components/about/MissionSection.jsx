"use client";

import { Compass, ShieldCheck, Lightbulb, HeartHandshake } from "lucide-react";

const beliefs = [
    {
        icon: ShieldCheck,
        title: "Security shouldn't slow you down.",
        description:
            "If the safe path is also the slow path, teams will find another path. The job is to make the secure option the obvious one.",
    },
    {
        icon: Lightbulb,
        title: "Clever beats complicated.",
        description:
            "We'd rather ship one simple capability that everybody uses than five clever ones nobody trusts. The pipeline stays small on purpose.",
    },
    {
        icon: HeartHandshake,
        title: "Our customers' data belongs to them.",
        description:
            "Not to us, not to a frontier model, not to the ambiguous space in between. That's a posture, not a feature.",
    },
];

function MissionSection() {
    return (
        <section className="relative py-28 bg-stone-50 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100 rounded-full blur-3xl opacity-70" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-100 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Big mission statement card */}
                <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-10 md:p-16 text-white mb-14 shadow-2xl shadow-emerald-500/20">
                    {/* Decorative shapes inside card */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-900/20 rounded-full blur-2xl" />

                    <div className="relative max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-6">
                            <Compass className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">
                                Our mission
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                            Make enterprise AI safe enough to actually use.
                        </h2>
                        <p className="text-lg md:text-xl text-emerald-50 leading-relaxed">
                            Every company has knowledge worth using with AI and data worth
                            protecting. We&apos;re building the middleware that lets both things
                            be true at the same time — without the tradeoff nobody should
                            have to make.
                        </p>
                    </div>
                </div>

                {/* Beliefs */}
                <div className="mb-6">
                    <p className="text-sm font-medium text-amber-600 mb-2 tracking-wide">
                        What we believe
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight max-w-2xl">
                        Three things we keep coming back to.
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {beliefs.map((b, i) => {
                        const rotations = ["-rotate-1", "rotate-0", "rotate-1"];
                        return (
                            <div
                                key={i}
                                className={`group bg-white border border-stone-200 rounded-3xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-stone-900/5 hover:-translate-y-1 ${rotations[i]}`}
                            >
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-rose-100 flex items-center justify-center mb-5">
                                    <b.icon className="w-6 h-6 text-stone-700" strokeWidth={2} />
                                </div>
                                <h4 className="text-xl font-semibold text-stone-900 mb-3 leading-snug">
                                    {b.title}
                                </h4>
                                <p className="text-sm text-stone-600 leading-relaxed">
                                    {b.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default MissionSection;
