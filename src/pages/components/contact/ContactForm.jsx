"use client";

import { useState } from "react";
import {
    Send,
    Mail,
    Globe,
    Clock,
    ShieldCheck,
    Users,
    Building2,
    Calendar,
    Check,
} from "lucide-react";

const topics = [
    { value: "demo", label: "Book a demo" },
    { value: "sales", label: "Sales / pricing" },
    { value: "enterprise", label: "Enterprise deployment" },
    { value: "security", label: "Security review" },
    { value: "integration", label: "Integration request" },
    { value: "partnership", label: "Partnership" },
    { value: "other", label: "Something else" },
];

const orgSizes = [
    { value: "1-50", label: "1 – 50 employees" },
    { value: "51-250", label: "51 – 250 employees" },
    { value: "251-1000", label: "251 – 1,000 employees" },
    { value: "1001-5000", label: "1,001 – 5,000 employees" },
    { value: "5000+", label: "5,000+ employees" },
];

function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder — wire to a real endpoint when ready
        setSubmitted(true);
    };

    return (
        <section className="relative py-28 bg-zinc-50 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-100 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12">
                    {/* Form column */}
                    <div>
                        <div className="mb-8">
                            <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3">
                                Send Us a Message
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3 tracking-tight">
                                Tell us what you&apos;re working on.
                            </h2>
                            <p className="text-zinc-600 leading-relaxed">
                                The more context you give us, the more specific our first
                                response will be. No form field is mandatory except email.
                            </p>
                        </div>

                        <div className="bg-white border border-zinc-200 rounded-3xl p-6 md:p-8 shadow-lg shadow-zinc-900/5">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                                        <Check
                                            className="w-8 h-8 text-emerald-600"
                                            strokeWidth={2.5}
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                                        Thanks — we got it.
                                    </h3>
                                    <p className="text-zinc-600 leading-relaxed max-w-md mx-auto">
                                        Someone from the team will reach out within one business
                                        day. If it&apos;s urgent, ping us at{" "}
                                        <a
                                            href="mailto:hello@sorvian.ai"
                                            className="text-emerald-600 hover:text-emerald-700 font-medium"
                                        >
                                            hello@sorvian.ai
                                        </a>
                                        .
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name + Email */}
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-xs font-semibold tracking-widest uppercase text-zinc-600 mb-2"
                                            >
                                                Full name
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                placeholder="Jane Doe"
                                                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-xs font-semibold tracking-widest uppercase text-zinc-600 mb-2"
                                            >
                                                Work email <span className="text-emerald-500">*</span>
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                placeholder="jane@company.com"
                                                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Company + Role */}
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label
                                                htmlFor="company"
                                                className="block text-xs font-semibold tracking-widest uppercase text-zinc-600 mb-2"
                                            >
                                                Company
                                            </label>
                                            <input
                                                id="company"
                                                type="text"
                                                placeholder="Acme Corp."
                                                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="role"
                                                className="block text-xs font-semibold tracking-widest uppercase text-zinc-600 mb-2"
                                            >
                                                Role / title
                                            </label>
                                            <input
                                                id="role"
                                                type="text"
                                                placeholder="Head of Security"
                                                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Org size */}
                                    <div>
                                        <label
                                            htmlFor="size"
                                            className="block text-xs font-semibold tracking-widest uppercase text-zinc-600 mb-2"
                                        >
                                            Organization size
                                        </label>
                                        <select
                                            id="size"
                                            defaultValue=""
                                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
                                        >
                                            <option value="" disabled>
                                                Select a range
                                            </option>
                                            {orgSizes.map((s) => (
                                                <option key={s.value} value={s.value}>
                                                    {s.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Topic */}
                                    <div>
                                        <label className="block text-xs font-semibold tracking-widest uppercase text-zinc-600 mb-3">
                                            What brings you here?
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {topics.map((t) => (
                                                <label
                                                    key={t.value}
                                                    className="cursor-pointer"
                                                >
                                                    <input
                                                        type="radio"
                                                        name="topic"
                                                        value={t.value}
                                                        className="peer sr-only"
                                                    />
                                                    <span className="inline-flex items-center gap-1.5 bg-white border border-zinc-200 rounded-full px-3.5 py-1.5 text-xs text-zinc-600 hover:border-emerald-300 hover:text-zinc-900 peer-checked:bg-emerald-500 peer-checked:border-emerald-500 peer-checked:text-white transition-all">
                                                        {t.label}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-xs font-semibold tracking-widest uppercase text-zinc-600 mb-2"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            placeholder="Tell us about your environment, what you're trying to solve, and any timing pressures we should know about…"
                                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all resize-none"
                                        />
                                    </div>

                                    {/* Consent + Submit */}
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                                        <p className="text-xs text-zinc-500 flex-1 leading-relaxed">
                                            By submitting you agree to receive a response from the
                                            Sorvian team. We never sell or share your information.
                                        </p>
                                        <button
                                            type="submit"
                                            className="cursor-pointer bg-emerald-500 text-zinc-950 px-6 py-3 rounded-full font-semibold hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-emerald-500/30 whitespace-nowrap"
                                        >
                                            Send Message
                                            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Side info column */}
                    <div className="space-y-5">
                        {/* Response time */}
                        <div className="bg-gradient-to-br from-emerald-500 to-emerald-950 border rounded-3xl p-6 md:p-7 text-white">
                            <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
                                <Clock className="w-5 h-5 text-white" />
                            </div>
                            <p className="text-[10px] font-semibold tracking-widest uppercase text-emerald-200 mb-2">
                                Response Time
                            </p>
                            <h3 className="text-xl font-bold mb-2">
                                Under 24 hours
                            </h3>
                            <p className="text-sm text-zinc-300 leading-relaxed">
                                Most inquiries get a first response the same business day.
                                Enterprise and security requests route to engineering directly.
                            </p>
                        </div>

                        {/* Direct emails */}
                        <div className="bg-white border border-zinc-200 rounded-3xl p-6 md:p-7">
                            <div className="w-11 h-11 rounded-xl bg-zinc-100 flex items-center justify-center mb-4">
                                <Mail className="w-5 h-5 text-zinc-700" />
                            </div>
                            <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 mb-2">
                                Direct Email
                            </p>
                            <h3 className="text-lg font-bold text-zinc-900 mb-3">
                                Go straight to the right team
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center justify-between gap-3">
                                    <span className="text-zinc-600 inline-flex items-center gap-2">
                                        <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                                        Demos
                                    </span>
                                    <a
                                        href="mailto:demo@sorvian.ai"
                                        className="text-emerald-600 hover:text-emerald-700 font-mono text-xs"
                                    >
                                        demo@sorvian.ai
                                    </a>
                                </li>
                                <li className="flex items-center justify-between gap-3">
                                    <span className="text-zinc-600 inline-flex items-center gap-2">
                                        <Users className="w-3.5 h-3.5 text-indigo-500" />
                                        Sales
                                    </span>
                                    <a
                                        href="mailto:sales@sorvian.ai"
                                        className="text-emerald-600 hover:text-emerald-700 font-mono text-xs"
                                    >
                                        sales@sorvian.ai
                                    </a>
                                </li>
                                <li className="flex items-center justify-between gap-3">
                                    <span className="text-zinc-600 inline-flex items-center gap-2">
                                        <Building2 className="w-3.5 h-3.5 text-amber-500" />
                                        Enterprise
                                    </span>
                                    <a
                                        href="mailto:enterprise@sorvian.ai"
                                        className="text-emerald-600 hover:text-emerald-700 font-mono text-xs"
                                    >
                                        enterprise@sorvian.ai
                                    </a>
                                </li>
                                <li className="flex items-center justify-between gap-3">
                                    <span className="text-zinc-600 inline-flex items-center gap-2">
                                        <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
                                        Security
                                    </span>
                                    <a
                                        href="mailto:security@sorvian.ai"
                                        className="text-emerald-600 hover:text-emerald-700 font-mono text-xs"
                                    >
                                        security@sorvian.ai
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Global presence */}
                        <div className="bg-white border border-zinc-200 rounded-3xl p-6 md:p-7">
                            <div className="w-11 h-11 rounded-xl bg-zinc-100 flex items-center justify-center mb-4">
                                <Globe className="w-5 h-5 text-zinc-700" />
                            </div>
                            <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 mb-2">
                                Operating Globally
                            </p>
                            <h3 className="text-lg font-bold text-zinc-900 mb-2">
                                Remote-first team
                            </h3>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                Sorvian is a distributed team. For on-site briefings with your
                                engineering or security org, let us know when you reach out —
                                we travel for the right conversations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
