"use client";

import Image from "next/image";
import {
    Plug,
    Clock,
    ArrowRight,
    Sparkles,
    Check,
} from "lucide-react";

const knowledgeSources = [
    {
        name: "SharePoint",
        logo: "/connection_logos/sharepoint.png",
        description: "Index documents in place across every site collection in your organization.",
    },
    {
        name: "OneDrive",
        logo: "/connection_logos/onedrive.png",
        description: "Business, personal and shared libraries, no copies required.",
    },
    {
        name: "Google Drive",
        logo: "/connection_logos/google_drive.png",
        description: "Docs, Sheets, Slides, and PDFs across your workspace.",
    },
    {
        name: "Microsoft Teams",
        logo: "/connection_logos/teams.png",
        description: "Channels, messages, and shared files as knowledge context.",
    },
    {
        name: "Slack",
        logo: "/connection_logos/slack.png",
        description: "Conversations and threads as first-class retrievable context.",
    },
    {
        name: "Jira",
        logo: "/connection_logos/jira.png",
        description: "Tickets, epics, and sprint context available to internal queries.",
    },
    {
        name: "Salesforce",
        logo: "/connection_logos/salesforce.png",
        description: "Tickets, epics, and sprint context available to internal queries.",
    },
    {
        name: "ServiceNow",
        logo: "/connection_logos/servicenow.webp",
        description: "Tickets, epics, and sprint context available to internal queries.",
    },
    {
        name: "FreshService",
        logo: "/connection_logos/freshservice.png",
        description: "Tickets, epics, and sprint context available to internal queries.",
    },
];

const aiProviders = [
    {
        name: "Claude",
        logo: "/ai_logos/claude.svg",
        description: "Anthropic frontier models.",
    },
    {
        name: "OpenAI",
        logo: "/ai_logos/openai.svg",
        description: "GPT-family models.",
    },
    {
        name: "Gemini",
        logo: "/ai_logos/gemini.png",
        description: "Google DeepMind models.",
    },
    {
        name: "Ollama",
        logo: "/ai_logos/ollama.png",
        description: "Local-first open-weight models.",
    },
];

const comingSoon = [];

function IntegrationsSection() {
    return (
        <section id="integrations" className="relative py-28 bg-white overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-6">
                        <Plug className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-emerald-700 font-medium">
                            Integrations
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight leading-[1.1]">
                        Connects to the Tools
                        <br />
                        <span className="text-zinc-500">You Already Use.</span>
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        Sorvian plugs into your existing knowledge sources and frontier
                        models — zero changes required to your file structure or workflows.
                        Documents are indexed in place, and you can swap AI providers without
                        re-ingesting a thing.
                    </p>
                </div>

                {/* Knowledge Sources */}
                <div className="mb-16">
                    <div className="flex items-end justify-between mb-6">
                        <div>
                            <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-2">
                                Knowledge Sources &amp; Tools
                            </p>
                            <h3 className="text-2xl font-bold text-zinc-900">
                                Where Your Data Already Lives
                            </h3>
                        </div>
                        <span className="hidden sm:inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
                            <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
                            <span className="text-xs font-medium text-emerald-700">
                                Available now
                            </span>
                        </span>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {knowledgeSources.map((source, i) => (
                            <div
                                key={i}
                                className="group bg-zinc-50 border border-zinc-200 rounded-2xl p-5 hover:border-emerald-300 hover:bg-white hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center flex-shrink-0 group-hover:border-emerald-200 transition-colors">
                                        <Image
                                            src={source.logo}
                                            alt={source.name}
                                            width={28}
                                            height={28}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-zinc-900 mb-0.5">
                                            {source.name}
                                        </p>
                                        <p className="text-xs text-zinc-500 leading-snug">
                                            {source.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI Providers */}
                <div className="mb-16">
                    <div className="flex items-end justify-between mb-6">
                        <div>
                            <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 mb-2">
                                AI Providers
                            </p>
                            <h3 className="text-2xl font-bold text-zinc-900">
                                Utilize Powerful Frontier Models
                            </h3>
                        </div>
                        <span className="hidden sm:inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-3 py-1">
                            <Check className="w-3.5 h-3.5 text-indigo-600" strokeWidth={3} />
                            <span className="text-xs font-medium text-indigo-700">
                                Available now
                            </span>
                        </span>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {aiProviders.map((p, i) => (
                            <div
                                key={i}
                                className="group bg-zinc-50 border border-zinc-200 rounded-2xl p-5 hover:border-indigo-300 hover:bg-white hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 text-center"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center mx-auto mb-3 group-hover:border-indigo-200 transition-colors">
                                    <Image
                                        src={p.logo}
                                        alt={p.name}
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                </div>
                                <p className="font-semibold text-zinc-900 mb-0.5">
                                    {p.name}
                                </p>
                                <p className="text-xs text-zinc-500">
                                    {p.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Coming Soon */}
                {comingSoon.length > 0 && (
                    <div className="mb-14">
                        <div className="flex items-end justify-between mb-6">
                            <div>
                                <p className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-2">
                                    On the Roadmap
                                </p>
                                <h3 className="text-2xl font-bold text-zinc-900">
                                    Shipping next
                                </h3>
                            </div>
                            <span className="hidden sm:inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
                            <Clock className="w-3.5 h-3.5 text-amber-600" />
                            <span className="text-xs font-medium text-amber-700">
                                Coming soon
                            </span>
                        </span>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-4">
                            {comingSoon.map((c, i) => (
                                <div
                                    key={i}
                                    className="relative bg-zinc-50 border border-dashed border-zinc-300 rounded-2xl p-5 overflow-hidden"
                                >
                                    <div className="absolute top-3 right-3 inline-flex items-center gap-1 bg-amber-100 border border-amber-200 rounded-full px-2 py-0.5">
                                        <Clock className="w-3 h-3 text-amber-600" />
                                        <span className="text-[10px] font-semibold text-amber-700 tracking-wide uppercase">
                                        Soon
                                    </span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center flex-shrink-0">
                                        <span className="text-zinc-400 font-bold text-lg">
                                            {c.name.charAt(0)}
                                        </span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-zinc-900 mb-0.5">
                                                {c.name}
                                            </p>
                                            <p className="text-xs text-zinc-500 tracking-wide uppercase">
                                                {c.category}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Bottom callout */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-emerald-50 via-white to-indigo-50 p-8 md:p-10">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center flex-shrink-0">
                                <Sparkles className="w-7 h-7 text-emerald-400" />
                            </div>
                            <div className="flex-1">
                                <p className="text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-2">
                                    Don&apos;t see your tool?
                                </p>
                                <p className="text-xl text-zinc-900 font-medium leading-snug mb-2">
                                    The distillation pipeline is source-agnostic.
                                </p>
                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    New connectors are designed to drop into the existing pipeline
                                    without changing the security model. If you need a specific
                                    integration, tell us — it&apos;s often a days-long build, not weeks.
                                </p>
                            </div>
                            <button className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-5 py-3 rounded-full font-medium hover:bg-zinc-800 transition-colors text-sm whitespace-nowrap">
                                Request a Connector
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntegrationsSection;
