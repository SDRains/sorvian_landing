"use client";

import {
    Code2,
    FlaskConical,
    Users,
    PenTool,
    HeartHandshake,
    Sparkles,
} from "lucide-react";

const groups = [
    {
        icon: Code2,
        label: "The Engineers",
        description:
            "Backend, platform, and data folks who obsess over reliable systems and tidy abstractions.",
        color: "from-emerald-400 to-teal-500",
        chip: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
        icon: FlaskConical,
        label: "The Researchers",
        description:
            "Applied ML, NLP, and retrieval people — the ones pushing what the pipeline can understand.",
        color: "from-amber-400 to-orange-500",
        chip: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
        icon: HeartHandshake,
        label: "The Operators",
        description:
            "Solutions architects, customer engineers, and consultants who make rollouts feel easy.",
        color: "from-rose-400 to-pink-500",
        chip: "bg-rose-50 text-rose-700 border-rose-200",
    },
    {
        icon: PenTool,
        label: "The Designers",
        description:
            "Product and brand folks who keep the software from looking like the boxy enterprise software they remember.",
        color: "from-indigo-400 to-purple-500",
        chip: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
];

// Decorative avatar list — initials + colored gradients, no real photos
const avatars = [
    { initials: "JH", color: "from-emerald-400 to-teal-500" },
    { initials: "AR", color: "from-amber-400 to-orange-500" },
    { initials: "MK", color: "from-rose-400 to-pink-500" },
    { initials: "TP", color: "from-indigo-400 to-purple-500" },
    { initials: "NS", color: "from-cyan-400 to-blue-500" },
    { initials: "LQ", color: "from-lime-400 to-emerald-500" },
    { initials: "DV", color: "from-fuchsia-400 to-rose-500" },
    { initials: "RB", color: "from-sky-400 to-indigo-500" },
    { initials: "EK", color: "from-yellow-400 to-amber-500" },
];

function TeamSection() {
    return (
        <section className="relative py-28 bg-white overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-rose-100 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-amber-100 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="mb-14 max-w-3xl">
                    <p className="text-sm font-medium text-rose-500 mb-3 tracking-wide">
                        The people
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-[1.1] mb-5">
                        A small team
                        <br />
                        <span className="text-stone-500">with a specific obsession.</span>
                    </h2>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        We&apos;re remote-first across North America and Europe, with a
                        handful of regular in-person gatherings. Here&apos;s roughly how the
                        team breaks down.
                    </p>
                </div>

                {/* Avatar cluster */}
                <div className="mb-14">
                    <div className="flex flex-wrap items-center justify-start gap-3 md:gap-4">
                        {avatars.map((a, i) => {
                            const offsets = ["mt-0", "mt-6", "mt-2", "mt-8", "mt-0", "mt-4", "mt-8", "mt-2", "mt-6"];
                            return (
                                <div
                                    key={i}
                                    className={`${offsets[i % offsets.length]} transition-transform hover:-translate-y-1 duration-300`}
                                >
                                    <div
                                        className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${a.color} flex items-center justify-center text-white font-bold text-lg shadow-lg ring-4 ring-white`}
                                    >
                                        {a.initials}
                                    </div>
                                </div>
                            );
                        })}
                        <div className="mt-4 md:mt-6 inline-flex items-center gap-2 bg-stone-100 border border-stone-200 rounded-full px-4 py-2">
                            <Users className="w-4 h-4 text-stone-600" />
                            <span className="text-sm font-medium text-stone-700">
                                + more
                            </span>
                        </div>
                    </div>
                </div>

                {/* Team groups */}
                <div className="grid sm:grid-cols-2 gap-5">
                    {groups.map((g, i) => (
                        <div
                            key={i}
                            className="group relative bg-stone-50 border border-stone-200 rounded-3xl p-7 hover:border-stone-300 hover:bg-white hover:shadow-lg transition-all duration-300 overflow-hidden"
                        >
                            <div
                                className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${g.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                            />
                            <div className="relative">
                                <span
                                    className={`inline-flex items-center gap-1.5 border rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase mb-4 ${g.chip}`}
                                >
                                    <Sparkles className="w-3 h-3" />
                                    Who we hire
                                </span>
                                <div
                                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${g.color} flex items-center justify-center mb-5 shadow-lg`}
                                >
                                    <g.icon className="w-6 h-6 text-white" strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3">
                                    {g.label}
                                </h3>
                                <p className="text-stone-600 leading-relaxed">
                                    {g.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
