"use client";

import { useState } from "react";
import {
    ChevronDown,
    MapPin,
    Clock,
    ArrowRight,
    Briefcase,
    Server,
    HeartHandshake,
    Cpu,
} from "lucide-react";

const positions = [
    // --- Backend ---
    {
        id: "senior-backend-engineer",
        title: "Senior Backend Engineer",
        department: "Backend",
        location: "Remote · US / Europe",
        type: "Full-time",
        about:
            "Own core pieces of the Sorvian pipeline — the ingestion, distillation, and retrieval surfaces that every tool and integration is built on. Work closely with research and product to ship capabilities that extend the platform without weakening the trust boundary.",
        responsibilities: [
            "Design and ship backend services powering the distillation pipeline",
            "Own end-to-end reliability and performance of core services",
            "Mentor mid-level engineers through code review and design docs",
            "Partner with security to make enforcement a first-class concern in every service",
        ],
        requirements: [
            "6+ years of backend engineering experience",
            "Deep expertise in Python (Django, FastAPI, or similar)",
            "Strong relational database experience — PostgreSQL preferred",
            "Comfort with async task queues, background jobs, and long-running workloads",
            "Track record of shipping production systems with real SLAs",
        ],
        nice: [
            "Experience with pgvector, vector search, or RAG systems",
            "Experience in enterprise security, compliance, or data governance",
            "Open-source contributions",
        ],
    },
    {
        id: "staff-platform-engineer",
        title: "Staff Platform Engineer",
        department: "Backend",
        location: "Remote · US",
        type: "Full-time",
        about:
            "Architect the infrastructure that runs Sorvian Cloud on AWS and supports on-premise deployments at major enterprises. Drive the platform decisions that keep the product fast, safe, and operationally boring.",
        responsibilities: [
            "Own the AWS architecture powering Sorvian Cloud — tenancy, networking, security",
            "Lead platform roadmap for observability, deployment, and incident response",
            "Partner with enterprise teams on customer-hosted Fortress deployments",
            "Define and evangelize engineering standards across the team",
        ],
        requirements: [
            "8+ years of infrastructure or platform engineering experience",
            "Deep AWS expertise — VPC, IAM, EKS/ECS, multi-region patterns",
            "Infrastructure-as-code fluency (Terraform / Pulumi / CDK)",
            "Experience with multi-tenant SaaS architectures and isolation models",
            "Strong security instincts and familiarity with SOC 2 / ISO controls",
        ],
        nice: [
            "Experience with air-gapped or sovereign deployments",
            "Kubernetes operator experience",
            "Prior staff-level role at a security or data infrastructure company",
        ],
    },
    {
        id: "backend-engineer-data",
        title: "Backend Engineer, Data Pipelines",
        department: "Backend",
        location: "Remote · US / Europe",
        type: "Full-time",
        about:
            "Build the data pipelines that move documents from customer source systems through the distillation pipeline and into the queryable knowledge layer. Optimize for throughput, reliability, and the strict constraints of the Sorvian security model.",
        responsibilities: [
            "Design scalable ingestion paths for large document sets",
            "Build connectors for new source systems (CRMs, file systems, ticketing)",
            "Improve throughput and resilience of long-running processing jobs",
            "Work with security to ensure derived artifacts stay within policy",
        ],
        requirements: [
            "4+ years of backend experience with a data processing focus",
            "Strong Python skills; comfort with Django or a similar framework",
            "Experience with Celery, RQ, or similar distributed task systems",
            "Hands-on experience with document parsing (PDF, DOCX, XLSX, etc.)",
        ],
        nice: [
            "Experience with OCR, parsing edge cases, or file-format quirks",
            "Familiarity with vectorization and embedding workflows",
        ],
    },

    // --- Consulting ---
    {
        id: "senior-solutions-architect",
        title: "Senior Solutions Architect",
        department: "Consulting",
        location: "Remote · US / Europe",
        type: "Full-time",
        about:
            "Lead technical engagements with prospective and new customers — scoping environments, designing deployments, and making sure every rollout lands successfully. You&apos;ll work across product, engineering, and sales as the customer&apos;s technical champion at Sorvian.",
        responsibilities: [
            "Lead discovery calls with prospective customers and their security teams",
            "Design Cloud, Standard, and Fortress deployments for each environment",
            "Own technical relationships through go-live and into expansion",
            "Capture patterns from the field and feed them back into product",
        ],
        requirements: [
            "6+ years in solutions architecture, sales engineering, or consulting",
            "Experience selling to or inside enterprise security and IT teams",
            "Strong technical fluency — you can read a VPC diagram and write a query",
            "Excellent written communication — you&apos;ll author architecture docs and RFPs",
        ],
        nice: [
            "Experience with SIEM, CASB, DLP, or enterprise data governance tools",
            "Prior consulting background at a Big 4 or equivalent",
        ],
    },
    {
        id: "customer-success-engineer",
        title: "Customer Success Engineer",
        department: "Consulting",
        location: "Remote · US",
        type: "Full-time",
        about:
            "Partner with customers post-sale to turn a Sorvian rollout into real adoption. You&apos;ll own the onboarding experience, run enablement sessions, and be the first line for any technical question a customer has.",
        responsibilities: [
            "Run onboarding and enablement for new customer accounts",
            "Triage and resolve technical questions and configuration issues",
            "Build customer-facing documentation, runbooks, and playbooks",
            "Partner with engineering on fixes and feature requests",
        ],
        requirements: [
            "3+ years in customer success engineering, technical support, or similar",
            "Strong technical aptitude — you can reproduce bugs and read logs",
            "Outstanding communication skills, both written and live",
            "Experience with enterprise B2B SaaS",
        ],
        nice: [
            "Familiarity with RAG, LLMs, or AI security",
            "Experience with technical writing and documentation",
        ],
    },
    {
        id: "deployment-consultant",
        title: "Deployment Consultant, Enterprise",
        department: "Consulting",
        location: "Hybrid · New York, San Francisco",
        type: "Full-time",
        about:
            "Embed with strategic enterprise customers during complex Fortress rollouts — sovereign deployments, multi-region topologies, and integrations with regulated systems. Own technical delivery end to end.",
        responsibilities: [
            "Scope and execute multi-phase enterprise rollouts",
            "Travel to customer sites for on-prem installs and workshops",
            "Coordinate across Sorvian engineering, customer IT, and security teams",
            "Produce detailed implementation plans and run-of-show docs",
        ],
        requirements: [
            "7+ years in consulting, professional services, or enterprise delivery",
            "Experience with on-premise software deployments and change management",
            "Willingness to travel (≈25%)",
            "Strong project management instincts",
        ],
        nice: [
            "Public sector, financial services, or healthcare deployment experience",
            "Background in IT transformation or zero-trust programs",
        ],
    },

    // --- AI Engineering ---
    {
        id: "senior-ai-ml-engineer",
        title: "Senior AI / ML Engineer",
        department: "AI Engineering",
        location: "Remote · US / Europe",
        type: "Full-time",
        about:
            "Own the models and model-adjacent systems at the heart of the distillation pipeline. You&apos;ll drive how Sorvian comprehends, classifies, and transforms documents — from prototype to production.",
        responsibilities: [
            "Design and evaluate models that power comprehension and classification",
            "Ship production ML systems with real latency and quality targets",
            "Instrument models with robust offline and online evaluation",
            "Partner with research on novel pipeline capabilities",
        ],
        requirements: [
            "5+ years of applied ML experience with production systems",
            "Strong Python fundamentals and ML engineering skills",
            "Experience with modern LLMs, embedding models, and retrieval systems",
            "Track record of shipping — not just researching",
        ],
        nice: [
            "Experience with local / on-device LLM inference",
            "Familiarity with model evaluation frameworks and golden-set workflows",
        ],
    },
    {
        id: "ai-research-engineer",
        title: "AI Research Engineer",
        department: "AI Engineering",
        location: "Remote · Global",
        type: "Full-time",
        about:
            "Push the research frontier inside Sorvian&apos;s pipeline — better comprehension, better governance, better retrieval. Move between paper and production faster than most research orgs can, because the pipeline is our product.",
        responsibilities: [
            "Identify, prototype, and evaluate new research directions",
            "Author internal technical memos and externally published research",
            "Collaborate closely with AI / ML engineers on productionization",
            "Contribute to evaluation and benchmarking of model-driven capabilities",
        ],
        requirements: [
            "PhD or equivalent experience in NLP, ML, or information retrieval",
            "Demonstrated publication history or equivalent industry research output",
            "Comfort in the codebase — research that can&apos;t ship doesn&apos;t help us",
            "Clear, honest technical communication",
        ],
        nice: [
            "Experience with privacy-preserving ML, redaction, or anonymization research",
            "Prior work on enterprise or regulated-domain ML systems",
        ],
    },
    {
        id: "applied-ai-engineer",
        title: "Applied AI Engineer",
        department: "AI Engineering",
        location: "Remote · US / Europe",
        type: "Full-time",
        about:
            "Turn customer use cases into applied ML wins. You&apos;ll sit at the boundary between customer teams and the pipeline, building extensions, evaluators, and demos that prove the Sorvian approach on real data.",
        responsibilities: [
            "Prototype applied capabilities for customer-specific use cases",
            "Build evaluation datasets and harnesses against customer proxies",
            "Own small, focused improvements that ship continuously",
            "Translate between customer language and ML concepts",
        ],
        requirements: [
            "3+ years of applied ML or ML engineering experience",
            "Strong software engineering fundamentals",
            "Experience with retrieval systems, classification, or entity extraction",
            "Comfort shipping iteratively with a product mindset",
        ],
        nice: [
            "Experience in consulting or sales engineering alongside ML work",
            "Contributions to open-source ML tooling",
        ],
    },
];

