"use client";

import { useEffect, useState } from "react";
import { Mail, FileText } from "lucide-react";

const sections = [
    { id: "acceptance", label: "1. Acceptance of these terms" },
    { id: "scope", label: "2. Scope &amp; relationship to other agreements" },
    { id: "eligibility", label: "3. Eligibility" },
    { id: "permitted-use", label: "4. Permitted use of the Site" },
    { id: "prohibited", label: "5. Prohibited conduct" },
    { id: "ip", label: "6. Intellectual property" },
    { id: "submissions", label: "7. Submissions, inquiries &amp; feedback" },
    { id: "third-party", label: "8. Third-party links &amp; services" },
    { id: "privacy", label: "9. Privacy" },
    { id: "disclaimers", label: "10. Disclaimers" },
    { id: "liability", label: "11. Limitation of liability" },
    { id: "indemnification", label: "12. Indemnification" },
    { id: "governing-law", label: "13. Governing law &amp; venue" },
    { id: "arbitration", label: "14. Dispute resolution &amp; arbitration" },
    { id: "changes", label: "15. Changes to these terms" },
    { id: "termination", label: "16. Termination" },
    { id: "miscellaneous", label: "17. Miscellaneous" },
    { id: "contact", label: "18. How to contact us" },
];

function TermsContent() {
    const [activeId, setActiveId] = useState(sections[0].id);

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
                                        dangerouslySetInnerHTML={{ __html: s.label }}
                                    />
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
                                        dangerouslySetInnerHTML={{ __html: s.label }}
                                    />
                                ))}
                            </nav>
                        </details>

                        <div className="space-y-12 text-zinc-700 leading-relaxed">
                            {/* Intro */}
                            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-amber-900 leading-relaxed">
                                <p className="font-semibold mb-1">Please read carefully.</p>
                                <p>
                                    These Terms include important provisions about your legal
                                    rights — including a binding arbitration agreement and a
                                    class action waiver in{" "}
                                    <a
                                        href="#arbitration"
                                        className="underline underline-offset-2 hover:text-amber-700"
                                    >
                                        Section 14
                                    </a>{" "}
                                    that affect how disputes are resolved.
                                </p>
                            </div>

                            {/* 1. Acceptance */}
                            <section id="acceptance">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    1. Acceptance of these terms
                                </h2>
                                <p className="mb-4">
                                    These Terms of Service (the &ldquo;Terms&rdquo;) form a
                                    binding agreement between you (&ldquo;you&rdquo; or
                                    &ldquo;your&rdquo;) and{" "}
                                    <strong>Sorvian AI, LLC</strong> (&ldquo;Sorvian,&rdquo;
                                    &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), an
                                    Arizona limited liability company headquartered at 15333 N.
                                    Pima Road, Suite 305, Scottsdale, AZ 85270.
                                </p>
                                <p>
                                    By accessing or using our marketing website at{" "}
                                    <a
                                        href="https://www.sorvian.ai"
                                        className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                                    >
                                        sorvian.ai
                                    </a>{" "}
                                    (the &ldquo;Site&rdquo;), you agree to these Terms and to our{" "}
                                    <a
                                        href="/privacy"
                                        className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                                    >
                                        Privacy Policy
                                    </a>
                                    . If you do not agree, do not use the Site.
                                </p>
                            </section>

                            {/* 2. Scope */}
                            <section id="scope">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    2. Scope &amp; relationship to other agreements
                                </h2>
                                <p className="mb-4">
                                    These Terms govern only your use of the Site. They do not
                                    govern your use of the Sorvian product platform.
                                </p>
                                <p>
                                    If you are a Sorvian customer or evaluating the product, your
                                    access to and use of the Sorvian product is governed by a{" "}
                                    <strong>separate Master Services Agreement</strong>,
                                    Subscription Agreement, Order Form, and Data Processing
                                    Agreement entered into between you (or your organization) and
                                    Sorvian. Those agreements control over these Terms in the
                                    event of any conflict relating to the product.
                                </p>
                            </section>

                            {/* 3. Eligibility */}
                            <section id="eligibility">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    3. Eligibility
                                </h2>
                                <p className="mb-4">By using the Site, you represent that:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>You are at least 16 years old.</li>
                                    <li>
                                        If you are accessing the Site on behalf of a company or
                                        other organization, you have the authority to bind that
                                        entity to these Terms, and references to &ldquo;you&rdquo;
                                        include that entity.
                                    </li>
                                    <li>
                                        You are not located in a jurisdiction subject to a U.S.
                                        government embargo, designated by the U.S. government as a
                                        &ldquo;terrorist-supporting&rdquo; country, or listed on a
                                        U.S. government list of prohibited or restricted parties.
                                    </li>
                                </ul>
                            </section>

                            {/* 4. Permitted use */}
                            <section id="permitted-use">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    4. Permitted use of the Site
                                </h2>
                                <p>
                                    Subject to these Terms, we grant you a limited, revocable,
                                    non-exclusive, non-transferable, non-sublicensable license
                                    to access and view the Site for your personal, internal
                                    business, and informational purposes — for example, to learn
                                    about our products, request a demo, evaluate a partnership,
                                    or apply to an open role.
                                </p>
                            </section>

                            {/* 5. Prohibited */}
                            <section id="prohibited">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    5. Prohibited conduct
                                </h2>
                                <p className="mb-4">When using the Site, you agree not to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        Violate any applicable law, regulation, or third-party
                                        right.
                                    </li>
                                    <li>
                                        Copy, modify, distribute, sell, lease, or create
                                        derivative works of any portion of the Site or its content
                                        except as expressly permitted by these Terms.
                                    </li>
                                    <li>
                                        Reverse engineer, decompile, or attempt to derive source
                                        code from any software made available through the Site.
                                    </li>
                                    <li>
                                        Scrape, crawl, harvest, or otherwise extract data from the
                                        Site through automated means, except for legitimate
                                        search-engine indexing in accordance with our robots.txt.
                                    </li>
                                    <li>
                                        Interfere with, disrupt, or impose an unreasonable load on
                                        the Site or its infrastructure (including denial-of-service
                                        attempts).
                                    </li>
                                    <li>
                                        Probe, scan, or test the vulnerability of the Site or any
                                        connected system without our prior written authorization.
                                    </li>
                                    <li>
                                        Use the Site to transmit viruses, malware, or any other
                                        harmful or malicious code.
                                    </li>
                                    <li>
                                        Impersonate any person or entity, or misrepresent your
                                        affiliation with any person or entity.
                                    </li>
                                    <li>
                                        Use the Site to send unsolicited communications,
                                        promotional material, or any form of spam.
                                    </li>
                                    <li>
                                        Use the Site to develop, train, or improve any artificial
                                        intelligence or machine-learning model that competes with
                                        Sorvian.
                                    </li>
                                </ul>
                            </section>

                            {/* 6. IP */}
                            <section id="ip">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    6. Intellectual property
                                </h2>
                                <p className="mb-4">
                                    The Site, including all content, design, graphics, text,
                                    illustrations, software, and trademarks, is owned by Sorvian
                                    or our licensors and is protected by U.S. and international
                                    intellectual property laws.
                                </p>
                                <p className="mb-4">
                                    &ldquo;Sorvian,&rdquo; the Sorvian logo, and related names
                                    and logos are trademarks of Sorvian AI, LLC. You may not use
                                    them without our prior written permission, except for fair
                                    descriptive use in accordance with applicable law.
                                </p>
                                <p>
                                    All rights not expressly granted to you in these Terms are
                                    reserved.
                                </p>
                            </section>

                            {/* 7. Submissions */}
                            <section id="submissions">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    7. Submissions, inquiries &amp; feedback
                                </h2>
                                <p className="mb-4">
                                    When you submit information through a contact, demo, sales,
                                    or careers form, or otherwise communicate with us
                                    (collectively, &ldquo;Submissions&rdquo;), you represent that
                                    your Submissions are accurate, that you have the right to
                                    provide them, and that they do not violate any law or third-party
                                    right.
                                </p>
                                <p className="mb-4">
                                    You grant Sorvian a worldwide, royalty-free, perpetual,
                                    irrevocable, transferable, sublicensable license to use,
                                    reproduce, modify, and store your Submissions solely for the
                                    purposes of (i) responding to your inquiry, (ii) providing
                                    information you requested, (iii) processing your application
                                    for an open role (if applicable), and (iv) operating and
                                    improving our marketing and recruiting.
                                </p>
                                <p>
                                    If you provide feedback, suggestions, or ideas about Sorvian
                                    or our products (collectively, &ldquo;Feedback&rdquo;), you
                                    grant Sorvian a perpetual, irrevocable, royalty-free, fully
                                    paid-up, worldwide license to use the Feedback for any
                                    purpose, without obligation or compensation to you.
                                </p>
                            </section>

                            {/* 8. Third-party */}
                            <section id="third-party">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    8. Third-party links &amp; services
                                </h2>
                                <p>
                                    The Site may contain links to or be integrated with
                                    third-party websites and services (for example, scheduling
                                    tools, analytics, and CRM platforms). We do not control these
                                    third parties and are not responsible for their content or
                                    practices. Your use of any third-party service is subject to
                                    that third party&apos;s own terms and privacy policy.
                                </p>
                            </section>

                            {/* 9. Privacy */}
                            <section id="privacy">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    9. Privacy
                                </h2>
                                <p>
                                    Our collection and use of personal information through the
                                    Site is described in our{" "}
                                    <a
                                        href="/privacy"
                                        className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                                    >
                                        Privacy Policy
                                    </a>
                                    , which is incorporated by reference into these Terms.
                                </p>
                            </section>

                            {/* 10. Disclaimers */}
                            <section id="disclaimers">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    10. Disclaimers
                                </h2>
                                <p className="mb-4 uppercase text-xs font-semibold tracking-widest text-zinc-500">
                                    Read this section carefully.
                                </p>
                                <p className="mb-4">
                                    THE SITE AND ALL CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND
                                    &ldquo;AS AVAILABLE,&rdquo; WITHOUT WARRANTIES OF ANY KIND,
                                    EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW,
                                    SORVIAN DISCLAIMS ALL WARRANTIES, INCLUDING THE IMPLIED
                                    WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                                    PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF
                                    COURSE OF DEALING OR USAGE OF TRADE.
                                </p>
                                <p>
                                    We do not warrant that the Site will be uninterrupted,
                                    secure, error-free, or free of viruses or other harmful
                                    components, or that any information provided through the
                                    Site is accurate, complete, current, or reliable. Statements
                                    about future products or features are not commitments.
                                </p>
                            </section>

                            {/* 11. Liability */}
                            <section id="liability">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    11. Limitation of liability
                                </h2>
                                <p className="mb-4">
                                    TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO
                                    EVENT WILL SORVIAN OR ITS AFFILIATES, OFFICERS, DIRECTORS,
                                    EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT,
                                    INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
                                    DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR
                                    BUSINESS OPPORTUNITY, ARISING OUT OF OR RELATED TO YOUR USE
                                    OF (OR INABILITY TO USE) THE SITE — REGARDLESS OF THE LEGAL
                                    THEORY (CONTRACT, TORT, OR OTHERWISE) AND EVEN IF SORVIAN
                                    HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                                </p>
                                <p>
                                    SORVIAN&apos;S TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR
                                    RELATED TO YOUR USE OF THE SITE WILL NOT EXCEED ONE HUNDRED
                                    U.S. DOLLARS ($100). SOME JURISDICTIONS DO NOT ALLOW THE
                                    EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO PORTIONS OF
                                    THIS SECTION MAY NOT APPLY TO YOU.
                                </p>
                            </section>

                            {/* 12. Indemnification */}
                            <section id="indemnification">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    12. Indemnification
                                </h2>
                                <p>
                                    You agree to defend, indemnify, and hold harmless Sorvian
                                    and its affiliates, officers, directors, employees, and
                                    agents from and against any claims, damages, liabilities,
                                    costs, and expenses (including reasonable attorneys&apos;
                                    fees) arising out of or related to (i) your use or misuse of
                                    the Site, (ii) your violation of these Terms, (iii) your
                                    violation of any law or third-party right, or (iv) any
                                    Submissions or Feedback you provide. We reserve the right to
                                    assume the exclusive defense and control of any matter
                                    subject to indemnification by you, and you agree to cooperate
                                    with our defense.
                                </p>
                            </section>

                            {/* 13. Governing law */}
                            <section id="governing-law">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    13. Governing law &amp; venue
                                </h2>
                                <p className="mb-4">
                                    These Terms and any dispute arising out of or related to
                                    them or the Site are governed by the laws of the State of
                                    Arizona, without regard to its conflict-of-law principles.
                                </p>
                                <p>
                                    Subject to{" "}
                                    <a
                                        href="#arbitration"
                                        className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                                    >
                                        Section 14
                                    </a>
                                    , the exclusive venue for any action not subject to
                                    arbitration will be the state and federal courts located in
                                    Maricopa County, Arizona, and you consent to the personal
                                    jurisdiction of those courts.
                                </p>
                            </section>

                            {/* 14. Arbitration */}
                            <section id="arbitration">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    14. Dispute resolution &amp; arbitration
                                </h2>
                                <p className="mb-4 uppercase text-xs font-semibold tracking-widest text-zinc-500">
                                    Please review carefully.
                                </p>
                                <p className="mb-4">
                                    <strong>Informal resolution.</strong> Before initiating any
                                    formal proceeding, you agree to first contact us at{" "}
                                    <a
                                        href="mailto:legal@sorvian.ai"
                                        className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                                    >
                                        legal@sorvian.ai
                                    </a>{" "}
                                    and provide a written description of your dispute and the
                                    relief you seek. The parties will attempt in good faith to
                                    resolve the dispute informally for at least 60 days before
                                    pursuing further action.
                                </p>
                                <p className="mb-4">
                                    <strong>Binding arbitration.</strong> If the dispute is not
                                    resolved informally, you and Sorvian agree that any dispute
                                    arising out of or relating to these Terms or the Site will
                                    be resolved through binding arbitration administered by JAMS
                                    in accordance with its Streamlined Arbitration Rules and
                                    Procedures. The arbitration will be held in Maricopa County,
                                    Arizona, or at another location agreed by the parties.
                                    Judgment on the arbitrator&apos;s award may be entered in
                                    any court of competent jurisdiction.
                                </p>
                                <p className="mb-4">
                                    <strong>Class action waiver.</strong> Disputes will be
                                    resolved on an individual basis only. You and Sorvian waive
                                    any right to bring or participate in a class, collective,
                                    consolidated, or representative action. The arbitrator may
                                    not consolidate more than one person&apos;s claims and may
                                    not preside over any form of representative or class
                                    proceeding.
                                </p>
                                <p className="mb-4">
                                    <strong>Small-claims carve-out.</strong> Either party may
                                    bring an individual action in small-claims court if the
                                    dispute qualifies. Either party may also seek injunctive or
                                    other equitable relief in court for actual or threatened
                                    infringement of intellectual property rights.
                                </p>
                                <p>
                                    <strong>Opt-out.</strong> You may opt out of this
                                    arbitration agreement by sending written notice to{" "}
                                    <a
                                        href="mailto:legal@sorvian.ai"
                                        className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                                    >
                                        legal@sorvian.ai
                                    </a>{" "}
                                    within 30 days of first accepting these Terms. The notice
                                    must include your name, the email address you used with the
                                    Site, and a clear statement that you wish to opt out.
                                </p>
                            </section>

                            {/* 15. Changes */}
                            <section id="changes">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    15. Changes to these terms
                                </h2>
                                <p>
                                    We may update these Terms from time to time. The
                                    &ldquo;Effective date&rdquo; at the top of this page reflects
                                    the most recent version. If we make material changes, we
                                    will provide reasonable notice — for example, by posting a
                                    notice on the Site or updating the effective date. Your
                                    continued use of the Site after the changes take effect
                                    constitutes your acceptance of the updated Terms.
                                </p>
                            </section>

                            {/* 16. Termination */}
                            <section id="termination">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    16. Termination
                                </h2>
                                <p>
                                    We may suspend or terminate your access to the Site at any
                                    time, for any reason, with or without notice. Sections that
                                    by their nature should survive termination — including
                                    Sections 6 (Intellectual property), 7 (Submissions), 10
                                    (Disclaimers), 11 (Limitation of liability), 12
                                    (Indemnification), 13 (Governing law &amp; venue), 14
                                    (Dispute resolution), and 17 (Miscellaneous) — will survive
                                    termination.
                                </p>
                            </section>

                            {/* 17. Misc */}
                            <section id="miscellaneous">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    17. Miscellaneous
                                </h2>
                                <ul className="list-disc pl-6 space-y-3">
                                    <li>
                                        <strong>Entire agreement.</strong> These Terms, together
                                        with our Privacy Policy, constitute the entire agreement
                                        between you and Sorvian regarding the Site and supersede
                                        all prior or contemporaneous agreements relating to the
                                        Site.
                                    </li>
                                    <li>
                                        <strong>Severability.</strong> If any provision of these
                                        Terms is held to be invalid or unenforceable, the remaining
                                        provisions will remain in full force and effect.
                                    </li>
                                    <li>
                                        <strong>No waiver.</strong> Our failure to enforce any
                                        right or provision of these Terms is not a waiver of that
                                        right or provision.
                                    </li>
                                    <li>
                                        <strong>Assignment.</strong> You may not assign or
                                        transfer these Terms without our prior written consent.
                                        Sorvian may assign these Terms without notice or consent.
                                    </li>
                                    <li>
                                        <strong>Force majeure.</strong> We will not be liable for
                                        any delay or failure to perform resulting from causes
                                        beyond our reasonable control.
                                    </li>
                                    <li>
                                        <strong>Notices.</strong> We may provide notices to you by
                                        posting on the Site or by email to the address you
                                        provided.
                                    </li>
                                    <li>
                                        <strong>Headings.</strong> Section headings are for
                                        convenience only and do not affect the interpretation of
                                        these Terms.
                                    </li>
                                </ul>
                            </section>

                            {/* 18. Contact */}
                            <section id="contact">
                                <h2 className="text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
                                    18. How to contact us
                                </h2>
                                <p className="mb-6">
                                    Questions about these Terms? Reach us here:
                                </p>
                                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
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
                                                    href="mailto:legal@sorvian.ai"
                                                    className="text-emerald-700 hover:text-emerald-800 underline underline-offset-2 font-medium"
                                                >
                                                    legal@sorvian.ai
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

export default TermsContent;
