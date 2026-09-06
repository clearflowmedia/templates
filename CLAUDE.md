# templates

This repo is a library of purchased HTML/CSS/JS website templates (TemplateMonster-sourced), kept as raw reference material for bootstrapping future client website builds. Nothing here is a working app — there's no shared build system, package.json, or deploy config at the root. Treat each template as a standalone static-site starting point to copy from, not a dependency to install.

## Layout

Every template lives in its own folder directly under `templates/<templateName>/` — no more grouping by vendor purchase batch. Three underlying template families are represented:

```
templates/starbis*/            Starbis — Bootstrap + Pug source, 18 niche variants
templates/techno-*/            Techno — Bootstrap, plain compiled HTML, digital agency/IT
templates/lintense*/           Lintense — Bootstrap + Novi Builder, 28 niche variants
```

### Starbis (`templates/starbis*/`)

- `templates/starbis/`, `templates/starbis-audit-1`, `starbis-audit-2`, `starbis-audit-attent`, `starbis-business-coach`, `starbis-coffee-shop`, `starbis-crediting`, `starbis-financial-advisory`, `starbis-insurance-1/2/3`, `starbis-internet-cafe`, `starbis-investment-management-1/2`, `starbis-law-services`, `starbis-repair-service`, `starbis-tax-management`, `starbis-war-corps` — 18 variants total, same underlying component library reskinned per industry.
- Each variant folder contains:
  - `site/` — compiled, ready-to-use static HTML (open these directly)
  - `sources/pug/` + `sources/scss/` — uncompiled Pug/SCSS source (no gulpfile included, so treat as reference only, not buildable as-is)
- Pug source structure: `_skeleton.pug` (base layout/head/body/loader) → `pages/*.pug` (one per site page, `extends ../_skeleton`) → pulls in `sections/_section-*.pug` (header/footer/CTA variants) and `elements/_ui-*.pug` (mixins: icon boxes, quotes, thumbnails, progress bars, etc.) via `_mixins.pug`.
- Stack: Bootstrap grid, RD Navbar (sticky/responsive nav plugin), Google Fonts, `core.min.js` + `script.js` bundles, custom utility classes for spacing/color (`section-60`, `bg-athens-gray`, `text-spacing--25`).
- `templates/starbis/screenshots/`, `documentation.txt`, `info.txt` — vendor preview images and quick-start docs for the base template (apply to the whole Starbis family, not just this one variant).

### Techno (`templates/techno-*/`)

- `templates/techno-digital-agency/` — main usable template: many pre-built HTML pages (index-2 through index-7 are homepage variants, plus about, blog, portfolio, services, pricing, case-study pages, a 404, etc.). Also holds `documentation/index.html`, the vendor setup docs for the whole Techno family.
- `templates/techno-agency/` — a second, related variant with its own asset set.
- `templates/techno-main/` — a third, larger packaging of the same template family (many more pages/elements, e.g. `index-2` through `index-18`, landing pages, element demos) — appears to be an alternate/original packaging rather than a distinct niche variant.
- Stack: Bootstrap, Owl Carousel, Nivo Slider, Animate.css, Font Awesome + Flaticon icon fonts, meanmenu (mobile nav), Venobox (lightbox). Plain HTML/CSS — no templating language, easy to hand-edit directly.

### Lintense (`templates/lintense*/`, via Novi Builder)

- `templates/lintense/` — the base/generic variant, plus shared build tooling (`config.js`, `gulpfile.js`, `package.json`) and vendor docs (`documentation/Documentation.pdf`, `documentation.txt`) for the whole Lintense family.
- `templates/lintense-<niche>/` — 27 niche variants (advertising-agency, basketball, business-consulting, catholic-church, charity, christmas-day, christmas-event, clinic, construction, course, delivery, doctor, e-book, event, financial-adviser, fitness, fortune-teller, hosting, insurance-agency, law-consulting, mobile-repair, personal-page, photographer-portfolio, real-estate, recruitment-agency, repair-services, transportation, travel). Each contains:
  - the **compiled static output** directly at its root (`index.html`, `components/`, `images/`, `pages/`, etc.) — open/copy this for reference, single-page sites.
  - `sources/<name>.zip` — the matching **Novi Builder** drag-and-drop CMS package, where one exists. `index.html` inside these zips is just an app shell that loads `js/builder.min.js`, not real page content — not directly useful without the Novi Builder desktop app itself. `templates/lintense-transportation/` and `templates/lintense-corporate/` only have a `sources/` package with no compiled counterpart (`lintense-corporate/sources/builder-corporate/` is the generic Novi Builder corporate app shell, not a niche site).
- Same component family as Starbis (RD Navbar, `.rd-nav-item`, `preloader`, `section`/`bg-image` utility conventions) — Lintense and Starbis are sibling template lines from the same vendor toolkit, just different page layouts and copy.

## Working with these templates

