# Portfolio 2026 migration delete map

This file tracks what can be deleted safely as the new Figma version is implemented.

## Ready to delete now

- Nothing yet. We are in Phase 1 (data model + homepage wiring), so removals are intentionally deferred.

## Delete after Home 2026 is fully shipped

- Home card hardcoded assumptions in `src/styles/home.scss` tied to exactly four cards (`.case.-first`, `.case.-second`, `.case.-third`, `.case.-forth`) if replaced by new mosaic classes.
- Legacy "iq credit cards" title/subtitle copy assumptions still referenced in old analytics labels (if any).

## Delete after route migration is complete

- `/projects/iq` route once `/projects/setup-pix` is implemented and live.
- `/projects/boavista` route if that project is no longer present in portfolio IA.

## Delete after new case pages are complete

- Any old per-case sections that are not represented in Figma 2026 narratives.
- Unused image/video imports from:
  - `src/components/iq/index.js`
  - `src/components/boavista/index.js`
  - `src/components/blueberry/index.js`
  - `src/components/ramengo/index.js`

## Keep (adapt, do not delete)

- `src/components/header/index.js` (convert to Header Work/About variants).
- `src/components/contact/index.js` (restyle and adapt content structure).
- `src/components/carousel/index.js` (can power "next project" sections).
- Loader + transition patterns across `src/pages/*`.
