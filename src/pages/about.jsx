"use client";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import PageHead from "./components/PageHead";
import AboutHero from "./components/about/AboutHero";
import OurStory from "./components/about/OurStory";
import MissionSection from "./components/about/MissionSection";
import TeamSection from "./components/about/TeamSection";
import AboutCTA from "./components/about/AboutCTA";

export default function AboutPage() {
    return (
        <main className="bg-stone-50">
            <PageHead
                name="About"
                description="We're a remote-first team building the security and data layer between enterprise data and public AI models — because nobody should have to choose between useful AI and safe data."
                path="/about"
            />
            <Navigation />
            <AboutHero />
            <OurStory />
            <MissionSection />
            <TeamSection />
            <AboutCTA />
            <Footer />
        </main>
    );
}
