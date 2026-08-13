import csv
import os
from datetime import datetime, timezone

DOMAIN = 'https://frenchbulldogfluffy.com'
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSV_PATH = os.path.join(ROOT_DIR, 'public', 'dataset_fluffy_stories.csv')
PUBLIC_DIR = os.path.join(ROOT_DIR, 'public')
TODAY = datetime.now(timezone.utc).strftime('%Y-%m-%d')

def generate_sitemaps():
    urls = [
        {'loc': f'{DOMAIN}/', 'priority': '1.0', 'changefreq': 'daily'},
        {'loc': f'{DOMAIN}/entregas', 'priority': '0.9', 'changefreq': 'weekly'},
        {'loc': f'{DOMAIN}/precios', 'priority': '0.9', 'changefreq': 'weekly'},
        {'loc': f'{DOMAIN}/sobre-nosotros', 'priority': '0.8', 'changefreq': 'monthly'},
    ]

    if os.path.exists(CSV_PATH):
        with open(CSV_PATH, mode='r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                slug = row.get('URL Final (Slug)', '').strip()
                if slug:
                    urls.append({
                        'loc': f'{DOMAIN}/{slug}',
                        'priority': '0.8',
                        'changefreq': 'weekly'
                    })

    # 1. Generate sitemap.xml and sitemap-0.xml
    sitemap_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'
    ]

    for u in urls:
        sitemap_lines.append('  <url>')
        sitemap_lines.append(f'    <loc>{u["loc"]}</loc>')
        sitemap_lines.append(f'    <lastmod>{TODAY}</lastmod>')
        sitemap_lines.append(f'    <changefreq>{u["changefreq"]}</changefreq>')
        sitemap_lines.append(f'    <priority>{u["priority"]}</priority>')
        sitemap_lines.append('  </url>')

    sitemap_lines.append('</urlset>')
    sitemap_xml = '\n'.join(sitemap_lines)

    with open(os.path.join(PUBLIC_DIR, 'sitemap.xml'), 'w', encoding='utf-8') as f:
        f.write(sitemap_xml)

    with open(os.path.join(PUBLIC_DIR, 'sitemap-0.xml'), 'w', encoding='utf-8') as f:
        f.write(sitemap_xml)

    # 2. Generate sitemap-index.xml (Astro / Google standard)
    sitemap_index = f'''<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>{DOMAIN}/sitemap-0.xml</loc>
    <lastmod>{TODAY}</lastmod>
  </sitemap>
</sitemapindex>
'''
    with open(os.path.join(PUBLIC_DIR, 'sitemap-index.xml'), 'w', encoding='utf-8') as f:
        f.write(sitemap_index)

    # 3. Generate robots.txt
    robots_content = f'''User-agent: *
Allow: /

Sitemap: {DOMAIN}/sitemap-index.xml
Sitemap: {DOMAIN}/sitemap.xml
'''
    with open(os.path.join(PUBLIC_DIR, 'robots.txt'), 'w', encoding='utf-8') as f:
        f.write(robots_content)

    print(f'✅ Astro-style sitemaps generated with {len(urls)} URLs!')

if __name__ == '__main__':
    generate_sitemaps()
