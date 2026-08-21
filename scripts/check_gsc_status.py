import requests
import json
import time
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request

token_path = '/Users/anthony/Downloads/consultor-ia.com.co/token.json'
creds = Credentials.from_authorized_user_file(token_path)
if creds.expired or not creds.valid:
    creds.refresh(Request())

headers = {
    'Authorization': f'Bearer {creds.token}',
    'Content-Type': 'application/json'
}
endpoint = 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect'
site_url = 'sc-domain:frenchbulldogfluffy.com'

urls = [
    'https://frenchbulldogfluffy.com/',
    'https://frenchbulldogfluffy.com/entregas',
    'https://frenchbulldogfluffy.com/precios',
    'https://frenchbulldogfluffy.com/sobre-nosotros',
    'https://frenchbulldogfluffy.com/bulldog-frances-fluffy-bogota',
    'https://frenchbulldogfluffy.com/bulldog-frances-fluffy-medellin',
    'https://frenchbulldogfluffy.com/bulldog-frances-fluffy-cali',
    'https://frenchbulldogfluffy.com/bulldog-frances-fluffy-barranquilla',
    'https://frenchbulldogfluffy.com/bulldog-frances-fluffy-cartagena',
    'https://frenchbulldogfluffy.com/bulldog-frances-fluffy-cdmx',
    'https://frenchbulldogfluffy.com/bulldog-frances-fluffy-guadalajara',
    'https://frenchbulldogfluffy.com/bulldog-frances-fluffy-monterrey',
    'https://frenchbulldogfluffy.com/bulldog-frances-fluffy-miami',
    'https://frenchbulldogfluffy.com/bulldog-frances-fluffy-lima',
    'https://frenchbulldogfluffy.com/bulldog-frances-fluffy-santiago',
    'https://frenchbulldogfluffy.com/bulldog-frances-fluffy-buenos-aires'
]

results = []

for url in urls:
    body = {
        'inspectionUrl': url,
        'siteUrl': site_url
    }
    try:
        res = requests.post(endpoint, headers=headers, json=body)
        if res.status_code == 200:
            index_res = res.json().get('inspectionResult', {}).get('indexStatusResult', {})
            verdict = index_res.get('verdict', 'NEUTRAL')
            coverage = index_res.get('coverageState', 'Pendiente de rastreo')
            crawl_time = index_res.get('lastCrawlTime', 'Pendiente')
            google_canonical = index_res.get('googleCanonical', 'N/A')
            
            results.append({
                'url': url,
                'verdict': verdict,
                'coverage': coverage,
                'crawl_time': crawl_time,
                'google_canonical': google_canonical
            })
            print(f"[{verdict}] {url.replace('https://frenchbulldogfluffy.com', '') or '/'} -> {coverage} (Último rastreo: {crawl_time})", flush=True)
        else:
            print(f"Error {res.status_code} en {url}: {res.text}", flush=True)
    except Exception as e:
        print(f"Excepción en {url}: {e}", flush=True)
    time.sleep(0.4)

with open('gsc_inspection_summary.json', 'w') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)
