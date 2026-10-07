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
- `src/content/artworks/` contains one data file per featured work.
- `src/content/process/` contains one data file per curated Instagram item.
- `public/media/artwork/`, `public/media/process/`, and `public/media/identity/` hold committed, optimized public assets.
- Artwork pages read typed records from `src/content/artworks/`; larger image views use the shared native-dialog viewer.

## Current scope

The Petal Steel Art logo, artist biography and contact details, curated Process selections, and approved homepage composition are implemented. Other Work remains intentionally deferred until additional artwork records and photography are approved. A New Dance established the reusable editorial artwork page, responsive photo sequence, and image-viewing interaction.
