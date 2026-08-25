import os
import csv
import sys
import time
import requests
from datetime import datetime
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials

SCOPES = ['https://www.googleapis.com/auth/indexing']
INDEXING_ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish"
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOKEN_FILE = os.path.join(ROOT_DIR, 'token.json')
CSV_PATH = os.path.join(ROOT_DIR, 'public', 'dataset_fluffy_stories.csv')
LOG_FILE = os.path.join(ROOT_DIR, 'indexing_log.txt')
DOMAIN = "https://frenchbulldogfluffy.com"

def get_credentials():
    if not os.path.exists(TOKEN_FILE):
        raise FileNotFoundError(f"No se encontró {TOKEN_FILE}")
    creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
            with open(TOKEN_FILE, 'w') as token:
                token.write(creds.to_json())
    return creds

def get_all_urls():
    urls = [
        f"{DOMAIN}/",
        f"{DOMAIN}/entregas",
        f"{DOMAIN}/precios",
        f"{DOMAIN}/sobre-nosotros",
        f"{DOMAIN}/color/merle",
        f"{DOMAIN}/color/isabella",
        f"{DOMAIN}/color/blue-solid",
        f"{DOMAIN}/color/chocolate",
        f"{DOMAIN}/color/lilac"
    ]
    if os.path.exists(CSV_PATH):
        with open(CSV_PATH, mode='r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                slug = row.get('URL Final (Slug)', '').strip()
                if slug:
                    urls.append(f"{DOMAIN}/{slug}")
    return urls

def load_indexed_log():
    if os.path.exists(LOG_FILE):
        with open(LOG_FILE, 'r', encoding='utf-8') as f:
            return set(line.strip() for line in f if line.strip())
    return set()

def append_indexed_log(url):
    with open(LOG_FILE, 'a', encoding='utf-8') as f:
        f.write(url + '\n')

def send_indexnow(urls):
    print("\n🌐 Enviando IndexNow a Bing & Search Engines...")
    indexnow_endpoint = "https://api.indexnow.org/indexnow"
    # IndexNow payload
    payload = {
        "host": "frenchbulldogfluffy.com",
        "key": "5b4c10fd6bd6ad072166f3bf6800dca8",
        "keyLocation": "https://frenchbulldogfluffy.com/5b4c10fd6bd6ad072166f3bf6800dca8.txt",
        "urlList": urls[:100]
    }
    try:
        res = requests.post(indexnow_endpoint, json=payload, timeout=10)
        print(f"IndexNow Status: {res.status_code} ({res.reason})")
    except Exception as e:
        print(f"IndexNow Exception: {e}")

def main():
    force = '--force' in sys.argv
    urls = get_all_urls()
    
    if force and os.path.exists(LOG_FILE):
        os.remove(LOG_FILE)
        already_indexed = set()
    else:
        already_indexed = load_indexed_log()
    
    pending_urls = urls if force else [u for u in urls if u not in already_indexed]
    
    print("=" * 60)
    print("🚀 GOOGLE INDEXING API - RE-INDEXACIÓN MASIVA")
    print(f"📊 Total URLs del sitio: {len(urls)}")
    print(f"✅ Ya notificadas previamente: {len(already_indexed)}")
    print(f"⚡ A notificar en esta ejecución: {len(pending_urls)}")
    print("=" * 60)
    
    if not pending_urls:
        print("🎉 ¡Todas las URLs ya fueron notificadas a Google! (Usa python3 scripts/index_all_urls.py --force para reenviar todo)")
        send_indexnow(urls)
        return

    creds = get_credentials()
    success_count = 0
    error_count = 0
    quota_reached = False
    
    for i, url in enumerate(pending_urls, 1):
        if not creds.valid:
            creds.refresh(Request())

        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {creds.token}"
        }
        body = {
            "url": url,
            "type": "URL_UPDATED"
        }
        
        try:
            res = requests.post(INDEXING_ENDPOINT, headers=headers, json=body)
            if res.status_code == 200:
                print(f"[{i}/{len(pending_urls)}] ✅ Notificada con éxito: {url}")
                append_indexed_log(url)
                success_count += 1
            elif res.status_code == 429:
                print(f"[{i}/{len(pending_urls)}] ⚠️ Cuota diaria alcanzada (429 Quota Exceeded).")
                quota_reached = True
                break
            else:
                print(f"[{i}/{len(pending_urls)}] ❌ Error {res.status_code}: {res.text}")
                error_count += 1
        except Exception as e:
            print(f"[{i}/{len(pending_urls)}] 🔥 Error: {e}")
            error_count += 1
        
        time.sleep(0.3)

    print("\n" + "=" * 60)
    print("🏁 Resumen de Google Indexing API:")
    print(f"   - Exitosas: {success_count}")
    print(f"   - Errores: {error_count}")
    if quota_reached:
        print("   - Estado: Cuota diaria máxima alcanzada (200 requests/día de Google). Se reanudará mañana.")
    print("=" * 60)

    # También notificar a IndexNow
    send_indexnow(urls)

if __name__ == '__main__':
    main()
