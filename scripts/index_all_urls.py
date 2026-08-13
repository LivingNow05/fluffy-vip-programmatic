import os
import csv
import time
import requests
from datetime import datetime
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials

SCOPES = ['https://www.googleapis.com/auth/indexing']
ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish"
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
        f"{DOMAIN}/sobre-nosotros"
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

def main():
    creds = get_credentials()
    urls = get_all_urls()
    already_indexed = load_indexed_log()
    
    pending_urls = [u for u in urls if u not in already_indexed]
    print(f"📊 Total URLs detectadas: {len(urls)}")
    print(f"✅ Ya indexadas previamente: {len(already_indexed)}")
    print(f"🚀 Pendientes por indexar hoy: {len(pending_urls)}")
    
    if not pending_urls:
        print("🎉 ¡Todas las URLs ya fueron notificadas a Google!")
        return

    success_count = 0
    error_count = 0
    
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
            res = requests.post(ENDPOINT, headers=headers, json=body)
            if res.status_code == 200:
                print(f"[{i}/{len(pending_urls)}] ✅ Notificada: {url}")
                append_indexed_log(url)
                success_count += 1
            elif res.status_code == 429:
                print(f"[{i}/{len(pending_urls)}] ⚠️ Cuota diaria de Google alcanzada (429 Quota Exceeded).")
                break
            else:
                print(f"[{i}/{len(pending_urls)}] ❌ Error {res.status_code}: {res.text}")
                error_count += 1
        except Exception as e:
            print(f"[{i}/{len(pending_urls)}] 🔥 Error de conexión: {e}")
            error_count += 1
        
        # Pausa pequeña para no saturar la API
        time.sleep(0.5)

    print("\n" + "="*50)
    print(f"🏁 Indexación finalizada:")
    print(f"   - Exitosas: {success_count}")
    print(f"   - Errores: {error_count}")
    print(f"   - Total registradas en {LOG_FILE}")
    print("="*50)

if __name__ == '__main__':
    main()
