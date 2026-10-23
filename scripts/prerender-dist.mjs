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
  bodyHtml: `<main><h1>Bulldog Francés Fluffy</h1><p>Dinastía Fluffy VIP es un criadero especializado en cachorros Bulldog Francés de pelo largo (Fluffy). Entregamos ejemplares puros con genética certificada (gen L4/L1), pedigree internacional y logística de transporte VIP a más de 100 ciudades.</p><section><h2>Bulldog Francés Exótico de Pelo Largo: Colores, Precios y Genética</h2><p>Criamos ejemplares en los colores Blue Solid, Merle, Isabella, Lilac y Chocolate (Café), con precios desde $3,800 USD hasta $6,000 USD.</p><table><thead><tr><th>Factor Crítico</th><th>Anuncios Falsos ($800–$1,500 USD)</th><th>Estándar Dinastía Fluffy VIP ($3,800–$6,000 USD)</th></tr></thead><tbody><tr><td>Prueba de Vida y Genética</td><td>Fotos robadas sin videollamada ni panel ADN FGF5 real.</td><td>Videollamada en vivo obligatoria + Certificado ADN (L4/L1) y selección libre de BOAS.</td></tr><tr><td>Transporte Internacional</td><td>Extorsión con falsas agencias de carga o bodega de avión.</td><td>Viaje 100% en cabina presurizada con Travel Nanny humana (Cero bodega).</td></tr></tbody></table><details><summary>¿Cómo verifico a mi cachorro en vivo antes de realizar cualquier reserva?</summary><p>Antes de aceptar cualquier anticipo, realizamos una videollamada en directo desde nuestra maternidad donde ves al cachorro en tiempo real, verificamos su microchip ISO y revisamos sus paneles genéticos FGF5 (L4/L1).</p></details></section></main>`,
});
writeHtmlFile('index.html', homeHtml);
generatedCount++;

// 1b. Página de Consenso en Reddit y Auditoría Antifraude (/reddit, /opiniones-reddit, /bulldog-frances-fluffy-reddit)
const redditTitle =
  'Bulldog Francés Fluffy en Reddit y Foros: Estafas, Salud (BOAS) y Verdad Genética | Dinastía Fluffy VIP';
const redditDescription =
  '🔍 ¿Qué dicen en Reddit (r/Frenchbulldogs) sobre comprar un Bulldog Francés Fluffy? Analizamos sin filtros las estafas de $1,000 USD, el gen FGF5 (L4/L1), la respiración BOAS y nuestro protocolo antifraude.';
const redditCanonical = 'https://frenchbulldogfluffy.com/reddit';

const redditFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Por qué en Reddit dicen que un Bulldog Francés Fluffy de $800 a $1,500 USD es siempre una estafa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los foros tienen toda la razón. Criar ética y clínicamente un Bulldog Francés portador homocigoto del gen recesivo FGF5 (pelo largo) con pruebas de ADN, inseminación asistida, cesárea programada y crianza neonatal supera los $2,800 USD de costo operativo base. Cualquier anuncio entre $800 y $1,500 USD utiliza fotografías robadas de criadores reales.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es verdad lo que se debate en r/Frenchbulldogs sobre los problemas respiratorios (BOAS) y alergias?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, es una alerta válida contra criadores informales que cruzan perros por color ignorando su anatomía. En Dinastía Fluffy VIP descartamos cualquier reproductor con estenosis nasal (narinas cerradas) o paladar blando elongado (BOAS), y realizamos paneles dermatológicos para evitar alopecia por dilución (CDA) o cruces doble Merle.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa exactamente "Gen L4/L1 (FGF5)" en lenguaje sencillo y cómo sé que no es un cruce con otra raza?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El gen FGF5 (conocido como L4 o L1) es una variación natural dentro del propio ADN del Bulldog Francés que hace que el pelo crezca largo y sedoso en orejas, pecho y patas, sin necesidad de cruzarlo con Pomerania o Pequinés. Entregamos el certificado de laboratorio oficial que lo comprueba.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo entregan en más de 100 ciudades sin ser revendedores (brokers) ni usar bodegas de carga de aviones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No somos intermediarios ni compramos camadas a terceros. Todos los cachorros nacen bajo nuestra supervisión clínica y viajan exclusivamente en la cabina presurizada del avión junto a una Travel Nanny humana.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo verificar al cachorro en videollamada en vivo junto con mi propio veterinario antes de reservar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es un requisito obligatorio de nuestro protocolo antifraude. Antes de recibir cualquier depósito, realizamos una videollamada en vivo donde ves al cachorro en tiempo real, verificamos su microchip ISO, te mostramos a sus padres y revisamos sus certificados genéticos.',
      },
    },
  ],
};

