"use client";

import {
    Shield,
    ShieldCheck,
    Zap,
    Database,
    Lock,
    Cloud,
    Server,
    FileText,
    Search,
    LockOpen,
    Check,
    ArrowRight,
    Play,
    EyeOff,
    Fingerprint,
    Ban,
    AlertTriangle,
    XCircle,
} from "lucide-react";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import HomeHero from "./components/home/HomeHero";


// Connection Web Section Component
function ConnectionWebSection() {
    // Knowledge sources (left side)
    const knowledgeSources = [
        { name: "SharePoint", color: "#038387", logo: '/connection_logos/sharepoint.png', link: 'https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration' },
        { name: "Teams", color: "#6264A7", logo: '/connection_logos/teams.png', link: 'https://www.microsoft.com/en-us/microsoft-teams/log-in' },
        { name: "OneDrive", iconcolor: "#0078D4", logo: '/connection_logos/onedrive.png', link: 'https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage' },
        { name: "Google Drive", color: "#4285F4", logo: '/connection_logos/google_drive.png', link: 'https://drive.google.com/' },
        // { name: "Confluence", color: "#0052CC", logo: '/connection_logos/confluence.png' },
        { name: "Jira", color: "#000000", logo: '/connection_logos/jira.png', link: 'https://www.atlassian.com/software/jira' },
        { name: "Slack", color: "#4A154B", logo: '/connection_logos/slack.png', link: 'https://slack.com' },
    ];

    // AI providers (right side)
    const aiProviders = [
        { name: "Claude", color: "#D97706", logo: '/ai_logos/claude.svg' },
        { name: "OpenAI", color: "#10A37F", logo: '/ai_logos/openai.svg' },
        { name: "Gemini", color: "#4285F4", logo: '/ai_logos/gemini.png' },
        { name: "Ollama", color: "#F97316", logo: '/ai_logos/ollama.png' },
        // { name: "Gemma4", color: "#6366F1", logo: '/ai_logos/gemma.png' },
    ];

    // Position nodes in a semi-circle pattern
    const getLeftPositions = (count) => {
        const positions = [];
        const startAngle = 140; // degrees
        const endAngle = 220;
        const angleStep = (endAngle - startAngle) / (count - 1);
        const radius = 280;

        for (let i = 0; i < count; i++) {
            const angle = (startAngle + i * angleStep) * (Math.PI / 180);
            positions.push({
                x: 400 + radius * Math.cos(angle),
                y: 250 + radius * Math.sin(angle),
            });
        }
        return positions;
    };

    const getRightPositions = (count) => {
        const positions = [];
        const startAngle = -40;
        const endAngle = 40;
        const angleStep = (endAngle - startAngle) / (count - 1);
        const radius = 280;

        for (let i = 0; i < count; i++) {
            const angle = (startAngle + i * angleStep) * (Math.PI / 180);
            positions.push({
                x: 400 + radius * Math.cos(angle),
                y: 250 + radius * Math.sin(angle),
            });
        }
        return positions;
    };

    const leftPositions = getLeftPositions(knowledgeSources.length);
    const rightPositions = getRightPositions(aiProviders.length);
    const centerX = 400;
    const centerY = 250;

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16 gap-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight max-w-md">
                        <span className="text-emerald-500">What is Sorvian</span> and How
                        <br />
                        Does It Connect Everything?
                    </h2>
                    <div className="max-w-md">
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Sorvian is an AI security middleware that connects your existing
                            knowledge bases and tools to any AI provider while protecting
                            sensitive data and ensuring compliance.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <button className="bg-emerald-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-emerald-600 transition-colors text-sm">
                                Learn More
                            </button>
                            <button className="bg-white border border-slate-300 text-slate-700 px-5 py-2.5 rounded-lg font-medium hover:bg-slate-50 transition-colors text-sm">
                                Get started free
                            </button>
                        </div>
                    </div>
                </div>

                {/* Connection Web Visualization */}
                <div className="relative">
                    {/* SVG Connection Lines */}
                    <svg
                        viewBox="0 0 800 500"
                        className="w-full h-auto max-w-4xl mx-auto"
                        style={{ minHeight: "400px" }}
                    >
                        {/* Background grid pattern */}
                        <defs>
                            <pattern
                                id="grid"
                                width="40"
                                height="40"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 40 0 L 0 0 0 40"
                                    fill="none"
                                    stroke="rgba(148, 163, 184, 0.1)"
                                    strokeWidth="1"
                                />
                            </pattern>
                            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.2)" />
                                <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
                            </radialGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        <rect width="800" height="500" fill="url(#grid)" />

                        {/* Center glow */}
                        <circle cx={centerX} cy={centerY} r="120" fill="url(#centerGlow)" />

                        {/* Connection lines from left nodes to center */}
                        {leftPositions.map((pos, i) => (
                            <g key={`left-line-${i}`}>
                                <line
                                    x1={pos.x + 25}
                                    y1={pos.y}
                                    x2={centerX - 40}
                                    y2={centerY}
                                    stroke="url(#leftGradient)"
                                    strokeWidth="2"
                                    opacity="0.6"
                                />
                                {/* Animated dot */}
                                <circle r="3" fill="#10B981">
                                    <animateMotion
                                        dur={`${2 + i * 0.3}s`}
                                        repeatCount="indefinite"
                                        path={`M${pos.x + 25},${pos.y} L${centerX - 40},${centerY}`}
                                    />
                                </circle>
                            </g>
                        ))}

                        {/* Connection lines from center to right nodes */}
                        {rightPositions.map((pos, i) => (
                            <g key={`right-line-${i}`}>
                                <line
                                    x1={centerX + 40}
                                    y1={centerY}
                                    x2={pos.x - 25}
                                    y2={pos.y}
                                    stroke="url(#rightGradient)"
                                    strokeWidth="2"
                                    opacity="0.6"
                                />
                                {/* Animated dot */}
                                <circle r="3" fill="#10B981">
                                    <animateMotion
                                        dur={`${2.5 + i * 0.3}s`}
                                        repeatCount="indefinite"
                                        path={`M${centerX + 40},${centerY} L${pos.x - 25},${pos.y}`}
                                    />
                                </circle>
                            </g>
                        ))}

                        {/* Gradients for lines */}
                        <defs>
                            <linearGradient id="leftGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#94A3B8" />
                                <stop offset="100%" stopColor="#10B981" />
                            </linearGradient>
                            <linearGradient id="rightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#10B981" />
                                <stop offset="100%" stopColor="#6366F1" />
                            </linearGradient>
                        </defs>

                        {/* Center Sorvian Hub */}
                        <g filter="url(#glow)">
                            <circle
                                cx={centerX}
                                cy={centerY}
                                r="45"
                                fill="white"
                                stroke="#10B981"
                                strokeWidth="3"
                            />
                            <circle
                                cx={centerX}
                                cy={centerY}
                                r="55"
                                fill="none"
                                stroke="rgba(16, 185, 129, 0.3)"
                                strokeWidth="2"
                            />
                            <circle
                                cx={centerX}
                                cy={centerY}
                                r="65"
                                fill="none"
                                stroke="rgba(16, 185, 129, 0.15)"
                                strokeWidth="1"
                            />
                        </g>

                        {/* Sorvian logo in center */}
                        <g transform={`translate(${centerX - 18}, ${centerY - 18})`}>
                            <rect width="36" height="36" rx="8" fill="#10B981" />
                            <path
                                d="M10 18 L18 10 L26 18 L18 26 Z"
                                fill="white"
                                transform="translate(0, 0)"
                            />
                        </g>

                        {/* Left nodes - Knowledge Sources */}
                        {knowledgeSources.map((source, i) => {
                            const pos = leftPositions[i];
                            return (
                                <g key={`left-${i}`} className="cursor-pointer" onClick={() => window.open(source.link, "_blank")}>
                                    <circle
                                        cx={pos.x}
                                        cy={pos.y}
                                        r="28"
                                        fill="white"
                                        stroke="#E2E8F0"
                                        strokeWidth="2"
                                        className="hover:stroke-emerald-400 transition-colors"
                                    />
                                    <image
                                        href={source.logo}
                                        x={pos.x - 12}
                                        y={pos.y - 12}
                                        width="24"
                                        height="24"
                                    />
                                </g>
                            );
                        })}

                        {/* Right nodes - AI Providers */}
                        {aiProviders.map((provider, i) => {
                            const pos = rightPositions[i];
                            return (
                                <g key={`right-${i}`} className="cursor-pointer">
                                    <circle
                                        cx={pos.x}
                                        cy={pos.y}
                                        r="28"
                                        fill="white"
                                        stroke="#E2E8F0"
                                        strokeWidth="2"
                                        className="hover:stroke-indigo-400 transition-colors"
                                    />
                                    <image
                                        href={provider.logo}
                                        x={pos.x - 11}
                                        y={pos.y - 12}
                                        width="24"
                                        height="24"
                                    />
                                </g>
                            );
                        })}

                        {/* Labels */}
                        <text
                            x="120"
                            y="480"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#475569"
                            fontWeight="600"
                        >
                            Knowledge Sources & Tools
                        </text>
                        <text
                            x="680"
                            y="480"
                            textAnchor="middle"
                            fontSize="13"
                            fill="#475569"
                            fontWeight="600"
                        >
                            AI Providers
                        </text>
                        <text
                            x={centerX}
                            y="340"
                            textAnchor="middle"
                            fontSize="12"
                            fill="#10B981"
                            fontWeight="600"
                        >
                            SORVIAN
                        </text>
                        <text
                            x={centerX}
                            y="355"
                            textAnchor="middle"
                            fontSize="10"
                            fill="#64748B"
                        >
                            Secure AI Middleware
                        </text>
                    </svg>

                    {/* Side Labels */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:block">
                        <div className="bg-slate-100 rounded-lg px-3 py-2 text-xs text-slate-600 font-medium">
                            Your Data Sources
                        </div>
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
                        <div className="bg-indigo-50 rounded-lg px-3 py-2 text-xs text-indigo-600 font-medium">
                            AI Models
                        </div>
                    </div>
                </div>

                {/* Feature highlights below */}
                <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
                    <div className="text-center p-6">
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🔒</span>
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Data Protection</h3>
                        <p className="text-sm text-slate-600">
                            PII and sensitive data never leaves your environment
                        </p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">⚡</span>
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Any AI Provider</h3>
                        <p className="text-sm text-slate-600">
                            Connect to Claude, OpenAI, Gemini, or any LLM seamlessly
                        </p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🔗</span>
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Easy Integration</h3>
                        <p className="text-sm text-slate-600">
                            Works with your existing tools and knowledge bases
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProblemSection() {
    const options = [
        {
            label: "Option A",
            title: "Share Everything",
            icon: LockOpen,
            accent: "red",
            summary:
                "Send all company data — including PII and proprietary IP — to public AI models.",
            upside:
                "The AI gets full context and delivers strong results.",
            consequences: [
                "Sensitive data lands in third-party databases you don't control",
                "No baseline retention policy governing how your data is used",
                "Your IP may be leveraged for model training without consent",
            ],
            verdict: "Your data is no longer yours.",
        },
        {
            label: "Option B",
            title: "Redact & Restrict",
            icon: Lock,
            accent: "amber",
            summary:
                "Strip out sensitive data before sending anything to an AI model.",
            upside:
                "Your data stays safe inside your walls.",
            consequences: [
                "AI works from a partial, fragmented view of the business",
                "Critical details get hidden inside redactions",
                "Teams lose trust in the output and revert to manual workflows",
            ],
            verdict: "Answers weaken. Adoption stalls.",
        },
    ];

    const accentMap = {
        red: {
            border: "border-red-500/40",
            hoverBorder: "hover:border-red-500/70",
            glow: "from-red-500/10",
            iconBg: "bg-red-500/10",
            iconRing: "ring-red-500/30",
            iconText: "text-red-400",
            label: "text-red-400",
            verdictBg: "bg-red-500/10 border-red-500/30",
            verdictText: "text-red-300",
        },
        amber: {
            border: "border-amber-500/40",
            hoverBorder: "hover:border-amber-500/70",
            glow: "from-amber-500/10",
            iconBg: "bg-amber-500/10",
            iconRing: "ring-amber-500/30",
            iconText: "text-amber-400",
            label: "text-amber-400",
            verdictBg: "bg-amber-500/10 border-amber-500/30",
            verdictText: "text-amber-300",
        },
    };

    return (
        <section id="problem" className="relative py-32 bg-zinc-950 overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
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
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-red-300 font-medium">
                            The Enterprise AI Dilemma
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        A Painful Trade-Off —
                        <br />
                        <span className="text-zinc-500">and Neither Option Works.</span>
                    </h2>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                        Companies adopting AI today are forced to choose between exposing
                        their most sensitive data or crippling the model with a fragmented
                        view of the business. Both paths cost you something.
                    </p>
                </div>

                {/* Two Options */}
                <div className="relative grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Center "VS" divider */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-2xl shadow-black/50">
                            <span className="text-zinc-400 text-xs font-bold tracking-widest">
                                VS
                            </span>
                        </div>
                    </div>

                    {options.map((opt, i) => {
                        const a = accentMap[opt.accent];
                        const Icon = opt.icon;
                        return (
                            <div
                                key={i}
                                className={`group relative bg-zinc-900/60 backdrop-blur-sm rounded-3xl p-8 border ${a.border} ${a.hoverBorder} transition-all duration-300 overflow-hidden`}
                            >
                                {/* Corner glow */}
                                <div
                                    className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${a.glow} to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                />

                                {/* Header */}
                                <div className="relative flex items-center gap-4 mb-6">
                                    <div
                                        className={`w-14 h-14 rounded-2xl ${a.iconBg} ring-1 ${a.iconRing} flex items-center justify-center flex-shrink-0`}
                                    >
                                        <Icon className={`w-7 h-7 ${a.iconText}`} />
                                    </div>
                                    <div>
                                        <p
                                            className={`text-xs font-semibold tracking-widest uppercase ${a.label} mb-1`}
                                        >
                                            {opt.label}
                                        </p>
                                        <h3 className="text-2xl font-bold text-white">
                                            {opt.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Summary */}
                                <p className="relative text-zinc-300 leading-relaxed mb-3">
                                    {opt.summary}
                                </p>
                                <p className="relative text-zinc-500 text-sm mb-6 italic">
                                    {opt.upside}
                                </p>

                                {/* Consequences */}
                                <div className="relative border-t border-zinc-800 pt-6 mb-6">
                                    <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-4">
                                        The Cost
                                    </p>
                                    <ul className="space-y-3">
                                        {opt.consequences.map((c, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <XCircle
                                                    className={`w-5 h-5 ${a.iconText} flex-shrink-0 mt-0.5`}
                                                />
                                                <span className="text-sm text-zinc-300 leading-relaxed">
                                                    {c}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Verdict */}
                                <div
                                    className={`relative rounded-xl border ${a.verdictBg} px-4 py-3`}
                                >
                                    <p className={`text-sm font-medium ${a.verdictText}`}>
                                        {opt.verdict}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Resolution Callout */}
                <div className="mt-16 max-w-5xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-zinc-900 to-zinc-950 p-10 md:p-12">
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at 20% 50%, rgba(16,185,129,0.3), transparent 50%)",
                            }}
                        />
                        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
                                <Shield className="w-7 h-7 text-zinc-950" />
                            </div>
                            <div className="flex-1">
                                <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-2">
                                    There&apos;s a Third Path
                                </p>
                                <p className="text-xl md:text-2xl text-white font-medium leading-snug">
                                    Organizations need{" "}
                                    <span className="text-emerald-400">full AI capability</span>{" "}
                                    without{" "}
                                    <span className="text-emerald-400">full data exposure</span>.
                                    <br className="hidden md:block" />
                                    <span className="text-zinc-400 text-lg font-normal">
                                        That&apos;s exactly what Sorvian delivers.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Why Sorvian Section
function WhySorvianSection() {
    const features = [
        {
            icon: Zap,
            title: "Full Context, Zero Exposure",
            description:
                "Your AI gets complete context from all your data. Sensitive information never leaves your environment.",
        },
        {
            icon: Shield,
            title: "Security Built In, Not Bolted On",
            description:
                "Automatic PII stripping, IP anonymization, and sensitivity classification at the middleware level.",
        },
        {
            icon: Database,
            title: "85% Cost Reduction",
            description:
                "Local parsing at fixed cost. Only pay frontier model prices for complex reasoning, not document reads.",
        },
    ];

    return (
        <section id="product" className="relative py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-emerald-600 font-medium text-sm tracking-wide uppercase mb-4">
                        Why Sorvian?
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
                        The Best of Both Worlds
                    </h2>
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                        Stop choosing between AI capability and data security. Sorvian
                        delivers both.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                                <feature.icon className="w-7 h-7 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// How It Works Section
function HowItWorksSection() {
    const steps = [
        {
            number: "1",
            title: "Connect",
            description:
                "Link your data sources — SharePoint, Salesforce, databases, file systems. Done in minutes with our secure connectors.",
        },
        {
            number: "2",
            title: "Ingest & Parse",
            description:
                "Local LLMs parse every document, extract entities, classify sensitivity, and build a vectorized knowledge base.",
        },
        {
            number: "3",
            title: "Query Securely",
            description:
                "Ask anything. Sorvian strips PII and anonymizes IP before sending derived queries to frontier models.",
        },
        {
            number: "4",
            title: "Get Answers",
            description:
                "Receive powerful, context-rich responses. Full AI capability with zero sensitive data exposure.",
        },
    ];

    return (
        <section className="relative py-32 bg-zinc-950 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-emerald-400 font-medium text-sm tracking-wide uppercase mb-4">
                        How It Works
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Get Started in 4 Simple Steps
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        From zero to secure AI—faster than you think.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Steps */}
                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <div key={index} className="flex gap-6 group">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all">
                                        {step.number}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Code Preview */}
                    <div className="relative">
                        <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
                            {/* Window Controls */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/50 border-b border-zinc-800">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                <span className="ml-4 text-xs text-zinc-500">
                  sorvian-config.ts
                </span>
                            </div>
                            {/* Code Content */}
                            <div className="p-6 font-mono text-sm">
                <pre className="text-zinc-300">
                  <code>
                    <span className="text-zinc-500">
                      {"// Sorvian AI Integration"}
                    </span>
                      {"\n"}
                      <span className="text-purple-400">import</span>
                    <span className="text-zinc-300">{" { Sorvian } "}</span>
                    <span className="text-purple-400">from</span>
                    <span className="text-emerald-400">
                      {" '@sorvian/sdk'"}
                    </span>
                    <span className="text-zinc-300">;</span>
                      {"\n\n"}
                      <span className="text-purple-400">const</span>
                    <span className="text-zinc-300"> client = </span>
                    <span className="text-purple-400">new</span>
                    <span className="text-cyan-400"> Sorvian</span>
                    <span className="text-zinc-300">{"({"}</span>
                      {"\n"}
                      <span className="text-zinc-300">{"  "}</span>
                    <span className="text-zinc-100">apiKey</span>
                    <span className="text-zinc-300">: </span>
                    <span className="text-emerald-400">
                      {"'srv_api_key'"}
                    </span>
                    <span className="text-zinc-300">,</span>
                      {"\n"}
                      <span className="text-zinc-300">{"  "}</span>
                    <span className="text-zinc-100">deployment</span>
                    <span className="text-zinc-300">: </span>
                    <span className="text-emerald-400">{"'standard'"}</span>
                      {"\n"}
                      <span className="text-zinc-300">{"});"}</span>
                      {"\n\n"}
                      <span className="text-zinc-500">
                      {"// Query with full security"}
                    </span>
                      {"\n"}
                      <span className="text-purple-400">const</span>
                    <span className="text-zinc-300"> response = </span>
                    <span className="text-purple-400">await</span>
                    <span className="text-zinc-300"> client.</span>
                    <span className="text-cyan-400">query</span>
                    <span className="text-zinc-300">{"({"}</span>
                      {"\n"}
                      <span className="text-zinc-300">{"  "}</span>
                    <span className="text-zinc-100">prompt</span>
                    <span className="text-zinc-300">: </span>
                    <span className="text-emerald-400">
                      {"'Analyze Q3 sales data'"}
                    </span>
                    <span className="text-zinc-300">,</span>
                      {"\n"}
                      <span className="text-zinc-300">{"  "}</span>
                    <span className="text-zinc-100">sources</span>
                    <span className="text-zinc-300">: [</span>
                    <span className="text-emerald-400">{"'salesforce'"}</span>
                    <span className="text-zinc-300">, </span>
                    <span className="text-emerald-400">{"'sharepoint'"}</span>
                    <span className="text-zinc-300">]</span>
                      {"\n"}
                      <span className="text-zinc-300">{"});"}</span>
                  </code>
                </pre>
                            </div>
                        </div>
                        {/* Decorative Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}

// Security Architecture Section
function SecurityArchitectureSection() {
    const principles = [
        {
            icon: Ban,
            title: "Zero Raw Data Transmission",
            description:
                "No original documents, PII, or proprietary IP is ever sent to public AI models. Period.",
        },
        {
            icon: Server,
            title: "Local-First Processing",
            description:
                "Parsing, anonymization, and sensitivity classification happen before anything crosses your boundary.",
        },
        {
            icon: FileText,
            title: "Derived Content Only",
            description:
                "External models receive sanitized summaries, anonymized queries, and stripped context — never raw source material.",
        },
        {
            icon: Database,
            title: "No Third-Party Storage",
            description:
                "Sorvian never retains your raw data. Derived artifacts stay within your environment and under your control.",
        },
        {
            icon: EyeOff,
            title: "Automatic PII Stripping",
            description:
                "Personal and sensitive information is identified and removed before any data crosses organizational boundaries.",
        },
        {
            icon: Fingerprint,
            title: "IP Anonymization",
            description:
                "Trade secrets and proprietary logic are transformed so competitive intelligence remains protected end-to-end.",
        },
    ];

    return (
        <section id="security" className="relative py-32 bg-white overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-60" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-6">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-emerald-700 font-medium">
                            Security Architecture
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
                        A Zero-Trust Policy
                        <br />
                        Toward Public AI Models
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        Most platforms stop at authentication and access control — important,
                        but table stakes. Sorvian is built on six non-negotiable principles
                        that govern how your data moves, what leaves your walls, and what
                        frontier models ever see.
                    </p>
                </div>

                {/* Principles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {principles.map((principle, index) => (
                        <div
                            key={index}
                            className="group relative bg-zinc-50 border border-zinc-200 rounded-2xl p-7 hover:border-emerald-300 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-5 group-hover:bg-emerald-500 transition-colors">
                                <principle.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                                {principle.title}
                            </h3>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                {principle.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Comparison Callout */}
                <div className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-10 md:p-12 border border-zinc-800">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <p className="text-red-400 text-sm font-medium tracking-wide uppercase mb-3">
                                Traditional RAG
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Ships your data to someone else&apos;s model.
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Raw documents are sent to external providers with minimal
                                protection. Sensitive content sits in third-party databases
                                under retention policies you don&apos;t write and can&apos;t audit.
                            </p>
                        </div>
                        <div className="md:border-l md:border-zinc-800 md:pl-10">
                            <p className="text-emerald-400 text-sm font-medium tracking-wide uppercase mb-3">
                                The Sorvian Approach
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Your data informs the AI without ever leaving your control.
                            </h3>
                            <p className="text-zinc-300 leading-relaxed">
                                The distillation pipeline processes everything before it crosses
                                your boundary. Frontier models receive rich, derived queries —
                                never raw source material, PII, or proprietary IP.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Tools Section
function ToolsSection() {
    const tools = [
        {
            icon: Search,
            title: "Knowledge Base RAG",
            subtitle: "Internal & Customer-Facing",
            description:
                "RAG powered by your entire knowledge base — manuals, policies, product specs. Accurate, context-rich answers for both internal teams and customers.",
            features: [
                "Natural language search",
                "Multi-source indexing",
                "Role-based access",
            ],
        },
        {
            icon: Shield,
            title: "Security Layer",
            subtitle: "Built In, Not Bolted On",
            description:
                "Security is the foundation, not an add-on. Automatic PII stripping, IP anonymization, and sensitivity classification.",
            features: [
                "PII detection & removal",
                "IP anonymization",
                "Sensitivity tagging",
            ],
        },
        {
            icon: FileText,
            title: "Document Analyzer",
            subtitle: "High-Efficiency Processing",
            description:
                "Rapidly ingest large document sets — contracts, reports, schematics, codebases. Local LLMs extract structure, entities, and relationships.",
            features: ["Any format supported", "Auto-classification", "Vector search"],
        },
    ];

    return (
        <section id="tools" className="relative py-32 bg-zinc-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-emerald-600 font-medium text-sm tracking-wide uppercase mb-4">
                        The Sorvian Toolset
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
                        Three Core Capabilities
                    </h2>
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                        Each tool is powered by our hybrid model architecture — secure by
                        design, intelligent by default.
                    </p>
                </div>

                {/* Tool Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-8 border border-zinc-200 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/25">
                                <tool.icon className="w-7 h-7 text-white" />
                            </div>
                            <p className="text-emerald-600 text-sm font-medium mb-2">
                                {tool.subtitle}
                            </p>
                            <h3 className="text-2xl font-semibold text-zinc-900 mb-4">
                                {tool.title}
                            </h3>
                            <p className="text-zinc-600 leading-relaxed mb-6">
                                {tool.description}
                            </p>
                            <ul className="space-y-2">
                                {tool.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                                        <Check className="w-4 h-4 text-emerald-500" />
                                        {feature}
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

// Deployment Options Section
function DeploymentSection() {
    const deployments = [
        {
            name: "Cloud",
            icon: Cloud,
            price: "$",
            subtitle: "Fully Managed on AWS",
            description:
                "We host the Sorvian middleware on hardened AWS infrastructure. Your data flows through isolated tenant environments protected by enterprise-grade controls — no hardware to buy, no servers to manage.",
            features: [
                "Hosted on AWS with enterprise security controls",
                "Zero hardware or IT setup required",
                "Same distillation pipeline, fully managed",
                "Fastest path to production",
            ],
            highlighted: true,
        },
        {
            name: "Standard",
            icon: Server,
            price: "$$$",
            subtitle: "Hybrid / VPC Ready",
            description:
                "On-prem hardware handles parsing with VPC integration. Hybrid public + local for teams that want data boundaries to stay on-premises.",
            features: [
                "Workstation to server rack",
                "VPC-integrated pipeline",
                "Reduced token costs on large workloads",
            ],
            highlighted: false,
        },
        {
            name: "Fortress",
            icon: Lock,
            price: "$$$$",
            subtitle: "Maximum Security",
            description:
                "Fully local Sorvian deployment. Large models run internally. No external calls.",
            features: [
                "Full server infrastructure",
                "Air-gapped capable",
                "All data stays internal",
            ],
            highlighted: false,
        },
    ];

    return (
        <section id="pricing" className="relative py-32 bg-zinc-950">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-emerald-400 font-medium text-sm tracking-wide uppercase mb-4">
                        Deployment Options
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Start on Cloud. Scale to Your Posture.
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Most customers run Sorvian Cloud — fully managed on AWS, enterprise-grade
                        by default. Standard and Fortress tiers are available when your policy
                        requires data to never leave your walls.
                    </p>
                </div>

                {/* Deployment Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {deployments.map((deployment, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 transition-all duration-300 ${
                                deployment.highlighted
                                    ? "bg-gradient-to-b from-emerald-500/20 to-zinc-900 border-2 border-emerald-500/50"
                                    : "bg-zinc-900 border border-zinc-800 hover:border-zinc-700"
                            }`}
                        >
                            {deployment.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-zinc-950 text-xs font-bold px-4 py-1 rounded-full">
                                    MOST POPULAR
                                </div>
                            )}
                            <div
                                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                                    deployment.highlighted
                                        ? "bg-emerald-500"
                                        : "bg-zinc-800"
                                }`}
                            >
                                <deployment.icon
                                    className={`w-7 h-7 ${
                                        deployment.highlighted ? "text-zinc-950" : "text-emerald-400"
                                    }`}
                                />
                            </div>
                            <div className="flex items-baseline gap-2 mb-2">
                                <h3 className="text-2xl font-bold text-white">
                                    {deployment.name}
                                </h3>
                                <span className="text-emerald-400 font-semibold">
                  {deployment.price}
                </span>
                            </div>
                            <p className="text-zinc-500 text-sm mb-4">{deployment.subtitle}</p>
                            <p className="text-zinc-400 leading-relaxed mb-6">
                                {deployment.description}
                            </p>
                            <ul className="space-y-3 mb-8">
                                {deployment.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`w-full py-3 rounded-full font-medium transition-all ${
                                    deployment.highlighted
                                        ? "bg-emerald-500 text-zinc-950 hover:bg-emerald-400"
                                        : "bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700"
                                }`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Stats Section
function StatsSection() {
    const stats = [
        { value: "100%", label: "Data Context Retained" },
        { value: "0%", label: "Sensitive Data Exposed" },
        { value: "85%", label: "Cost Reduction" },
    ];

    return (
        <section className="relative py-24 bg-emerald-500">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <div className="text-5xl md:text-6xl font-bold text-zinc-950 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-emerald-900 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// CTA Section
function CTASection() {
    return (
        <section id="contact" className="relative py-32 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-50">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-8">
                    <Shield className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm text-emerald-700 font-medium">
            Ready to secure your AI?
          </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
                    Let&apos;s Discuss How Sorvian
                    <br />
                    Can Secure Your AI Strategy
                </h2>
                <p className="text-lg text-zinc-600 mb-10 max-w-2xl mx-auto">
                    Book a demo to see how Sorvian can protect your data while unlocking
                    full AI capability for your organization.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-all flex items-center gap-2 group">
                        Book a Demo
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="text-zinc-600 hover:text-zinc-900 font-medium flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Watch Video
                    </button>
                </div>
            </div>
        </section>
    );
}

// Main Page Component
export default function HomePage() {
    return (
        <main className="bg-zinc-950">
            <Navigation />
            <HomeHero />
            <ProblemSection />
            <SecurityArchitectureSection />
            {/*<ConnectionWebSection />*/}
            {/*<WhySorvianSection />*/}
            {/*<HowItWorksSection />*/}
            {/*<ToolsSection />*/}
            {/*<DeploymentSection />*/}
            {/*<StatsSection />*/}
            <CTASection />
            <Footer />
        </main>
    );
}