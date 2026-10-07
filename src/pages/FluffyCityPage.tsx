import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FluffyStoryRow } from '../types/fluffy';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { ShippingAccordion } from '../components/ShippingAccordion';
import { 
  ShieldCheck, Plane, DollarSign, Sparkles, Phone, Dna, CheckCircle2,
  FileText, HeartHandshake, Sun, Home, AlertTriangle, Shield, Syringe, Stethoscope, Lock, ArrowRight,
  ThermometerSun, Trees, Clock, MapPin, Droplets, Footprints
} from 'lucide-react';
import { getCityLocalGuide } from '../data/cityLocalGuide';

interface Props {
  cities: FluffyStoryRow[];
  onOpenQuiz?: (city: string) => void;
}

export const FluffyCityPage: React.FC<Props> = ({ cities, onOpenQuiz }) => {
  const { slug } = useParams<{ slug: string }>();
  
  if (cities.length === 0) {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  }

  // If no slug is provided, or we want a default, we could redirect to the first city
  // But here we'll assume the router matched /:slug
  const selectedCity = cities.find(c => c.slug === slug);

  if (!selectedCity && slug) {
    // 404 Not Found
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-header font-bold mb-4">Página no encontrada</h1>
        <p className="text-gray-500 mb-8">No pudimos encontrar la ciudad que buscas.</p>
        <Link to="/" className="btn-primary inline-block">Volver al inicio</Link>
      </div>
    );
  }

  // Fallback to first city if no slug (for home page)
  const city = selectedCity || cities[0];

  if (!city) return null;

  const rawCity = city.tituloH1.split('Fluffy')[1]?.trim() || city.pais;
  const cityName = rawCity.replace(/^en\s+/i, '').trim();
  const whatsappText = `Hola, quisiera información VIP sobre los cachorros Fluffy en ${cityName}`;
  const localGuide = getCityLocalGuide(cityName, city.pais);

  const seoTitle = `Bulldog Francés Fluffy en ${cityName} | Dinastía Fluffy VIP`;
  const seoDescription = `Criadero exclusivo de Bulldog Francés Fluffy con entrega VIP en ${cityName}, ${city.pais}. Certificados de genética L4 y logística de mascotas garantizada.`;
  const currentUrl = `https://frenchbulldogfluffy.com/${city.slug}`;
  const ogImage = `https://frenchbulldogfluffy.com/images/fluffy-showcase-hero.jpg`;

  const countryCodeMap: Record<string, string> = {
    'Colombia': 'CO',
    'México': 'MX',
    'Estados Unidos': 'US',
    'España': 'ES',
    'Costa Rica': 'CR',
    'El Salvador': 'SV',
    'Guatemala': 'GT',
    'Honduras': 'HN',
    'Nicaragua': 'NI',
    'Panamá': 'PA',
    'República Dominicana': 'DO',
    'Argentina': 'AR',
    'Bolivia': 'BO',
    'Brasil': 'BR',
    'Chile': 'CL',
    'Ecuador': 'EC',
    'Paraguay': 'PY',
    'Perú': 'PE',
    'Uruguay': 'UY',
    'Venezuela': 'VE'
  };
  const targetCountryCode = countryCodeMap[city.pais] || 'CO';
  const isDomestic = targetCountryCode === 'CO';

  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Bulldog Francés Fluffy en ${cityName}`,
    "image": ogImage,
    "description": seoDescription,
    "brand": {
      "@type": "Brand",
      "name": "Dinastía Fluffy VIP"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "4500",
      "availability": "https://schema.org/InStock",
      "url": currentUrl,
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": isDomestic ? "0" : "800",
          "currency": "USD"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": targetCountryCode
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": isDomestic ? 3 : 10,
            "maxValue": isDomestic ? 5 : 15,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": targetCountryCode,
        "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
        "merchantReturnDays": 15
      }
    }
  };

  const schemaBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://frenchbulldogfluffy.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": city.pais,
        "item": `https://frenchbulldogfluffy.com/${city.slug}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `Bulldog Francés Fluffy en ${cityName}`,
        "item": currentUrl
      }
    ]
  };

  const schemaLocalFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `¿Cómo se adapta el Bulldog Francés Fluffy al clima de ${cityName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${localGuide.clima.adaptacionFluffy} En ${cityName} se recomienda pasear en los horarios de ${localGuide.clima.horarioPaseo}.`
        }
      },
      {
        "@type": "Question",
        "name": `¿Cuáles son los mejores parques pet-friendly para un Bulldog Fluffy en ${cityName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Entre los mejores parques en ${cityName} destacan ${localGuide.parques.map(p => `${p.nombre} (${p.zona})`).join(', ')}, gracias a sus senderos planos y sombra protectora.`
        }
      },
      {
        "@type": "Question",
        "name": `¿Cómo se realiza la entrega de un cachorro Fluffy en ${cityName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `El cachorro es transportado personalmente por un escolta cinológico en cabina climatizada hasta el ${city.aeropuerto}, entregándose con certificado de ADN del gen FGF5, vacunas al día y garantía genética escrita.`
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Schema.org JSON-LD (Product, Breadcrumbs, Local FAQ) */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaBreadcrumbs)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaLocalFAQ)}
        </script>
      </Helmet>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-8 mb-20 animate-fade-in">
      
      {/* Breadcrumbs */}
      <div className="py-3 text-sm font-medium border-t border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 mb-4 flex gap-2">
        <Link to="/" className="hover:text-indigo-500 cursor-pointer transition-colors">Inicio</Link>
        <span>/</span>
        <span className="hover:text-indigo-500 cursor-pointer transition-colors">{city.pais}</span>
        <span>/</span>
        <span className="text-indigo-500 font-bold">Bulldog Francés Fluffy</span>
      </div>

      {/* HERO SECTION - EDITORIAL STYLE */}
      <article className="mt-8 mb-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Column: Typography & Content */}
          <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-8">
            <div className="mb-6">
              <span className="bg-[#FFB800] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5 inline-block shadow-sm">
                Disponible en {cityName}
              </span>
              <div className="mb-5">
                <AnimatedHeading
                  text={city.tituloH1 || 'Cachorros Bulldog Francés Fluffy'}
                  as="h1"
                  className="text-4xl sm:text-5xl lg:text-[4rem] font-black font-header leading-[1.1] tracking-tight text-obsidian dark:text-canvas"
                  accentWords={['Fluffy', cityName]}
                />
              </div>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-2xl">
                {city.metaDescripcion || 'Criadero especializado en ejemplares de Bulldog Francés Fluffy con pedigree.'}
              </p>
            </div>

            {/* Review / Trust Badge */}
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center text-indigo-500">
                  <Sparkles className="w-8 h-8" fill="currentColor" />
                </div>
                <div>
                  <div className="flex items-center gap-2 font-bold text-2xl text-obsidian dark:text-canvas">
                    <span>4.9</span>
                    <span className="text-gray-400 font-medium text-base">/ 5.0</span>
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Familias Satisfechas
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Pills */}
            <div className="flex gap-3 flex-wrap mt-8">
              <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-5 py-2.5">
                <Dna className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Pureza 100%</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-5 py-2.5">
                <HeartHandshake className="w-4 h-4 text-rose-500" />
                <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Ideal para Niños</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-5 py-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Garantía Escrita</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="w-full md:w-1/2 lg:w-1/2 flex-shrink-0 relative mt-6 md:-mt-4 lg:-mt-8 lg:-mr-4 z-10">
            <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <img 
                src="/images/fluffy-showcase-hero-light.jpg" 
                alt="Bulldog Fluffy"
                className="dark:hidden absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <img 
                src="/images/fluffy-showcase-hero.jpg" 
                alt="Bulldog Fluffy"
                className="hidden dark:block absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700 hidden md:block z-10">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 p-3 rounded-full">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Criador</p>
                  <p className="text-base font-bold text-obsidian dark:text-canvas">Verificado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TAXONOMY / DATA - Bento Grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 group">
            <FileText className="w-8 h-8 text-blue-400 group-hover:text-blue-600 mb-4 transition-colors" />
            <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Registro</p>
            <p className="text-lg font-black text-obsidian dark:text-canvas">Pedigree</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-emerald-500/30 transition-all duration-300 group">
            <DollarSign className="w-8 h-8 text-emerald-400 group-hover:text-emerald-600 mb-4 transition-colors" />
            <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Moneda</p>
            <p className="text-lg font-black text-obsidian dark:text-canvas">{city.moneda} / USD</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-500/30 transition-all duration-300 group">
            <Plane className="w-8 h-8 text-indigo-400 group-hover:text-indigo-600 mb-4 transition-colors" />
            <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Envío a {cityName}</p>
            <p className="text-lg font-black text-obsidian dark:text-canvas">Aéreo VIP</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-rose-500/30 transition-all duration-300 group">
            <HeartHandshake className="w-8 h-8 text-rose-400 group-hover:text-rose-600 mb-4 transition-colors" />
            <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Entrega</p>
            <p className="text-lg font-black text-obsidian dark:text-canvas">Personal</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-amber-500/30 transition-all duration-300 group col-span-2 sm:col-span-1 md:col-span-1">
            <Shield className="w-8 h-8 text-amber-400 group-hover:text-amber-600 mb-4 transition-colors" />
            <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Garantía</p>
            <p className="text-lg font-black text-obsidian dark:text-canvas">Genética L4</p>
          </div>
        </div>
      </article>

      <hr className="border-gray-200 dark:border-gray-800 my-12" />

      {/* 2-COLUMN MAIN CONTENT */}
      <div className="grid md:grid-cols-[2fr_1fr] gap-10">
        
        {/* LEFT COLUMN */}
        <div>
          <div className="mb-6">
            <AnimatedHeading
              text={`Encuentra el mejor Fluffy VIP en ${cityName}`}
              as="h2"
              className="font-header font-bold text-3xl text-obsidian dark:text-canvas"
              accentWords={['Fluffy', 'VIP', cityName]}
            />
          </div>
          <div className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg flex flex-col gap-6">
            <p>
              Buscar un cachorro <strong>Bulldog Francés Fluffy</strong> es una decisión importante que requiere considerar el bienestar, la genética y la garantía de salud. Hemos preparado una logística exclusiva para que recibas a tu nuevo miembro de la familia en {cityName} cumpliendo con los estándares más altos.
            </p>

            {/* HISTORIA LOCAL (Dinámica) */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-6 mt-4 playful-card">
              <div className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-500 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                Historia Local
              </div>
              <p className="text-base font-medium text-gray-600 dark:text-gray-300 italic">
                "{city.historiaLocal}"
              </p>
            </div>

            {/* ADAPTABILIDAD Y CLIMA LOCAL */}
            <div className="bg-gradient-to-br from-blue-50/80 to-emerald-50/40 dark:from-blue-950/20 dark:to-emerald-950/10 border border-blue-100 dark:border-blue-900/40 rounded-3xl p-6 sm:p-8 mt-6 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-blue-100 dark:border-gray-700 text-blue-500 shrink-0">
                  <ThermometerSun className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-100/70 dark:bg-blue-900/40 px-3 py-1 rounded-full">
                      {localGuide.clima.tipoClima}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">
                      Promedio: {localGuide.clima.tempPromedio}
                    </span>
                  </div>
                  
                  <h3 className="font-header font-bold text-2xl mb-3 text-obsidian dark:text-canvas">
                    ¿Es el Bulldog Francés Fluffy ideal para el clima de {cityName}?
                  </h3>
                  
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {localGuide.clima.adaptacionFluffy}
                  </p>

                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 border border-blue-100/80 dark:border-gray-700 mb-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-obsidian dark:text-canvas mb-1">
                      <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Horario de paseo recomendado en {cityName}:</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 pl-6">
                      {localGuide.clima.horarioPaseo}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Pautas veterinarias para {cityName}:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      {localGuide.clima.consejosTermicos.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* PARQUES PET-FRIENDLY RECOMENDADOS */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl">
                  <Trees className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block">
                    Rutas y Esparcimiento Canino
                  </span>
                  <h3 className="font-header font-bold text-2xl text-obsidian dark:text-canvas">
                    Parques Pet-Friendly Recomendados en {cityName}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-2xl">
                Seleccionamos las mejores áreas verdes con senderos planos, sombra protectora y condiciones idóneas para cuidar las articulaciones y el ritmo respiratorio de tu Fluffy en {cityName}:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {localGuide.parques.map((park, pIdx) => (
                  <div 
                    key={pIdx}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                          <h4 className="font-bold text-base text-obsidian dark:text-canvas">
                            {park.nombre}
                          </h4>
                        </div>
                      </div>
                      
                      <p className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 mb-2">
                        {park.zona}
                      </p>

                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {park.descripcion}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 dark:border-gray-700/60">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-1 rounded-full">
                        <Footprints className="w-3 h-3" />
                        <span>{park.destacado}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ESTILO DE VIDA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-1">
                <h3 className="font-header font-bold text-2xl mb-4 text-obsidian dark:text-canvas">Estilo de Vida y Espacios en {cityName}</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Los Bulldogs Franceses Fluffy son perros de compañía por excelencia. No demandan grandes extensiones de terreno ni ejercicio de alto impacto. Con dos paseos diarios de 20 minutos en los parques de {cityName} y un entorno interior confortable, tu cachorro crecerá equilibrado, dócil y profundamente apegado a la familia.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 min-w-[200px] text-center shadow-sm shrink-0">
                <div className="flex justify-center mb-2"><Home className="w-8 h-8 text-indigo-500" /></div>
                <span className="block font-bold text-obsidian dark:text-canvas">100% Apto para Apartamento</span>
                <span className="text-xs text-gray-400 mt-1 block">Ideal en {cityName}</span>
              </div>
            </div>

            {/* GUIA DE COMPRA */}
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 mt-8">
              <h3 className="font-header font-bold text-2xl mb-4 text-obsidian dark:text-canvas">Guía de Compra Segura</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-obsidian dark:text-canvas">Exige Siempre:</h4>
                  <ul className="list-none space-y-2 text-base text-gray-600 dark:text-gray-400">
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>Pruebas de ADN (Gen L4/L1)</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>Pedigree Internacional</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>Contrato con Garantía Congénita</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-red-100 dark:border-red-900/30">
                  <div className="flex gap-2 text-red-500 font-bold mb-2 items-center">
                    <AlertTriangle className="w-5 h-5" />
                    <span>Evita Estafas</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Desconfía de precios excesivamente bajos o criadores que no muestran a los padres ni ofrecen pruebas genéticas.
                  </p>
                </div>
              </div>
            </div>

            {/* HEALTH PANEL */}
            <div className="mt-8">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <span className="text-blue-500 font-bold text-sm tracking-widest uppercase mb-1 block">Sanidad Garantizada</span>
                  <h3 className="font-header font-bold text-2xl text-obsidian dark:text-canvas">Panel de Salud y Vacunas</h3>
                </div>
                <div className="hidden sm:block">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">VIP Verificado</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl group-hover:scale-110 transition-transform"><Syringe className="text-rose-500" /></div>
                    <div>
                      <h4 className="font-bold text-sm text-obsidian dark:text-canvas">Vacunación</h4>
                      <p className="text-xs text-gray-400">Esquema Completo</p>
                    </div>
                  </div>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-500 text-xs font-bold px-3 py-1 rounded-full inline-block">✓ AL DÍA</div>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl group-hover:scale-110 transition-transform"><Stethoscope className="text-cyan-500" /></div>
                    <div>
                      <h4 className="font-bold text-sm text-obsidian dark:text-canvas">Examen Físico</h4>
                      <p className="text-xs text-gray-400">Veterinario Avalado</p>
                    </div>
                  </div>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-500 text-xs font-bold px-3 py-1 rounded-full inline-block">✓ APROBADO</div>
                </div>
              </div>
            </div>

            {/* LOGISTICS (ShippingAccordion) */}
            <div className="mt-8">
              <h3 className="font-header font-bold text-2xl mb-6 text-obsidian dark:text-canvas">Logística de Entrega a {cityName}</h3>
              <ShippingAccordion currentCity={city} />
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN (Sidebar) */}
        <div className="relative">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[2rem] p-8 sticky top-[100px] shadow-xl">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-indigo-500" />
            </div>
            <h3 className="font-header font-bold text-2xl mb-3 text-obsidian dark:text-canvas">
              ¿Buscas un Fluffy VIP?
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm leading-relaxed">
              Escríbenos y un especialista te enviará al instante fotos, videos y precios de los cachorros disponibles para entrega en <strong className="text-obsidian dark:text-canvas">{cityName}</strong>.
            </p>

            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl p-5 mb-8 shadow-sm">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider block mb-1">Inversión desde</span>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-black font-header text-obsidian dark:text-canvas">$4,500</span>
                <span className="text-sm font-bold text-gray-400">USD</span>
              </div>
              <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" /> Incluye envío VIP a {cityName}</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" /> Gen L4/L1 + Garantía</li>
              </ul>
              <Link to="/precios" className="block text-center mt-4 text-[10px] font-bold text-indigo-500 hover:text-blue-700 uppercase tracking-widest transition-colors">
                Ver Planes de Precios &rarr;
              </Link>
            </div>
            
            <button
              onClick={() => onOpenQuiz && onOpenQuiz(cityName)}
              className="group w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:-translate-y-1 cursor-pointer"
            >
              <span>Contactar por WhatsApp</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              <Lock className="w-3.5 h-3.5" />
              <span>Asesoría 100% Confidencial</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};
