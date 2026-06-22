import { assets } from './assets.js';

const si = (name, slug) => ({
  id: slug,
  name,
  path: `https://cdn.simpleicons.org/${slug}/afb0b6`,
});

export const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Projects', href: '#projects' },
  { id: 4, name: 'Experience', href: '#experience' },
  { id: 5, name: 'Contact', href: '#contact' },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Carmen de Lavara',
    position: 'CPO & Support Manager | Reental',
    img: assets.clients.carmenDeLavara,
    href: 'https://www.reental.co/',
    review:
      'Mido delivered solid freelance work for us at Reental — reliable, clear communication, and quality execution. A developer you can trust with real product tasks.',
  },
  {
    id: 2,
    name: 'Hossam Abdelmalek',
    position: 'Poet & Author',
    img: assets.clients.hossam,
    href: 'https://hossam-abdelmalek.vercel.app/',
    review:
      'Mido built my literary portfolio and CMS — poems, books, articles, and audio in one place. The site reflects my work beautifully and is easy for me to manage.',
  },
  {
    id: 3,
    name: 'Ahmed Ghoniem',
    position: 'Owner | Saqiyat Bon Café',
    img: assets.clients.ahmedGhoniem,
    href: 'https://www.facebook.com/profile.php?id=61575080631829&mibextid=wwXIfr&mibextid=wwXIfr',
    review:
      'Mido developed a local POS system tailored to our café operations. Practical, fast at the counter, and built around how we actually work day to day.',
  },
];

export const myProjects = [
  {
    id: 'farhalink',
    title: 'FarhaLink — فرحة لينك',
    desc: 'Digital wedding invitations for the Arabic market. Couples pick a template, fill in their details, and share one beautiful link — no paper cards needed.',
    subdesc:
      'Full product: invitation builder, payments, RSVP, QR tickets for guests, gift registry, and an admin panel. Arabic RTL landing page and public invite pages with WhatsApp-ready previews.',
    href: 'https://farhalink.vercel.app/',
    texture: assets.projects.videos.farhalink,
    logo: assets.projects.logos.farhaLink,
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #4a2c35',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: assets.projects.spotlights[1],
    tags: [
      si('Next.js', 'nextdotjs'),
      si('React', 'react'),
      si('TypeScript', 'typescript'),
      si('Supabase', 'supabase'),
      si('Tailwind', 'tailwindcss'),
    ],
  },
  {
    id: 'daberha',
    title: 'Daberha — دبّرها',
    desc: 'Arabic-first personal finance companion that makes tracking money a simple daily habit — not a boring spreadsheet.',
    subdesc:
      'Web dashboard for expenses, budgets, goals, and insights, plus a mobile app in active development (Expo). Gamified streaks and leaderboards. Shared Supabase backend across both apps.',
    href: 'https://daberha.vercel.app/',
    texture: assets.projects.videos.dabberha,
    logoIcon: 'wallet',
    logoStyle: {
      backgroundColor: '#0f1a14',
      border: '0.2px solid #1e3d2f',
      boxShadow: '0px 0px 60px 0px #3FCF8E33',
    },
    spotlight: assets.projects.spotlights[2],
    tags: [
      si('Next.js', 'nextdotjs'),
      si('Supabase', 'supabase'),
      si('Expo', 'expo'),
      si('Tailwind', 'tailwindcss'),
      si('React Native', 'react'),
    ],
  },
  {
    id: 'hossam',
    title: 'Hossam Abdelmalek — Literary Portfolio',
    desc: 'Full-stack portfolio and CMS for Egyptian poet Hossam Abdelmalek — poems, books, articles, and audio recitations in one place.',
    subdesc:
      'Custom content management, downloadable social-media poem cards (Canvas API), built-in audio player, and PWA support for offline reading and listening.',
    href: 'https://hossam-abdelmalek.vercel.app/',
    texture: assets.projects.videos.hossam,
    logo: assets.projects.logos.hossam,
    logoStyle: {
      backgroundColor: '#1a1510',
      border: '0.2px solid #3d3428',
      boxShadow: '0px 0px 60px 0px #C9A22733',
    },
    spotlight: assets.projects.spotlights[3],
    tags: [si('React', 'react'), si('Vite', 'vite'), si('Supabase', 'supabase'), si('TypeScript', 'typescript')],
  },
  {
    id: 'getbox',
    title: 'GetBox — Media Downloader',
    desc: 'Free, fast, open-source tool to download videos, audio, and images from YouTube, Instagram, TikTok, X, and more — no sign-up required.',
    subdesc:
      'Edge-powered API on Vercel, native platform extractors (no paid third-party APIs), mobile-first UI, installable PWA, and zero server-side user tracking.',
    href: 'https://thegetbox.vercel.app/',
    texture: assets.projects.videos.getbox,
    logoIcon: 'box',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: assets.projects.spotlights[4],
    tags: [si('Next.js', 'nextdotjs'), si('JavaScript', 'javascript'), si('Vercel', 'vercel')],
  },
];

export const workExperiences = [
  {
    id: 1,
    name: 'Freelance Developer',
    pos: 'Full-Stack Developer',
    duration: '2024 — Present',
    title:
      'Delivering production web apps for clients including Reental and independent creators — React, Next.js, Supabase, and polished UX from brief to launch.',
    icon: assets.icons.react,
  },
  {
    id: 2,
    name: 'Product Builder',
    pos: 'Creator & Developer',
    duration: '2022 — Present',
    title:
      'Shipped FarhaLink, Daberha, GetBox, and client portfolios — Arabic RTL products, mobile apps with Expo, and performance-focused frontends.',
    icon: assets.icons.typescript,
  },
  {
    id: 3,
    name: 'Open to Work',
    pos: 'Web & Mobile Developer',
    duration: 'Available now',
    title:
      'Open to freelance projects, collaborations, and full-time roles. Download my CV or reach out via the contact form.',
    icon: assets.icons.star,
  },
];
