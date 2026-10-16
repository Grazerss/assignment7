# Luma — Product Showcase

A responsive product showcase built with Next.js App Router, React, and Fake Store API. Includes a product list, product detail pages, Home/Contact navigation, client-side search, and favorites persisted in `localStorage`.

## Features

- Home page displays the first 5 products from Fake Store API.
- Product details at `/products/[slug]` (the API's numeric product ID is used as the route parameter).
- Shared navigation with Home and Contact links using `next/link`.
- Add to Favorite button built with `useState` and `useEffect`; favorites persist after refresh via `localStorage`.
- Client-side product search by name or category.
- Responsive styling, loading/error states, and page metadata.

## Run locally

Requirements: Node.js 18.18+ (Node.js 20 LTS recommended) and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To verify a production build:

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Open Vercel and import that repository.
3. Keep the default Next.js build settings and deploy.
4. Submit both the GitHub repository URL and the deployed Vercel URL.

## API

- Products: https://fakestoreapi.com/products?limit=5
- Product detail: https://fakestoreapi.com/products/{id}
- Docs: https://fakestoreapi.com/docs

Product information and images are provided by Fake Store API. This is a demo/assignment project and does not process purchases.
