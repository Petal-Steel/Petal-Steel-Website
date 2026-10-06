# Petal Steel Art: Phase 1 architecture

## Locked requirements

- Astro generates a static site for GitHub Pages and `petalsteelart.com`.
- The site has no backend, database, CMS, ecommerce, analytics, user accounts, contact-form handling, or Instagram API integration.
- Primary navigation is Work, Process, About, and Contact.
- Photography is the dominant artwork experience; this repository stores optimized web copies only.
- Public-facing copy supplied by the artist is preserved as provided. New public-facing copy uses no em dashes.
- The existing Shopify catalogue is out of scope. Do not migrate, scrape, or reuse it.

## Structure

- `src/layouts/` contains the shared page shell.
- `src/components/` contains small reusable artwork display components.
- `src/pages/` defines static routes.
- `src/content/artworks/` will contain one data file per work.
- `src/content/process/` will contain one data file per curated Instagram item.
- `public/media/artwork/`, `public/media/process/`, and `public/media/identity/` hold committed, optimized public assets.
- Artwork pages read typed records from `src/content/artworks/`; larger image views use the shared native-dialog viewer.

## Deliberately deferred

Other artwork records and photography, the real Petal Steel logo, biography, contact email, process selections, and the final homepage design remain later-phase work. A New Dance establishes the reusable editorial page, responsive photo sequence, and image-viewing interaction.