- Prefer each template's `site/` folder (Starbis) or the compiled output at the template's root (Lintense) as your starting point — both are pre-compiled static HTML, no build step required.
- **`templates/techno-digital-agency`** is also directly usable static HTML, and simplest to hand-edit (no Pug, no builder app).
- Avoid a `sources/*.zip` or `sources/builder-corporate/` Novi Builder package unless the Novi Builder desktop app is actually available — the loose `index.html` files there won't render meaningful content on their own.
- When adapting a template for a client site: copy the relevant `templates/<templateName>/` folder out, strip vendor branding/demo content (`demolink.org` placeholder emails/phones, stock imagery, "coded by kraken" comments), and re-point asset paths as needed since each template assumes it's the site root.
- **Licensing:** all templates were acquired via a MonsterOne unlimited/lifetime subscription — full usage rights are already cleared, including for paid client deliverables. No per-template license file check needed.

## Rebranding a template for a client (or for a gallery screenshot)

Every template ships with the vendor's own demo business name baked into the copy
*and* into the header logo graphic — both need to change, or the screenshot/site
still reads as the vendor's demo, not a real business. Where a variant has already
been piloted this way, see its `NOTES.md` for the specifics; the patterns below are
per-family and apply to any other variant in that family.

**Finding the placeholder name:** grep the template for its known placeholder
brand word (case-sensitive, whole-word) — e.g. `grep -rn '\bMeate\b' <dir>`. It
typically shows up in: the footer copyright, the nav logo's `alt`/`title` text,
1-3 hero/about paragraphs, and (Lintense only) the `<title>` tag. Don't touch
lowercase CSS/JS class-name prefixes that happen to share the vendor's name
(`techno-header`, `rd-nav-item`, etc.) — those are internal styling hooks, not
visible text, and renaming them is unnecessary churn.

- **Starbis** (`site/index.html` etc.): placeholder is usually a single word
  (e.g. "Meate") reused verbatim in body copy and the footer across all pages in
  `site/`. Plain find/replace across `site/**/*.html` covers the text. The logo
  is two small SVG files (`images/logo-default-*.svg` / `logo-inverse-*.svg`,
  one dark-fill for light headers, one white-fill for dark/scrolled headers) —
  it's a hand-drawn vector wordmark, not live text. Replace the `<path>` with a
  `<text>` element using `textLength="<viewBox width - ~2px>"
  lengthAdjust="spacingAndGlyphs"` so the new name force-fits the existing
  viewBox exactly. Every page references the same two files, so editing just
  those two SVGs rebrands the whole site in one shot.
- **Techno**: placeholder appears capitalized (`Techno`/`TECHNO`) sprinkled
  through headings, footers, and testimonial bylines on *every* page, not just
  the homepage — whole-word case-sensitive replace across all top-level
  `*.html` files (skip the `documentation/` folder, that's vendor reference
  material, not site content). **Check the header logo image itself** —
  `assets/images/logo.png` (and sometimes a second `logo2.png` for an alternate
  hero) is a **raster PNG with the wordmark baked into the pixels as white
  text**, easy to miss if you preview it against a white canvas (it looks
  blank). It's reused 3+ times per page (main nav, sticky nav, mobile sidebar).
  Regenerate it rather than trying to edit HTML: render a small transparent-
  background PNG of the new name at the exact same pixel dimensions (check with
  `file logo.png`) and overwrite the file in place. A quick way to do this in
  this environment (no ImageMagick/Pillow installed): use the globally-installed
  Playwright/Chromium (`NODE_PATH=/opt/node22/lib/node_modules node script.js`)
  to screenshot a tiny HTML snippet (`<body style="width:WxH">​<span style="color:#fff;...">Name</span>`)
  with `page.screenshot({ omitBackground: true })` for a transparent PNG.
- **Lintense** (single-page — usually just `index.html`, occasionally plus a
  `*-popup-set.html` demo gallery page that isn't linked from the nav and is
  safe to delete): placeholder is often a two-word made-up name (e.g. "YOUR
  Villa") in the `<title>`, nav logo alt text/slogan, and footer. The logo is
  **also a raster PNG with the wordmark baked in** (two-tone: dark + the site's
  gold accent, commonly `#F8CD96`) — rather than regenerating the image, it's
  simpler to replace the `<img class="logo-image-default">` /
  `<img class="logo-image-inverse">` pair with plain `<span>`s carrying those
  *same two classes* (the site's own `components/logo/logo.css` already
  shows/hides them via `.context-dark`/`.rd-navbar-dark`, so no JS/CSS changes
  needed) styled inline with the site's accent color.

**Previewing the result:** these are static HTML, so any static file server
works (`python3 -m http.server`, or `npx http-server`, both point at the
template's root). To automate a homepage screenshot for the sales gallery,
Playwright with Chromium is already installed globally in this environment —
point a Node script's `NODE_PATH` at `/opt/node22/lib/node_modules` to `require('playwright')`
without a local install, serve the template's folder, `page.goto()` the
entry HTML, wait for it to settle (2-3s is usually enough for carousels/animations),
then `page.screenshot()`.
