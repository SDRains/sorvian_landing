"use client";

import { useEffect, useState } from "react";
import { Cookie, X, Check, Settings2 } from "lucide-react";

const STORAGE_KEY = "sorvian-cookie-consent-v1";

const defaultConsent = {
    necessary: true, // always on, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false,
};

const categories = [
    {
        key: "necessary",
        title: "Strictly necessary",
        required: true,
        description:
            "Required for the site to function — security, basic navigation, and remembering your cookie preferences. Always on.",
    },
    {
        key: "analytics",
        title: "Analytics",
        description:
            "Helps us understand how visitors use the site — page views, clicks, and aggregated traffic patterns. Powered by Google Analytics, Mixpanel, and Hotjar.",
    },
    {
        key: "marketing",
        title: "Marketing",
        description:
            "Used to measure campaign performance and personalize content across our marketing tools, including HubSpot.",
    },
    {
        key: "functional",
        title: "Functional",
        description:
            "Powers extra features like demo scheduling (Calendly) and embedded media. Disabling these may limit some interactive elements.",
    },
];

function CookieBanner() {
    // null = not yet decided whether to show; false = hide; true = show
    const [visible, setVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [consent, setConsent] = useState(defaultConsent);

    useEffect(() => {
        try {
            const stored = window.localStorage.getItem(STORAGE_KEY);
            if (!stored) {
                setVisible(true);
            }
        } catch {
            // Storage unavailable — default to showing the banner
            setVisible(true);
        }
    }, []);

    const persist = (value) => {
        try {
            window.localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({ ...value, decidedAt: new Date().toISOString() })
            );
        } catch {
            // No-op if localStorage isn't available
        }
    };

    const acceptAll = () => {
        const next = {
            necessary: true,
            analytics: true,
            marketing: true,
            functional: true,
        };
        setConsent(next);
        persist(next);
        setVisible(false);
        setShowSettings(false);
    };

    const rejectNonEssential = () => {
        const next = { ...defaultConsent };
        setConsent(next);
        persist(next);
        setVisible(false);
        setShowSettings(false);
    };

    const savePreferences = () => {
        persist(consent);
        setVisible(false);
        setShowSettings(false);
    };

    const toggle = (key) => {
        setConsent((c) => ({ ...c, [key]: !c[key] }));
    };

    if (!visible) return null;

    return (
        <>
            {/* Settings modal */}
            {showSettings && (
                <div
                    className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-0 md:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="cookie-settings-title"
                >
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setShowSettings(false)}
                    />
                    <div className="relative w-full max-w-2xl bg-white rounded-t-3xl md:rounded-3xl shadow-2xl border border-zinc-200 max-h-[90vh] overflow-hidden flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-zinc-200">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                                    <Settings2 className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h2
                                        id="cookie-settings-title"
                                        className="text-lg font-bold text-zinc-900"
                                    >
                                        Cookie preferences
                                    </h2>
                                    <p className="text-xs text-zinc-500">
                                        Choose which categories you allow on sorvian.ai
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowSettings(false)}
                                className="cursor-pointer w-8 h-8 rounded-full hover:bg-zinc-100 flex items-center justify-center transition-colors"
                                aria-label="Close cookie preferences"
                            >
                                <X className="w-4 h-4 text-zinc-500" />
                            </button>
                        </div>

                        {/* Categories */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {categories.map((cat) => {
                                const enabled = consent[cat.key];
                                return (
                                    <div
                                        key={cat.key}
                                        className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5"
                                    >
                                        <div className="flex items-start justify-between gap-4 mb-2">
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-semibold text-zinc-900">
                                                    {cat.title}
                                                </h3>
                                                {cat.required && (
                                                    <span className="text-[10px] font-semibold tracking-widest uppercase text-emerald-700 bg-emerald-100 border border-emerald-200 rounded-full px-2 py-0.5">
                                                        Always on
                                                    </span>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => !cat.required && toggle(cat.key)}
                                                disabled={cat.required}
                                                className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full transition-colors ${
                                                    cat.required
                                                        ? "bg-emerald-500 cursor-not-allowed opacity-60"
                                                        : enabled
                                                          ? "bg-emerald-500 cursor-pointer"
                                                          : "bg-zinc-300 cursor-pointer"
                                                }`}
                                                aria-pressed={enabled}
                                                aria-label={`Toggle ${cat.title}`}
                                            >
                                                <span
                                                    className={`absolute top-0.5 left-0.5 inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${
                                                        enabled ? "translate-x-5" : "translate-x-0"
                                                    }`}
                                                />
                                            </button>
                                        </div>
                                        <p className="text-sm text-zinc-600 leading-relaxed">
                                            {cat.description}
                                        </p>
                                    </div>
                                );
                            })}

                            <p className="text-xs text-zinc-500 leading-relaxed pt-2">
                                Read more in our{" "}
                                <a
                                    href="/privacy"
                                    className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                                >
                                    Privacy Policy
                                </a>
                                . You can revisit these preferences any time from the link in
                                our footer.
                            </p>
                        </div>

                        {/* Footer actions */}
                        <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-zinc-200 bg-zinc-50">
                            <button
                                onClick={rejectNonEssential}
                                className="cursor-pointer order-2 sm:order-1 flex-1 bg-white border border-zinc-300 text-zinc-700 px-5 py-2.5 rounded-full font-medium hover:bg-zinc-100 transition-colors text-sm"
                            >
                                Reject all non-essential
                            </button>
                            <button
                                onClick={savePreferences}
                                className="cursor-pointer order-1 sm:order-2 flex-1 bg-emerald-500 text-zinc-950 px-5 py-2.5 rounded-full font-semibold hover:bg-emerald-400 transition-colors text-sm flex items-center justify-center gap-2"
                            >
                                <Check className="w-4 h-4" strokeWidth={3} />
                                Save preferences
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Banner */}
            <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
                <div className="max-w-5xl mx-auto bg-zinc-900/95 backdrop-blur-md border border-zinc-800 rounded-2xl shadow-2xl p-5 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                        <div className="flex items-start gap-4 flex-1">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30 flex items-center justify-center flex-shrink-0">
                                <Cookie className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-white mb-1">
                                    We use cookies to improve your experience.
                                </p>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    Strictly necessary cookies are always on. We&apos;d also like
                                    to set analytics, marketing, and functional cookies — only
                                    with your consent. See our{" "}
                                    <a
                                        href="/privacy"
                                        className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                                    >
                                        Privacy Policy
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 md:flex-shrink-0">
                            <button
                                onClick={() => setShowSettings(true)}
                                className="cursor-pointer text-xs sm:text-sm font-medium text-zinc-300 hover:text-white px-4 py-2 transition-colors inline-flex items-center justify-center gap-1.5"
                            >
                                <Settings2 className="w-4 h-4" />
                                Customize
                            </button>
                            <button
                                onClick={rejectNonEssential}
                                className="cursor-pointer text-xs sm:text-sm font-medium bg-zinc-800 border border-zinc-700 text-white px-4 py-2 rounded-full hover:bg-zinc-700 transition-colors"
                            >
                                Reject
                            </button>
                            <button
                                onClick={acceptAll}
                                className="cursor-pointer text-xs sm:text-sm font-semibold bg-emerald-500 text-zinc-950 px-4 py-2 rounded-full hover:bg-emerald-400 transition-colors"
                            >
                                Accept all
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CookieBanner;
