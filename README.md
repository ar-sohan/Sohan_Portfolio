# Portfolio (Astro)

A multi-page portfolio built with Astro and Tailwind CSS. Every page is pre-built HTML, links are prefetched on hover, and page changes use smooth view transitions, so it feels instant without being a single-page app. The whole site ships about 30 KB of JavaScript.

**Pages:** Home · Projects · a case-study page per project · Experience · About · Contact · 404

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check + build into dist/
npm run preview   # preview the built site
```

## Make it yours

1. **Your details:** edit `src/data/site.ts` (search for `TODO`): name, role, tagline, email, socials, experience, education, skills, "Right now".
2. **Projects:** each project is a Markdown file in `src/content/projects/`. The file name becomes the URL (`my-app.md` → `/projects/my-app`).
   - Put the screenshot in `src/content/projects/covers/` and point `cover:` at it. Astro converts it to WebP and resizes it automatically.
   - `featured: true` shows it on the home page; `order` sets the order.
   - Delete the four placeholder projects when you've added yours.
3. **CV:** add `public/resume.pdf`.
4. **Photo (optional):** add `public/me.jpg` and set `photo: "/me.jpg"`.
5. **Domain:** set `site` in `astro.config.mjs` and the URL in `public/robots.txt`.
6. **Link preview image:** `public/og-image.png` (1200×630). Re-take it once your name and tagline are in.

## Turn on the contact form email

The form sends messages straight to your inbox through [Web3Forms](https://web3forms.com) (free, no server needed):

1. Go to web3forms.com and enter the email address you want messages delivered to.
2. They email you an **access key**.
3. Paste it into `contactForm.web3formsKey` in `src/data/site.ts`.

Until a key is set, the form opens the visitor's email app with the message filled in, so it never fails silently. Spam protection (a hidden honeypot field) is already in place.

## Deploy

- **GitHub Pages:** move `deploy.yml` to `.github/workflows/deploy.yml`, push, then set *Settings → Pages → Source* to **GitHub Actions**. For a custom domain, add `public/CNAME` with your domain in it.
- **Vercel / Netlify / Cloudflare Pages:** import the repo; Astro is detected automatically.

## Changing the look

- Colors and type scale: top of `src/styles/global.css`
- Fonts: Bricolage Grotesque (headings) and Geist (text), self-hosted via Fontsource
- Quick menu: press `Ctrl K` / `⌘K` on any page
