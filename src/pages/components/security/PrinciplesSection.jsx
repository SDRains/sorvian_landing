"use client";

import {
    Ban,
    Server,
    FileText,
    Database,
    EyeOff,
    Fingerprint,
    ShieldCheck,
} from "lucide-react";

const principles = [
    {
        number: "01",
        icon: Ban,
        title: "Zero Raw Data Transmission",
        description:
            "No original documents, PII, or proprietary IP is ever sent to public AI models.",
        details: [
            "Every outbound request is intercepted and sanitized",
            "Raw source material never crosses the trust boundary",
            "Enforced at the pipeline layer — not an optional policy",
        ],
    },
    {
        number: "02",
        icon: Server,
        title: "Local-First Processing",
        description:
            "Parsing, anonymization, and classification happen before anything crosses your boundary.",
        details: [
            "Mid-range local LLMs handle the heavy ingestion work",
            "Sensitivity classification runs before any egress",
            "Available on Cloud (isolated AWS), Standard (VPC), and Fortress (air-gap)",
        ],
    },
    {
        number: "03",
        icon: FileText,
        title: "Derived Content Only",
        description:
            "External models receive sanitized summaries, anonymized queries, and stripped context.",
        details: [
            "Frontier models see a derived view — never the source",
            "Summaries, embeddings, and entities replace raw payloads",
            "Query-time context is assembled from sanitized artifacts",
        ],
    },
    {
        number: "04",
        icon: Database,
        title: "No Third-Party Storage",
        description:
            "Sorvian never retains your raw data. Derived artifacts stay under your control.",
        details: [
            "Raw documents are not persisted in Sorvian infrastructure",
            "Originals are accessed in place from your source systems",
            "You control retention, deletion, and audit at the source",
        ],
    },
    {
        number: "05",
        icon: EyeOff,
        title: "Automatic PII Stripping",
        description:
            "Personal and sensitive information is identified and removed before egress.",
        details: [
            "Names, emails, IDs, and financial details are detected",
            "Pattern-based and model-based detection working in concert",
            "Sensitivity classification is logged for every artifact",
        ],
    },
    {
        number: "06",
        icon: Fingerprint,
        title: "IP Anonymization",
        description:
            "Trade secrets and proprietary logic are transformed before any external query.",
        details: [
            "Internal codenames, identifiers, and IP are rewritten",
            "Domain-specific entities are anonymized in context",
            "Original references are reconstructed on the response path",
        ],
    },
];

function PrinciplesSection() {
    return (
        <section
            id="principles"
            className="relative py-28 bg-white overflow-hidden"
        >
            {/* Background accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-teal-100 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-6">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-emerald-700 font-medium">
                            Core Principles
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight leading-[1.1]">
                        Six Non-Negotiables
                        <br />
                        <span className="text-zinc-500">That Govern Everything.</span>
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        Every part of the Sorvian platform — from the ingestion pipeline to
                        query routing — is enforced against these principles. They are not
                        configurable toggles.
                    </p>
                </div>

                {/* Principles Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {principles.map((principle, i) => (
                        <div
                            key={i}
                            className="group relative bg-zinc-50 border border-zinc-200 rounded-3xl p-8 hover:border-emerald-300 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
                        >
                            {/* Number watermark */}
                            <div className="absolute top-6 right-6 text-5xl font-bold text-zinc-200 group-hover:text-emerald-100 transition-colors select-none">
                                {principle.number}
                            </div>

                            {/* Icon */}
                            <div className="relative w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-5 group-hover:bg-emerald-500 transition-colors">
                                <principle.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                            </div>

                            {/* Title & Description */}
                            <h3 className="relative text-xl font-semibold text-zinc-900 mb-3">
                                {principle.title}
                            </h3>
                            <p className="relative text-zinc-600 leading-relaxed mb-5">
                                {principle.description}
                            </p>

                            {/* Details */}
                            <ul className="relative border-t border-zinc-200 pt-5 space-y-2">
                                {principle.details.map((d, j) => (
                                    <li
                                        key={j}
                                        className="flex items-start gap-2.5 text-sm text-zinc-600"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
                                        <span className="leading-relaxed">{d}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PrinciplesSection;
