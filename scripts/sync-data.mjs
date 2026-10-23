import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const csvPath = path.join(rootDir, 'public', 'dataset_fluffy_stories.csv');
const outJsonPath = path.join(rootDir, 'src', 'data', 'fluffy_cities.json');

const csvText = fs.readFileSync(csvPath, 'utf-8');
const parsed = Papa.parse(csvText, {
  header: true,
  skipEmptyLines: true,
});

const rows = parsed.data.map((row) => ({
  dominio: row['Dominio'] || '',
  categoria: row['Categoría'] || 'venta',
  slug: (row['URL Final (Slug)'] || '').trim(),
  tituloH1: (row['H1 Título'] || '').trim(),
  metaDescripcion: (row['Meta Descripción'] || '').trim(),
  moneda: (row['Moneda'] || 'USD').trim(),
  pais: (row['País'] || '').trim(),
  aeropuerto: (row['Aeropuerto'] || '').trim(),
  historiaLocal: (row['Historia Local'] || '').trim(),
})).filter((r) => r.slug);

fs.writeFileSync(outJsonPath, JSON.stringify(rows, null, 2), 'utf-8');
console.log(`✅ Sincronizadas ${rows.length} ciudades en src/data/fluffy_cities.json`);

// Sincronizar también sitemap.xml y sitemap-0.xml con todos los artículos de blog y ciudades
const blogArticlesPath = path.join(rootDir, 'src', 'data', 'blog_articles.json');
const blogArticles = JSON.parse(fs.readFileSync(blogArticlesPath, 'utf-8'));
const today = new Date().toISOString().split('T')[0];

const staticUrls = [
  { loc: 'https://frenchbulldogfluffy.com/', changefreq: 'daily', priority: '1.0' },
  { loc: 'https://frenchbulldogfluffy.com/reddit', changefreq: 'weekly', priority: '0.95' },
  { loc: 'https://frenchbulldogfluffy.com/precios', changefreq: 'weekly', priority: '0.9' },
  { loc: 'https://frenchbulldogfluffy.com/entregas', changefreq: 'weekly', priority: '0.9' },
  { loc: 'https://frenchbulldogfluffy.com/blog', changefreq: 'daily', priority: '0.9' },
  { loc: 'https://frenchbulldogfluffy.com/color/merle', changefreq: 'weekly', priority: '0.9' },
  { loc: 'https://frenchbulldogfluffy.com/color/isabella', changefreq: 'weekly', priority: '0.9' },
  { loc: 'https://frenchbulldogfluffy.com/color/blue-solid', changefreq: 'weekly', priority: '0.9' },
  { loc: 'https://frenchbulldogfluffy.com/color/chocolate', changefreq: 'weekly', priority: '0.9' },
  { loc: 'https://frenchbulldogfluffy.com/color/lilac', changefreq: 'weekly', priority: '0.9' },
];

const blogUrls = blogArticles.map((art) => ({
  loc: `https://frenchbulldogfluffy.com/blog/${art.slug}`,
  changefreq: 'monthly',
  priority: '0.85',
}));

const cityUrls = rows.map((city) => ({
  loc: `https://frenchbulldogfluffy.com/${city.slug}`,
  changefreq: 'weekly',
  priority: '0.8',
}));

const allUrls = [...staticUrls, ...blogUrls, ...cityUrls];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allUrls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(rootDir, 'public', 'sitemap.xml'), sitemapXml, 'utf-8');
fs.writeFileSync(path.join(rootDir, 'public', 'sitemap-0.xml'), sitemapXml, 'utf-8');
console.log(`✅ Sitemap actualizado con ${allUrls.length} URLs canónicas.`);
