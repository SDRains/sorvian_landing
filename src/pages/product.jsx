"use client";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import ProductHero from "./components/product/ProductHero";
import PipelineSection from "./components/product/PipelineSection";
import ToolsetSection from "./components/product/ToolsetSection";

export default function ProductPage() {
    return (
        <main className="bg-zinc-950">
            <Navigation />
            <ProductHero />
            <PipelineSection />
            <ToolsetSection />
            <Footer />
        </main>
    );
}
