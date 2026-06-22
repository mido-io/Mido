# Mido — Personal Portfolio

A minimal, professional developer portfolio built with React and Three.js. Features a custom 3D hero model, interactive project showcase, and a clean dark aesthetic.

**Live Demo:** [mido-io.vercel.app](https://mido-io.vercel.app/)

---

## Tech Stack

- **Framework:** React 19 + Vite 7
- **Styling:** Tailwind CSS v4
- **3D:** Three.js, React Three Fiber, Drei
- **Animation:** GSAP
- **Contact:** Formspree
- **Deployment:** Vercel

## Sections

- **Hero** — Custom 3D model with studio lighting
- **About** — Bento grid with globe and contact details
- **Projects** — 3D computer with video demo textures
- **Experience** — Work timeline
- **Contact** — Formspree-powered contact form

## Local Development

```bash
git clone https://github.com/mido-io/Mido.git
cd Mido
npm install
npm run dev
```

## Content

Edit [`src/constants/profile.js`](src/constants/profile.js) for your name, email, socials, and location. Update projects and experience in [`src/constants/index.js`](src/constants/index.js).

## Legacy UI

The previous dual-mode terminal portfolio lives in [`src/_legacy/`](src/_legacy/) for reference. It is not mounted in the current app.

---

Built by [Mido](https://github.com/mido-io).
