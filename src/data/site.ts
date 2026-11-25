/**
 * ─────────────────────────────────────────────────────────────
 *  YOUR DETAILS LIVE HERE (projects live in src/content/projects/).
 *  Search for TODO and replace the placeholders.
 * ─────────────────────────────────────────────────────────────
 */

export const person = {
  name: "Sohan", // TODO: full name, e.g. "Sohan Ahmed"
  role: "Full-stack developer", // TODO
  // One sentence for the home page and search results.
  tagline: "I design and build fast, accessible web products, from the database to the last pixel.", // TODO
  intro:
    "I work across React, Node and the cloud. Most of what I do sits where product meets engineering: turning a rough idea into something people can use the same week.", // TODO
  email: "you@example.com", // TODO: where messages from the contact form go too
  phone: "", // optional, e.g. "+880 1XXX-XXXXXX"
  city: "Dhaka, Bangladesh",
  timeZone: "Asia/Dhaka",
  openToWork: true, // shows "Available for work" across the site
  availability: "Open to full-time roles and freelance projects from January 2027.", // TODO
  resumeUrl: "/resume.pdf", // TODO: add public/resume.pdf, or "" to hide
  photo: "", // optional: "/me.jpg" in public/
};

export const socials = [
  { label: "GitHub", href: "https://github.com/your-username", handle: "@your-username" }, // TODO
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-username/", handle: "in/your-username" }, // TODO
  // { label: "X", href: "https://x.com/your-username", handle: "@your-username" },
  // { label: "LeetCode", href: "https://leetcode.com/your-username/", handle: "your-username" },
];

/**
 * Contact form email delivery (free, no server needed).
 * 1. Go to https://web3forms.com, enter the email you want messages sent to.
 * 2. Paste the access key they email you below. It's safe to be public.
 */
export const contactForm = {
  web3formsKey: "", // TODO: e.g. "a1b2c3d4-...."
  responseTime: "I usually reply within 24 hours.",
  topics: ["A job opportunity", "A freelance project", "A collaboration", "Just saying hi"],
};

export const about = {
  paragraphs: [
    // TODO: 2–4 short paragraphs in your own voice.
    "I started programming by breaking things on my own computer and now I get paid to fix them on other people's. I like small teams, short feedback loops and products that respect people's time.",
    "My favourite problems are the unglamorous ones: a checkout that's two seconds faster, a form that finally works with a screen reader, a deploy that no longer needs a checklist.",
    "Outside of client work I contribute to open source, write about what I learn, and keep a running list of side projects that are 80% done.",
  ],
  skills: [
    { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
    { group: "Frontend", items: ["React", "Next.js", "Astro", "Tailwind CSS"] },
    { group: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
    { group: "Tools", items: ["Git", "Docker", "AWS", "Figma"] },
  ],
  // What you're up to right now. Update it every few months.
  now: [
    { label: "Building", text: "A budgeting app for freelancers in Bangladesh." },
    { label: "Learning", text: "Rust, one small CLI tool at a time." },
    { label: "Reading", text: "Designing Data-Intensive Applications." },
  ],
};

// Newest first.
export const experience = [
  {
    company: "Company name", // TODO
    role: "Software Engineer",
    start: "2025",
    end: "Present",
    location: "Dhaka",
    summary: "One sentence about the team and what you own.",
    points: [
      "Shipped X, which did Y for Z users.",
      "Cut page load time from 4s to 1.2s by doing A.",
    ],
  },
  {
    company: "Previous company",
    role: "Junior Developer",
    start: "2023",
    end: "2024",
    location: "Remote",
    summary: "One sentence about the team and what you owned.",
    points: ["Built and maintained B.", "Worked with the design team on C."],
  },
];

export const education = [
  {
    school: "Your University", // TODO
    degree: "B.Sc. in Computer Science & Engineering",
    start: "2019",
    end: "2023",
    note: "Thesis, CGPA or an award (optional).",
  },
];

// Optional; leave empty to hide.
export const certifications: { label: string; issuer: string; year: string; href: string }[] = [
  // { label: "AWS Certified Cloud Practitioner", issuer: "Amazon", year: "2025", href: "https://..." },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
