# lintense-real-estate — pilot rebrand notes

Rebranded for the demo gallery as **Cornerstone Realty** (fictional real estate
agency), replacing the vendor placeholder name "YOUR Villa" and the page title
"Lintense Real Estate".

- Good fit for: real estate agencies/brokers, property managers.
- Single-page site: `index.html` is the whole site. `real-estate-popup-set.html`
  is a vendor demo/gallery page showing other niches' newsletter popups (not
  linked from the main nav) — it still has some vendor cross-promo copy
  ("Buy the Template", "With Lintense, you will..."); safe to delete before
  delivery since it's not part of the real site.
- What was changed: "YOUR Villa" (nav logo alt text, footer copyright, 2 body-copy
  mentions) replaced with "Cornerstone Realty" in both `index.html` and
  `real-estate-popup-set.html`. The header logo (`images/logo-default-396x66.png`
  / `images/logo-inverse-396x58.png`) is a **raster PNG with the two-tone
  wordmark baked into the pixels** ("YOUR" dark + "Villa" gold). Rather than
  regenerating the image, replaced the two `<img class="logo-image-default">`
  / `<img class="logo-image-inverse">` tags with plain `<span>`s in the same
  two classes — the site's own CSS (`components/logo/logo.css`,
  `.context-dark`/`.rd-navbar-dark` rules) already shows/hides those classes
  for the light/dark header states, so no JS or extra CSS was needed. Styled
  the spans with the site's existing accent gold (`#F8CD96`) to match the
  original two-tone look.
- Left untouched: "Why to choose your villa?" body heading — reads as ordinary
  copy about the property, not a brand reference, so no change needed.
