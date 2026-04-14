"use client";

import {
    Search,
    ShieldCheck,
    FileText,
    Users,
    Headphones,
    Check,
    ArrowRight,
    Database,
    Cpu,
    Zap,
    EyeOff,
    Fingerprint,
    Tags,
    Wrench,
    Layers,
} from "lucide-react";

function KnowledgeBaseVisual() {
    return (
        <div className="relative w-full">
            {/* Shared query bar */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-4 shadow-sm mb-4">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 mb-1.5">
                    The Query
                </p>
                <p className="text-zinc-900 font-medium text-sm">
                    &ldquo;How do I configure the failover routing for enterprise plans?&rdquo;
                </p>
            </div>

            {/* Splits to two audiences */}
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
                            <Users className="w-3.5 h-3.5 text-white" />
                        </div>
                        <p className="text-xs font-semibold text-zinc-900">Internal</p>
                    </div>
                    <p className="text-[11px] text-zinc-600 leading-relaxed mb-2">
                        Full engineering runbook with config flags, IP ranges, and
                        schematics.
                    </p>
                    <div className="flex flex-wrap gap-1">
                        <span className="text-[10px] bg-emerald-100 text-emerald-700 rounded-full px-2 py-0.5">
                            runbook
                        </span>
                        <span className="text-[10px] bg-emerald-100 text-emerald-700 rounded-full px-2 py-0.5">
                            schematics
                        </span>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center">
                            <Headphones className="w-3.5 h-3.5 text-white" />
                        </div>
                        <p className="text-xs font-semibold text-zinc-900">Customer</p>
                    </div>
                    <p className="text-[11px] text-zinc-600 leading-relaxed mb-2">
                        Plain-language setup walkthrough with public docs and a link to
                        support.
                    </p>
                    <div className="flex flex-wrap gap-1">
                        <span className="text-[10px] bg-indigo-100 text-indigo-700 rounded-full px-2 py-0.5">
                            public docs
                        </span>
                        <span className="text-[10px] bg-indigo-100 text-indigo-700 rounded-full px-2 py-0.5">
                            walkthrough
                        </span>
                    </div>
                </div>
            </div>

            <p className="text-[11px] text-zinc-500 italic mt-3 text-center">
                Same knowledge base. Audience-aware results.
            </p>
        </div>
    );
}

function SecurityLayerVisual() {
    return (
        <div className="relative w-full">
            {/* Before */}
            <div className="bg-white border border-red-200 rounded-2xl p-5 shadow-sm mb-3">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center">
                        <FileText className="w-3.5 h-3.5 text-red-500" />
                    </div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-red-500">
                        Before — Raw Query Content
                    </p>
                </div>
                <p className="font-mono text-xs text-zinc-700 leading-relaxed">
                    &ldquo;Summarize the employment contract for{" "}
                    <span className="bg-red-100 text-red-700 px-1 rounded">
                        Alex Chen
                    </span>
                    , SSN{" "}
                    <span className="bg-red-100 text-red-700 px-1 rounded">
                        123-45-6789
                    </span>
                    , hired at{" "}
                    <span className="bg-red-100 text-red-700 px-1 rounded">
                        $145,000
                    </span>{" "}
                    on project{" "}
                    <span className="bg-red-100 text-red-700 px-1 rounded">
                        Atlas
                    </span>
                    .&rdquo;
                </p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center mb-3">
                <div className="flex items-center gap-2 bg-white border border-emerald-200 rounded-full px-4 py-2 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-emerald-600">
                        Sorvian Security Layer
                    </span>
                </div>
            </div>

            {/* After */}
            <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-300 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-emerald-600">
                        After — What Public Models Receive
                    </p>
                </div>
                <p className="font-mono text-xs text-zinc-700 leading-relaxed">
                    &ldquo;Summarize the employment contract for{" "}
                    <span className="bg-emerald-100 text-emerald-700 px-1 rounded">
                        [PERSON_01]
                    </span>
                    , ID{" "}
                    <span className="bg-emerald-100 text-emerald-700 px-1 rounded">
                        [ID_REDACTED]
                    </span>
                    , hired at{" "}
                    <span className="bg-emerald-100 text-emerald-700 px-1 rounded">
                        [AMOUNT_TIER_3]
                    </span>{" "}
                    on project{" "}
                    <span className="bg-emerald-100 text-emerald-700 px-1 rounded">
                        [PROJECT_ALIAS_7]
                    </span>
                    .&rdquo;
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-emerald-200">
                    <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-100 text-emerald-700 rounded-full px-2 py-0.5">
                        <EyeOff className="w-2.5 h-2.5" /> PII stripped
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-100 text-emerald-700 rounded-full px-2 py-0.5">
                        <Fingerprint className="w-2.5 h-2.5" /> IP anonymized
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-100 text-emerald-700 rounded-full px-2 py-0.5">
                        <Tags className="w-2.5 h-2.5" /> Sensitivity tagged
                    </span>
                </div>
            </div>
        </div>
    );
}

function DocumentAnalyzerVisual() {
    const steps = [
        { icon: FileText, label: "Ingest", sub: "Any format" },
        { icon: Cpu, label: "Parse", sub: "Local LLMs" },
        { icon: Database, label: "Index", sub: "Vector DB" },
        { icon: Search, label: "Query", sub: "Natural language" },
    ];

    return (
        <div className="relative w-full">
            {/* 4-step pipeline */}
            <div className="grid grid-cols-4 gap-2 mb-5">
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="relative bg-white border border-amber-200 rounded-2xl p-3 flex flex-col items-center text-center shadow-sm"
                    >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[9px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {i + 1}
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center mb-2 mt-1">
                            <step.icon className="w-4 h-4 text-amber-600" />
                        </div>
                        <p className="text-xs font-semibold text-zinc-900">{step.label}</p>
                        <p className="text-[10px] text-zinc-500">{step.sub}</p>
                    </div>
                ))}
            </div>

            {/* Stat strip */}
            <div className="grid grid-cols-3 gap-2">
                <div className="bg-zinc-900 rounded-xl p-3 text-center">
                    <p className="text-xl font-bold text-amber-400 mb-0.5">Any</p>
                    <p className="text-[10px] text-zinc-400">Format supported</p>
                </div>
                <div className="bg-zinc-900 rounded-xl p-3 text-center">
                    <p className="text-xl font-bold text-amber-400 mb-0.5">Auto</p>
                    <p className="text-[10px] text-zinc-400">Classified + tagged</p>
                </div>
                <div className="bg-zinc-900 rounded-xl p-3 text-center">
                    <p className="text-xl font-bold text-amber-400 mb-0.5">Seconds</p>
                    <p className="text-[10px] text-zinc-400">Not hours</p>
                </div>
            </div>

            {/* Format chips */}
            <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                {["PDF", "DOCX", "XLSX", "PPTX", "Images", "Code"].map((f) => (
                    <span
                        key={f}
                        className="text-[10px] bg-white border border-zinc-200 text-zinc-600 rounded-full px-2.5 py-1 font-medium"
                    >
                        {f}
                    </span>
                ))}
            </div>
        </div>
    );
}

