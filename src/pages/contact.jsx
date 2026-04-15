"use client";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import ContactHero from "./components/contact/ContactHero";
import ContactMethods from "./components/contact/ContactMethods";
import ContactForm from "./components/contact/ContactForm";

export default function ContactPage() {
    return (
        <main className="bg-zinc-950">
            <Navigation />
            <ContactHero />
            <ContactMethods />
            <ContactForm />
            <Footer />
        </main>
    );
}
