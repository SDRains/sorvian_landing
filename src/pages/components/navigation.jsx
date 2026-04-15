"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, Shield, X } from "lucide-react";

/**
 * Walk up the DOM from `el` finding the first ancestor with a non-transparent
 * background color. Returns an [r, g, b] tuple, defaulting to white if nothing
 * is found.
 */
function getEffectiveBgColor(el) {
    let node = el;
    while (node && node !== document.body) {
        const bg = window.getComputedStyle(node).backgroundColor;
        const match = bg.match(
            /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/
        );
        if (match) {
            const alpha = match[4] === undefined ? 1 : parseFloat(match[4]);
            if (alpha > 0.1) {
                return [
                    parseInt(match[1], 10),
                    parseInt(match[2], 10),
                    parseInt(match[3], 10),
                ];
            }
        }
        node = node.parentElement;
    }
    return [255, 255, 255];
}

/** WCAG-relative luminance, 0 (black) → 1 (white). */
function luminance(r, g, b) {
    const channel = (c) => {
        const v = c / 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // Tracks the luminance of the content *behind* the nav.
    // When the content is light, we render a DARK-styled nav (and vice-versa)
    // so the nav always contrasts with what it's sitting on top of.
    const [contentIsLight, setContentIsLight] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        let rafId = null;

        const update = () => {
            rafId = null;
            const nav = navRef.current;
            if (!nav) return;

            // Sample just below the nav's visible bottom edge.
            const rect = nav.getBoundingClientRect();
            const sampleY = rect.bottom + 8;
            const sampleX = window.innerWidth / 2;

            // Temporarily make the nav non-interactive so elementFromPoint
            // reports what's *behind* it instead of the nav itself.
            const prevPE = nav.style.pointerEvents;
            nav.style.pointerEvents = "none";
            const target = document.elementFromPoint(sampleX, sampleY);
            nav.style.pointerEvents = prevPE;

            if (!target) return;
            const [r, g, b] = getEffectiveBgColor(target);
            const lum = luminance(r, g, b);
            setContentIsLight(lum > 0.55);
        };

        const onScroll = () => {
            if (rafId === null) {
                rafId = window.requestAnimationFrame(update);
            }
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (rafId !== null) cancelAnimationFrame(rafId);
        };
    }, []);

    // Render a DARK nav when the content behind it is light, and a LIGHT nav
    // when the content behind it is dark — so the nav always contrasts.
    const navIsDark = contentIsLight;

    // Theme-aware class tables
    const navWrapper = navIsDark
        ? "bg-zinc-900/80 shadow-2xl shadow-zinc-900/20 border border-zinc-800/50"
        : "bg-white/70 shadow-2xl shadow-white/10 border border-white/20";

    const logoText = navIsDark ? "text-white" : "text-zinc-900";

    const linkBase = "transition-colors hover:text-emerald-400";
    const linkColor = navIsDark ? "text-zinc-200" : "text-zinc-800";

    const signInColor = navIsDark
        ? "text-zinc-200 hover:text-emerald-400"
        : "text-zinc-800 hover:text-emerald-600";

    const demoBtn = navIsDark
        ? "bg-emerald-500 text-zinc-950 hover:bg-emerald-400"
        : "bg-zinc-900 text-white hover:bg-zinc-800";

    const mobileMenuBtn = navIsDark ? "text-white" : "text-zinc-900";

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 sm:left-0 sm:right-0 z-50 transition-all duration-300 w-full sm:w-fit sm:mx-auto mt-4 rounded-full backdrop-blur-xs ${navWrapper}`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between space-x-12 lg:space-x-20">
                    {/* Logo */}
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => window.open("/", "_self")}
                    >
                        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                            <Shield className="w-5 h-5 text-zinc-950" />
                        </div>
                        <span
                            className={`text-xl font-semibold tracking-tight transition-colors ${logoText}`}
                        >
                            Sorvian AI
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="/product" className={`${linkBase} ${linkColor}`}>
                            Product
                        </a>
                        <a href="/security" className={`${linkBase} ${linkColor}`}>
                            Security
                        </a>
                        <a href="/tools" className={`${linkBase} ${linkColor}`}>
                            Tools
                        </a>
                        <a href="/pricing" className={`${linkBase} ${linkColor}`}>
                            Pricing
                        </a>
                        <a href="/contact" className={`${linkBase} ${linkColor}`}>
                            Contact
                        </a>
                    </div>

                    <div>
                        {/* CTA Buttons */}
                        <div className="hidden md:flex items-center gap-4">
                            <button
                                className={`cursor-pointer transition-colors ${signInColor}`}
                            >
                                Sign In
                            </button>
                            <button
                                className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${demoBtn}`}
                            >
                                Book a Demo
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className={`md:hidden transition-colors ${mobileMenuBtn}`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div
                        className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b p-6 ${
                            navIsDark
                                ? "bg-zinc-950/95 border-white/5"
                                : "bg-white/95 border-zinc-200"
                        }`}
                    >
                        <div className="flex flex-col gap-4">
                            {[
                                ["/product", "Product"],
                                ["/security", "Security"],
                                ["/tools", "Tools"],
                                ["/pricing", "Pricing"],
                                ["/contact", "Contact"],
                            ].map(([href, label]) => (
                                <a
                                    key={href}
                                    href={href}
                                    className={
                                        navIsDark
                                            ? "text-zinc-400 hover:text-white"
                                            : "text-zinc-700 hover:text-zinc-900"
                                    }
                                >
                                    {label}
                                </a>
                            ))}
                            <hr
                                className={navIsDark ? "border-white/10" : "border-zinc-200"}
                            />
                            <button
                                className={
                                    navIsDark
                                        ? "text-zinc-400 hover:text-white text-left"
                                        : "text-zinc-700 hover:text-zinc-900 text-left"
                                }
                            >
                                Sign In
                            </button>
                            <button
                                className={`px-4 py-2 rounded-full text-sm font-medium w-fit ${
                                    navIsDark
                                        ? "bg-emerald-500 text-zinc-950"
                                        : "bg-zinc-900 text-white"
                                }`}
                            >
                                Book a Demo
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navigation;
