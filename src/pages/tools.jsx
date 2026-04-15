"use client";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import ToolsHero from "./components/tools/ToolsHero";
import ToolsOverview from "./components/tools/ToolsOverview";
import KnowledgeBaseSection from "./components/tools/KnowledgeBaseSection";

export default function ToolsPage() {
    return (
        <main className="bg-zinc-950">
            <Navigation />
            <ToolsHero />
            <ToolsOverview />
            <KnowledgeBaseSection />
            <Footer />
        </main>
    );
}
