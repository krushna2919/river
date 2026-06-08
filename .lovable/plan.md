## Goal
Make every page of the site editable from a Sanity-hosted dashboard. Content (text, images) is fetched at runtime from Sanity; the hero video stays in `/public` as you requested.

## Architecture
```text
┌─────────────────────┐      ┌──────────────────┐      ┌─────────────────┐
│  Sanity Studio      │ ───► │  Sanity Content  │ ◄─── │  React Site     │
│  (you edit here)    │      │  Lake (CDN)      │      │  (@sanity/client)│
└─────────────────────┘      └──────────────────┘      └─────────────────┘
```
- Project ID: `l40ee2px` (dataset: `production`)
- Studio: hosted by Sanity at a `*.sanity.studio` URL (free, no setup on your side)
- Frontend: fetches content via `@sanity/client`, caches with react-query

## Schemas to create (one per page + shared types)
Singletons (one document each):
- `siteSettings` – footer text, contact info, social links
- `homePage` – hero heading/CTA, impact stats, NYT spotlight
- `ourStory`, `methodology`, `rishiValleySchool`, `river`, `schoolInABox`,
  `services`, `achievements`, `awards`, `contactUs`, `donate`, `aboutUs`

Collections (many documents each):
- `teamMember` (name, role, photo, bio, section: leadership/team)
- `galleryImage` (image, caption, category)
- `testimonial` (quote, author, org, logo)
- `caseStudy` (slug, title, hero image, date, sections)
- `blogPost` (slug, title, date, cover, body — already structured this way)
- `award` (title, year, image, description, optional article link)
- `achievement` (title, image, description)

## Implementation phases
**Phase 1 – Foundation (this turn)**
1. Install `@sanity/client`, `@sanity/image-url`
2. Create `src/lib/sanity.ts` (client + image URL helper)
3. Deploy schemas to Sanity via MCP
4. Deploy hosted Studio (you get a URL like `education-children.sanity.studio`)
5. Add your preview/prod domains to Sanity CORS
6. Wire up **Blog** and **Testimonials** as the first two live-from-CMS pages (proof of concept)
7. Seed initial content from current hard-coded data so nothing looks empty

**Phase 2 – Migrate remaining pages (follow-up turns)**
Convert each remaining page to read from Sanity, in this order:
Home → Our Story → Gallery → Team → Case Studies → Awards → Achievements → RIVER → Methodology → School in a Box → Services → Rishi Valley School → Contact → Donate → About → Footer/Site Settings.

Each page migration is ~1 turn: write schema doc, seed data, swap component to query Sanity.

## Technical notes
- Hero video stays at `/public/videos/hero-video.mp4` (unchanged).
- All Sanity reads are public via CDN; no auth/secrets in frontend.
- Edits in Studio go live immediately (CDN cache ~1 min).
- Sanity free tier covers this site comfortably (3 users, 10k docs, 1M API CDN reqs/mo).

## What you'll do after Phase 1
1. Visit the Studio URL I give you
2. Log in with the same Sanity account
3. Start editing — changes appear on the site automatically

Shall I proceed with Phase 1?