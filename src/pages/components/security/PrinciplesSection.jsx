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
            "Original content never crosses the trust boundary — under any configuration",
            "Every outbound call is inspected and recorded",
            "A guarantee of the platform, not an optional policy setting",
        ],
    },
    {
        number: "02",
        icon: Server,
        title: "Local-First Processing",
        description:
            "Parsing, anonymization, and classification happen before anything crosses your boundary.",
        details: [
            "All sensitive handling completes before any egress",
            "Applies to both Sorvian Cloud and On-Premise deployments equally",
            "No raw content reaches a frontier model in any mode",
        ],
    },
    {
        number: "03",
        icon: FileText,
        title: "Derived Content Only",
        description:
            "External models receive sanitized summaries, anonymized queries, and stripped context.",
        details: [
            "Frontier models receive a role-scoped, sanitized view — never the source",
            "Raw source material is never substituted by its derivatives",
            "Context is assembled against the boundary, not shipped across it",
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
            "Personal, financial, and identity signals are caught on every query",
            "Sensitive fields are removed or masked before anything leaves",
            "Every decision is logged for audit and replay",
        ],
    },
    {
        number: "06",
        icon: Fingerprint,
        title: "IP Anonymization",
        description:
            "Trade secrets and proprietary logic are transformed before any external query.",
        details: [
            "Proprietary identifiers, codenames, and trade secrets are masked",
            "Anonymization is applied in context — not as a blanket pattern match",
            "Frontier models never see original references to protected IP",
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
