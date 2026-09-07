# SendAfrica — Landing Site

A professional marketing website for **SendAfrica**, a Tanzania-first SMS
automation API. This project was built with [Lovable](https://lovable.dev).

It is a re-theme of a SaaS landing template: the **design system and layout are
preserved** (Tailwind + TanStack Start + Vite), while all copy, data, and route
wiring match the SendAfrica API at `https://api.sendafrica.online`
(source of truth: `/home/cameltech/Projects/sendafrica/API`).

## Brand

- Name: **SendAfrica**
- Product: Tanzania-first SMS automation infrastructure (Africa's Talking +
  SwalaSMS routing, pay-as-you-go credits, campaigns, Sender IDs)
- Brand color: deep forest green (`#005427`), retained from the original
  design system.
- Logo: `/public/SendAfrica-logo.png` (wired into the navbar and footer).

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Build

```sh
npm run build
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Marketing home |
| `/about` | Company story, team, API-grounded metrics |
| `/features` | SMS automation capabilities |
| `/pricing` | Pay-as-you-go credits + plan rate limits |
| `/developers` | API reference summary (links to `docs.sendafrica.online`) |
| `/testimonials` | Customer stories |
| `/blog` | Developer & SMS insights |
| `/career` | Open roles |
| `/integration` | Gateway & tooling integrations |
| `/contact` | Contact form + support |
| `/faq` | SMS, credits, campaigns, top-ups |
| `/privacy-policy` | Privacy policy |
| `/terms-condition` | Terms & conditions |

<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
