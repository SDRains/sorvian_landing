"use client";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import PageHead from "./components/PageHead";
import ContactHero from "./components/contact/ContactHero";
import ContactMethods from "./components/contact/ContactMethods";
import ContactForm from "./components/contact/ContactForm";

export default function ContactPage() {
    return (
        <main className="bg-zinc-950">
            <PageHead
                name="Contact"
                description="Book a demo, scope an enterprise rollout, or run a security review. The Sorvian team responds within one business day."
                path="/contact"
            />
            <Navigation />
            <ContactHero />
            <ContactMethods />
            <ContactForm />
            <Footer />
        </main>
    );
}