const redditBodyHtml = `<main><article><h1>Lo que se debate en Reddit y foros sobre comprar un Bulldog Francés Fluffy: Estafas reales, salud genética y nuestra postura oficial</h1><p>Si llegaste aquí buscando "Bulldog Francés Fluffy Reddit", "opiniones reales" o "cómo evitar una estafa", nuestra postura como criadero especializado es categórica: el 90% de las advertencias que leerás en comunidades como r/Frenchbulldogs y r/dogs son totalmente ciertas.</p><table><thead><tr><th>Criterio Auditado</th><th>Estafas en Redes ($800–$1,500 USD)</th><th>Criador Informal ($2,000–$3,000 USD)</th><th>Alerta en Reddit (r/Frenchbulldogs)</th><th>Protocolo Dinastía Fluffy VIP ($3,800–$6,000 USD)</th></tr></thead><tbody><tr><td>Verificación del Cachorro</td><td>Videos robados de TikTok/Instagram sin videollamada.</td><td>Sin identificación por microchip ISO.</td><td>Nunca envíes dinero sin videollamada en vivo.</td><td>Videollamada en vivo obligatoria con cachorro, padres y lector de microchip ISO.</td></tr><tr><td>Gen Pelo Largo (FGF5 L4/L1)</td><td>Certificados falsos.</td><td>Portadores de pelo corto vendidos como Fluffy.</td><td>Exige panel de ADN que confirme dos copias recesivas FGF5.</td><td>Certificado de ADN oficial acreditando homocigosis FGF5 (Visual Fluffy 100% puro).</td></tr><tr><td>Salud Respiratoria (BOAS)</td><td>Sin evaluación veterinaria.</td><td>Narinas cerradas y jadeo excesivo.</td><td>Una cirugía correctiva BOAS cuesta $3,000 a $6,000 USD.</td><td>Selección anatómica Anti-BOAS con fosas nasales abiertas y tráquea amplia.</td></tr><tr><td>Transporte Internacional</td><td>Estafa de jaula retenida en aduana.</td><td>Bodega de carga peligrosa.</td><td>Un braquicéfalo nunca debe viajar en bodega de carga.</td><td>100% en Cabina Presurizada con Travel Nanny humana.</td></tr></tbody></table><details><summary>¿Por qué en Reddit dicen que un Bulldog Francés Fluffy de $800 a $1,500 USD es siempre una estafa?</summary><p>Criar ética y clínicamente un Bulldog Francés portador homocigoto del gen recesivo FGF5 supera los $2,800 USD de costo operativo base. Cualquier anuncio entre $800 y $1,500 USD utiliza fotografías robadas.</p></details><details><summary>Acta #1: Transcripción del Protocolo de Videollamada Antifraude en Tiempo Real</summary><p>Conectamos por videollamada desde nuestra maternidad, mostramos al cachorro con una tarjeta física con tu nombre y fecha, y escaneamos su microchip ISO frente a la cámara junto a tu veterinario.</p></details></article></main>`;

const redditHtml = buildRouteHtml({
  title: redditTitle,
  description: redditDescription,
  canonicalUrl: redditCanonical,
  ogType: 'article',
  extraJsonLd: [redditFaqSchema],
  bodyHtml: redditBodyHtml,
});

writeHtmlFile('reddit.html', redditHtml);
writeHtmlFile('opiniones-reddit.html', redditHtml);
writeHtmlFile('bulldog-frances-fluffy-reddit.html', redditHtml);
generatedCount += 3;

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
  )}. Moneda de referencia: ${escapeHtml(city.moneda)} / USD.</p><table><thead><tr><th>Criterio en ${escapeHtml(
    cityName
  )}</th><th>Clasificados Online ($1,000 USD)</th><th>Protocolo Fluffy VIP ($3,800–$6,000 USD)</th></tr></thead><tbody><tr><td>Verificación y ADN</td><td>Sin videollamada ni certificado FGF5.</td><td>Videollamada en vivo obligatoria + ADN L4/L1 y revisión BOAS.</td></tr><tr><td>Vuelo a ${escapeHtml(
    city.aeropuerto
  )}</td><td>Riesgo en bodega de carga.</td><td>100% en Cabina Presurizada con Travel Nanny humana.</td></tr></tbody></table><details><summary>¿Cómo entregamos en ${escapeHtml(
    cityName
  )} sin intermediarios ni pagos a ciegas?</summary><p>Todos nuestros cachorros viajan directamente en cabina junto a nuestra Travel Nanny hasta el ${escapeHtml(
    city.aeropuerto
  )} previa verificación por videollamada en vivo.</p></details></section></article></main>`;

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
