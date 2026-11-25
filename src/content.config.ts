import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/** Each project is a Markdown file in src/content/projects/.
 *  The file name becomes the URL: my-app.md → /projects/my-app */
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(), // one sentence, shown in lists
      year: z.number(),
      type: z.string(), // e.g. "Web app", "Mobile app", "Open source"
      role: z.string(), // e.g. "Solo developer", "Frontend lead"
      stack: z.array(z.string()),
      cover: image(), // screenshot, relative to the .md file
      coverAlt: z.string(),
      live: z.url().optional(),
      code: z.url().optional(),
      featured: z.boolean().default(false), // show on the home page
      order: z.number().default(99), // lower comes first
    }),
});

export const collections = { projects };
