import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Charset & baseline */}
        <meta charSet="utf-8" />

        {/* DNS prefetch / preconnect for any third-party assets */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Organization schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sorvian AI",
              url: "https://www.sorvian.ai",
              logo: "https://www.sorvian.ai/logo.png",
              description:
                "Intelligent middleware that protects enterprise data while enabling full AI capability. Zero raw data transmission, local-first processing, derived content only.",
              sameAs: [
                "https://www.linkedin.com/company/sorvian-ai",
                "https://twitter.com/sorvian_ai",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  email: "sales@sorvian.ai",
                  availableLanguage: "English",
                },
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  email: "support@sorvian.ai",
                  availableLanguage: "English",
                },
              ],
            }),
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
