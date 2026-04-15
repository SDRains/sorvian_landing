"use client";

import {
    ShieldCheck,
    Layers,
    Users,
    HeartHandshake,
    Laptop,
    Plane,
    BookOpen,
    Coins,
    Clock,
    Stethoscope,
} from "lucide-react";

const values = [
    {
        icon: ShieldCheck,
        title: "Security is the whole point",
        description:
            "We exist because the status quo isn't safe enough for real enterprise data. Every decision — engineering, product, operational — starts from that premise.",
    },
    {
        icon: Layers,
        title: "The pipeline is the product",
        description:
            "Our IP is the distillation pipeline, not a hundred shallow features. We invest deeply, ship carefully, and obsess over the boundary rather than the surface.",
    },
    {
        icon: HeartHandshake,
        title: "Trust the craft",
        description:
            "Small team, high autonomy, real ownership. We hire people who can think in systems and then get out of their way.",
    },
];

const perks = [
    { icon: Laptop, label: "Remote-first, async-friendly" },
    { icon: Coins, label: "Competitive salary + meaningful equity" },
    { icon: Stethoscope, label: "Health, dental, vision (US/EU)" },
    { icon: Clock, label: "Flexible time off + parental leave" },
    { icon: Plane, label: "Team off-sites twice a year" },
    { icon: BookOpen, label: "Learning & conference stipend" },
];

function LifeAtSorvian() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-teal-100 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Values */}
                <div className="text-center mb-14 max-w-3xl mx-auto">
                    <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3">
                        Life at Sorvian
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">
                        How we work — and why.
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        Three commitments that shape the team, the product, and every role
                        you&apos;ll find below.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {values.map((v, i) => (
                        <div
                            key={i}
                            className="group bg-zinc-50 border border-zinc-200 rounded-3xl p-7 hover:border-emerald-300 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-5 group-hover:bg-emerald-500 transition-colors">
                                <v.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                                {v.title}
                            </h3>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                {v.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Perks */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-emerald-200">
                            <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                                <Users className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-[10px] font-semibold tracking-widest uppercase text-emerald-600">
                                    Perks &amp; Benefits
                                </p>
                                <h3 className="text-xl font-bold text-zinc-900">
                                    The stuff you&apos;d expect — and a bit more.
                                </h3>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {perks.map((p, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 bg-white border border-zinc-200 rounded-xl px-4 py-3"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                        <p.icon className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <span className="text-sm font-medium text-zinc-800">
                                        {p.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LifeAtSorvian;
