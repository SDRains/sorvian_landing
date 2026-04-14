import {ArrowRight, ChevronRight, Sparkles} from "lucide-react";

function HomeHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src='/earth.jpg'
                    alt=""
                    className="w-full h-full object-cover"
                />
                {/* Overlay gradients for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/30 to-zinc-950/80" />
                {/* Top aurora effect */}
                <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
                {/* Announcement Badge */}
                <div className="inline-flex items-center gap-2 bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50 rounded-full px-4 py-2 mb-8">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-zinc-300">
            Hybrid AI Security Platform
          </span>
                    <span className="text-emerald-400 text-sm font-medium flex items-center gap-1 ml-2 cursor-pointer">
            See a Demo <ChevronRight className="w-3 h-3" />
          </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                    Secure AI for the
                    <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Enterprise
          </span>
                </h1>

                {/* Subheadline */}
                <p className="text-base md:text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Sorvian AI protects your sensitive data while unlocking full AI capability. Use frontier models without exposing PII or proprietary IP.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <button className="cursor-pointer bg-zinc-800 border border-zinc-700 text-white px-6 py-3 rounded-full font-medium hover:bg-zinc-700 transition-all flex items-center gap-2">
                        Book a Demo
                    </button>
                    <button className="cursor-pointer bg-emerald-500 text-zinc-950 px-6 py-3 rounded-full font-medium hover:bg-emerald-400 transition-all flex items-center gap-2 group">
                        Get Started Free
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Trust Badges */}
                <div>
                    <p className="text-sm text-zinc-200 mb-6">
                        Trusted by 500+ Global Teams
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-60">
                        {/* Logo placeholders - replace with actual logos */}
                        <div className="flex items-center gap-2 text-zinc-400 font-semibold text-sm tracking-wide">
                            <span className="text-blue-400">▲</span> ATLASSIAN
                        </div>
                        <div className="flex items-center gap-2 text-zinc-400 font-semibold text-sm tracking-wide">
                            <span className="text-zinc-300">⊞</span> Microsoft
                        </div>
                        <div className="flex items-center gap-2 text-zinc-400 font-semibold text-sm tracking-wide">
                            <span className="font-bold">N</span> Notion
                        </div>
                        <div className="flex items-center gap-2 text-zinc-400 font-semibold text-sm tracking-wide">
                            <span className="text-emerald-400">🛍</span> shopify
                        </div>
                        <div className="flex items-center gap-2 text-zinc-400 font-semibold text-sm tracking-wide">
                            <span className="text-pink-400">#</span> slack
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeHero;