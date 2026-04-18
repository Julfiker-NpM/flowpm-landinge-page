# FlowPM — Figma Design Spec
**Version:** 1.0 · **Theme:** Dark editorial  
**Figma file structure guide + component inventory**

---

## How to import into Figma

### Option A — Figma Tokens Studio plugin (recommended)
1. Install **Tokens Studio for Figma** from the Figma Community
2. Open the plugin → Settings → Sync → Local file
3. Load `figma-tokens.json` from this folder
4. Click **Load tokens** → **Apply all tokens**
5. All color, typography, spacing, and radius tokens become Variables in your file

### Option B — Figma Variables (manual)
1. Open Figma → Local Variables panel
2. Create a collection called `FlowPM`
3. Add the following variable groups from the token file: Color, Typography, Spacing, Border Radius
4. Link each component's styles to these variables for easy dark/light theme switching

### Option C — Figma Styles
1. Use the hex values below to create Color Styles
2. Create Text Styles using DM Serif Display + DM Mono + System Sans
3. Apply them to components manually

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `color/bg` | `#0d0d0d` | Page background |
| `color/bg-2` | `#111111` | Card / section background |
| `color/bg-3` | `#161616` | Hover / elevated surface |
| `color/text-primary` | `#e8e4dc` | All primary text |
| `color/text-secondary` | `rgba(232,228,220,0.55)` | Muted body text |
| `color/text-tertiary` | `rgba(232,228,220,0.30)` | Labels, hints, notes |
| `color/accent` | `#5DCAA5` | Brand teal — CTAs, accents |
| `color/accent-on` | `#04342C` | Text ON accent background |
| `color/accent-bg` | `rgba(93,202,165,0.10)` | Icon bg, badge fill |
| `color/accent-border` | `rgba(93,202,165,0.22)` | Icon border, badge stroke |
| `color/border` | `rgba(255,255,255,0.08)` | Default divider/stroke |
| `color/border-2` | `rgba(255,255,255,0.14)` | Hover stroke |
| `color/danger` | `#E24B4A` | Error / validation states |

---

## Typography

### Font families
| Role | Family | Source |
|---|---|---|
| Display / Headlines | DM Serif Display | Google Fonts |
| Labels / Data | DM Mono | Google Fonts |
| Body / UI | System Sans | `-apple-system`, Segoe UI |

**Google Fonts import:**
```
https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap
```

### Type scale
| Name | Size | Weight | Family | Line Height | Usage |
|---|---|---|---|---|---|
| Hero | 64px | 400 | DM Serif Display | 1.05 | Hero headline |
| H1 | 48px | 400 | DM Serif Display | 1.10 | Section titles |
| H2 | 40px | 400 | DM Serif Display | 1.15 | Sub-sections |
| Serif Quote | 18px | 400 italic | DM Serif Display | 1.55 | Testimonials |
| Body LG | 16px | 400 | System Sans | 1.70 | Hero body |
| Body MD | 15px | 400 | System Sans | 1.70 | Section descriptions |
| Body SM | 13px | 400 | System Sans | 1.65 | Card body, lists |
| Label | 12px | 400 | System Sans | — | Secondary labels |
| Eyebrow | 11px | 500 | DM Mono | — | Section labels, badges |
| Mono SM | 11–13px | 400–500 | DM Mono | — | Badges, steps, notes |
| Stat | 38px | 400 | DM Serif Display | 1.0 | Stats bar numbers |
| Price | 34px | 400 | DM Serif Display | 1.0 | Pricing numbers |

---

## Component Inventory

### 1. Nav Bar
- Height: 64px
- Padding: 20px 40px
- Background: `#0d0d0d` at 92% opacity + backdrop-filter blur(12px)
- Bottom border: 0.5px `color/border`
- **Logo**: DM Mono 18px · `text` + `accent` colors
- **Nav links**: 13px · `text-secondary` · hover → `text-primary`
- **CTA button**: bg `accent`, text `accent-on`, 8px 18px padding, radius-sm

