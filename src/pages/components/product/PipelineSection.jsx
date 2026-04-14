"use client";

import {
    FileText,
    Cpu,
    Tags,
    ShieldCheck,
    Database,
    Search,
    Layers,
    ArrowRight,
    Check,
} from "lucide-react";

const stages = [
    {
        number: "01",
        icon: FileText,
        title: "Ingest",
        subtitle: "Any file, any format",
        description:
            "Documents flow in from OneDrive, SharePoint, Google Drive, Jira, Slack, and Teams — PDFs, Word, Excel, PowerPoint, images, code, contracts. MIME-routed to the right parser.",
        outputs: ["Normalized text", "Embedded object manifest", "File metadata"],
    },
    {
        number: "02",
        icon: Cpu,
        title: "Structural Extraction",
        subtitle: "Understand the shape",
        description:
            "Local models identify the document's structure: title, section headers, type, language, and whether it contains tables, images, or code. Fast, deterministic, schema-driven.",
        outputs: ["Document type", "Header hierarchy", "Structural flags"],
    },
    {
        number: "03",
        icon: Tags,
        title: "Semantic Extraction",
        subtitle: "Derive the meaning",
        description:
            "The heavy pass: summaries, keywords, topics, tone, audience, anticipated questions. The pipeline already knows the document type, so interpretation is grounded in context.",
        outputs: [
            "Document + section summaries",
            "Keywords & topics",
            "Possible user questions",
        ],
    },
    {
        number: "04",
        icon: ShieldCheck,
        title: "Entity & Sensitivity",
        subtitle: "Extract and classify",
        description:
            "Named entities, dates, metrics, action items, monetary values, and document references are extracted — and every artifact is tagged with a sensitivity level so downstream queries know what to redact.",
        outputs: ["Named entities", "Sensitivity tags", "Action items & metrics"],
    },
    {
        number: "05",
        icon: Layers,
        title: "Chunk",
        subtitle: "Split with context",
        description:
            "Documents are split along natural section boundaries with token-aware sizing and overlap. Every chunk carries metadata from the prior stages so it travels with its own context.",
        outputs: ["Token-sized chunks", "Section-aware boundaries", "Enriched metadata"],
    },
    {
        number: "06",
        icon: Database,
        title: "Embed & Store",
        subtitle: "Vector-ready",
        description:
            "Chunks, summaries, and anticipated questions are embedded into a pgvector database. Filterable metadata lives in SQL columns for precise, hybrid retrieval.",
        outputs: ["Chunk embeddings", "Supplementary embeddings", "Filterable metadata"],
    },
    {
        number: "07",
        icon: Search,
        title: "Query Securely",
        subtitle: "Sanitized reasoning",
        description:
            "At query time, Sorvian assembles a sanitized, anonymized prompt from derived artifacts and sends it to the frontier model of your choice. Raw sources never leave your walls.",
        outputs: [
            "Role-scoped retrieval",
            "PII-stripped prompts",
            "Reconstructed responses",
        ],
    },
];

function PipelineSection() {
    return (
        <section id="pipeline" className="relative py-28 bg-white overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-teal-100 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-6">
                        <Layers className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-emerald-700 font-medium">
                            The Distillation Pipeline
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight leading-[1.1]">
                        Seven Stages.
                        <br />
                        <span className="text-zinc-500">One Secure Artifact Per Document.</span>
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        The distillation pipeline is Sorvian&apos;s core IP — a universal
                        middleware that turns raw, sensitive documents into safe, queryable
                        knowledge without ever sending originals to a public model.
                    </p>
                </div>

                {/* Pipeline vertical timeline */}
                <div className="max-w-5xl mx-auto">
                    {stages.map((stage, i) => {
                        const isLast = i === stages.length - 1;
                        return (
                            <div key={i} className="relative">
                                {/* Connector line */}
                                {!isLast && (
                                    <div className="absolute left-[23px] md:left-[27px] top-14 bottom-[-2rem] w-0.5 bg-gradient-to-b from-emerald-300 to-emerald-100" />
                                )}

                                <div className="flex gap-5 md:gap-7 mb-8 group">
                                    {/* Number + Icon column */}
                                    <div className="flex flex-col items-center flex-shrink-0 relative z-10">
                                        <div className="relative">
                                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-xl group-hover:shadow-emerald-500/40 transition-all">
                                                <stage.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                            </div>
                                            <div className="absolute -top-1 -right-1 bg-white border-2 border-emerald-500 rounded-full w-6 h-6 flex items-center justify-center">
                                                <span className="text-[10px] font-bold text-emerald-600">
                                                    {stage.number}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content card */}
                                    <div className="flex-1 bg-zinc-50 border border-zinc-200 rounded-2xl p-6 md:p-7 group-hover:border-emerald-300 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-emerald-500/5 transition-all duration-300">
                                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
                                            <h3 className="text-xl md:text-2xl font-bold text-zinc-900">
                                                {stage.title}
                                            </h3>
                                            <p className="text-sm text-emerald-600 font-medium">
                                                {stage.subtitle}
                                            </p>
                                        </div>
                                        <p className="text-zinc-600 leading-relaxed mb-5">
                                            {stage.description}
                                        </p>

                                        {/* Outputs */}
                                        <div className="border-t border-zinc-200 pt-4">
                                            <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 mb-3">
                                                Stage Outputs
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {stage.outputs.map((o, j) => (
                                                    <span
                                                        key={j}
                                                        className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 text-xs text-emerald-700"
                                                    >
                                                        <Check className="w-3 h-3" strokeWidth={3} />
                                                        {o}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Closing callout */}
                <div className="max-w-4xl mx-auto mt-16">
                    <div className="relative rounded-3xl overflow-hidden border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-8 md:p-10">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
                                <ShieldCheck className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex-1">
                                <p className="text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-2">
                                    The Result
                                </p>
                                <p className="text-xl md:text-2xl text-zinc-900 font-medium leading-snug mb-2">
                                    A queryable knowledge layer your AI can see —
                                    <br className="hidden md:block" />
                                    without any raw data your AI can&apos;t.
                                </p>
                                <p className="text-zinc-600 leading-relaxed">
                                    The pipeline runs once per document. The artifacts it produces
                                    power every Sorvian tool and every frontier-model query that
                                    follows — without ever re-exposing the source.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <a
                                href="/security"
                                className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-5 py-2.5 rounded-full font-medium hover:bg-emerald-600 transition-colors text-sm"
                            >
                                Security Architecture
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <button className="inline-flex items-center justify-center gap-2 bg-white border border-zinc-300 text-zinc-700 px-5 py-2.5 rounded-full font-medium hover:bg-zinc-50 transition-colors text-sm">
                                Read the Technical Spec
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PipelineSection;
