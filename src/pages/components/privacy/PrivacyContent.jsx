"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, Mail, FileText } from "lucide-react";

const sections = [
    { id: "overview", label: "1. Overview" },
    { id: "scope", label: "2. Scope of this policy" },
    { id: "info-we-collect", label: "3. Information we collect" },
    { id: "how-we-use", label: "4. How we use information" },
    { id: "legal-bases", label: "5. Legal bases for processing (GDPR)" },
    { id: "cookies", label: "6. Cookies and similar technologies" },
    { id: "sharing", label: "7. How we share information" },
    { id: "retention", label: "8. Data retention" },
    { id: "international", label: "9. International data transfers" },
    { id: "your-rights", label: "10. Your rights" },
    { id: "ccpa", label: "11. California privacy rights" },
    { id: "security", label: "12. Security" },
    { id: "children", label: "13. Children's privacy" },
    { id: "changes", label: "14. Changes to this policy" },
    { id: "contact", label: "15. How to contact us" },
];

function PrivacyContent() {
    const [activeId, setActiveId] = useState(sections[0].id);

    // Highlight TOC entry currently in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
        );
        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-16">
                    {/* Sticky TOC (desktop) */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-28">
                            <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-4">
                                On this page
                            </p>
                            <nav className="space-y-1">
                                {sections.map((s) => (
                                    <a
                                        key={s.id}
                                        href={`#${s.id}`}
                                        className={`block text-sm py-1.5 px-3 rounded-lg transition-colors ${
                                            activeId === s.id
                                                ? "text-emerald-700 bg-emerald-50 font-medium"
                                                : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                                        }`}
                                    >
                                        {s.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main content */}
                    <article className="max-w-3xl">
                        {/* TOC (mobile) */}
                        <details className="lg:hidden mb-10 bg-zinc-50 border border-zinc-200 rounded-2xl p-5">
                            <summary className="cursor-pointer font-semibold text-zinc-900 inline-flex items-center gap-2">
                                <FileText className="w-4 h-4 text-emerald-600" />
                                Jump to a section
                            </summary>
                            <nav className="mt-4 space-y-1">
                                {sections.map((s) => (
                                    <a
                                        key={s.id}
                                        href={`#${s.id}`}
                                        className="block text-sm py-1 text-zinc-600 hover:text-zinc-900"
                                    >
                                        {s.label}
                                    </a>
                                ))}
                            </nav>
                        </details>

                        <div className="prose-custom space-y-12 text-zinc-700 leading-relaxed">
                            {/* 1. Overview */}
                            <section id="overview">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    1. Overview
                                </h2>
                                <p className="mb-4">
                                    This Privacy Policy explains how{" "}
                                    <strong>Sorvian AI, LLC</strong> (&ldquo;Sorvian,&rdquo;
                                    &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
                                    collects, uses, shares, and protects personal information
                                    when you visit our marketing website at{" "}
                                    <a
                                        href="https://www.sorvian.ai"
                                        className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                                    >
                                        sorvian.ai
                                    </a>{" "}
                                    (the &ldquo;Site&rdquo;).
                                </p>
                                <p className="mb-4">
                                    Sorvian AI, LLC is an Arizona limited liability company,
                                    headquartered at 15333 N. Pima Road, Suite 305, Scottsdale,
                                    AZ 85270, United States.
                                </p>
                                <p>
                                    We are committed to handling personal information
                                    responsibly and in line with applicable data protection laws,
                                    including the EU and UK General Data Protection Regulation
                                    (the &ldquo;GDPR&rdquo;), the California Consumer Privacy Act
                                    as amended by the California Privacy Rights Act
                                    (&ldquo;CCPA/CPRA&rdquo;), and other relevant U.S. state
                                    privacy laws.
                                </p>
                            </section>

                            {/* 2. Scope */}
                            <section id="scope">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    2. Scope of this policy
                                </h2>
                                <p className="mb-4">
                                    This policy applies to personal information we collect
                                    through our marketing Site, including pages such as the home,
                                    Product, Security, Tools, Pricing, About, Careers, and
                                    Contact pages, as well as any forms, demo bookings, or email
                                    interactions originating from those pages.
                                </p>
                                <p className="mb-4">
                                    <strong>It does not cover the Sorvian product platform.</strong>{" "}
                                    Customer data processed by the Sorvian product (including
                                    documents, embeddings, and any artifacts produced by the
                                    distillation pipeline on behalf of customers) is governed by
                                    a separate Data Processing Agreement (&ldquo;DPA&rdquo;) and
                                    related contractual terms agreed with each customer.
                                </p>
                                <p>
                                    If you are a customer&apos;s end user and have questions about
                                    how a Sorvian customer is handling your data, please contact
                                    that customer directly.
                                </p>
                            </section>

                            {/* 3. Information we collect */}
                            <section id="info-we-collect">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    3. Information we collect
                                </h2>
                                <p className="mb-4">
                                    We collect the categories of information described below.
                                    Some of it you provide directly; some is collected
                                    automatically when you interact with the Site.
                                </p>

                                <h3 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">
                                    3.1 Information you provide
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>
                                        <strong>Contact details</strong> — name, work email
                                        address, company, role, and organization size when you
                                        complete a contact, demo, or sales form.
                                    </li>
                                    <li>
                                        <strong>Inquiry content</strong> — the message you submit
                                        and any topic or category you select (for example, demo,
                                        sales, security review, partnership).
                                    </li>
                                    <li>
                                        <strong>Career applications</strong> — when you apply to
                                        an open role via{" "}
                                        <a
                                            href="mailto:careers@sorvian.ai"
                                            className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                                        >
                                            careers@sorvian.ai
                                        </a>
                                        , we receive whatever you choose to send us (typically a
                                        CV, cover letter, and contact details).
                                    </li>
                                    <li>
                                        <strong>Newsletter / marketing opt-in</strong> — when
                                        offered, your email address and any preferences you
                                        provide.
                                    </li>
                                </ul>

                                <h3 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">
                                    3.2 Information collected automatically
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>
                                        <strong>Device &amp; usage data</strong> — IP address,
                                        browser type and version, operating system, device type,
                                        approximate location (derived from IP), referring/exit
                                        pages, pages viewed, and timestamps.
                                    </li>
                                    <li>
                                        <strong>Cookies and similar technologies</strong> — see{" "}
                                        <a
                                            href="#cookies"
                                            className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                                        >
                                            Section 6
                                        </a>
                                        .
                                    </li>
                                    <li>
                                        <strong>Session recordings &amp; heatmaps</strong> —
                                        through Hotjar, we may record anonymized session
                                        recordings, mouse movements, and scroll behavior to
                                        understand how visitors use the Site. Hotjar is configured
                                        to mask sensitive form inputs by default.
                                    </li>
                                </ul>

                                <h3 className="text-xl font-semibold text-zinc-900 mt-8 mb-3">
                                    3.3 Information from third parties
                                </h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        <strong>Marketing &amp; CRM tools</strong> — when you
                                        interact with our Site, our HubSpot integration may
                                        receive limited information about that interaction.
                                    </li>
                                    <li>
                                        <strong>Scheduling tools</strong> — if you book a demo or
                                        meeting via Calendly, Calendly receives your name, email,
                                        time zone, and any details you submit during scheduling.
                                    </li>
                                </ul>
                            </section>

                            {/* 4. How we use */}
                            <section id="how-we-use">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    4. How we use information
                                </h2>
                                <p className="mb-4">We use personal information to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        Respond to your inquiries, schedule demos, and provide the
                                        information you request.
                                    </li>
                                    <li>
                                        Communicate with you about products, services, and updates
                                        — only where you have opted in or where we have a
                                        legitimate interest in doing so under applicable law.
                                    </li>
                                    <li>
                                        Operate, maintain, secure, and improve the Site and our
                                        marketing.
                                    </li>
                                    <li>
                                        Measure and understand how visitors use the Site
                                        (analytics).
                                    </li>
                                    <li>Recruit and evaluate candidates for open roles.</li>
                                    <li>
                                        Detect and prevent fraud, abuse, and security incidents.
                                    </li>
                                    <li>
                                        Comply with our legal obligations and enforce our terms.
                                    </li>
                                </ul>
                            </section>

                            {/* 5. Legal bases */}
                            <section id="legal-bases">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    5. Legal bases for processing (GDPR)
                                </h2>
                                <p className="mb-4">
                                    If you are in the European Economic Area, the United Kingdom,
                                    or Switzerland, we rely on the following legal bases to
                                    process your personal information:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        <strong>Consent</strong> — for non-essential cookies,
                                        analytics, and marketing communications, where required.
                                        You may withdraw consent at any time.
                                    </li>
                                    <li>
                                        <strong>Legitimate interests</strong> — to operate, secure,
                                        and improve our Site, respond to inquiries, and pursue
                                        our business interests in a way that does not override
                                        your rights.
                                    </li>
                                    <li>
                                        <strong>Contract</strong> — to take steps at your request
                                        before entering into a contract (for example, when you
                                        request a demo or proposal).
                                    </li>
                                    <li>
                                        <strong>Legal obligation</strong> — to comply with
                                        applicable laws and regulatory requirements.
                                    </li>
                                </ul>
                            </section>

                            {/* 6. Cookies */}
                            <section id="cookies">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    6. Cookies and similar technologies
                                </h2>
                                <p className="mb-4">
                                    We use cookies and similar technologies (such as pixels,
                                    local storage, and scripts) to operate the Site, remember
                                    your preferences, measure performance, and personalize
                                    marketing.
                                </p>
                                <p className="mb-4">
                                    When you first visit the Site, you will see a cookie banner
                                    that lets you accept all cookies, reject non-essential
                                    cookies, or customize your preferences by category. You can
                                    change your selection at any time using the &ldquo;Cookie
                                    preferences&rdquo; link in our footer.
                                </p>

                                <h3 className="text-xl font-semibold text-zinc-900 mt-6 mb-3">
                                    Categories
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>
                                        <strong>Strictly necessary</strong> — required for the
                                        Site to function (security, navigation, and remembering
                                        your cookie preferences). Always on.
                                    </li>
                                    <li>
                                        <strong>Analytics</strong> — Google Analytics, Mixpanel,
                                        and Hotjar help us understand how visitors use the Site,
                                        in aggregate.
                                    </li>
                                    <li>
                                        <strong>Marketing</strong> — HubSpot tracking helps us
                                        measure the performance of our marketing and may be used
                                        to personalize content.
                                    </li>
                                    <li>
                                        <strong>Functional</strong> — cookies set by Calendly and
                                        any embedded media to enable interactive features.
                                    </li>
                                </ul>
                                <p>
                                    Most browsers let you control cookies through their settings.
                                    Disabling certain categories may limit some features of the
                                    Site.
                                </p>
                            </section>

                            {/* 7. Sharing */}
                            <section id="sharing">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    7. How we share information
                                </h2>
                                <p className="mb-4">
                                    We share personal information only as described in this
                                    policy.
                                </p>

                                <h3 className="text-xl font-semibold text-zinc-900 mt-6 mb-3">
                                    7.1 Service providers
                                </h3>
                                <p className="mb-4">
                                    We use trusted third-party service providers to run the Site
                                    and our marketing operations. They process information on our
                                    behalf and are contractually required to protect it.
                                    Categories include:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>
                                        <strong>Hosting &amp; infrastructure</strong> — Amazon Web
                                        Services (AWS).
                                    </li>
                                    <li>
                                        <strong>Analytics</strong> — Google Analytics, Mixpanel,
                                        Hotjar.
                                    </li>
                                    <li>
                                        <strong>Marketing &amp; CRM</strong> — HubSpot.
                                    </li>
                                    <li>
                                        <strong>Email</strong> — Mailchimp (for transactional and
                                        marketing email).
                                    </li>
                                    <li>
                                        <strong>Scheduling</strong> — Calendly.
                                    </li>
                                </ul>

                                <h3 className="text-xl font-semibold text-zinc-900 mt-6 mb-3">
                                    7.2 Legal &amp; safety
                                </h3>
                                <p className="mb-4">
                                    We may disclose information when we believe disclosure is
                                    necessary to comply with applicable law, valid legal process,
                                    or a lawful government request; to protect the safety, rights,
                                    or property of Sorvian, our users, or others; or to enforce
                                    our terms.
                                </p>

                                <h3 className="text-xl font-semibold text-zinc-900 mt-6 mb-3">
                                    7.3 Business transfers
                                </h3>
                                <p className="mb-4">
                                    If Sorvian is involved in a merger, acquisition, financing,
                                    reorganization, or sale of assets, personal information may
                                    be transferred as part of that transaction, subject to
                                    standard confidentiality protections.
                                </p>

                                <h3 className="text-xl font-semibold text-zinc-900 mt-6 mb-3">
                                    7.4 Sale of personal information
                                </h3>
                                <p>
                                    <strong>
                                        We do not sell personal information for money.
                                    </strong>{" "}
                                    Some of the analytics and marketing tools we use may, under a
                                    broad reading of the CCPA/CPRA, constitute &ldquo;sharing&rdquo;
                                    or &ldquo;cross-context behavioral advertising.&rdquo;
                                    California residents can exercise their right to opt out of
                                    such sharing at any time — see{" "}
                                    <a
                                        href="#ccpa"
                                        className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                                    >
                                        Section 11
                                    </a>
                                    .
                                </p>
                            </section>

                            {/* 8. Retention */}
                            <section id="retention">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    8. Data retention
                                </h2>
                                <p className="mb-4">
                                    We keep personal information only for as long as we need it
                                    for the purposes described in this policy or to meet our
                                    legal, accounting, or reporting obligations.
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        <strong>Contact, demo, and sales inquiries</strong> —
                                        retained for up to 24 months from the most recent
                                        engagement, then deleted or anonymized unless we have a
                                        valid reason to keep them longer.
                                    </li>
                                    <li>
                                        <strong>Career applications</strong> — retained for the
                                        duration of the recruiting process and for a reasonable
                                        period afterward (typically up to 24 months) for future
                                        opportunities, unless you ask us to delete sooner.
                                    </li>
                                    <li>
                                        <strong>Analytics and log data</strong> — retained
                                        according to the defaults of each provider (commonly 14 to
                                        26 months) and deleted or anonymized thereafter.
                                    </li>
                                    <li>
                                        <strong>Cookie consent records</strong> — retained for the
                                        period required to demonstrate compliance.
                                    </li>
                                </ul>
                            </section>

                            {/* 9. International transfers */}
                            <section id="international">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    9. International data transfers
                                </h2>
                                <p className="mb-4">
                                    Sorvian is based in the United States. Personal information
                                    we collect may be transferred to, stored, and processed in
                                    the U.S. or in any other country where we or our service
                                    providers operate.
                                </p>
                                <p>
                                    Where required by law, we rely on appropriate safeguards to
                                    transfer personal information from the EEA, the UK, or
                                    Switzerland — typically the European Commission&apos;s
                                    Standard Contractual Clauses, the UK International Data
                                    Transfer Addendum, or other approved mechanisms.
                                </p>
                            </section>

                            {/* 10. Your rights */}
                            <section id="your-rights">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    10. Your rights
                                </h2>
                                <p className="mb-4">
                                    Depending on where you live, you may have the following
                                    rights with respect to your personal information:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>
                                        <strong>Access</strong> — request a copy of the personal
                                        information we hold about you.
                                    </li>
                                    <li>
                                        <strong>Rectification</strong> — ask us to correct
                                        inaccurate or incomplete information.
                                    </li>
                                    <li>
                                        <strong>Erasure</strong> — ask us to delete your personal
                                        information, subject to certain exceptions.
                                    </li>
                                    <li>
                                        <strong>Restriction or objection</strong> — ask us to
                                        restrict or object to certain processing.
                                    </li>
                                    <li>
                                        <strong>Portability</strong> — receive your personal
                                        information in a structured, commonly used, machine-readable
                                        format.
                                    </li>
                                    <li>
                                        <strong>Withdraw consent</strong> — where we rely on
                                        consent, withdraw that consent at any time without
                                        affecting prior processing.
                                    </li>
                                    <li>
                                        <strong>Lodge a complaint</strong> — with your local data
                                        protection authority if you believe we have processed your
                                        information unlawfully.
                                    </li>
                                </ul>
                                <p>
                                    To exercise any of these rights, email us at{" "}
                                    <a
                                        href="mailto:privacy@sorvian.ai"
                                        className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                                    >
                                        privacy@sorvian.ai
                                    </a>
                                    . We will respond within the timeframes required by applicable
                                    law. We may need to verify your identity before fulfilling a
                                    request.
                                </p>
                            </section>

                            {/* 11. CCPA */}
                            <section id="ccpa">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    11. California privacy rights (CCPA/CPRA)
                                </h2>
                                <p className="mb-4">
                                    If you are a California resident, you have the following
                                    rights under the CCPA/CPRA:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>
                                        <strong>Right to know</strong> — what categories and
                                        specific pieces of personal information we collect,
                                        disclose, or share.
                                    </li>
                                    <li>
                                        <strong>Right to delete</strong> — your personal
                                        information, subject to certain exceptions.
                                    </li>
                                    <li>
                                        <strong>Right to correct</strong> — inaccurate personal
                                        information.
                                    </li>
                                    <li>
                                        <strong>Right to opt out of sale or sharing</strong> — for
                                        cross-context behavioral advertising.
                                    </li>
                                    <li>
                                        <strong>Right to limit use of sensitive personal
                                            information</strong>{" "}
                                        — although we do not currently use sensitive personal
                                        information for purposes beyond those expected.
                                    </li>
                                    <li>
                                        <strong>Right to non-discrimination</strong> — for
                                        exercising any of the rights above.
                                    </li>
                                </ul>
                                <p className="mb-4">
                                    <strong>Categories collected</strong> in the past 12 months
                                    include identifiers, internet/network activity, geolocation
                                    (approximate), professional/employment information,
                                    commercial information, and inferences drawn from the above.
                                    We collect this information from you, your device, and our
                                    third-party service providers, and disclose it to the
                                    categories of recipients described in{" "}
                                    <a
                                        href="#sharing"
                                        className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                                    >
                                        Section 7
                                    </a>
                                    .
                                </p>
                                <p className="mb-4">
                                    To submit a CCPA/CPRA request, email{" "}
                                    <a
                                        href="mailto:privacy@sorvian.ai"
                                        className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                                    >
                                        privacy@sorvian.ai
                                    </a>
                                    . You may use an authorized agent to submit a request on your
                                    behalf, subject to verification.
                                </p>
                                <p>
                                    To opt out of &ldquo;sharing&rdquo; for cross-context
                                    behavioral advertising, use the &ldquo;Reject&rdquo; or
                                    &ldquo;Customize&rdquo; option in our cookie banner, or open
                                    Cookie preferences from our footer to disable Marketing
                                    cookies. We honor Global Privacy Control (GPC) signals where
                                    technically feasible.
                                </p>
                            </section>

                            {/* 12. Security */}
                            <section id="security">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    12. Security
                                </h2>
                                <p>
                                    We use reasonable administrative, technical, and physical
                                    safeguards to protect personal information against
                                    unauthorized access, disclosure, alteration, and destruction.
                                    No system is perfectly secure, but we work hard to keep our
                                    Site and your information safe and to respond promptly to any
                                    incidents that may affect you.
                                </p>
                            </section>

                            {/* 13. Children */}
                            <section id="children">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    13. Children&apos;s privacy
                                </h2>
                                <p>
                                    The Site is intended for business and professional audiences
                                    and is not directed to children under the age of 16. We do
                                    not knowingly collect personal information from children
                                    under 16. If you believe a child has provided us with
                                    personal information, please contact us at{" "}
                                    <a
                                        href="mailto:privacy@sorvian.ai"
                                        className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                                    >
                                        privacy@sorvian.ai
                                    </a>{" "}
                                    and we will take steps to delete it.
                                </p>
                            </section>

                            {/* 14. Changes */}
                            <section id="changes">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    14. Changes to this policy
                                </h2>
                                <p>
                                    We may update this policy from time to time to reflect
                                    changes to our practices or for other operational, legal, or
                                    regulatory reasons. The &ldquo;Effective date&rdquo; at the
                                    top of this page indicates the most recent version. If we
                                    make material changes, we will provide notice through the
                                    Site or by other means as required by applicable law.
                                </p>
                            </section>

                            {/* 15. Contact */}
                            <section id="contact">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    15. How to contact us
                                </h2>
                                <p className="mb-6">
                                    If you have questions about this policy or our privacy
                                    practices, you can reach us at:
                                </p>
                                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 not-prose">
                                    <div className="flex items-start gap-4">
                                        <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                                            <Mail className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="text-sm">
                                            <p className="font-semibold text-zinc-900 mb-1">
                                                Sorvian AI, LLC
                                            </p>
                                            <p className="text-zinc-600 mb-2">
                                                15333 N. Pima Road, Suite 305
                                                <br />
                                                Scottsdale, AZ 85270
                                                <br />
                                                United States
                                            </p>
                                            <p className="text-zinc-600">
                                                Email:{" "}
                                                <a
                                                    href="mailto:privacy@sorvian.ai"
                                                    className="text-emerald-700 hover:text-emerald-800 underline underline-offset-2 font-medium"
                                                >
                                                    privacy@sorvian.ai
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default PrivacyContent;
