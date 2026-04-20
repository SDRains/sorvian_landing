import {Building2, Globe, Shield} from "lucide-react";

function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-5 gap-12 mb-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                                <Shield className="w-5 h-5 text-zinc-950" />
                            </div>
                            <span className="text-xl font-semibold text-white">
                Sorvian AI
              </span>
                        </div>
                        <p className="text-zinc-400 leading-relaxed mb-6">
                            Protecting your data. Empowering your AI. The intelligent
                            middleware for enterprise AI security.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                            >
                                <Globe className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                            >
                                <Building2 className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="/product" className="text-zinc-400 hover:text-white transition-colors">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="/tools" className="text-zinc-400 hover:text-white transition-colors">
                                    Tools
                                </a>
                            </li>
                            <li>
                                <a href="/pricing" className="text-zinc-400 hover:text-white transition-colors">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="/security" className="text-zinc-400 hover:text-white transition-colors">
                                    Security
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="/about" className="text-zinc-400 hover:text-white transition-colors">
                                    About
                                </a>
                            </li>
                            {/*<li>*/}
                            {/*    <a href="#" className="text-zinc-400 hover:text-white transition-colors">*/}
                            {/*        Blog*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            <li>
                                <a href="/careers" className="text-zinc-400 hover:text-white transition-colors">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Resources</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="/documentation" className="text-zinc-400 hover:text-white transition-colors">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="/api-reference" className="text-zinc-400 hover:text-white transition-colors">
                                    API Reference
                                </a>
                            </li>
                            <li>
                                <a href="/status" className="text-zinc-400 hover:text-white transition-colors">
                                    Status
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-500 text-sm">
                        © 2026 Sorvian AI. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;