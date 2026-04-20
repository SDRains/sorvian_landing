"use client";

import { ArrowLeft, ArrowRight, Bell, Clock } from "lucide-react";

/**
 * Reusable "coming soon" page layout.
 *
 * Props:
 *   icon        — lucide icon component for the hero tile
 *   eyebrow     — short label (e.g. "Documentation")
 *   title       — big headline
 *   subtitle    — optional gradient second line
 *   description — paragraph below the headline
 *   features    — array of { icon, title, description } for the "what's coming" grid
 *   timeline    — short string like "Planned for Q2 2026"
 *   notifyEmail — email address for the "notify me" link
 *   meantime    — optional array of { href, label, description } for relevant links
 *   accent      — "emerald" | "indigo" | "amber" (default "emerald")
 */
function ComingSoon({
    icon: Icon,
    eyebrow,
    title,
    subtitle,
    description,
    features = [],
    timeline,
    notifyEmail = "hello@sorvian.ai",
    meantime = [],
    accent = "emerald",
}) {
    const accents = {
        emerald: {
            badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
            dot: "bg-emerald-400",
            iconBg: "from-emerald-500 to-teal-600 shadow-emerald-500/30",
            gradient: "from-emerald-400 via-teal-400 to-cyan-400",
            primaryBtn: "bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-emerald-500/30",
            ringBlob: "bg-emerald-500/10",
            chipBg: "bg-emerald-500/10",
            chipIcon: "text-emerald-400",
            featureBorder: "hover:border-emerald-500/40",
        },
        indigo: {
            badge: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
            dot: "bg-indigo-400",
            iconBg: "from-indigo-500 to-purple-600 shadow-indigo-500/30",
            gradient: "from-indigo-400 via-purple-400 to-fuchsia-400",
            primaryBtn: "bg-indigo-500 text-white hover:bg-indigo-400 shadow-indigo-500/30",
            ringBlob: "bg-indigo-500/10",
            chipBg: "bg-indigo-500/10",
            chipIcon: "text-indigo-400",
            featureBorder: "hover:border-indigo-500/40",
        },
        amber: {
            badge: "bg-amber-500/10 border-amber-500/20 text-amber-300",
            dot: "bg-amber-400",
            iconBg: "from-amber-500 to-orange-600 shadow-amber-500/30",
            gradient: "from-amber-400 via-orange-400 to-rose-400",
            primaryBtn: "bg-amber-500 text-zinc-950 hover:bg-amber-400 shadow-amber-500/30",
            ringBlob: "bg-amber-500/10",
            chipBg: "bg-amber-500/10",
            chipIcon: "text-amber-400",
            featureBorder: "hover:border-amber-500/40",
        },
    };
    const a = accents[accent] || accents.emerald;

    return (
        <section className="relative min-h-screen bg-zinc-950 overflow-hidden pt-32 pb-24">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] ${a.ringBlob} rounded-full blur-3xl`} />
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
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

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                {/* Coming Soon pill */}
                <div className="flex justify-center mb-8">
                    <div className={`inline-flex items-center gap-2 border rounded-full px-4 py-2 ${a.badge}`}>
                        <span className={`relative flex h-2 w-2`}>
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${a.dot} opacity-75`} />
                            <span className={`relative inline-flex rounded-full h-2 w-2 ${a.dot}`} />
                        </span>
                        <span className="text-sm font-medium">
                            Coming soon
                        </span>
                    </div>
                </div>

                {/* Icon tile */}
                <div className="flex justify-center mb-8">
                    <div className={`relative w-20 h-20 rounded-3xl bg-gradient-to-br ${a.iconBg} flex items-center justify-center shadow-2xl`}>
                        {Icon && <Icon className="w-10 h-10 text-white" strokeWidth={1.75} />}
                    </div>
                </div>

                {/* Eyebrow + title */}
                <div className="text-center mb-10 max-w-3xl mx-auto">
                    <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-3">
                        {eyebrow}
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
                        {title}
                        {subtitle && (
                            <>
                                <br />
                                <span className={`bg-gradient-to-r ${a.gradient} bg-clip-text text-transparent`}>
                                    {subtitle}
                                </span>
                            </>
                        )}
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Timeline chip */}
                {timeline && (
                    <div className="flex justify-center mb-14">
                        <div className="inline-flex items-center gap-2 bg-zinc-900/60 border border-zinc-800 rounded-full px-4 py-2">
                            <Clock className={`w-4 h-4 ${a.chipIcon}`} />
                            <span className="text-sm text-zinc-300 font-medium">
                                {timeline}
                            </span>
                        </div>
                    </div>
                )}

                {/* What's coming grid */}
                {features.length > 0 && (
                    <div className="mb-14 max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-2">
                                What&apos;s coming
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                Here&apos;s what we&apos;re building.
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {features.map((f, i) => (
                                <div
                                    key={i}
                                    className={`group bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 transition-all duration-300 ${a.featureBorder}`}
                                >
                                    <div className="flex items-start gap-4">
                                        {f.icon && (
                                            <div className={`w-10 h-10 rounded-xl ${a.chipBg} flex items-center justify-center flex-shrink-0`}>
                                                <f.icon className={`w-5 h-5 ${a.chipIcon}`} />
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <h3 className="text-base font-semibold text-white mb-1.5">
                                                {f.title}
                                            </h3>
                                            <p className="text-sm text-zinc-400 leading-relaxed">
                                                {f.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* In the meantime */}
                {meantime.length > 0 && (
                    <div className="mb-14 max-w-4xl mx-auto">
                        <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 md:p-8">
                            <div className="flex items-center gap-2 mb-5">
                                <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
                                    In the meantime
                                </span>
                                <span className="flex-1 h-px bg-zinc-800" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {meantime.map((m, i) => (
                                    <a
                                        key={i}
                                        href={m.href}
                                        className="group bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 transition-all"
                                    >
                                        <div className="flex items-center justify-between gap-2">
                                            <div>
                                                <p className="font-semibold text-white mb-0.5">
                                                    {m.label}
                                                </p>
                                                <p className="text-xs text-zinc-500">
                                                    {m.description}
                                                </p>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="/"
                        className="cursor-pointer bg-zinc-800 border border-zinc-700 text-white px-6 py-3 rounded-full font-medium hover:bg-zinc-700 transition-all flex items-center gap-2 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to home
                    </a>
                    <a
                        href={`mailto:${notifyEmail}?subject=${encodeURIComponent(
                            `Notify me — ${eyebrow}`
                        )}`}
                        className={`cursor-pointer px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 group shadow-lg ${a.primaryBtn}`}
                    >
                        <Bell className="w-4 h-4" />
                        Notify me when it&apos;s ready
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ComingSoon;
