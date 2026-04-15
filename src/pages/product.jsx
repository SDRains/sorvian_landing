"use client";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import PageHead from "./components/PageHead";
import ProductHero from "./components/product/ProductHero";
import PipelineSection from "./components/product/PipelineSection";
import ToolsetSection from "./components/product/ToolsetSection";
import IntegrationsSection from "./components/product/IntegrationsSection";
import ProductCTA from "./components/product/ProductCTA";

export default function ProductPage() {
    return (
        <main className="bg-zinc-950">
            <PageHead
                name="Product"
                description="The Sorvian platform: a proprietary distillation pipeline that transforms sensitive enterprise data into a queryable knowledge layer — without ever sending raw content to a public AI model."
                path="/product"
            />
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