### 2. Hero Section
- Padding: 100px 40px 80px
- Max width: 780px
- **Eyebrow**: DM Mono 11px uppercase, letter-spacing 0.12em, `accent`
- **H1**: DM Serif Display 64px / 1.05, with italic `<em>` in `accent`
- **Subtext**: System Sans 16px / 1.70, `text-secondary`, max-width 500px
- **Primary CTA**: btn-primary component
- **Ghost CTA**: btn-ghost component
- **Note**: DM Mono 12px, `text-tertiary`

### 3. Stats Bar
- 3-column grid, full width
- Vertical borders: 0.5px `color/border`
- Padding per cell: 32px 40px
- **Number**: DM Serif Display 38px, `text-primary`
- **Label**: 12px, `text-tertiary`, letter-spacing 0.05em

### 4. Feature Card
- Background: `bg-2`
- Padding: 32px 26px
- Part of 1px-gap grid (gap = `color/border`)
- **Icon container**: 36×36px, radius-md, `accent-bg` fill, `accent-border` stroke
- **Icon**: 16×16px SVG, stroke `accent`
- **Title**: 14px 500, `text-primary`
- **Description**: 13px, `text-secondary`

### 5. Workflow Card
- Background: `bg-2`, border `color/border`, radius-lg
- Padding: 30px
- **Step number**: DM Mono 11px, `text-tertiary`
- **Title**: 16px 500, `text-primary`
- **Description**: 13px, `text-secondary`
- **Tag**: DM Mono 11px, `accent`, `accent-bg` fill, `accent-border` stroke, 4px radius

### 6. Pricing Card
- Background: `bg-2`, border `color/border`, radius-lg
- Padding: 30px 26px
- **Featured variant**: border `accent`, background `#0d1f1a`
- **Badge**: DM Mono 11px, `accent`, `accent-bg`, `accent-border`
- **Plan name**: DM Mono 12px uppercase, `text-secondary`
- **Price**: DM Serif Display 34px, `text-primary`
- **Feature list**: 13px, with `—` prefix in `accent`
- **Button**: See btn-ghost / btn-primary

### 7. Testimonial Card
- Background: `bg-2`, border `color/border`, radius-lg
- Padding: 28px
- **Quote**: DM Serif Display 18px italic / 1.55
- **Avatar**: 34px circle, `accent-bg` fill, `accent-border` stroke, DM Mono 11px initial
- **Name**: 13px 500, `text-primary`
- **Role**: 12px, `text-tertiary`

### 8. CTA Section
- Padding: 100px 40px
- Text center
- **H2**: DM Serif Display 48px / 1.1
- **Email input**: 13px, `bg + border-2`, focus border `accent`
- **Submit button**: bg `accent`, text `accent-on`

---

## Spacing System
All spacing follows an 8px base unit:
`4 · 8 · 12 · 16 · 20 · 24 · 28 · 32 · 40 · 48 · 64 · 80 · 100`

---

## Border Radius
| Name | Value | Usage |
|---|---|---|
| `radius-sm` | 6px | Buttons, nav CTA |
| `radius-md` | 8px | Inputs, tags, small elements |
| `radius-lg` | 12px | Cards, modals, feature grid |
| `radius-pill` | 999px | Avatars, circular elements |

---

## Page Layout Grid
- **Desktop**: 1100px max content width, 40px outer padding
- **Tablet** (≤768px): 20px outer padding, single-column cards
- **Mobile** (≤480px): Single column throughout
- **Section vertical rhythm**: 80px padding top/bottom

---

## Animation (for Figma Prototype)
- Card hover: bg transition 150ms ease
- CTA hover: opacity 88%, 150ms ease
- Scroll fade-in: opacity 0→1 + translateY 16px→0, 400ms ease, staggered 40ms
- Nav backdrop: backdrop-filter blur(12px), sticky
