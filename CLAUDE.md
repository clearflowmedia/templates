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
