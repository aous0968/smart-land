# Smart Land — Corporate Website

A static, bilingual, multimedia-rich website for **Smart Land**, a
technology consulting and AI solutions company founded in 2011.

> **Course:** Multimedia Systems (ITE_BMM601) — Fall 2026\
> **Institution:** Syrian Virtual University\
> **Live site:** _add URL after deployment_

---

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
---

## Overview

Smart Land builds custom software and AI-powered platforms across
healthcare, education, retail, and real estate. The portfolio includes
**MyKey** (sign-language translation), **Sada** (multi-store e-commerce),
**Smart Signal** (real estate and vehicles), **Welcome** (remote
learning), and hospital management systems.

This website presents the company, its services, and its products
through a media-rich, bilingual interface with light and dark themes.
It is a **static site** — no server-side rendering, no backend — built
with Vite and React and deployed to Vercel.

---

## Features

- **Bilingual UI** — English and Arabic, switchable at runtime
- **Automatic RTL** — Arabic flips layout direction, text alignment, and icon orientation
- **Dark mode** — persisted to `localStorage`, no flash on reload
- **Responsive** — mobile-first, tested down to 320px
- **Design tokens** — the brand palette is defined once in `index.css` and consumed everywhere
- **Product marks** — monogram tiles replace generic icons for the six products
- **Multimedia** — WEBP images and MP4 videos with synchronized text overlays
- **Route-aware** — scroll resets on navigation, page titles update per route
- **404 handling** — unknown routes render a localized not-found page

---

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Build tool | Vite | Fast dev server, static output |
| Framework | React 19 | Component model for repeated sections |
| Routing | React Router v7 | Client-side routing with nested layouts |
| Styling | Tailwind CSS v4 | Utility-first, theme tokens via `@theme` |
| i18n | react-i18next | Runtime language switching |
| Icons | lucide-react | Tree-shaken SVG icons |
| Hosting | Vercel | Free tier, instant deploys from GitHub |

---

## Project structure

```
smart-land/
│
├── public/
│   ├── brand/                    Logo assets (SVG)
│   │   ├── mark.svg              Icon-only mark
│   │   ├── logo-dark.svg         White wordmark (for dark backgrounds)
│   │   └── logo-light.svg        Ink wordmark (for light backgrounds)
│   ├── images/                   WEBP images
│   │   ├── hero.webp
│   │   ├── about-team.webp
│   │   ├── project-mykey.webp
│   │   ├── project-sada.webp
│   │   ├── project-signal.webp
│   │   └── contact-office.webp
│   └── videos/                   MP4 videos
│       ├── intro.mp4
│       └── products.mp4
│
├── src/
│   ├── components/
│   │   ├── Layout.jsx            Page shell (TopStrip + Navbar + Footer)
│   │   ├── TopStrip.jsx          Language + theme controls
│   │   ├── Navbar.jsx            Sticky nav with mobile drawer
│   │   ├── Footer.jsx            Footer with contact info
│   │   ├── ProductMark.jsx       Monogram tile for products
│   │   └── ScrollToTop.jsx       Resets scroll on route change
│   │
│   ├── context/
│   │   └── ThemeContext.jsx      Light / dark state + persistence
│   │
│   ├── i18n/
│   │   ├── index.js              i18next configuration
│   │   └── locales/
│   │       ├── en.json           English strings
│   │       └── ar.json           Arabic strings
│   │
│   ├── pages/
│   │   ├── Home.jsx              Hero, stats, intro, services, work, video, CTA
│   │   ├── About.jsx             Story, timeline, product grid
│   │   ├── Services.jsx          Six services, four-step process
│   │   ├── Projects.jsx          Three featured + three secondary
│   │   ├── Contact.jsx           Contact details and office image
│   │   └── NotFound.jsx          404 page
│   │
│   ├── App.jsx                   Routes + direction sync
│   ├── main.jsx                  Entry point
│   └── index.css                 Tailwind import + brand tokens
│
├── index.html                    HTML shell, meta tags, favicon
├── vite.config.js                Vite + React + Tailwind plugins
├── package.json
└── README.md
```

---

## Getting started

**Requirements:** Node.js 20.19+ or 22.12+, npm 10+

```bash
# install dependencies
npm install

# start dev server
npm run dev