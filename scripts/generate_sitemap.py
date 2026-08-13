import csv
import os
from datetime import datetime, timezone

DOMAIN = 'https://frenchbulldogfluffy.com'
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSV_PATH = os.path.join(ROOT_DIR, 'public', 'dataset_fluffy_stories.csv')
PUBLIC_DIR = os.path.join(ROOT_DIR, 'public')
TODAY = datetime.now(timezone.utc).strftime('%Y-%m-%d')

def generate_sitemap_and_robots():
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

    sitemap_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    ]

    for u in urls:
        sitemap_lines.append('  <url>')
        sitemap_lines.append(f'    <loc>{u["loc"]}</loc>')
        sitemap_lines.append(f'    <lastmod>{TODAY}</lastmod>')
        sitemap_lines.append(f'    <changefreq>{u["changefreq"]}</changefreq>')
        sitemap_lines.append(f'    <priority>{u["priority"]}</priority>')
        sitemap_lines.append('  </url>')

    sitemap_lines.append('</urlset>')

    sitemap_path = os.path.join(PUBLIC_DIR, 'sitemap.xml')
    with open(sitemap_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(sitemap_lines))

    robots_content = f'''User-agent: *
Allow: /

Sitemap: {DOMAIN}/sitemap.xml
'''

    robots_path = os.path.join(PUBLIC_DIR, 'robots.txt')
    with open(robots_path, 'w', encoding='utf-8') as f:
        f.write(robots_content)

    print(f'✅ Sitemap generado con {len(urls)} URLs en {sitemap_path}')
    print(f'✅ Robots.txt creado en {robots_path}')

if __name__ == '__main__':
    generate_sitemap_and_robots()
