"use client";

import {
    Search,
    Users,
    Headphones,
    Code2,
    FileCheck,
    Scale,
    BookOpen,
    MessageSquare,
    Ticket,
    Check,
    ArrowRight,
    Sparkles,
} from "lucide-react";

const internalUseCases = [
    {
        icon: Code2,
        title: "Engineering & Product",
        description:
            "Query architecture docs, codebases, ADRs, and runbooks in plain language. Schematics stay protected, answers stay in scope.",
    },
    {
        icon: Scale,
        title: "Legal & Compliance",
        description:
            "Pull from contracts, policies, and regulatory guidance with confidence that redactions follow role, not guesswork.",
    },
    {
        icon: FileCheck,
        title: "HR & People Ops",
        description:
            "Surface policy answers for employees while keeping individual records restricted to the right roles.",
    },
];

const customerUseCases = [
    {
        icon: Headphones,
        title: "Support & Success",
        description:
            "Deliver instant, accurate answers drawn from product documentation — without ever exposing proprietary IP.",
    },
    {
        icon: BookOpen,
        title: "Self-Serve Help",
        description:
            "Power public help centers and chat with a knowledge base that stays current with every internal doc update.",
    },
    {
        icon: Ticket,
        title: "Ticket Deflection",
        description:
            "Reduce support load by answering the routine questions before they become tickets — with sources cited.",
    },
];

const capabilities = [
    {
        eyebrow: "Retrieval",
        title: "Natural-language search across every source",
        description:
            "Ask questions the way you'd ask a colleague. The pipeline assembles context from every connected knowledge source — no query syntax, no keyword hacking.",
    },
    {
        eyebrow: "Governance",
        title: "Role-scoped results on every response",
        description:
            "The same query returns the right answer for each user. Redactions happen in-flight, before the response is ever composed, not after.",
    },
    {
        eyebrow: "Accountability",
        title: "Audit trail on every retrieval",
        description:
            "Every query, every source, every frontier-model call is logged. Replay any interaction to understand exactly what happened and why.",
    },
    {
        eyebrow: "Trust",
        title: "Proprietary IP stays proprietary",
        description:
            "Customer-facing deployments use your internal knowledge to inform answers without exposing source documents, codenames, or protected identifiers.",
    },
];

function QueryScenario() {
    return (
        <div className="relative bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden">
            {/* Accent glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

            {/* Window chrome */}
            <div className="relative flex items-center gap-2 mb-6 pb-4 border-b border-zinc-800">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs text-zinc-500 font-mono">
                    sorvian.ai / knowledge-base
                </span>
            </div>

            {/* Query */}
            <div className="relative mb-5">
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-4 h-4 text-zinc-400" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 mb-1">
                            User Query
                        </p>
                        <p className="text-white font-medium">
                            &ldquo;What&apos;s our policy on contractor NDAs for overseas
                            engagements?&rdquo;
                        </p>
                    </div>
                </div>
            </div>

            {/* Pipeline chip */}
            <div className="relative flex items-center gap-3 mb-5 px-3">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-emerald-400">
                        Sorvian Pipeline
                    </span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
            </div>

            {/* Response */}
            <div className="relative">
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                        <Search className="w-4 h-4 text-zinc-950" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px] font-semibold tracking-widest uppercase text-emerald-400 mb-1">
                            Role-Scoped Answer
                        </p>
                        <p className="text-zinc-200 leading-relaxed mb-3">
                            Contractor NDAs for overseas engagements require the standard MSA
                            addendum plus jurisdiction-specific clauses — see the approval
                            workflow in the legal handbook.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 bg-zinc-800 border border-zinc-700 rounded-full px-2.5 py-1 text-[10px] text-zinc-300">
                                <FileCheck className="w-3 h-3 text-emerald-400" />
                                Legal Handbook · §4.2
                            </span>
                            <span className="inline-flex items-center gap-1.5 bg-zinc-800 border border-zinc-700 rounded-full px-2.5 py-1 text-[10px] text-zinc-300">
                                <FileCheck className="w-3 h-3 text-emerald-400" />
                                MSA Template · 2024.11
                            </span>
                            <span className="inline-flex items-center gap-1.5 bg-zinc-800 border border-zinc-700 rounded-full px-2.5 py-1 text-[10px] text-zinc-300">
                                <FileCheck className="w-3 h-3 text-emerald-400" />
                                Jurisdiction Matrix
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <p className="relative mt-6 pt-4 border-t border-zinc-800 text-[11px] text-zinc-500 italic text-center">
                Sources cited. Role-scoped. Proprietary IP never reaches the frontier model.
            </p>
        </div>
    );
}

