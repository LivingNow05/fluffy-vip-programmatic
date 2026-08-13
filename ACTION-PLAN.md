# Action Plan: Fluffy VIP SEO Optimization

## CRITICAL PRIORITY 🔴
1. **Dynamic Meta Tags & Titles:**
   - **Action:** Install and configure `react-helmet-async`.
   - **Reason:** Currently, all programmatic city pages (`/FluffyCityPage.tsx`) share the same static `<title>` and `<meta description>` from `index.html`. This will cause massive duplicate title issues and prevent cities from ranking properly.
   - **Implementation:** Update `FluffyCityPage` to inject `<title>Bulldog Francés Fluffy en {cityName}</title>` and dynamic meta descriptions.

2. **Dynamic JSON-LD Schema Injection:**
   - **Action:** Generate dynamic `BreadcrumbList` and `Product`/`Offer` schema on `FluffyCityPage.tsx`.
   - **Reason:** To win rich snippets for specific cities, the schema must reflect the local intent and pricing.

## HIGH PRIORITY 🟠
1. **Enhance Authority (E-E-A-T) vs. Dinastía Maine Coon:**
   - **Action:** Explicitly name the registry bodies for the "Pedigree Internacional" (e.g., AKC, FCI, KCP).
   - **Reason:** Generic "pedigree" holds less weight for Google's Quality Raters (and AI models) than specific, verifiable entities.

2. **Pre-rendering or SSR:**
   - **Action:** Since this is a Vite React app (`vite.config.ts`), consider setting up SSG (Static Site Generation) using `vite-plugin-ssr`, `vike`, or at minimum a prerendering service (like Prerender.io) in the `nginx.conf`.
   - **Reason:** Programmatic SEO relies on search engines discovering and indexing thousands of city pages quickly. Pure client-side rendering slows down this crawl rate.

## MEDIUM PRIORITY 🟡
1. **Homepage Heading Hierarchy:**
   - **Action:** Add `<h2>` and `<h3>` tags to the `HomePage.tsx`. 
   - **Reason:** The homepage currently jumps from an `<h1>` directly to `<a>` and `<button>` links, missing structural sub-topics that summarize the site's offerings (e.g., `<h2>Cachorros Disponibles</h2>`, `<h2>Garantía Genética</h2>`).

2. **AI Search (GEO) Enhancement:**
   - **Action:** Add a technical glossary or small factual block explaining the "Gen L4/L1" scientifically.
   - **Reason:** Feeds LLMs (ChatGPT, Perplexity, AI Overviews) with authoritative, factual data that they can cite directly.

## LOW PRIORITY 🟢
1. **Internal Linking Strategy:**
   - **Action:** Ensure the city pages link to each other (e.g., "Ciudades Cercanas") to distribute PageRank efficiently.
2. **Image Optimization:**
   - **Action:** Ensure `fluffy-showcase-hero.jpg` and other hero images are preloaded and converted to WebP format to improve Core Web Vitals (LCP).
