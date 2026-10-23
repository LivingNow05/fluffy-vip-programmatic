import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const baseHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(baseHtmlPath)) {
  console.error('❌ dist/index.html no existe. Ejecuta vite build primero.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');
const cities = JSON.parse(
  fs.readFileSync(path.join(rootDir, 'src', 'data', 'fluffy_cities.json'), 'utf-8')
);
const blogArticles = JSON.parse(
  fs.readFileSync(path.join(rootDir, 'src', 'data', 'blog_articles.json'), 'utf-8')
);

const mantos = [
  {
    id: 'merle',
    nombre: 'Bulldog Fluffy Merle',
    genetica: 'Gen L4/L1 + M (Patrón Arlequín)',
    precioEstimadoUSD: 5000,
    descripcion:
      'Patrón de manchas único e irrepetible. Cada ejemplar Merle Fluffy es una obra de arte viviente con combinaciones de azul, chocolate y plata.',
    imagen: '/images/fluffy-merle.jpg',
  },
  {
    id: 'isabella',
    nombre: 'Bulldog Fluffy Isabella',
    genetica: 'Gen L4/L1 + bb (Chocolate Híbrido)',
    precioEstimadoUSD: 4500,
    descripcion:
      'El manto Isabella destaca por su deslumbrante tono champán rosáceo único en el mundo con reflejos lilas y ojos claros deslumbrantes. Es la cima de la genética de lujo.',
    imagen: '/images/fluffy-visual-isabella.jpg',
  },
  {
    id: 'blue-solid',
    nombre: 'Bulldog Fluffy Blue Solid',
    genetica: 'Gen L4/L1 + dd (Dilución Azul)',
    precioEstimadoUSD: 3800,
    descripcion:
      'Cobalto profundo con pelaje abundante de máxima densidad. Un manto impresionante que brilla con luz natural y mantiene un porte aristocrático.',
    imagen: '/images/fluffy-blue.jpg',
  },
  {
    id: 'chocolate',
    nombre: 'Bulldog Fluffy Chocolate',
    genetica: 'Gen L4/L1 + coco (Chocolate Intenso)',
    precioEstimadoUSD: 4200,
    descripcion:
      'Tono chocolate rico y uniforme con una suavidad al tacto insuperable. Recordando al terciopelo puro, es una verdadera joya genética.',
    imagen: '/images/fluffy-fluffy-cocoa.jpg',
  },
  {
    id: 'lilac',
    nombre: 'Bulldog Fluffy Lilac',
    genetica: 'Gen L4/L1 + dd + coco (Doble Dilución)',
    precioEstimadoUSD: 4800,
    descripcion:
      'Combina tonos plateados y violetas bajo la luz solar con la máxima expresión de pelaje largo. Es una de las variedades más codiciadas internacionalmente.',
    imagen: '/images/fluffy-lilac.jpg',
  },
];

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildRouteHtml({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://frenchbulldogfluffy.com/images/fluffy-showcase-hero.jpg',
  extraJsonLd = [],
  bodyHtml = '',
}) {
  let html = baseHtml;

  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);
  const safeUrl = escapeHtml(canonicalUrl);
  const safeImg = escapeHtml(ogImage);

  html = html.replace(
    /<title[^>]*>[\s\S]*?<\/title>/i,
    `<title data-rh="true">${safeTitle}</title>`
  );

  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"[^>]*>/i,
    `<meta name="description" content="${safeDesc}" data-rh="true" />`
  );

  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"[^>]*>/i,
    `<link rel="canonical" href="${safeUrl}" data-rh="true" />`
  );

  html = html.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"[^>]*>/i,
    `<meta property="og:type" content="${ogType}" data-rh="true" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"[^>]*>/i,
    `<meta property="og:url" content="${safeUrl}" data-rh="true" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"[^>]*>/i,
    `<meta property="og:title" content="${safeTitle}" data-rh="true" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"[^>]*>/i,
    `<meta property="og:description" content="${safeDesc}" data-rh="true" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"[^>]*>/i,
    `<meta property="og:image" content="${safeImg}" data-rh="true" />`
  );

  html = html.replace(
    /<meta\s+name="twitter:url"\s+content="[^"]*"[^>]*>/i,
    `<meta name="twitter:url" content="${safeUrl}" data-rh="true" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"[^>]*>/i,
    `<meta name="twitter:title" content="${safeTitle}" data-rh="true" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"[^>]*>/i,
    `<meta name="twitter:description" content="${safeDesc}" data-rh="true" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"[^>]*>/i,
    `<meta name="twitter:image" content="${safeImg}" data-rh="true" />`
  );

  if (extraJsonLd.length > 0) {
    const scripts = extraJsonLd
      .map(
        (schema) =>
          `    <script type="application/ld+json" data-rh="true">\n${JSON.stringify(
            schema
          )}\n    </script>`
      )
      .join('\n');
    html = html.replace('</head>', `${scripts}\n  </head>`);
  }

  if (bodyHtml) {
    html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
  }

  return html;
}

function writeHtmlFile(relPath, content) {
  const fullPath = path.join(distDir, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf-8');
}

const countryCodeMap = {
  Colombia: 'CO',
  México: 'MX',
  'Estados Unidos': 'US',
  España: 'ES',
  'Costa Rica': 'CR',
  'El Salvador': 'SV',
  Guatemala: 'GT',
  Honduras: 'HN',
  Nicaragua: 'NI',
  Panamá: 'PA',
  'República Dominicana': 'DO',
  Argentina: 'AR',
  Bolivia: 'BO',
  Brasil: 'BR',
  Chile: 'CL',
  Ecuador: 'EC',
  Paraguay: 'PY',
  Perú: 'PE',
  Uruguay: 'UY',
  Venezuela: 'VE',
};

let generatedCount = 0;

const homeTitle =
  'Bulldog Francés Fluffy: Cachorros Disponibles, Precios y Colores | Criadero VIP';
const homeDescription =
  '🐾 Cachorros Bulldog Francés Fluffy (exótico de pelo largo L4/L1) disponibles hoy. ★ 4.9/5 · Colores Blue, Merle, Isabella, Lilac y Chocolate/Café. ¡Consulta precios y envíos VIP en cabina!';

const homeProductSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cachorros Bulldog Francés Fluffy (Pelo Largo L4/L1)',
  image: 'https://frenchbulldogfluffy.com/images/fluffy-showcase-hero.jpg',
  description: homeDescription,
  brand: {
    '@type': 'Brand',
    name: 'Dinastía Fluffy VIP',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '48',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Alejandro Morales',
      },
      reviewBody:
        'El mejor criadero de Bulldog Francés Fluffy. Nuestro cachorro Blue Merle llegó en cabina con pruebas genéticas FGF5 (L4) y un pelaje sedoso espectacular.',
    },
  ],
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '3800',
    highPrice: '6000',
    priceCurrency: 'USD',
    offerCount: '5',
    availability: 'https://schema.org/InStock',
    url: 'https://frenchbulldogfluffy.com/precios',
  },
};

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuál es el precio de un Bulldog Francés Fluffy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El precio de un cachorro Bulldog Francés Fluffy certificado (gen L4/L1) oscila entre $3,800 USD y $6,000 USD dependiendo de la variedad cromática (Blue Solid, Chocolate/Café, Lilac, Merle o Isabella), incluyendo certificado de ADN, pedigree internacional y garantía escrita.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Los cachorros Bulldog Francés Fluffy tienen certificación genética?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Cada ejemplar cuenta con su panel de pruebas genéticas de ADN emitido por un laboratorio certificado internacional, acreditando la portación real del gen de pelaje largo FGF5 (L4/L1).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo es el Bulldog Francés Fluffy adulto y qué cuidados requiere?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En edad adulta, el Bulldog Francés Fluffy conserva una estructura compacta (9 a 13 kg) y desarrolla su plumaje sedoso completo en orejas, pecho y extremidades. A diferencia de otras razas de pelo largo, no requiere cortes de peluquería, solo cepillado suave 3 veces por semana.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Tienen cobertura de envíos para los Bulldogs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, contamos con logística de transporte VIP con Travel Nanny en cabina presurizada para entrega internacional a más de 100 ciudades de Latinoamérica, Estados Unidos y España.',
      },
    },
  ],
};

// 1. Actualizar dist/index.html con contenido semántico base
const homeHtml = buildRouteHtml({
  title: homeTitle,
  description: homeDescription,
  canonicalUrl: 'https://frenchbulldogfluffy.com/',
  extraJsonLd: [homeProductSchema, homeFaqSchema],
  bodyHtml: `<main><h1>Bulldog Francés Fluffy</h1><p>Dinastía Fluffy VIP es un criadero especializado en cachorros Bulldog Francés de pelo largo (Fluffy). Entregamos ejemplares puros con genética certificada (gen L4/L1), pedigree internacional y logística de transporte VIP a más de 100 ciudades.</p><section><h2>Bulldog Francés Exótico de Pelo Largo: Colores, Precios y Genética</h2><p>Criamos ejemplares en los colores Blue Solid, Merle, Isabella, Lilac y Chocolate (Café), con precios desde $3,800 USD hasta $6,000 USD.</p></section></main>`,
});
writeHtmlFile('index.html', homeHtml);
generatedCount++;

// 2. Páginas estáticas principales (/precios, /entregas, /blog)
writeHtmlFile(
  'precios.html',
  buildRouteHtml({
    title: 'Precio de un Bulldog Francés Fluffy (2026) | Categorías y Garantía VIP',
    description:
      '🐾 ¿Cuánto cuesta un Bulldog Francés Fluffy? Conoce los precios desde $3,800 USD según genética y color (Blue, Merle, Isabella, Lilac y Chocolate). ★ 4.9/5.',
    canonicalUrl: 'https://frenchbulldogfluffy.com/precios',
    extraJsonLd: [homeProductSchema],
    bodyHtml: `<main><h1>Valor y Exclusividad Garantizada - Precios Bulldog Francés Fluffy</h1><p>Conoce los precios y opciones de inversión para tu cachorro Bulldog Francés Fluffy (Signature, Exotic VIP y Collector).</p></main>`,
  })
);
generatedCount++;

writeHtmlFile(
  'entregas.html',
  buildRouteHtml({
    title: 'Entregas en Cabina y Logística VIP | Dinastía Bulldog Francés Fluffy',
    description:
      '✈️ Conoce nuestro proceso de envíos internacionales y nacionales con Travel Nanny en cabina. ★ 4.9/5 · Garantía genética y sanitaria para tu Bulldog Fluffy.',
    canonicalUrl: 'https://frenchbulldogfluffy.com/entregas',
    bodyHtml: `<main><h1>Entregas Seguras y Logística VIP de Bulldog Francés Fluffy</h1><p>Transparencia en procesos, logística VIP en cabina con Travel Nanny y entrega garantizada en más de 100 ciudades.</p></main>`,
  })
);
generatedCount++;

writeHtmlFile(
  'blog.html',
  buildRouteHtml({
    title: 'Blog Bulldog Francés Fluffy | Genética FGF5, Precios y Cuidados',
    description:
      '📚 Enciclopedia del Bulldog Francés Fluffy: genética del gen FGF5 (L4/L1), cuidados del manto largo, etapas de cachorro a adulto y guía de precios.',
    canonicalUrl: 'https://frenchbulldogfluffy.com/blog',
    bodyHtml: `<main><h1>Guías y Conocimiento Bulldog Francés Fluffy</h1><p>Artículos respaldados por genetistas y veterinarios especializados en la raza Bulldog Francés de pelaje largo (Fluffy).</p></main>`,
  })
);
generatedCount++;

// 3. Mantos / Colores (/color/:id y /manto/:id canónicos a /color/:id)
for (const manto of mantos) {
  const canonicalUrl = `https://frenchbulldogfluffy.com/color/${manto.id}`;
  const seoTitle = `${manto.nombre}: Cachorros Disponibles y Precio ($${manto.precioEstimadoUSD} USD) | Fluffy VIP`;
  const seoDesc = `🐾 Cachorros ${manto.nombre} disponibles (${manto.genetica}). ★ 4.9/5 · Desde $${manto.precioEstimadoUSD} USD con ADN certificado, pedigree internacional y envío VIP en cabina.`;
  const mantoSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: manto.nombre,
    image: `https://frenchbulldogfluffy.com${manto.imagen}`,
    description: seoDesc,
    brand: {
      '@type': 'Brand',
      name: 'Dinastía Fluffy VIP',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '48',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: String(manto.precioEstimadoUSD),
      availability: 'https://schema.org/InStock',
      url: canonicalUrl,
    },
  };

  const html = buildRouteHtml({
    title: seoTitle,
    description: seoDesc,
    canonicalUrl,
    ogImage: `https://frenchbulldogfluffy.com${manto.imagen}`,
    extraJsonLd: [mantoSchema],
    bodyHtml: `<main><h1>${escapeHtml(manto.nombre)}</h1><p>${escapeHtml(
      manto.descripcion
    )}</p></main>`,
  });
  writeHtmlFile(`color/${manto.id}.html`, html);
  writeHtmlFile(`manto/${manto.id}.html`, html);
  generatedCount += 2;
}

