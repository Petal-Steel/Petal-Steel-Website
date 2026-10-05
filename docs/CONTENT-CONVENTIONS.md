# Content and media conventions

## Artwork entries

Create an artwork data file at `src/content/artworks/<slug>.json` (or `.yaml`) using the `artworks` collection schema. Required fields are `title`, `slug`, and `classification`. Optional factual fields are `year`, `material`, `dimensions`, `status`, and `statusLocation`.

`classification` must be `featured` or `other-work`. The reserved featured works are A New Dance, Big Iron, Loot, and Big Dreams; do not add details for them until approved source material is available.

`status` supports `Available`, `Not Available`, `Sold`, and `Public Display`. A public-display entry must include `statusLocation`.

`heroImage` and `images` use `{ "src", "alt", "caption" }`. Keep alt text descriptive of what is visible; captions are optional. `summary` is a short factual presentation; `description` is optional longer copy; `processReferences` lists curated process-entry filenames or identifiers.

## Process entries

Create a file in `src/content/process/` with its public `instagramUrl`. It may include `artworkSlug`, a concise `caption`, `mediaType` (`post` or `reel`), and an optional locally stored cover image. This is a curated editorial selection, not an automatic Instagram mirror.

## Media naming

Use lowercase, hyphenated files: `<work-slug>-hero-01.jpg`, `<work-slug>-detail-01.jpg`, and `<work-slug>-context-01.jpg`. Put artwork assets in `public/media/artwork/<work-slug>/`; process covers in `public/media/process/`; the supplied logo in `public/media/identity/`. Commit web-optimized copies only—never original/master photography. Preserve the source aspect ratio and do not force a common background.