const tools = [
    {
        eyebrow: "Tool 01",
        icon: Search,
        accent: "emerald",
        title: "Knowledge Base RAG",
        subtitle: "Internal & Customer-Facing",
        description:
            "A retrieval system powered by your entire knowledge base — manuals, policies, product specs, technical documentation, and more. One system serves two audiences: employees searching internal IP, and customers getting answers drawn from product docs. All queries flow through the security layer automatically.",
        capabilities: [
            "Natural-language search across every connected source",
            "Role-scoped results — the same query returns the right answer for each user",
            "Customer-facing deployment uses your IP to inform answers without exposing it",
            "Audit trail on every retrieval and every frontier-model call",
        ],
        visual: KnowledgeBaseVisual,
        flipped: false,
    },
    {
        eyebrow: "Tool 02",
        icon: ShieldCheck,
        accent: "emerald",
        title: "Security Layer",
        subtitle: "Built In, Not Bolted On",
        description:
            "Security is the foundation of every Sorvian interaction, not an add-on. The security layer enforces PII stripping, IP anonymization, and sensitivity classification on every query — before any data crosses the trust boundary. Governance is enforced inside the pipeline, not in a separate policy engine you have to wire up.",
        capabilities: [
            "Automatic PII detection and removal on every outbound query",
            "Proprietary identifiers rewritten to anonymous placeholders",
            "Sensitivity classification applied to every derived artifact",
            "Enforcement happens before anything reaches an external model — not after",
        ],
        visual: SecurityLayerVisual,
        flipped: true,
    },
    {
        eyebrow: "Tool 03",
        icon: FileText,
        accent: "amber",
        title: "Document Analyzer",
        subtitle: "High-Efficiency Processing",
        description:
            "Point the analyzer at a folder, a SharePoint site, or an S3 bucket and ingest thousands of documents in minutes — contracts, reports, schematics, codebases, images. Local LLMs extract structure, entities, and relationships. Each document is auto-classified with sensitivity tags and indexed into a vector database that&apos;s searchable in natural language.",
        capabilities: [
            "Any format: PDFs, Word, Excel, PowerPoint, code files, images",
            "Auto-classification with sensitivity tags at ingestion time",
            "Entity and relationship extraction for richer retrieval",
            "Thousands of pages indexed and queryable in seconds",
        ],
        visual: DocumentAnalyzerVisual,
        flipped: false,
    },
];

