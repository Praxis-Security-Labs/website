import { defineCollection, z } from 'astro:content';

const comparisons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  comparisons,
};
