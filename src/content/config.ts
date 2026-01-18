import { defineCollection, z } from 'astro:content';

const tilsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    publish: z.boolean().default(false),
  }),
});

export const collections = {
  tils: tilsCollection,
};
