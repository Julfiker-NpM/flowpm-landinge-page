# FlowPM Landing Page

Dark editorial landing page for FlowPM — project management SaaS for Bangladeshi agencies.

Live app: https://flow-pm-bice.vercel.app

---

## Folder structure

```
flowpm-landing/
├── src/
│   ├── index.html       # Full landing page markup
│   ├── styles.css       # All CSS (dark theme, responsive)
│   └── main.js          # Nav toggle, CTA, scroll animations
├── design/
│   ├── figma-tokens.json     # Import into Figma via Tokens Studio plugin
│   └── figma-design-spec.md  # Component specs, colors, typography guide
└── README.md
```

---

## Quick start

Just open `src/index.html` in your browser — no build step needed.

```bash
cd src
# Option 1: Python
python3 -m http.server 3000

# Option 2: Node
npx serve .
```

Then open http://localhost:3000

---

## Figma import steps

1. Install **Tokens Studio for Figma** from Figma Community
2. Open plugin → Sync → Local file → load `design/figma-tokens.json`
3. Click **Apply all tokens**
4. All design tokens (colors, spacing, radius, typography) become Figma Variables
5. See `design/figma-design-spec.md` for full component-by-component specs

---

## Design system

| Token | Value |
|---|---|
| Brand accent | `#5DCAA5` (teal) |
| Page bg | `#0d0d0d` |
| Card bg | `#111111` |
| Primary text | `#e8e4dc` |
| Display font | DM Serif Display |
| Mono font | DM Mono |

---

## Deployment

Drop the `src/` folder into Vercel, Netlify, or any static host.
No dependencies, no build tools required.
