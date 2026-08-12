# Tesseract trained data (OCR language models)

The on-device OCR engine (`flutter_tesseract_ocr`, used by the expense document
scanner) loads its language models from this folder on **mobile (Android/iOS)**.

Drop the following files here (they are intentionally **not** committed because
each is ~10–15 MB binary):

- `heb.traineddata` — Hebrew
- `eng.traineddata` — English

Download the **best/fast** models from the official tessdata repos:

- https://github.com/tesseract-ocr/tessdata_best (most accurate)
- https://github.com/tesseract-ocr/tessdata_fast (smaller / faster)

The file list is declared in `assets/tessdata_config.json`. If a model file is
missing at runtime, OCR fails gracefully and the create-expense form simply
falls back to manual entry (no crash).

## Web

On web, OCR runs through **tesseract.js** (WASM), which loads its own language
data from a CDN — these `.traineddata` files are **not** used there. See the
web bootstrap notes in `lib/services/in_app_services/ocr/ocr_service_web.dart`.
