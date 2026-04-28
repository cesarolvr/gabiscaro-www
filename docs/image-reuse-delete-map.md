# Image Reuse/Delete Map (Portfolio 2026)

This map compares the new Figma 2026 portfolio direction with image usage in the current codebase.

## Reuse now (keep)

- Brand/shared assets:
  - `src/images/favicon.svg`
  - `src/images/cursor.svg`
- Illustration page assets:
  - `src/images/illustration-page-purple.svg`
  - `src/images/illustration-page-green.svg`
- Legacy decorative primitives still used in animations:
  - `src/images/thumbs/*.svg`
  - `src/images/carousel/*-vector.svg`

## Reuse with remap (already in progress)

- Existing project visuals reused for 2026 pages:
  - `@images/iqcartoes-lg.png` -> Setup Pix hero
  - `@images/iqresults-survey-1.svg` and `@images/iqresults-survey-2.svg` -> Setup Pix before/after support
  - `@images/iq-hyphotesis.svg` -> Setup Pix impact support

## Temporary external (Figma MCP) assets

Used as placeholders while local exports are not finalized:

- Mercado Pago Restyling hero (Figma MCP URL)
- My Move hero (Figma MCP URL)
- Home card media for new cards

Action: replace with local files in `src/images/projects/...` before final release.

## Candidates to delete after migration stabilization

- BoaVista route visuals and content assets (if BoaVista is fully removed from IA):
  - `@images/boavista/*`
  - `src/images/thumbs/boavista-*.svg`
  - `src/images/carousel/boavista-vector.svg` (if no longer used in carousel styling)
- Legacy IQ naming assets if Setup Pix fully replaces old naming:
  - `src/pages/projects/iq.js`
  - `src/components/iq/index.js` (after Setup Pix parity is complete)

## Not safe to delete yet

- `src/images/thumbs/*` and `src/images/carousel/*-vector.svg`:
  still referenced in animation/carousel layers and should only be removed after those layers are rewritten.

## Suggested next pass

1. Export final Mercado/MyMove media from Figma to local files.
2. Switch all remote MCP URLs to local imports.
3. Remove obsolete BoaVista/IQ routes and then prune their image folders.
