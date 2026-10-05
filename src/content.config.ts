import { defineCollection, z } from 'astro:content';

const imageReference = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
});

const artworks = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    year: z.string().optional(),
    material: z.string().optional(),
    dimensions: z.string().optional(),
    status: z.enum(['Available', 'Not Available', 'Sold', 'Public Display']).optional(),
    statusLocation: z.string().optional(),
    classification: z.enum(['featured', 'other-work']),
    heroImage: imageReference.optional(),
    images: z.array(imageReference).default([]),
    summary: z.string().optional(),
    description: z.string().optional(),
    processReferences: z.array(z.string()).default([]),
  }).superRefine((artwork, context) => {
    if (artwork.status === 'Public Display' && !artwork.statusLocation) {
      context.addIssue({ code: z.ZodIssueCode.custom, message: 'Public Display requires statusLocation.', path: ['statusLocation'] });
    }
  }),
});

const process = defineCollection({
  type: 'data',
  schema: z.object({
    instagramUrl: z.string().url(),
    artworkSlug: z.string().optional(),
    caption: z.string().optional(),
    mediaType: z.enum(['post', 'reel']).optional(),
    coverImage: imageReference.optional(),
  }),
});

export const collections = { artworks, process };
