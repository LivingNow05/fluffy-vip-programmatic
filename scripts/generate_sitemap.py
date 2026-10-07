import csv
import json
import os
from datetime import datetime, timezone

DOMAIN = 'https://frenchbulldogfluffy.com'
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSV_PATH = os.path.join(ROOT_DIR, 'public', 'dataset_fluffy_stories.csv')
ARTICLES_FILE = os.path.join(ROOT_DIR, 'blog_articles.json')
PUBLIC_DIR = os.path.join(ROOT_DIR, 'public')
TODAY = datetime.now(timezone.utc).strftime('%Y-%m-%d')

def generate_sitemaps():
    urls = [
        {'loc': f'{DOMAIN}/', 'priority': '1.0', 'changefreq': 'daily'},
        {'loc': f'{DOMAIN}/precios', 'priority': '0.9', 'changefreq': 'weekly'},
        {'loc': f'{DOMAIN}/entregas', 'priority': '0.9', 'changefreq': 'weekly'},
        {'loc': f'{DOMAIN}/blog', 'priority': '0.9', 'changefreq': 'daily'},
        {'loc': f'{DOMAIN}/color/merle', 'priority': '0.9', 'changefreq': 'weekly'},
        {'loc': f'{DOMAIN}/color/isabella', 'priority': '0.9', 'changefreq': 'weekly'},
        {'loc': f'{DOMAIN}/color/blue-solid', 'priority': '0.9', 'changefreq': 'weekly'},
        {'loc': f'{DOMAIN}/color/chocolate', 'priority': '0.9', 'changefreq': 'weekly'},
        {'loc': f'{DOMAIN}/color/lilac', 'priority': '0.9', 'changefreq': 'weekly'},
    ]

    # Add blog articles
    if os.path.exists(ARTICLES_FILE):
        try:
            with open(ARTICLES_FILE, 'r', encoding='utf-8') as f:
                articles = json.load(f)
                for art in articles:
                    slug = art.get('slug', '').strip()
                    if slug:
                        urls.append({
                            'loc': f'{DOMAIN}/blog/{slug}',
                            'priority': '0.85',
                            'changefreq': 'monthly'
                        })
        except Exception as e:
            print(f"⚠️ Error cargando blog_articles.json: {e}")

    # Add 100 city pages
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

    print(f"✅ Sitemap generado con éxito. Total URLs: {len(urls)}")

if __name__ == '__main__':
    generate_sitemaps()
