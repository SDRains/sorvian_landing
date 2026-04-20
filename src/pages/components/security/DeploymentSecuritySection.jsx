"use client";

import {
    Cloud,
    Server,
    Shield,
    Check,
    ArrowRight,
    Ban,
    Lock,
} from "lucide-react";

const cloudFeatures = [
    "Hosted on hardened AWS infrastructure",
    "Isolated tenant environment per organization",
    "Encryption in transit and at rest",
    "Zero hardware, zero DevOps setup required",
    "Fastest path from signup to production",
    "Automatic updates and patching",
];

const localFeatures = [
    "Runs entirely on your own hardware",
    "VPC or fully air-gapped deployment",
    "Large models run internally — no external API calls (Fortress)",
    "Updates delivered via secure install wizard",
    "Ideal for regulated, sovereign, or classified environments",
    "Full infrastructure control from your IT and DevOps teams",
];

function DeploymentSecuritySection() {
    return (
        <section className="relative py-28 bg-zinc-950 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-emerald-300 font-medium">
                            Deployment Security
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        Two Deployment Paths.
                        <br />
                        <span className="text-zinc-500">One Security Standard.</span>
                    </h2>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                        Run Sorvian fully managed on our AWS-secured cloud, or keep everything
                        on your own hardware inside your walls. Either way, the trust boundary
                        is enforced and the rules don&apos;t bend.
                    </p>
                </div>

                {/* The Promise Banner */}
                <div className="max-w-5xl mx-auto mb-14">
                    <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 via-zinc-900 to-zinc-950 p-8 md:p-10">
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at 15% 50%, rgba(16,185,129,0.4), transparent 50%)",
                            }}
                        />
                        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
                                <Ban className="w-7 h-7 text-zinc-950" strokeWidth={2.5} />
                            </div>
                            <div className="flex-1">
                                <p className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-2">
                                    The Zero-Retention Promise
                                </p>
                                <p className="text-xl md:text-2xl text-white font-medium leading-snug mb-2">
                                    We never store your raw documents.
                                </p>
                                <p className="text-zinc-400 leading-relaxed">
                                    In both deployment paths, Sorvian only persists{" "}
                                    <span className="text-emerald-300 font-medium">
                                        derived artifacts
                                    </span>{" "}
                                    — embeddings, summaries, sanitized entities. Originals are
                                    accessed in place from your source systems (OneDrive,
                                    SharePoint, Google Drive, etc.) and never copied into
                                    Sorvian storage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Two Paths */}
                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {/* Sorvian Cloud (featured) */}
                    <div className="relative group bg-gradient-to-br from-emerald-500/10 to-zinc-900 border border-emerald-500/40 rounded-3xl p-8 md:p-10 hover:border-emerald-500/60 transition-all duration-300 overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-b-full" />

                        {/* Recommended pill */}
                        <div className="absolute top-3 right-8 bg-emerald-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                            Recommended
                        </div>

                        <div className="relative flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                                <Cloud className="w-7 h-7 text-zinc-950" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-1">
                                    Path 1
                                </p>
                                <h3 className="text-2xl md:text-3xl font-bold text-white">
                                    Sorvian Cloud
                                </h3>
                            </div>
                        </div>

                        <p className="relative text-zinc-300 leading-relaxed mb-6">
                            Fully managed and secured by AWS. We host the middleware on
                            hardened, isolated infrastructure — you connect your data
                            sources and start querying. No servers to provision, no hardware
                            to maintain.
                        </p>

                        <div className="relative bg-black/30 border border-emerald-500/20 rounded-2xl p-4 mb-6">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                    <Lock className="w-4 h-4 text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-1">
                                        Cloud-Specific Guarantee
                                    </p>
                                    <p className="text-sm text-zinc-300 leading-relaxed">
                                        Only derived artifacts live inside Sorvian Cloud. Your
                                        raw documents are read from your source systems, processed
                                        in memory, and never written to our storage.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <ul className="relative space-y-3 mb-8">
                            {cloudFeatures.map((f, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-zinc-300 leading-relaxed">
                                        {f}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <button className="cursor-pointer w-full bg-emerald-500 text-zinc-950 py-3 rounded-full font-medium hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group/btn">
                            Start on Sorvian Cloud
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Local / On-Premise */}
                    <div className="relative group bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 md:p-10 hover:border-zinc-700 transition-all duration-300 overflow-hidden">
                        <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-zinc-500 to-zinc-700 rounded-b-full" />

                        <div className="relative flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                                <Server className="w-7 h-7 text-zinc-300" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-1">
                                    Path 2
                                </p>
                                <h3 className="text-2xl md:text-3xl font-bold text-white">
                                    Local / On-Premise
                                </h3>
                            </div>
                        </div>

                        <p className="relative text-zinc-400 leading-relaxed mb-6">
                            Deploy Sorvian entirely on your own hardware — workstation,
                            server rack, or full datacenter. Air-gap capable for the
                            strictest sovereign, classified, or regulated environments.
                            Nothing ever leaves your infrastructure.
                        </p>

                        <div className="relative bg-black/30 border border-zinc-800 rounded-2xl p-4 mb-6">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-4 h-4 text-zinc-300" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-1">
                                        On-Premise-Specific Guarantee
                                    </p>
                                    <p className="text-sm text-zinc-300 leading-relaxed">
                                        Sorvian has zero visibility into your deployment. All
                                        pipeline stages, models, and data stay within your walls.
                                        You control everything — storage, logs, updates, access.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <ul className="relative space-y-3 mb-8">
                            {localFeatures.map((f, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-zinc-300 leading-relaxed">
                                        {f}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <button className="cursor-pointer w-full bg-zinc-800 border border-zinc-700 text-white py-3 rounded-full font-medium hover:bg-zinc-700 transition-all flex items-center justify-center gap-2 group/btn">
                            Talk to On-Premise Team
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Comparison footer */}
                <div className="mt-12 text-center max-w-3xl mx-auto">
                    <p className="text-sm text-zinc-500 italic">
                        Same Sorvian software. Same distillation pipeline. Same six security
                        principles. The only difference is where the boxes run.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default DeploymentSecuritySection;
