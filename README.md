<!-- GITHUB_UPLOAD_SEQUENCE: part-1-of-22 (README.md — upload first: overview & run instructions) -->

# KUET Fitness Club (Website)

A modern, responsive, dark + energetic website for **KUET Fitness Club** (multi-page).

## Run locally

### Option A: Open directly

- Open `index.html` in your browser (double click).

### Option B: Run a local server (recommended)

If you have Python installed:

```bash
python -m http.server 5173
```

Then open `http://localhost:5173` in your browser.

If you have Node.js installed:

```bash
npx serve .
```

## GitHub upload order (parts 1–22)

Search the repo for `GITHUB_UPLOAD_SEQUENCE` to see each marker. Suggested push order:

1. `README.md` — part-1  
2. `.gitignore` — part-2  
3. `.vscode/settings.json` — part-3 (optional `_GITHUB_UPLOAD_SEQUENCE` key may be removed)  
4. `styles.css` — part-4  
5. `script.js` — part-5  
6. `membership.js` — part-6  
7. `_shared-head.html` — part-7 (optional)  
8–15. HTML pages (top-of-file markers): `index.html` (8), `about.html` (9), `benefits.html` (10), `events.html` (11), `team.html` (12), `gallery.html` (13), `membership.html` (14), `contact.html` (15)  
16–22. Same pages — **footer** markers (for incremental edits): index (16), about (17), benefits (18), events (19), team (20), gallery (21), contact (22)  

Add the **`assets/`** folder (images) before or with **part-8** (logo) and **part-12** (team photos). You can use one commit per part or combine related parts.

## Notes

- Styling uses **Tailwind CSS via CDN**.
- Some images are local under **`assets/`** (e.g. logo, team); gallery may still use remote URLs.
- The membership form is UI-only (no backend).
- Pages:
  - `index.html` (Home)
  - `about.html`
  - `benefits.html`
  - `events.html`
  - `team.html`
  - `gallery.html`
  - `membership.html`
  - `contact.html`
