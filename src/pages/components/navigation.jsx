import {useState} from "react";
import {ArrowRight, Menu, Shield, X} from "lucide-react";

function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav
            className='fixed top-0 sm:left-0 sm:right-0 z-50 transition-all duration-300 w-full sm:w-fit sm:mx-auto mt-4 rounded-full backdrop-blur-sm bg-black/20 shadow-2xl shadow-white/5'
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between space-x-12 lg:space-x-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.open("/", "_self")}>
                        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                            <Shield className="w-5 h-5 text-zinc-950" />
                        </div>
                        <span className="text-xl font-semibold text-white tracking-tight">
              Sorvian AI
            </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="/product"
                            className="text-zinc-200 hover:text-emerald-500 transition-colors"
                        >
                            Product
                        </a>
                        <a
                            href="/security"
                            className="text-zinc-200 hover:text-emerald-500 transition-colors"
                        >
                            Security
                        </a>
                        <a
                            href="#tools"
                            className="text-zinc-200 hover:text-emerald-500 transition-colors"
                        >
                            Tools
                        </a>
                        <a
                            href="#pricing"
                            className="text-zinc-200 hover:text-emerald-500 transition-colors"
                        >
                            Pricing
                        </a>
                        <a
                            href="#contact"
                            className="text-zinc-200 hover:text-emerald-500 transition-colors"
                        >
                            Contact
                        </a>
                    </div>

                    <div>
                        {/* CTA Buttons */}
                        <div className="hidden md:flex items-center gap-4">
                            <button
                                className="text-zinc-200 hover:text-emerald-500 transition-colors cursor-pointer"
                            >
                                Sign In
                            </button>
                            <button className="cursor-pointer bg-white text-zinc-950 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-500 transition-colors flex items-center gap-2">
                                Book a Demo
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white"
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
                    <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-xl border-b border-white/5 p-6">
                        <div className="flex flex-col gap-4">
                            <a href="/product" className="text-zinc-400 hover:text-white">
                                Product
                            </a>
                            <a href="/security" className="text-zinc-400 hover:text-white">
                                Security
                            </a>
                            <a href="#tools" className="text-zinc-400 hover:text-white">
                                Tools
                            </a>
                            <a href="#pricing" className="text-zinc-400 hover:text-white">
                                Pricing
                            </a>
                            <a href="#contact" className="text-zinc-400 hover:text-white">
                                Contact
                            </a>
                            <hr className="border-white/10" />
                            <button className="text-zinc-400 hover:text-white text-left">
                                Sign In
                            </button>
                            <button className="bg-white text-zinc-950 px-4 py-2 rounded-full text-sm font-medium w-fit">
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