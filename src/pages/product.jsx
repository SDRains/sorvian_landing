"use client";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import ProductHero from "./components/product/ProductHero";
import PipelineSection from "./components/product/PipelineSection";
import ToolsetSection from "./components/product/ToolsetSection";
import IntegrationsSection from "./components/product/IntegrationsSection";
import ProductCTA from "./components/product/ProductCTA";

export default function ProductPage() {
    return (
        <main className="bg-zinc-950">
            <Navigation />
            <ProductHero />
            <PipelineSection />
            <ToolsetSection />
            <IntegrationsSection />
            <ProductCTA />
            <Footer />
        </main>
    );
}
