#!/usr/bin/env python3
import csv
import os
import sys
import urllib.request
import urllib.parse
import re

CSV_PATH = "JuiceGels_Listing_LIVE - updated_juicegels_converted.csv"
OUT_DIR = os.path.join("docs", "images", "products")

os.makedirs(OUT_DIR, exist_ok=True)

def safe_name(s: str) -> str:
    return re.sub(r"[^0-9A-Za-z._-]", "_", s)

def ext_from_content_type(ct: str) -> str:
    if not ct:
        return ".jpg"
    ct = ct.split(";")[0].strip().lower()
    mapping = {
        "image/jpeg": ".jpg",
        "image/jpg": ".jpg",
        "image/png": ".png",
        "image/gif": ".gif",
        "image/webp": ".webp",
    }
    return mapping.get(ct, ".jpg")

def download(url: str, dest: str) -> None:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = resp.read()
        with open(dest, "wb") as f:
            f.write(data)

def main():
    if not os.path.exists(CSV_PATH):
        print(f"CSV not found: {CSV_PATH}")
        sys.exit(1)

    with open(CSV_PATH, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        rows = list(reader)
        fieldnames = reader.fieldnames

    downloaded = 0
    skipped = 0
    errors = 0

    for i, row in enumerate(rows):
        orig = (row.get('IMAGE1') or '').strip()
        if not orig:
            skipped += 1
            continue
        if not orig.lower().startswith('http'):
            # already local or data URI
            skipped += 1
            continue

        try:
            parsed = urllib.parse.urlparse(orig)
            base = os.path.basename(parsed.path)
            base = safe_name(base) if base else ''

            # guess extension
            _, ext = os.path.splitext(base)

            # fetch headers if extension is missing
            if not ext:
                req = urllib.request.Request(orig, method='HEAD', headers={"User-Agent": "Mozilla/5.0"})
                try:
                    with urllib.request.urlopen(req, timeout=20) as resp:
                        ct = resp.headers.get('Content-Type')
                        ext = ext_from_content_type(ct)
                except Exception:
                    ext = '.jpg'

            if base:
                filename = f"{safe_name(row.get('id','row'+str(i)))}_{base}"
            else:
                filename = f"{safe_name(row.get('id','row'+str(i)))}_image1{ext}"

            dest_path = os.path.join(OUT_DIR, filename)

            # avoid re-downloading if file exists
            if not os.path.exists(dest_path):
                download(orig, dest_path)
                downloaded += 1
            else:
                skipped += 1

            # update CSV path to relative docs path
            row['IMAGE1'] = os.path.join('docs', 'images', 'products', filename).replace('\\', '/')

        except Exception as e:
            print(f"Error downloading {orig}: {e}")
            errors += 1

    # write back CSV
    with open(CSV_PATH, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    print(f"Done. downloaded={downloaded}, skipped={skipped}, errors={errors}")

if __name__ == '__main__':
    main()
