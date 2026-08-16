# templates

This repo is a library of purchased HTML/CSS/JS website templates (TemplateMonster-sourced), kept as raw reference material for bootstrapping future client website builds. Nothing here is a working app — there's no shared build system, package.json, or deploy config at the root. Treat each template as a standalone static-site starting point to copy from, not a dependency to install.

## Layout

```
template-set-1/   Starbis — Bootstrap + Pug source, 18 niche variants
template-set-2/   Techno — Bootstrap, plain compiled HTML, digital agency/IT
template-set-3/   Lintense — Bootstrap + Novi Builder, 24+ niche variants
```

### template-set-1 (Starbis)

- `templates/<variant>/site/` — compiled, ready-to-use static HTML (open these directly)
- `templates/<variant>/sources/pug/` + `sources/scss/` — uncompiled Pug/SCSS source (no gulpfile included, so treat as reference only, not buildable as-is)
- 18 variants under `templates/`, e.g. `starbis-insurance-1/2/3`, `starbis-law-services`, `starbis-financial-advisory`, `starbis-business-coach`, `starbis-tax-management`, `starbis-coffee-shop`, etc. — same underlying component library reskinned per industry.
- Pug source structure: `_skeleton.pug` (base layout/head/body/loader) → `pages/*.pug` (one per site page, `extends ../_skeleton`) → pulls in `sections/_section-*.pug` (header/footer/CTA variants) and `elements/_ui-*.pug` (mixins: icon boxes, quotes, thumbnails, progress bars, etc.) via `_mixins.pug`.
- Stack: Bootstrap grid, RD Navbar (sticky/responsive nav plugin), Google Fonts, `core.min.js` + `script.js` bundles, custom utility classes for spacing/color (`section-60`, `bg-athens-gray`, `text-spacing--25`).
- `screenshots/` — preview images per variant.

### template-set-2 (Techno)

- `techno-digital-agency/` — main usable template: many pre-built HTML pages (index-2 through index-7 are homepage variants, plus about, blog, portfolio, services, pricing, case-study pages, a 404, etc.)
- `techno-agency/` — a second, related variant with its own asset set
- `Techno Main File/techno/` — appears to be an alternate/original packaging of the same template
- `documentation/index.html` — vendor setup docs (HTML, open in browser)
- Stack: Bootstrap, Owl Carousel, Nivo Slider, Animate.css, Font Awesome + Flaticon icon fonts, meanmenu (mobile nav), Venobox (lightbox). Plain HTML/CSS — no templating language, easy to hand-edit directly.

### template-set-3 (Lintense, via Novi Builder)

- `builders/builder-corporate/` and the various `builders/*.zip` (fitness, law-consulting, catholic-church, christmas-day, real-estate, clinic, etc.) are packaged for the **Novi Builder** drag-and-drop CMS — `index.html` in these is just an app shell that loads `js/builder.min.js`, not real page content. Not directly useful without the Novi Builder app itself.
- `site/dev/lintense-<niche>/` — the actual **compiled static output** for 28 niches (fitness, law-consulting, catholic-church, charity, clinic, doctor, real-estate, travel, construction, hosting, recruitment-agency, etc.). These are the ones to open/copy for reference — single-page sites, one `index.html` each.
- Same component family as template-set-1 (RD Navbar, `.rd-nav-item`, `preloader`, `section`/`bg-image` utility conventions) — Lintense and Starbis are sibling template lines from the same vendor toolkit, just different page layouts and copy.
- `builder-documentation/Documentation.pdf` — vendor docs for the Novi Builder tool.

## Working with these templates

- Prefer **template-set-1's `site/` folders** or **template-set-3's `site/dev/` folders** as starting points — both are pre-compiled static HTML, no build step required.
- **template-set-2/techno-digital-agency** is also directly usable static HTML, and simplest to hand-edit (no Pug, no builder app).
- Avoid `template-set-3/builders/*` (Novi Builder packages/zips) unless the Novi Builder desktop app is actually available — the loose `index.html` files there won't render meaningful content on their own.
- When adapting a template for a client site: copy the relevant variant folder out, strip vendor branding/demo content (`demolink.org` placeholder emails/phones, stock imagery, "coded by kraken" comments), and re-point asset paths as needed since each template assumes it's the site root.
- No template here includes a license file — confirm usage rights before reusing in a paid client deliverable.
