## Goal
Move every page's content (text + images) from hard-coded React/TS data into Sanity, then refactor each page component to fetch from Sanity. Result: full editorial control via Sanity Studio, zero rebuilds needed for content edits.

## Approach
Schemas, image uploads, seeding, and React refactors all happen via scripts run from the sandbox using `SANITY_WRITE_TOKEN` (already stored). MCP tools used only for schema deploys and verification.

## Phase 1 — Schema design & deploy
Design and deploy one Sanity document type per page (or shared types where pages share structure). Planned types:

- `homePage` (singleton) — hero text, impact stats, tabs, NYT spotlight
- `ourStoryPage` (singleton) — intro, timeline cards[], founder bio
- `teamPage` (singleton) — leadership[], teamMembers[] with bios
- `galleryPage` (singleton) — galleryImages[] (with category tabs)
- `riverPage` (singleton) — sections, state map, gallery[]
- `methodologyPage` (singleton) — MGML content, flow diagrams
- `schoolInBoxPage` (singleton) — kit description, learning ladders
- `servicesPage` (singleton) — services[] (image+bullets)
- `achievementsPage` (singleton) — achievements[]
- `awardsPage` (singleton) — awards[] with optional article ref
- `caseStudiesPage` (singleton) — caseStudies[]
- `testimonialsPage` (singleton) — orgs[] with quotes (reuses `testimonial` doc)
- `donatePage` (singleton) — fund options, UPI QR image
- `contactPage` (singleton) — address, email, map link
- `rishiValleySchoolPage` (singleton) — content, 9-image grid
- `article` (multi-doc) — NYT article + future longform
- `pageMeta` shared object — SEO title/description/ogImage

Deploy via `mcp_sanity_cyIna--deploy_schema` in one call.

## Phase 2 — Image upload
Build a Node script `scripts/upload-images.mjs` that:
1. Walks `src/assets/` for all PNG/JPG used by pages-in-scope
2. Uses `@sanity/client`'s `assets.upload()` to upload each
3. Writes a mapping `scripts/.image-map.json` of `local path → sanity asset _id`

This map is consumed by Phase 3 to wire image refs into seed data. The local files stay in repo as fallbacks until Phase 4 cleanup.

## Phase 3 — Seed content
Build per-page seed JSON files under `scripts/seed-data/*.json` extracted from current hard-coded React data. A unified `scripts/seed-all.mjs` script:
1. Reads every seed file
2. Resolves image paths through `.image-map.json` into `{_type: 'image', asset: {_ref, _type: 'reference'}}`
3. Creates+publishes documents (clears existing first to keep idempotent)

## Phase 4 — Refactor React pages
For each page, replace local data imports with a `useQuery` GROQ fetch. Pattern (already proven on BlogPage):
- `src/lib/sanity.ts` already exists
- Add `src/queries/<page>.ts` with GROQ query string + TS type
- Page component: `useQuery` → render. Loading state = skeleton; error = fallback to existing local data (safety net).

## Phase 5 — Verify & cleanup
- `bun run build` must pass
- Visit every refactored page in preview, confirm parity
- Add CORS origin for preview + production URLs via MCP
- Update memory: add `Sanity CMS Architecture` entry noting which pages are Sanity-backed

## Risk mitigations
- Each page keeps its local data file as a fallback for the first build
- Refactor pages one-by-one inside Phase 4 (commit-safe checkpoints)
- If a Sanity query fails at runtime, page falls back to bundled data (no white screen)
- Image uploads are idempotent (checksum-based dedupe in upload script)

## Out of scope
- Admin UI inside the React app (still on hold per memory)
- Migrating the video hero asset (stays bundled)
- Form submissions (Contact/Donate forms unchanged)

## Technical notes
- All schema types are singletons (`__experimental_actions` restricted) except `article` and `testimonial`
- Images stored as Sanity assets with `urlFor()` helper already in place
- Long body text uses plain string fields (not PortableText) to match existing markdown-style content
- Estimated ~120 documents + ~80 image uploads total
- Whole batch likely needs 4-6 follow-up messages due to context size — I'll checkpoint after each phase
