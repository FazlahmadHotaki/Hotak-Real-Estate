# Hotak Real Estate

Welcome to **Hotak Real Estate**, a real estate website built with Next.js. The platform helps users explore property listings and locations with a multilingual interface supporting **Farsi, Pashto, and English**.

## Getting Started

First, install the project dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

You can also use Yarn, pnpm, or Bun:

```bash
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 in your browser to view Hotak Real Estate.

You can start editing the website by modifying files in the `app` directory. The page automatically updates as you save your changes.

## Features

* **Multilingual Support:** Farsi, Pashto, and English.
* **Property Locations:** Interactive map for selecting property locations.
* **Map Integration:** Leaflet maps with Esri World Imagery.
* **Coordinate Selection:** Select a location on the map and view its coordinates.
* **Responsive Design:** Designed to work across different screen sizes.
* **Modern Framework:** Built with Next.js and React.

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

*Your project may contain additional files and directories.*

## Running the Project

To create a production build, run:

```bash
npm run build
```

To start the production server after building:

```bash
npm run start
```

## Learn More

For more information about the technologies used in this project, see:

* [Next.js Documentation](https://nextjs.org/docs)
* [Next.js Learn](https://nextjs.org/learn)
* [React Documentation](https://react.dev/)
* [Leaflet Documentation](https://leafletjs.com/reference.html)

## Deployment

Hotak Real Estate can be deployed using [Vercel](https://vercel.com/), the platform developed by the creators of Next.js.

For deployment instructions, visit the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

**Hotak Real Estate** — Your destination for finding property and exploring locations.
