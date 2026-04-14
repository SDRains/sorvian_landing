"use client";

import Image from "next/image";
import { KeyRound, Users, Eye, Check, XCircle, UserCog } from "lucide-react";

const pillars = [
    {
        icon: KeyRound,
        title: "Single Sign-On",
        description:
            "Onboard the whole org in minutes. Sorvian supports Microsoft, Google, and Okta out of the box — no separate credentials to manage.",
        badge: "MS · Google · Okta",
    },
    {
        icon: Users,
        title: "Role-Based Access Control",
        description:
            "Roles and groups sync from your existing identity provider (Azure AD, Google Workspace, Okta) or can be managed natively inside Sorvian.",
        badge: "Azure AD · Native",
    },
    {
        icon: Eye,
        title: "Query-Time Result Scoping",
        description:
            "Access control doesn't stop at the document. Every query result is re-scoped to the requesting user — sensitive fields are redacted in-flight.",
        badge: "Enforced per request",
    },
];

function AccessControlSection() {
    return (
        <section className="relative py-28 bg-white overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-6">
                        <UserCog className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-emerald-700 font-medium">
                            Access Control &amp; Identity
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight leading-[1.1]">
                        One Knowledge Base.
                        <br />
                        <span className="text-zinc-500">Scoped to Every User.</span>
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        Sorvian plugs into the identity provider your organization already
                        runs and enforces access at every layer — from authentication, to
                        document-level permissions, to the redaction of individual fields
                        in a query result.
                    </p>
                </div>

                {/* SSO Providers strip */}
                <div className="max-w-4xl mx-auto mb-16">
                    <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500 text-center mb-6">
                        Sign In With
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-3 bg-zinc-50 border border-zinc-200 rounded-2xl px-6 py-4 hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all">
                            <div className="relative w-6 h-6">
                                <Image
                                    src="/sso/ms_icon.png"
                                    alt="Microsoft"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <span className="text-zinc-900 font-medium">Microsoft</span>
                        </div>
                        <div className="flex items-center gap-3 bg-zinc-50 border border-zinc-200 rounded-2xl px-6 py-4 hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all">
                            <div className="relative w-6 h-6">
                                <Image
                                    src="/sso/google_icon.png"
                                    alt="Google"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <span className="text-zinc-900 font-medium">Google</span>
                        </div>
                        <div className="flex items-center gap-3 bg-zinc-50 border border-zinc-200 rounded-2xl px-6 py-4 hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all">
                            <div className="w-6 h-6 rounded bg-zinc-900 flex items-center justify-center">
                                <span className="text-white font-bold text-xs">O</span>
                            </div>
                            <span className="text-zinc-900 font-medium">Okta</span>
                        </div>
                        <div className="flex items-center gap-3 bg-zinc-50 border border-zinc-200 rounded-2xl px-6 py-4 hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all">
                            <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
                                <span className="text-white font-bold text-xs">AD</span>
                            </div>
                            <span className="text-zinc-900 font-medium">Azure AD</span>
                        </div>
                    </div>
                </div>

                {/* Pillars */}
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {pillars.map((p, i) => (
                        <div
                            key={i}
                            className="group relative bg-zinc-50 border border-zinc-200 rounded-3xl p-8 hover:border-emerald-300 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-5 group-hover:bg-emerald-500 transition-colors">
                                <p.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                                {p.title}
                            </h3>
                            <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                                {p.description}
                            </p>
                            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                <span className="text-xs font-medium text-emerald-700">
                                    {p.badge}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Role-Scoped Example */}
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3">
                            See It In Action
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">
                            Same Question. Different Answers.
                        </h3>
                        <p className="text-zinc-600">
                            Query-time scoping means a standard employee and an HR executive
                            can ask the exact same thing — and Sorvian returns the right
                            answer for each.
                        </p>
                    </div>

                    {/* The shared query bar */}
                    <div className="max-w-3xl mx-auto mb-8">
                        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-2xl">
                            <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-2">
                                The Query
                            </p>
                            <p className="text-white text-lg font-medium">
                                &ldquo;What&apos;s the compensation range for a Senior Engineer?&rdquo;
                            </p>
                        </div>
                        <div className="flex justify-center mt-4 mb-4">
                            <div className="w-px h-6 bg-zinc-300" />
                        </div>
                    </div>

                    {/* Two role responses */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Standard Employee */}
                        <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-7">
                            <div className="flex items-center gap-3 mb-5 pb-5 border-b border-zinc-200">
                                <div className="w-11 h-11 rounded-xl bg-zinc-200 flex items-center justify-center">
                                    <Users className="w-5 h-5 text-zinc-600" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
                                        As
                                    </p>
                                    <p className="text-zinc-900 font-semibold">
                                        Standard Employee
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-zinc-700 leading-relaxed">
                                        Answer is returned, but compensation details are{" "}
                                        <span className="bg-zinc-300 text-zinc-500 px-2 py-0.5 rounded font-mono text-xs">
                                            ████████
                                        </span>{" "}
                                        redacted.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-zinc-700 leading-relaxed">
                                        Sees general role context (title, level, requirements)
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-zinc-700 leading-relaxed">
                                        Does not see salary bands, equity, or bonus structure
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-zinc-700 leading-relaxed">
                                        Does not see individual employee records
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* HR Executive */}
                        <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-3xl p-7 shadow-lg shadow-emerald-500/10">
                            <div className="flex items-center gap-3 mb-5 pb-5 border-b border-emerald-200">
                                <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center">
                                    <KeyRound className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600">
                                        As
                                    </p>
                                    <p className="text-zinc-900 font-semibold">HR Executive</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-zinc-700 leading-relaxed">
                                        Full answer returned with complete compensation data
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-zinc-700 leading-relaxed">
                                        Sees full salary bands, equity grants, bonus structure
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-zinc-700 leading-relaxed">
                                        Access to individual records within scope
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-zinc-700 leading-relaxed">
                                        Every access is logged and auditable
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-sm text-zinc-500 mt-8 italic">
                        Enforcement happens inside the Sorvian pipeline — before any derived
                        content is sent to a frontier model.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AccessControlSection;