const departments = [
    { key: "all", label: "All Roles", icon: Briefcase },
    { key: "Backend", label: "Backend", icon: Server },
    { key: "Consulting", label: "Consulting", icon: HeartHandshake },
    { key: "AI Engineering", label: "AI Engineering", icon: Cpu },
];

const departmentStyles = {
    Backend: {
        chip: "bg-emerald-50 text-emerald-700 border-emerald-200",
        dot: "bg-emerald-500",
    },
    Consulting: {
        chip: "bg-indigo-50 text-indigo-700 border-indigo-200",
        dot: "bg-indigo-500",
    },
    "AI Engineering": {
        chip: "bg-amber-50 text-amber-700 border-amber-200",
        dot: "bg-amber-500",
    },
};

function OpenPositionsSection() {
    const [activeDept, setActiveDept] = useState("all");
    const [expandedId, setExpandedId] = useState(null);

    const filtered =
        activeDept === "all"
            ? positions
            : positions.filter((p) => p.department === activeDept);

    const toggle = (id) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    const countByDept = (dept) =>
        dept === "all"
            ? positions.length
            : positions.filter((p) => p.department === dept).length;

    return (
        <section
            id="open-positions"
            className="relative py-28 bg-zinc-50 overflow-hidden"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-40" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-100 rounded-full blur-3xl opacity-40" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-6">
                        <Briefcase className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-emerald-700 font-medium">
                            Open Positions
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight leading-[1.1]">
                        We&apos;re hiring across
                        <br />
                        <span className="text-zinc-500">every part of the team.</span>
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
                        {positions.length} open roles — remote-first, with some hybrid
                        positions in New York and San Francisco.
                    </p>
                </div>

                {/* Filter tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                    {departments.map((d) => {
                        const Icon = d.icon;
                        const active = activeDept === d.key;
                        return (
                            <button
                                key={d.key}
                                onClick={() => {
                                    setActiveDept(d.key);
                                    setExpandedId(null);
                                }}
                                className={`cursor-pointer inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all border ${
                                    active
                                        ? "bg-zinc-900 text-white border-zinc-900"
                                        : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400"
                                }`}
                            >
                                <Icon className="w-4 h-4" />
                                {d.label}
                                <span
                                    className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-bold ${
                                        active
                                            ? "bg-emerald-500 text-zinc-950"
                                            : "bg-zinc-100 text-zinc-600"
                                    }`}
                                >
                                    {countByDept(d.key)}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Position list */}
                <div className="space-y-3">
                    {filtered.map((p) => {
                        const isOpen = expandedId === p.id;
                        const ds = departmentStyles[p.department];
                        return (
                            <div
                                key={p.id}
                                className={`bg-white border rounded-2xl transition-all duration-300 overflow-hidden ${
                                    isOpen
                                        ? "border-emerald-300 shadow-xl shadow-emerald-500/5"
                                        : "border-zinc-200 hover:border-zinc-300"
                                }`}
                            >
                                {/* Row */}
                                <button
                                    onClick={() => toggle(p.id)}
                                    className="cursor-pointer w-full flex items-center gap-4 p-5 md:p-6 text-left"
                                >
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center flex-wrap gap-2 mb-2">
                                            <span
                                                className={`inline-flex items-center gap-1.5 border rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase ${ds.chip}`}
                                            >
                                                <span className={`w-1.5 h-1.5 rounded-full ${ds.dot}`} />
                                                {p.department}
                                            </span>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-zinc-900 mb-1.5">
                                            {p.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500">
                                            <span className="inline-flex items-center gap-1.5">
                                                <MapPin className="w-3.5 h-3.5" />
                                                {p.location}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" />
                                                {p.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                                            isOpen
                                                ? "bg-emerald-500 text-white rotate-180"
                                                : "bg-zinc-100 text-zinc-600"
                                        }`}
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>

                                {/* Expanded content */}
                                {isOpen && (
                                    <div className="px-5 md:px-6 pb-6 border-t border-zinc-100">
                                        <div className="pt-6 space-y-6">
                                            {/* About */}
                                            <div>
                                                <p className="text-[10px] font-semibold tracking-widest uppercase text-emerald-600 mb-2">
                                                    About the Role
                                                </p>
                                                <p
                                                    className="text-sm text-zinc-700 leading-relaxed"
                                                    dangerouslySetInnerHTML={{ __html: p.about }}
                                                />
                                            </div>

                                            {/* What you'll do */}
                                            <div>
                                                <p className="text-[10px] font-semibold tracking-widest uppercase text-emerald-600 mb-3">
                                                    What You&apos;ll Do
                                                </p>
                                                <ul className="space-y-2">
                                                    {p.responsibilities.map((r, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-2.5 text-sm text-zinc-700"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
                                                            <span
                                                                className="leading-relaxed"
                                                                dangerouslySetInnerHTML={{ __html: r }}
                                                            />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Requirements */}
                                            <div>
                                                <p className="text-[10px] font-semibold tracking-widest uppercase text-emerald-600 mb-3">
                                                    Requirements
                                                </p>
                                                <ul className="space-y-2">
                                                    {p.requirements.map((r, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-2.5 text-sm text-zinc-700"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0 mt-2" />
                                                            <span
                                                                className="leading-relaxed"
                                                                dangerouslySetInnerHTML={{ __html: r }}
                                                            />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Nice to haves */}
                                            {p.nice && p.nice.length > 0 && (
                                                <div>
                                                    <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 mb-3">
                                                        Nice to Have
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {p.nice.map((n, i) => (
                                                            <span
                                                                key={i}
                                                                className="text-xs bg-zinc-50 border border-zinc-200 text-zinc-600 rounded-full px-3 py-1"
                                                                dangerouslySetInnerHTML={{ __html: n }}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Apply */}
                                            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                                                <a
                                                    href={`mailto:careers@sorvian.ai?subject=Application%20-%20${encodeURIComponent(p.title)}`}
                                                    className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-zinc-950 px-5 py-2.5 rounded-full font-semibold hover:bg-emerald-400 transition-all text-sm group shadow-lg shadow-emerald-500/30"
                                                >
                                                    Apply for this role
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </a>
                                                <p className="text-xs text-zinc-500">
                                                    Or email{" "}
                                                    <a
                                                        href="mailto:careers@sorvian.ai"
                                                        className="text-emerald-600 hover:text-emerald-700 font-medium"
                                                    >
                                                        careers@sorvian.ai
                                                    </a>{" "}
                                                    with your CV.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {filtered.length === 0 && (
                        <div className="text-center py-10 bg-white border border-dashed border-zinc-300 rounded-2xl">
                            <p className="text-zinc-500">
                                No open roles in this department right now.
                            </p>
                        </div>
                    )}
                </div>

                {/* Don't see your role */}
                <div className="mt-12 max-w-3xl mx-auto">
                    <div className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-7 text-center">
                        <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-2">
                            Don&apos;t see your role?
                        </p>
                        <h3 className="text-xl font-bold text-zinc-900 mb-2">
                            We&apos;re always open to hearing from exceptional people.
                        </h3>
                        <p className="text-sm text-zinc-600 mb-5 leading-relaxed">
                            If you think you&apos;d fit the team and none of the above matches,
                            send us a note anyway.
                        </p>
                        <a
                            href="mailto:careers@sorvian.ai"
                            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-zinc-800 transition-colors text-sm"
                        >
                            Email careers@sorvian.ai
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OpenPositionsSection;
