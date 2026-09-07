# starbis-coffee-shop — pilot rebrand notes

Rebranded for the demo gallery as **Brewhaus** (fictional coffee shop), replacing the
vendor placeholder name "Meate".

- Good fit for: cafes, coffee shops, small restaurants/bakeries.
- Entry point: `site/index.html`. 20 pages total in `site/` (about-us, reservation,
  news/news-post, contacts, plus e-commerce demo pages: grid-shop, single-product,
  shop-cart, shop-checkout — drop those if the client doesn't sell products online).
- What was changed: every visible "Meate" (footer copyright + 4 body-copy mentions
  across `index.html` and `about-us.html`) replaced with "Brewhaus". The header logo
  (`images/logo-default-87x24.svg` and `images/logo-inverse-87x24.svg`) is a small
  hand-drawn SVG wordmark — replaced its `<path>` with a `<text>` element using
  `textLength`/`lengthAdjust="spacingAndGlyphs"` so the new name force-fits the
  original viewBox. Both files are referenced by all 20 pages, so this one edit
  rebrands the whole site.
- Not yet touched: placeholder address ("3891 Ranchview Dr. Richardson, California
  62639") and phone number in the header — swap these for the real client's info
  before delivery. The uncompiled `sources/pug/` reference source still says "Meate"
  (not rebuilt, since there's no gulpfile to compile it — see root CLAUDE.md).
