# Colinas Del Sol

A luxury chalet rental website for six exclusive minimalist chalets in Batroun, Lebanon. Experience breathtaking Mediterranean sunsets and authentic Lebanese hospitality.

## Features

- **Responsive Design**: Mobile-first approach with modern CSS
- **Booking System**: Request bookings with WhatsApp fallback
- **Local Attractions**: Guide to Batroun's highlights
- **Amenities Showcase**: Private pools, sea views, and more

## Tech Stack

- **Frontend**: React 19 + Vite
- **Backend**: Cloudflare Workers
- **Database**: Cloudflare D1
- **Deployment**: Cloudflare Pages (free tier)

## Development

`ash
npm install
npm run dev
`

## Deployment (GitHub Integration)

Deployment is handled automatically via GitHub integration with Cloudflare Pages. **No API keys are required.**

1. Push your repository to GitHub.
2. In the **Cloudflare Dashboard**, go to **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Select this repository. Use these build settings:
   - **Framework preset**: `Create React App` or `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. **Database Binding**: Before deploying natively, ensure your page has access to your D1 database.
   - Go to your Pages project -> **Settings** -> **Bindings** -> **Add binding**.
   - Create a **D1 DB** binding with the Variable name: `DB`.
   - Select your database (`colinas-del-sol-db`).

Future `git push` events to your main branch will now deploy automatically.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [	ypescript-eslint](https://typescript-eslint.io) in your project.
