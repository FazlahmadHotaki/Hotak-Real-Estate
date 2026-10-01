# Hotak Real Estate

Welcome to **Hotak Real Estate**, a real estate platform built with Next.js that helps users explore properties and locations through a multilingual interface supporting Farsi, Pashto, and English.

🌐 **Live Website:** https://hotak-real-estate.vercel.app/

## Getting Started

First, install the project dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the website locally.

You can also use Yarn, pnpm, or Bun:

```bash
yarn dev
# or
pnpm dev
# or
bun dev
```

## Features

* **Multilingual Interface:** Supports Farsi, Pashto, and English.
* **Interactive Property Map:** Explore and select property locations.
* **Map Integration:** Uses Leaflet and Esri World Imagery.
* **Coordinate Selection:** Select locations and view their geographic coordinates.
* **Responsive Design:** Built for different screen sizes.
* **Modern Web Technologies:** Powered by Next.js, React, and TypeScript.

## Technologies Used

* [Next.js](https://nextjs.org/)
* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Leaflet](https://leafletjs.com/)
* [Esri World Imagery](https://www.esri.com/)

## Project Structure

```text
app/
  page.tsx
  layout.tsx
  PropertyMap/
    page.tsx
    PropertyMapClient.tsx

components/
  LanguageProvider.tsx
  Location.tsx

data/
  translations.ts

public/
  favicon.png
```

*Note: Your actual project may contain additional files and directories.*

## Run a Production Build

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Deployment

The website is deployed on [Vercel](https://vercel.com/).

Visit the live application:

**https://hotak-real-estate.vercel.app/**

For deployment guidance, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More

* [Next.js Documentation](https://nextjs.org/docs)
* [Next.js Learn](https://nextjs.org/learn)
* [React Documentation](https://react.dev/)
* [Leaflet Documentation](https://leafletjs.com/reference.html)

---

**Hotak Real Estate** — Explore properties. Discover locations. Find your place.