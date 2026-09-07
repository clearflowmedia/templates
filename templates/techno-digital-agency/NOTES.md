# techno-digital-agency — pilot rebrand notes

Rebranded for the demo gallery as **Brightwave** (fictional digital agency), replacing
the vendor placeholder name "Techno"/"TECHNO".

- Good fit for: IT services, web/digital marketing agencies, software consultancies.
- Entry point: `index.html` (index-2 through index-7 are alternate homepage layouts —
  worth previewing all of them with the client and picking the best fit before
  building out the rest of the site).
- What was changed: every visible "Techno"/"TECHNO" (page titles, footers, nav
  tooltip, the "CEO & Founder" testimonial byline, the "TECHNO IS THE BEST IT"
  hero heading on about.html) replaced across all top-level `.html` pages —
  case-sensitive whole-word replace, so lowercase `techno-*` CSS/JS class names
  were left alone (they're just internal styling hooks, not visible text).
  The vendor `documentation/` folder was left as-is (developer reference, not
  site content).
- The header logo (`assets/images/logo.png`, used 3x per page: main nav, sticky
  nav, mobile sidebar; plus `assets/images/logo2.png` used once on `index-4.html`)
  is a **raster PNG with the wordmark baked into the pixels** (white text on
  transparent background — easy to miss if you preview it against a white canvas).
  Regenerated both files as a same-size (178×37) transparent PNG of "Brightwave"
  rather than editing HTML, since the same file is reused everywhere. See the
  root CLAUDE.md's rebranding section for how these were rendered (headless
  Chromium screenshot of a tiny HTML snippet, not an image-editing tool).
- Left untouched: "technoleverage existing out-of-the-bo services..." — this is
  vendor lorem-ipsum-style filler copy (a typo mashup, not a brand reference) in
  `index.html`/`landing-03.html`; replace with real content when customizing.
