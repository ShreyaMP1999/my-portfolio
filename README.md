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

## Private visit alerts

In Vercel, add these server-only environment variables for Production, then redeploy.

| Variable | Value |
| --- | --- |
| `PORTFOLIO_ORIGIN` | Production site origin with no trailing slash, such as `https://my-portfolio-alpha-eight-71.vercel.app` |
| `RESEND_API_KEY` | Resend sending API key |
| `PORTFOLIO_ALERT_FROM` | Sender address on a domain verified with Resend |
| `PORTFOLIO_ALERT_TO` | Your private inbox |
| `PORTFOLIO_CAMPAIGNS` | Optional JSON mapping random link tags to private labels, for example `{"exampleTag7A1b9C2d":"Recruiting outreach"}` |

- For your LinkedIn profile, use `/?utm_source=linkedin&utm_medium=profile`.
- For outreach, generate a tag with `openssl rand -hex 16`, add it to `PORTFOLIO_CAMPAIGNS`, and share `/?visit=YOUR_TAG`. Use a separate tag per campaign and keep personal details out of links and labels.
- Open a tagged production URL in a visible tab to test delivery. Each tag (or the LinkedIn profile link) sends at most one email per UTC hour. The email describes an open and may reflect a forwarded link or automated preview.
- Alerts include the link label, home page, and visit window. They do not use cookies or include IP addresses, full referrers, or visitor identities. They honor Global Privacy Control and Do Not Track. Untagged visits do not trigger email.
- The contact form lets visitors share their own details by sending the draft it opens. Drafts are separate from visit alerts.
- Remove `PORTFOLIO_ALERT_TO` and redeploy to disable email alerts.
