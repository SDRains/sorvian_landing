"use client";

import {
    Cloud,
    Zap,
    Lock,
    ShieldCheck,
    Ban,
    Check,
    ArrowRight,
    Gauge,
    Workflow,
    RefreshCw,
    Sparkles,
} from "lucide-react";

const reasons = [
    {
        icon: Zap,
        title: "Fastest path to production",
        description:
            "From signup to first query in under an hour. No hardware to order, no DevOps tickets, no server config.",
    },
    {
        icon: Lock,
        title: "Enterprise-grade by default",
        description:
            "Hosted on hardened AWS infrastructure with isolated tenant environments, encryption in transit and at rest, and continuous security patching.",
    },
    {
        icon: Ban,
        title: "Zero raw-document retention",
        description:
            "Originals are read in place from your source systems, processed in memory, and never written to Sorvian storage. Only derived artifacts persist.",
    },
    {
        icon: RefreshCw,
        title: "Updates and upgrades are automatic",
        description:
            "Every new capability, every security improvement, and every model integration lands in your tenant with no effort on your side.",
    },
];

const included = [
    "Full distillation pipeline",
    "Knowledge Base RAG (internal + customer)",
    "Security Layer with PII + IP anonymization",
    "Document Analyzer for any format",
    "All current integrations (SharePoint, OneDrive, Drive, Teams, Slack, Jira)",
    "All frontier model providers (Claude, OpenAI, Gemini, Ollama)",
    "SSO via Microsoft, Google, Okta",
    "Role-based access control + audit logging",
    "Query-time redaction and role scoping",
    "Automatic updates and patching",
];

const idealFor = [
    "Teams starting their first AI rollout",
    "Organizations without on-prem AI infrastructure",
    "Pilot programs and proof-of-concept deployments",
    "Teams that want to focus on outcomes, not infrastructure",
];

function CloudDeepDive() {
    return (
        <section id="cloud" className="relative py-28 bg-white overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-100 rounded-full blur-3xl opacity-60" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-6">
                        <Cloud className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-emerald-700 font-medium">
                            Deep Dive · Sorvian Cloud
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight leading-[1.1]">
                        Why Most Teams
                        <br />
                        <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                            Start on Cloud.
                        </span>
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        Sorvian Cloud is the fastest, simplest way to get enterprise-grade
                        AI security into your stack. It&apos;s what we recommend for the vast
                        majority of teams — and it&apos;s the path we optimize for every day.
                    </p>
                </div>

                {/* Zero-Retention Hero */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-8 md:p-12">
                        <div
                            className="absolute inset-0 opacity-30"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at 80% 30%, rgba(16,185,129,0.2), transparent 50%)",
                            }}
                        />
                        <div className="relative grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
                            <div className="w-20 h-20 rounded-3xl bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-xl shadow-emerald-500/30">
                                <Ban className="w-10 h-10 text-white" strokeWidth={2.5} />
                            </div>
                            <div>
                                <p className="text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-3">
                                    The Cloud-Specific Promise
                                </p>
                                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3 leading-tight">
                                    We never store your raw documents.
                                </h3>
                                <p className="text-zinc-600 leading-relaxed">
                                    Your originals live in your source systems — OneDrive,
                                    SharePoint, Google Drive, wherever they already are. Sorvian
                                    Cloud reads them in place, processes them in memory, and
                                    persists only the derived artifacts a frontier model needs
                                    to reason safely. Nothing else.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Four reasons */}
                <div className="max-w-6xl mx-auto mb-20">
                    <div className="text-center mb-10">
                        <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3">
                            Why Cloud
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">
                            Four reasons it&apos;s our default recommendation.
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {reasons.map((r, i) => (
                            <div
                                key={i}
                                className="group bg-zinc-50 border border-zinc-200 rounded-3xl p-7 hover:border-emerald-300 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-5 group-hover:bg-emerald-500 transition-colors">
                                    <r.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-xl font-semibold text-zinc-900 mb-3">
                                    {r.title}
                                </h4>
                                <p className="text-zinc-600 leading-relaxed">
                                    {r.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Included + Ideal For split */}
                <div className="max-w-6xl mx-auto mb-20">
                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* What's included */}
                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10">
                            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-zinc-800">
                                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 ring-1 ring-emerald-500/30 flex items-center justify-center">
                                    <Workflow className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold tracking-widest uppercase text-emerald-400">
                                        Included
                                    </p>
                                    <h4 className="text-xl font-bold text-white">
                                        What you get on Cloud
                                    </h4>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {included.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check
                                            className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5"
                                            strokeWidth={2.5}
                                        />
                                        <span className="text-sm text-zinc-200 leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Ideal For */}
                        <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-3xl p-8 md:p-10">
                            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-emerald-200">
                                <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                                    <Gauge className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold tracking-widest uppercase text-emerald-600">
                                        Ideal For
                                    </p>
                                    <h4 className="text-xl font-bold text-zinc-900">
                                        Who Cloud is built for
                                    </h4>
                                </div>
                            </div>
                            <ul className="space-y-3 mb-6">
                                {idealFor.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Sparkles className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-zinc-700 leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-white border border-emerald-200 rounded-2xl p-4">
                                <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-1">
                                    Not sure?
                                </p>
                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    Start on Cloud. If your security posture ever demands
                                    on-premise, we&apos;ll migrate you to Standard or Fortress
                                    without losing the pipeline you&apos;ve built.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Closing CTA */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-8 md:p-10 text-center">
                        <div
                            className="absolute inset-0 opacity-40"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.2), transparent 60%)",
                            }}
                        />
                        <div className="relative">
                            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm text-emerald-300 font-medium">
                                    Ready to start?
                                </span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                                Get your tenant provisioned in a call.
                            </h3>
                            <p className="text-zinc-400 mb-8 max-w-xl mx-auto leading-relaxed">
                                A 30-minute conversation is usually all it takes to scope your
                                environment, connect your first data source, and run your first
                                role-scoped query.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                <button className="cursor-pointer bg-emerald-500 text-zinc-950 px-6 py-3 rounded-full font-semibold hover:bg-emerald-400 transition-all flex items-center gap-2 group shadow-lg shadow-emerald-500/30">
                                    Book a Cloud Demo
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="cursor-pointer bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 text-white px-6 py-3 rounded-full font-medium hover:bg-zinc-700 transition-all">
                                    Talk to Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CloudDeepDive;
