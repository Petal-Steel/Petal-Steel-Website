# Petal Steel Art: Phase 1 architecture

## Locked requirements

- Astro generates a static site for GitHub Pages and `petalsteelart.com`.
- The site has no backend, database, CMS, ecommerce, analytics, user accounts, contact-form handling, or Instagram API integration.
- Primary navigation is Work, Process, About, and Contact.
- Photography is the dominant artwork experience; this repository stores optimized web copies only.
- The existing Shopify catalogue is out of scope. Do not migrate, scrape, or reuse it.

## Structure

- `src/layouts/` contains the shared page shell.
- `src/components/` contains small reusable artwork display components.
- `src/pages/` defines static routes.
- `src/content/artworks/` will contain one data file per work.
- `src/content/process/` will contain one data file per curated Instagram item.
- `public/media/artwork/`, `public/media/process/`, and `public/media/identity/` hold committed, optimized public assets.

## Deliberately deferred

Artwork photography, factual catalogue entries, the real Petal Steel logo, biography, contact email, detailed artwork pages, image enlargement/lightbox, and the A New Dance visual prototype are later-phase work.
