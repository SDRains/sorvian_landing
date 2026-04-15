import Head from "next/head";

const SITE_URL = "https://www.sorvian.ai";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Reusable <head> block for each page. Supplies the page's <title>,
 * description, Open Graph + Twitter cards, canonical URL, and a few
 * site-wide SEO defaults.
 *
 * Usage:
 *   <PageHead
 *     name="Product"
 *     description="..."
 *     path="/product"
 *   />
 */
function PageHead({ name, description, path = "/", image = DEFAULT_IMAGE }) {
    const title = name ? `Sorvian AI — ${name}` : "Sorvian AI";
    const url = `${SITE_URL}${path}`;

    return (
        <Head>
            {/* Primary */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#10b981" />
            <meta name="application-name" content="Sorvian AI" />
            <meta name="author" content="Sorvian AI" />
            <link rel="canonical" href={url} />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Sorvian AI" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@sorvian_ai" />
            <meta name="twitter:creator" content="@sorvian_ai" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Robots */}
            <meta name="robots" content="index, follow, max-image-preview:large" />
            <meta
                name="googlebot"
                content="index, follow, max-image-preview:large, max-snippet:-1"
            />
        </Head>
    );
}

export default PageHead;
