# Yi-Hung Chou personal website

React + Vite with build-time HTML rendering and a lazy-loaded Three.js stage.

## Development

Use Node.js 22 or later. Run `npm ci`, then `npm run dev`.

Run `npm test` for the stage material regression check and `npm run build` to generate the pre-rendered website in `dist/`.

## Deployment

Netlify uses `netlify.toml` to build with `npm run build` and publish `dist/`. Legacy English URLs redirect to their corresponding new pages. The public domain configuration remains in Netlify.

## Original website

The complete original Hugo site and its history are preserved on branch `archive/hugo-site`. The React migration is also on branch `react-site`.

Paper metadata, project descriptions, and news live in `src/`. Published PDFs live in `public/papers/`. Under-review manuscripts are not included. Google Calendar availability follows its sharing permissions.

Do not use em dashes in website copy. Keep reduced-motion behavior, keyboard controls, focus indicators, and pause controls when modifying the stage.