const accentStyles = {
    emerald: {
        chip: "bg-emerald-100 text-emerald-700 border-emerald-200",
        icon: "from-emerald-500 to-teal-600 shadow-emerald-500/30",
        text: "text-emerald-600",
        check: "text-emerald-500",
        link: "bg-emerald-500 hover:bg-emerald-600",
    },
    amber: {
        chip: "bg-amber-100 text-amber-700 border-amber-200",
        icon: "from-amber-500 to-orange-600 shadow-amber-500/30",
        text: "text-amber-600",
        check: "text-amber-500",
        link: "bg-amber-500 hover:bg-amber-600",
    },
};

function ToolsetSection() {
    return (
        <section id="toolset" className="relative py-28 bg-zinc-50 overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-40" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-100 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-6">
                        <Wrench className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-emerald-700 font-medium">
                            The Sorvian Toolset
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight leading-[1.1]">
                        Three Tools.
                        <br />
                        <span className="text-zinc-500">One Secure Pipeline Underneath.</span>
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        Every Sorvian tool is powered by the same distillation pipeline and
                        governed by the same six security principles. Three products today,
                        with more shipping — all built on one universal security layer.
                    </p>
                </div>

                {/* Tool blocks */}
                <div className="space-y-24">
                    {tools.map((tool, i) => {
                        const a = accentStyles[tool.accent];
                        const Visual = tool.visual;
                        return (
                            <div key={i} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                                {/* Text column */}
                                <div className={tool.flipped ? "md:order-2" : ""}>
                                    <div
                                        className={`inline-flex items-center gap-2 border ${a.chip} rounded-full px-3 py-1 mb-5`}
                                    >
                                        <span className="text-[10px] font-semibold tracking-widest uppercase">
                                            {tool.eyebrow}
                                        </span>
                                    </div>
                                    <div
                                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${a.icon} shadow-lg flex items-center justify-center mb-5`}
                                    >
                                        <tool.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <p className={`text-sm font-medium ${a.text} mb-2`}>
                                        {tool.subtitle}
                                    </p>
                                    <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-5 tracking-tight">
                                        {tool.title}
                                    </h3>
                                    <p className="text-zinc-600 leading-relaxed mb-6">
                                        {tool.description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {tool.capabilities.map((c, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <Check
                                                    className={`w-5 h-5 ${a.check} flex-shrink-0 mt-0.5`}
                                                />
                                                <span className="text-sm text-zinc-700 leading-relaxed">
                                                    {c}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Visual column */}
                                <div className={tool.flipped ? "md:order-1" : ""}>
                                    <div className="relative">
                                        {/* Decorative shadow card */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-100 rounded-3xl transform rotate-1 translate-x-2 translate-y-2 -z-10" />
                                        <div className="relative bg-white border border-zinc-200 rounded-3xl p-6 shadow-xl shadow-zinc-900/5">
                                            <Visual />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Closing callout */}
                <div className="mt-24 max-w-4xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden border border-zinc-200 bg-white p-8 md:p-10 shadow-lg">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                                <Layers className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex-1">
                                <p className="text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-2">
                                    One Pipeline. Three Tools. More Coming.
                                </p>
                                <p className="text-xl text-zinc-900 font-medium leading-snug mb-2">
                                    Every new Sorvian capability is built on the same pipeline —
                                    so your security posture never has to catch up with your
                                    product surface.
                                </p>
                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    When we add a tool, it inherits the six principles, the trust
                                    boundary, and the RBAC enforcement. No one-offs, no exceptions.
                                </p>
                            </div>
                            <a
                                href="/security"
                                className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-5 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors text-sm whitespace-nowrap"
                            >
                                See the Security Layer
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ToolsetSection;
