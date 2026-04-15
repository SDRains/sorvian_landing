"use client";

import { Search, ShieldCheck, FileText, ArrowRight } from "lucide-react";

const tools = [
    {
        anchor: "#knowledge-base",
        icon: Search,
        accent: "emerald",
        eyebrow: "Tool 01",
        title: "Knowledge Base RAG",
        tagline: "One knowledge base, two audiences — internal teams and customers.",
        bullets: ["Natural-language search", "Role-scoped results", "Full audit trail"],
    },
    {
        anchor: "#security-layer",
        icon: ShieldCheck,
        accent: "indigo",
        eyebrow: "Tool 02",
        title: "Security Layer",
        tagline:
            "Automatic PII stripping, IP anonymization, and sensitivity classification on every query.",
        bullets: [
            "PII detection on egress",
            "IP anonymization in context",
            "Enforcement inside the pipeline",
        ],
    },
    {
        anchor: "#document-analyzer",
        icon: FileText,
        accent: "amber",
        eyebrow: "Tool 03",
        title: "Document Analyzer",
        tagline:
            "Ingest thousands of documents in any format and query them in natural language.",
        bullets: ["Any format supported", "Auto-classified on ingestion", "Searchable in seconds"],
    },
];

const accents = {
    emerald: {
        eyebrow: "text-emerald-600",
        iconBg: "from-emerald-500 to-teal-600 shadow-emerald-500/30",
        hoverBorder: "hover:border-emerald-300",
        dot: "bg-emerald-500",
        link: "text-emerald-600 hover:text-emerald-700",
    },
    indigo: {
        eyebrow: "text-indigo-600",
        iconBg: "from-indigo-500 to-purple-600 shadow-indigo-500/30",
        hoverBorder: "hover:border-indigo-300",
        dot: "bg-indigo-500",
        link: "text-indigo-600 hover:text-indigo-700",
    },
    amber: {
        eyebrow: "text-amber-600",
        iconBg: "from-amber-500 to-orange-600 shadow-amber-500/30",
        hoverBorder: "hover:border-amber-300",
        dot: "bg-amber-500",
        link: "text-amber-600 hover:text-amber-700",
    },
};

function ToolsOverview() {
    return (
        <section id="overview" className="relative py-24 bg-white overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl opacity-80" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-50 rounded-full blur-3xl opacity-80" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14 max-w-3xl mx-auto">
                    <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3">
                        At a Glance
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">
                        Pick where to start.
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        Each tool is a standalone product — use one, use all three, or
                        combine them into a single AI stack your whole org can trust.
                    </p>
                </div>

                {/* Tool cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {tools.map((tool, i) => {
                        const a = accents[tool.accent];
                        return (
                            <a
                                key={i}
                                href={tool.anchor}
                                className={`group block bg-zinc-50 border border-zinc-200 rounded-3xl p-7 ${a.hoverBorder} hover:bg-white hover:shadow-xl hover:shadow-zinc-900/5 transition-all duration-300`}
                            >
                                <div
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.iconBg} shadow-lg flex items-center justify-center mb-5`}
                                >
                                    <tool.icon className="w-6 h-6 text-white" />
                                </div>
                                <p className={`text-[10px] font-semibold tracking-widest uppercase ${a.eyebrow} mb-2`}>
                                    {tool.eyebrow}
                                </p>
                                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                                    {tool.title}
                                </h3>
                                <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                                    {tool.tagline}
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {tool.bullets.map((b, j) => (
                                        <li
                                            key={j}
                                            className="flex items-center gap-2.5 text-xs text-zinc-600"
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                                <span
                                    className={`inline-flex items-center gap-1.5 text-sm font-medium ${a.link} transition-colors`}
                                >
                                    Explore
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ToolsOverview;
