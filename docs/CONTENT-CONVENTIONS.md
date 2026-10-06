# Content and media conventions

## Artwork entries

Create an artwork data file at `src/content/artworks/<slug>.json` (or `.yaml`) using the `artworks` collection schema. Required fields are `title`, `slug`, and `classification`. Optional factual fields are `artist`, `year`, `material`, `dimensions`, `status`, and `statusLocation`.

`classification` must be `featured` or `other-work`. Featured work receives an editorial detail page; other work can use a simpler presentation.

`status` supports `Available`, `Not Available`, `Sold`, and `Public Display`. A public-display entry must include `statusLocation`.

`heroImage` and `images` use `{ "src", "fullSrc", "width", "height", "fullWidth", "alt", "caption", "homepageFeature" }`. `src` is the responsive page image; `fullSrc` is the larger lightbox image. Record intrinsic dimensions to prevent layout shift. Keep alt text descriptive of what is visible; captions are optional. Set `homepageFeature` for two or three selected detail views on a featured work. `summary` is a short factual presentation; `description` is optional longer copy; `processReferences` lists curated process-entry filenames or identifiers.

For major work, lead with the strongest complete view, then order detail views to guide attention across the form. Preserve the photographs' original aspect ratios. Provide both 1200 px and 2400 px WebP derivatives where source dimensions allow, keeping master images outside the repository. The shared lightbox opens the larger copy in a native dialog, closes by button, backdrop, or Escape, and returns focus to the activating image.

Preserve artist-supplied descriptions verbatim. New public-facing copy should not use em dashes.

## Process entries

Create a file in `src/content/process/` with its public `instagramUrl`. It may include `artworkSlug`, a concise `caption`, `mediaType` (`post` or `reel`), and an optional locally stored cover image. This is a curated editorial selection, not an automatic Instagram mirror.

## Media naming

Use lowercase, hyphenated files in `public/media/artwork/<work-slug>/`, with descriptive view names and pixel width, such as `<work-slug>-establishing-view-1200.webp` and `<work-slug>-establishing-view-2400.webp`. Put process covers in `public/media/process/`; the supplied logo in `public/media/identity/`. Commit web-optimized copies only, never original/master photography. Preserve the source aspect ratio and do not force a common background.