// 4. Artículos del Blog (/blog/:slug)
for (const art of blogArticles) {
  const canonicalUrl = `https://frenchbulldogfluffy.com/blog/${art.slug}`;
  const ogImage = `https://frenchbulldogfluffy.com${art.img}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: art.title,
    description: art.desc,
    image: ogImage,
    author: {
      '@type': 'Organization',
      name: art.author,
      url: 'https://frenchbulldogfluffy.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dinastía Bulldog Fluffy VIP',
      logo: {
        '@type': 'ImageObject',
        url: 'https://frenchbulldogfluffy.com/favicon-192x192.png',
      },
    },
    datePublished: art.date,
    dateModified: art.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };

  const html = buildRouteHtml({
    title: `${art.title} | Blog Fluffy VIP`,
    description: art.desc,
    canonicalUrl,
    ogType: 'article',
    ogImage,
    extraJsonLd: [articleSchema],
    bodyHtml: `<main><article><h1>${escapeHtml(art.title)}</h1><p>${escapeHtml(
      art.desc
    )}</p>${art.content || ''}</article></main>`,
  });
  writeHtmlFile(`blog/${art.slug}.html`, html);
  generatedCount++;
}

// 5. Las 100 Ciudades Programáticas (/:slug)
for (const city of cities) {
  const rawCity = city.tituloH1.split('Fluffy')[1]?.trim() || city.pais;
  const cityName = rawCity.replace(/^(en|em|no|na)\s+/i, '').trim();
  const seoTitle = `Bulldog Francés Fluffy en ${cityName}: Cachorros Disponibles y Precios | Entrega VIP`;
  const seoDescription = `🐾 Cachorros Bulldog Francés Fluffy disponibles en ${cityName}, ${city.pais} (Blue, Merle, Isabella y Chocolate). ★ 4.9/5 · Genética ADN L4/L1, Pedigree y entrega VIP en ${city.aeropuerto}. ¡Mira fotos y precios!`;
  const currentUrl = `https://frenchbulldogfluffy.com/${city.slug}`;
  const ogImage = 'https://frenchbulldogfluffy.com/images/fluffy-showcase-hero.jpg';
  const targetCountryCode = countryCodeMap[city.pais] || 'CO';
  const isDomestic = targetCountryCode === 'CO';

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Bulldog Francés Fluffy en ${cityName}`,
    image: ogImage,
    description: seoDescription,
    brand: {
      '@type': 'Brand',
      name: 'Dinastía Fluffy VIP',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '48',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Familia Rodríguez',
        },
        reviewBody: `Excelente experiencia recibiendo nuestro cachorro Bulldog Francés Fluffy en ${cityName}. Llegó en cabina con su certificado genético L4 y esquema de vacunas impecable.`,
      },
    ],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '4500',
      availability: 'https://schema.org/InStock',
      url: currentUrl,
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: isDomestic ? '0' : '800',
          currency: 'USD',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: targetCountryCode,
        },
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://frenchbulldogfluffy.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: city.pais,
        item: currentUrl,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Bulldog Francés Fluffy en ${cityName}`,
        item: currentUrl,
      },
    ],
  };

  const bodyHtml = `<main><article><h1>${escapeHtml(
    city.tituloH1
  )}</h1><p>${escapeHtml(city.metaDescripcion)}</p><section><h2>Encuentra el mejor Fluffy VIP en ${escapeHtml(
    cityName
  )} (${escapeHtml(city.pais)})</h2><p>${escapeHtml(
    city.historiaLocal
  )}</p><p>Entrega VIP garantizada en ${escapeHtml(
    city.aeropuerto
  )}. Moneda de referencia: ${escapeHtml(city.moneda)} / USD.</p></section></article></main>`;

  const html = buildRouteHtml({
    title: seoTitle,
    description: seoDescription,
    canonicalUrl: currentUrl,
    ogImage,
    extraJsonLd: [productSchema, breadcrumbSchema],
    bodyHtml,
  });

  writeHtmlFile(`${city.slug}.html`, html);
  generatedCount++;
}

console.log(`✅ Pre-renderizadas ${generatedCount} páginas HTML estáticas en dist/ con <link rel="canonical"> único.`);
