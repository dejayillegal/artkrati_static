# Aakrati — Redesign (UI/UX only)

This is a lightweight static starter for Firebase Hosting. **Content, links and structure remain the same**—only visual design and flow are updated. The hero uses your provided visiting-card artwork so the **logo remains exactly as-is**.

## Brand Palette (derived from visiting card)
- Pink: `#d57f81`
- Pale: `#cdc3c2`
- Ink: `#050707`

## Run locally
```bash
# no build step needed
python3 -m http.server -d public 5173
# open http://localhost:5173
```

## Deploy to Firebase Hosting
```bash
npm i -g firebase-tools
firebase login
firebase init hosting   # choose "Use an existing project" or create new; set public dir to "public"
firebase deploy
```

## Swap placeholders
- Replace project thumbnail placeholders in **/public/index.html** with real images (keep original slugs/links like /projects-6).
- If you have a **transparent PNG/SVG logo**, drop it in `/public/assets/` and reference it in index.html.
- We also copied your `logo.psd` unchanged to `/public/assets/logo.psd` (browsers won't render PSD; it's kept as the source file).
