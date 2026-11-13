import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* A case-study section. Each section has a `type` that maps to a component
   in CaseStudy.astro. Add a new type there + here to extend the system. */
const section = z.discriminatedUnion('type', [
  // Intro "design steps" row with numbered cards
  z.object({
    type: z.literal('steps'),
    title: z.string(),
    intro: z.string().optional(),
    image: z.string().optional(),
    tone: z.enum(['light', 'dark']).default('light'),
    steps: z.array(
      z.object({
        label: z.string(),
        text: z.string(),
        href: z.string().optional(),
      })
    ),
  }),
  // Dark section with an image + a wall of post-it notes
  z.object({
    type: z.literal('postits'),
    title: z.string(),
    intro: z.string().optional(),
    image: z.string().optional(),
    postits: z.array(z.object({ title: z.string(), text: z.string() })),
  }),
  // Two-up (or more) image gallery with captions
  z.object({
    type: z.literal('gallery'),
    title: z.string().optional(),
    intro: z.string().optional(),
    tone: z.enum(['light', 'dark']).default('light'),
    items: z.array(z.object({ caption: z.string().optional(), image: z.string() })),
  }),
  // Plain text block
  z.object({
    type: z.literal('text'),
    title: z.string().optional(),
    body: z.string(),
    tone: z.enum(['light', 'dark']).default('light'),
  }),
  // Figma / iframe embed
  z.object({
    type: z.literal('embed'),
    title: z.string().optional(),
    intro: z.string().optional(),
    src: z.string(),
    height: z.number().default(700),
  }),
]);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    // --- Home card ---
    cardKicker: z.string().default('Mission'), // the little pill
    cardTitle: z.string(), // e.g. "WEBSITE REVAMP"
    cardSubtitle: z.string(), // e.g. "Fencing club"
    layout: z.enum(['large', 'small', 'secondary']).default('secondary'),
    cover: z.string().optional(), // background image (large cards)
    vignette: z.string().optional(), // floating image (small cards)
    order: z.number().default(99),
    draft: z.boolean().default(false),

    // --- Case study hero ---
    title: z.string(), // big display title
    subtitle: z.string().optional(),
    context: z.string().optional(),
    objectives: z.array(z.string()).default([]),
    demand: z.string().optional(),
    heroImage: z.string().optional(),

    // --- Meta block (editorial header) ---
    client: z.string().optional(),
    role: z.string().optional(),
    year: z.string().optional(),
    scope: z.string().optional(),
    tools: z.array(z.string()).default([]),

    // --- Body ---
    sections: z.array(section).default([]),
  }),
});

export const collections = { projects };
