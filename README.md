# Shreya Padaganur's Portfolio

React, TypeScript, and Vite portfolio covering full-stack engineering, applied AI, data systems, and leadership.

## Development

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run typecheck
npm run build
```

Vercel builds with `npm run build` and serves `dist/`. The production URL is https://my-portfolio-alpha-eight-71.vercel.app.

## Content

Resume-derived content and seven selected highlights live in `src/data/portfolio.json`. The adapter in `src/data/profile.ts` retains education and leadership honors from the original portfolio. The portrait uses `public/Formalpic.png`.

Project filters cover Full-Stack, AI, Data, and Leadership. Professional work is labeled separately from personal projects; AI evaluation metrics retain their dataset context.

The contact form opens a prefilled email draft in the visitor's email app. It does not send messages or store form data on a server.
