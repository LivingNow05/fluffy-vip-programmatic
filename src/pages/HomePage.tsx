import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, HeartHandshake, Dna, ArrowRight, Phone } from 'lucide-react';
import { FluffyStoryRow } from '../types/fluffy';
import { AnimatedHeading } from '../components/AnimatedHeading';

interface Props {
  cities: FluffyStoryRow[];
  onOpenQuiz: () => void;
}

export const HomePage: React.FC<Props> = ({ onOpenQuiz }) => {
  const homeTitle = "Bulldog Francés Fluffy: Cachorros Disponibles, Precios y Colores | Criadero VIP";
  const homeDescription = "🐾 Cachorros Bulldog Francés Fluffy (exótico de pelo largo L4/L1) disponibles hoy. ★ 4.9/5 · Colores Blue, Merle, Isabella, Lilac y Chocolate/Café. ¡Consulta precios y envíos VIP en cabina!";

  const homeProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Cachorros Bulldog Francés Fluffy (Pelo Largo L4/L1)",
    "image": "https://frenchbulldogfluffy.com/images/fluffy-showcase-hero.jpg",
    "description": homeDescription,
    "brand": {
      "@type": "Brand",
      "name": "Dinastía Fluffy VIP"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "48",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Alejandro Morales"
        },
        "reviewBody": "El mejor criadero de Bulldog Francés Fluffy. Nuestro cachorro Blue Merle llegó en cabina con pruebas genéticas FGF5 (L4) y un pelaje sedoso espectacular."
      }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "3800",
      "highPrice": "6000",
      "priceCurrency": "USD",
      "offerCount": "5",
      "availability": "https://schema.org/InStock",
      "url": "https://frenchbulldogfluffy.com/precios"
    }
  };

  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuál es el precio de un Bulldog Francés Fluffy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El precio de un cachorro Bulldog Francés Fluffy certificado (gen L4/L1) oscila entre $3,800 USD y $6,000 USD dependiendo de la variedad cromática (Blue Solid, Chocolate/Café, Lilac, Merle o Isabella), incluyendo certificado de ADN, pedigree internacional y garantía escrita."
        }
      },
      {
        "@type": "Question",
        "name": "¿Los cachorros Bulldog Francés Fluffy tienen certificación genética?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Cada ejemplar cuenta con su panel de pruebas genéticas de ADN emitido por un laboratorio certificado internacional, acreditando la portación real del gen de pelaje largo FGF5 (L4/L1)."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo es el Bulldog Francés Fluffy adulto y qué cuidados requiere?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En edad adulta, el Bulldog Francés Fluffy conserva una estructura compacta (9 a 13 kg) y desarrolla su plumaje sedoso completo en orejas, pecho y extremidades. A diferencia de otras razas de pelo largo, no requiere cortes de peluquería, solo cepillado suave 3 veces por semana."
        }
      },
      {
        "@type": "Question",
        "name": "¿Tienen cobertura de envíos para los Bulldogs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, contamos con logística de transporte VIP con Travel Nanny en cabina presurizada para entrega internacional a más de 100 ciudades de Latinoamérica, Estados Unidos y España."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{homeTitle}</title>
        <meta name="description" content={homeDescription} />
        <link rel="canonical" href="https://frenchbulldogfluffy.com/" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frenchbulldogfluffy.com/" />
        <meta property="og:title" content={homeTitle} />
        <meta property="og:description" content={homeDescription} />
        <meta property="og:image" content="https://frenchbulldogfluffy.com/images/fluffy-showcase-hero.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={homeTitle} />
        <meta name="twitter:description" content={homeDescription} />
        <meta name="twitter:image" content="https://frenchbulldogfluffy.com/images/fluffy-showcase-hero.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(homeProductSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(homeFaqSchema)}
        </script>
      </Helmet>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-8 mb-20 animate-fade-in">
        {/* HERO PRINCIPAL GENERAL */}
        <section className="relative rounded-3xl bg-gray-50 dark:bg-gray-800/50 p-6 sm:p-12 md:p-16 border border-gray-100 dark:border-gray-800 mb-16 overflow-hidden shadow-xl">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12 relative z-10">
            
            {/* Columna Izquierda */}
            <div className="w-full md:w-7/12 lg:w-7/12 text-left pr-0 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cornflower/10 text-cornflower rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-cornflower/20">
                <Sparkles className="w-4 h-4 text-cornflower" />
                <span>Criadero VIP Especializado</span>
              </div>

              <div className="mb-6">
                <AnimatedHeading
                  text="Bulldog Francés Fluffy"
                  as="h1"
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-header tracking-tight leading-[1.1] text-obsidian dark:text-canvas"
                  accentWords={['Fluffy']}
                />
              </div>

              <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-8 max-w-xl">
                <strong className="font-semibold text-gray-800 dark:text-gray-200">Dinastía Fluffy VIP es un criadero especializado en cachorros Bulldog Francés de pelo largo (Fluffy).</strong> Entregamos ejemplares puros con genética certificada (gen L4/L1), pedigree internacional y logística de transporte VIP a más de 100 ciudades.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 mt-4">
                <button
                  type="button"
                  onClick={onOpenQuiz}
                  className="btn-primary bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-4 px-7 rounded-full shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-all duration-300 text-center flex items-center justify-center gap-2 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer text-sm sm:text-base border-transparent"
                >
                  <Phone className="w-4 h-4" />
                  <span>Ver Disponibilidad WhatsApp</span>
                </button>

                <button
                  onClick={onOpenQuiz}
                  className="px-6 py-4 rounded-full border-2 border-gray-200 dark:border-gray-700 font-bold text-gray-700 dark:text-gray-200 hover:border-cornflower hover:text-cornflower dark:hover:border-cornflower dark:hover:text-cornflower transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 bg-transparent hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 whitespace-nowrap text-sm sm:text-base"
                >
                  <span>Quiz Match VIP 🐾</span>
                </button>

                <a
                  href="#ciudades-hub"
                  className="px-5 py-4 rounded-full font-medium text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors flex items-center justify-center gap-1.5 text-sm"
                >
                  <span>Ciudades</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Badges E-E-A-T */}
              <div className="flex gap-2.5 sm:gap-3 flex-wrap mt-10 pt-6 border-t border-gray-200/60 dark:border-gray-700/60">
                <div className="flex items-center gap-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">
                  <Dna className="w-3.5 h-3.5 text-cornflower" />
                  <span>Gen L4/L1 Verificado</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-cornflower" />
                  <span>Garantía de Salud Escrita</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">
                  <HeartHandshake className="w-3.5 h-3.5 text-cornflower" />
                  <span>Asesoría VIP 24/7</span>
                </div>
              </div>
            </div>

            {/* Columna Derecha (Visual Showcase) */}
            <div className="w-full md:w-5/12 lg:w-5/12 flex-shrink-0 relative md:-mt-8 lg:-mt-12 lg:-mr-6 z-10">
              <div className="relative aspect-[4/3] sm:aspect-[3/2] w-full rounded-3xl overflow-hidden shadow-2xl group border-4 border-white dark:border-gray-800">
                <img
                  src="/images/fluffy-showcase-hero-light.jpg"
                  alt="Bulldog Francés Fluffy VIP"
                  width={600}
                  height={450}
                  fetchPriority="high"
                  className="dark:hidden absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <img
                  src="/images/fluffy-showcase-hero.jpg"
                  alt="Bulldog Francés Fluffy VIP"
                  width={600}
                  height={450}
                  fetchPriority="high"
                  className="hidden dark:block absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN SEMÁNTICA SEO/GEO: COLORES, PRECIOS Y ETAPA ADULTO VS CACHORRO */}
        <section className="mb-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-cornflower font-bold text-xs tracking-widest uppercase mb-2 block">
              Guía Oficial del Criador ★ 4.9/5 (48 Familias VIP)
            </span>
            <h2 className="font-header font-black text-3xl sm:text-4xl text-obsidian dark:text-canvas mb-4">
              Bulldog Francés Exótico de Pelo Largo: Colores, Precios y Genética
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              El <strong>Bulldog Francés Fluffy</strong> es la variedad más exclusiva de la raza, originada de forma 100% pura por el gen recesivo natural <strong>FGF5 (alelos L4 y L1)</strong>. Conoce nuestras líneas disponibles, cómo evoluciona de cachorro a adulto y los rangos de inversión.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Tarjeta 1: Colores y Variedades */}
            <article className="bg-white dark:bg-gray-800 rounded-3xl p-7 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-cornflower/10 text-cornflower text-xs font-bold uppercase tracking-wider mb-3">
                  Mantos Exóticos
                </span>
                <h3 className="font-header font-bold text-xl text-obsidian dark:text-canvas mb-3">
                  Colores: Blue, Merle, Isabella y Chocolate (Café)
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Criamos ejemplares con estructura compacta y pelaje sedoso en los mantos más cotizados del mundo: <Link to="/color/merle" className="text-cornflower font-semibold hover:underline">Fluffy Merle</Link>, <Link to="/color/isabella" className="text-cornflower font-semibold hover:underline">Isabella</Link>, <Link to="/color/blue-solid" className="text-cornflower font-semibold hover:underline">Blue Solid</Link>, <Link to="/color/chocolate" className="text-cornflower font-semibold hover:underline">Chocolate / Café</Link> y <Link to="/color/lilac" className="text-cornflower font-semibold hover:underline">Lilac</Link>.
                </p>
              </div>
              <Link to="/color/merle" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cornflower hover:translate-x-1 transition-transform">
                <span>Explorar Colores y ADN</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>

            {/* Tarjeta 2: Cachorro vs Adulto */}
            <article className="bg-white dark:bg-gray-800 rounded-3xl p-7 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-cornflower/10 text-cornflower text-xs font-bold uppercase tracking-wider mb-3">
                  Morfología & Cuidados
                </span>
                <h3 className="font-header font-bold text-xl text-obsidian dark:text-canvas mb-3">
                  Bulldog Fluffy Cachorro vs. Adulto
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Desde las 8 semanas el cachorro muestra su característico plumaje en las orejas. El <strong>Bulldog Fluffy adulto</strong> alcanza su máximo esplendor capilar entre los 10 y 14 meses, manteniendo un peso ideal de 9 a 12 kg, carácter tranquilo y sin requerir cortes de peluquería.
                </p>
              </div>
              <Link to="/blog/guia-cuidados-manto-bulldog-frances-fluffy" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cornflower hover:translate-x-1 transition-transform">
                <span>Ver Guía de Cuidados</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>

            {/* Tarjeta 3: Precios y Entrega VIP */}
            <article className="bg-white dark:bg-gray-800 rounded-3xl p-7 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-cornflower/10 text-cornflower text-xs font-bold uppercase tracking-wider mb-3">
                  Inversión & Logística
                </span>
                <h3 className="font-header font-bold text-xl text-obsidian dark:text-canvas mb-3">
                  ¿Cuánto cuesta un Bulldog Francés Fluffy?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Nuestros cachorros con certificado de ADN (L4/L1), pedigree internacional y garantía médica escrita inician desde <strong>$3,800 USD hasta $6,000 USD</strong> según genética cromática, con entrega personal en cabina en más de 100 ciudades.
                </p>
              </div>
              <Link to="/precios" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cornflower hover:translate-x-1 transition-transform">
                <span>Ver Planes y Precios 2026</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};
