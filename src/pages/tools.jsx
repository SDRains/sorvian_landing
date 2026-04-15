"use client";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import PageHead from "./components/PageHead";
import ToolsHero from "./components/tools/ToolsHero";
import ToolsOverview from "./components/tools/ToolsOverview";
import KnowledgeBaseSection from "./components/tools/KnowledgeBaseSection";

export default function ToolsPage() {
    return (
        <main className="bg-zinc-950">
            <PageHead
                name="Tools"
                description="Three enterprise AI tools built on one secure pipeline: Knowledge Base RAG for internal and customer-facing retrieval, Security Layer for PII and IP protection, and Document Analyzer for high-efficiency ingestion."
                path="/tools"
            />
            <Navigation />
            <ToolsHero />
            <ToolsOverview />
            <KnowledgeBaseSection />
            <Footer />
        </main>
    );
}
