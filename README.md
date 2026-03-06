# Orgits — Next.js Website

Modern Material UI light design built with **Next.js 14**, **TypeScript**, and **CSS Modules**.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules** (scoped per-component styles)
- **Fonts**: Bricolage Grotesque + Figtree + Fira Code (Google Fonts)

## Project Structure

```
orgits/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Home page (assembles all components)
│   └── globals.css       # Design tokens, global styles, animations
├── components/
│   ├── Navbar.tsx / .module.css
│   ├── Hero.tsx / .module.css
│   ├── CredentialBar.tsx / .module.css
│   ├── ValueProp.tsx / .module.css
│   ├── Services.tsx / .module.css
│   ├── Methodology.tsx / .module.css
│   ├── Zoho.tsx / .module.css
│   ├── CaseStudies.tsx / .module.css
│   ├── Industries.tsx / .module.css
│   ├── Testimonials.tsx / .module.css
│   ├── FAQ.tsx / .module.css
│   ├── CTA.tsx / .module.css
│   └── Footer.tsx / .module.css
├── hooks/
│   └── useScrollReveal.ts   # IntersectionObserver for scroll animations
└── public/                  # Static assets (add images here)
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Adding More Pages

With Next.js App Router, just add folders inside `/app`:

```
app/
├── page.tsx          ← Home (/)
├── services/
│   └── page.tsx      ← /services
├── case-studies/
│   └── page.tsx      ← /case-studies
└── contact/
    └── page.tsx      ← /contact
```

## Customization

- **Colors & tokens** → `app/globals.css` (`:root` CSS variables)
- **Content/copy** → Edit directly inside each component file
- **Fonts** → Change the `@import` in `globals.css`
- **Adding sections** → Create a new `ComponentName.tsx` + `ComponentName.module.css`, then import in `app/page.tsx`
