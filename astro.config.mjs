// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // TODO: your live URL. Used for the sitemap, canonical links and social previews.
  site: "https://your-domain.com",
  integrations: [sitemap({ filter: (page) => !page.includes("/thanks") })],
  // Pages start downloading when a link is hovered or comes into view,
  // so clicking it feels instant.
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  vite: { plugins: [tailwindcss()] },
});