function KnowledgeBaseSection() {
    return (
        <section
            id="knowledge-base"
            className="relative py-28 bg-zinc-50 overflow-hidden"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-100 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-6">
                        <Search className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-emerald-700 font-medium">
                            Tool 01 · Knowledge Base RAG
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight leading-[1.1]">
                        One Knowledge Base.
                        <br />
                        <span className="text-zinc-500">Every Audience Scoped Correctly.</span>
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        A retrieval system powered by your entire organization — manuals,
                        policies, code, contracts, and tickets — serving both internal
                        teams and external customers from the same secure foundation.
                    </p>
                </div>

                {/* Hero scenario row */}
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
                    <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3">
                            How It Works
                        </p>
                        <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-5 tracking-tight">
                            Ask. Retrieve. Answer.
                        </h3>
                        <p className="text-zinc-600 leading-relaxed mb-6">
                            Every question flows through the Sorvian pipeline before
                            anything reaches a frontier model. Context is assembled from
                            your connected sources, scoped to the requesting user, and
                            sanitized at the boundary. The answer comes back with sources,
                            citations, and an audit entry.
                        </p>
                        <div className="space-y-3">
                            {[
                                "Searches every connected source in a single query",
                                "Redacts sensitive fields in-flight, not after",
                                "Returns citations with every answer",
                                "Logs every retrieval for compliance replay",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-zinc-700 leading-relaxed">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <QueryScenario />
                    </div>
                </div>

                {/* Two audiences */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3">
                            Two Audiences
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">
                            Same foundation. Different experiences.
                        </h3>
                        <p className="text-zinc-600 leading-relaxed max-w-2xl mx-auto">
                            One knowledge base serves both sides of the org — with
                            authorization and scoping baked in, not stapled on.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Internal */}
                        <div className="bg-white border border-zinc-200 rounded-3xl p-7 md:p-8">
                            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-zinc-200">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold tracking-widest uppercase text-emerald-600">
                                        Internal Teams
                                    </p>
                                    <h4 className="text-xl font-bold text-zinc-900">
                                        Employees query internal IP
                                    </h4>
                                </div>
                            </div>
                            <ul className="space-y-5">
                                {internalUseCases.map((u, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                            <u.icon className="w-4 h-4 text-emerald-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-zinc-900 mb-1 text-sm">
                                                {u.title}
                                            </p>
                                            <p className="text-sm text-zinc-600 leading-relaxed">
                                                {u.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Customer-Facing */}
                        <div className="bg-white border border-zinc-200 rounded-3xl p-7 md:p-8">
                            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-zinc-200">
                                <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center">
                                    <Headphones className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold tracking-widest uppercase text-indigo-600">
                                        Customer-Facing
                                    </p>
                                    <h4 className="text-xl font-bold text-zinc-900">
                                        Customers get instant answers
                                    </h4>
                                </div>
                            </div>
                            <ul className="space-y-5">
                                {customerUseCases.map((u, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                                            <u.icon className="w-4 h-4 text-indigo-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-zinc-900 mb-1 text-sm">
                                                {u.title}
                                            </p>
                                            <p className="text-sm text-zinc-600 leading-relaxed">
                                                {u.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Capabilities */}
                <div>
                    <div className="text-center mb-10">
                        <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3">
                            Capabilities
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">
                            What you get out of the box.
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        {capabilities.map((c, i) => (
                            <div
                                key={i}
                                className="group bg-white border border-zinc-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300"
                            >
                                <p className="text-[10px] font-semibold tracking-widest uppercase text-emerald-600 mb-2">
                                    {c.eyebrow}
                                </p>
                                <h4 className="text-lg font-semibold text-zinc-900 mb-2">
                                    {c.title}
                                </h4>
                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    {c.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Cross-link */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href="/security#access-control"
                            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors"
                        >
                            See role-scoped access in detail
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default KnowledgeBaseSection;
