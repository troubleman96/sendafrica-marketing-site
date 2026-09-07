export const features = [
  {
    title: "Developer-first SMS API",
    body: "REST endpoints authenticated with JWT or SA-branded API keys. Send single messages or bulk, with idempotent retries and a unified response envelope.",
    icon: "sms",
  },
  {
    title: "Campaigns & contact lists",
    body: "Upload a contact list or sync Google Contacts, then schedule a campaign. A dedicated worker polls every 30s and sends in chunks of 500 with per-recipient credit accounting.",
    icon: "campaign",
  },
  {
    title: "Tanzania phone validation",
    body: "Numbers normalize to E.164 +255 and must be mobile — landline ranges are rejected. SMS parts are counted via GSM-7 / UCS-2 so the bill always matches.",
    icon: "phone",
  },
  {
    title: "Real-time delivery tracking",
    body: "Every send lands in your message log with live status — sent, delivered, failed, or rejected — updated from Africa's Talking delivery webhooks.",
    icon: "tracking",
  },
  {
    title: "Exact credit billing",
    body: "1 credit = 1 SMS part. The append-only ledger is atomic and idempotent, so retries never double-charge. Track every deduction and top-up.",
    icon: "credits",
  },
  {
    title: "Mobile money top-ups",
    body: "Buy credits with Tanzania mobile money through Snippe, or go manual for bank transfers. Pay-as-you-go with a tiered TZS-per-credit rate.",
    icon: "payments",
  },
  {
    title: "Custom Sender IDs",
    body: "Register and manage your own branded alphanumeric Sender ID through SwalaSMS. Submit documents, set a purpose, and track approval status live.",
    icon: "sender",
  },
  {
    title: "Google Contacts sync",
    body: "One-way import of every Tanzania mobile number from your Google Contacts into a dedicated list. Connect once, sync on demand.",
    icon: "google",
  },
] as const;

export const faqs = [
  {
    q: "How much does it cost to send an SMS?",
    a: "SendAfrica is pay-as-you-go: 1 credit = 1 SMS part, priced at 25 TZS per part over SwalaSMS. Credits are bought in packages from GET /v1/packages, or as a custom voucher amount from GET /v1/vouchers/rate.",
  },
  {
    q: "Do you support Nigeria / Kenya / international numbers?",
    a: "The platform routes through Africa's Talking and SwalaSMS and is optimized for Tanzania. Phone validation normalizes to E.164 +255 and accepts mobile numbers only — landline prefixes are rejected, and other country codes may be accepted depending on gateway coverage.",
  },
  {
    q: "What is an API key and how is it different from logging in?",
    a: "A JWT is for your dashboard session (15-minute access tokens, 7-day rotating refresh). An API key — formatted SA-<64 hex chars> — is for programmatic access. Both reach the same account-scoped routes; API keys can't manage credentials or hit admin endpoints.",
  },
  {
    q: "Will I be charged twice if a request retries?",
    a: "No. Every send accepts an Idempotency-Key header. A retried key within 24 hours replays the original result instead of sending again or charging twice. Failed sends are not cached, so genuine errors can be retried.",
  },
  {
    q: "How do I know my messages were delivered?",
    a: "Africa's Talking pushes delivery reports to POST /v1/sms/callback. We deduplicate every callback in Redis before updating your message log, so statuses stay accurate even on retries.",
  },
  {
    q: "Can I schedule a message to my whole list?",
    a: "Yes. Create a campaign against a contact list, optionally set a scheduled_at time, and the worker picks it up on its next 30-second poll. You get live sent/delivered/failed counts as it runs.",
  },
];

export const testimonials = [
  {
    name: "Amina Mwakalinga",
    role: "Marketing Lead, Dar es Salaam",
    image: "/images/person-1.avif",
    quote:
      '"SendAfrica cut our customer-alert delivery time from minutes to seconds. The dashboard shows exactly who got the message and who didn’t."',
  },
  {
    name: "Juma Mwangi",
    role: "Founder, M-Shule",
    image: "/images/person-2.avif",
    quote:
      '"We send OTP and payment alerts through SendAfrica every day. The credit ledger is exact — no surprises, and the API rarely returns a 500."',
  },
  {
    name: "Farida Hassan",
    role: "Ops Manager, Nia Network",
    image: "/images/person-3.avif",
    quote:
      '"Running campaigns used to need a spreadsheet and three tools. Now I upload a list, set a Sender ID, and watch real-time delivery stats from one place."',
  },
  {
    name: "David Kim",
    role: "Head of Growth, Kentekz",
    image: "/images/person-4.avif",
    quote:
      '"We switched from a US provider to SendAfrica for our Dar es Salaam customers. Delivery rates jumped and the price per part is fixed, not a surprise."',
  },
];

export const plans = [
  {
    eyebrow: "Free",
    name: "Starter",
    price: "60",
    unit: "req/min",
    note: "Pay only for the SMS credits you use. 1 credit = 1 SMS part at 25 TZS.",
    features: [
      "60 requests per minute",
      "Pay-as-you-go SMS credits",
      "Africa's Talking + SwalaSMS gateways",
      "JWT and SA- API key auth",
    ],
    highlighted: false,
  },
  {
    eyebrow: "Pro",
    name: "Growth",
    price: "600",
    unit: "req/min",
    note: "Higher velocity and the full sender-ID + contact-list toolkit for growing teams.",
    features: [
      "600 requests per minute",
      "Custom branded Sender IDs",
      "Contact list management",
      "Campaign scheduling",
      "Mobile money top-ups (Snippe)",
    ],
    highlighted: true,
  },
  {
    eyebrow: "Enterprise",
    name: "Scale",
    price: "6,000",
    unit: "req/min",
    note: "Maximum throughput and dedicated support for high-volume senders. Contact sales for SLA terms.",
    features: [
      "6,000 requests per minute",
      "Dedicated throughput",
      "Priority 24/7 support",
      "Custom rate limits",
      "Audit logging",
    ],
    highlighted: false,
  },
];

export const integrations = [
  {
    name: "Africa's Talking",
    body: "Primary SMS gateway for delivery and receipt callbacks. Delivery status is pushed to POST /v1/sms/callback and deduplicated before logging.",
  },
  {
    name: "SwalaSMS",
    body: "Secondary gateway and the backbone for custom Sender ID registration, status checks, and reseller operations.",
  },
  {
    name: "Snippe",
    body: "Tanzania mobile-money provider for pay-as-you-go credit top-ups. A signature-verified webhook confirms payments automatically.",
  },
  {
    name: "Google Contacts",
    body: "One-way import: pull every Tanzania-shaped mobile number from a Google account into a dedicated contact list, on demand.",
  },
  {
    name: "Zapier",
    body: "Trigger campaigns or single sends from Zapier via our REST API and SA- API keys — no backend required.",
  },
  {
    name: "Make",
    body: "Automate SendAfrica from Make.com using API keys, with idempotent retries so duplicate flows never double-send.",
  },
  {
    name: "PostgreSQL",
    body: "The source of truth for accounts, credits, contacts, and campaign state. Exposed over the REST API, never directly.",
  },
  {
    name: "Redis",
    body: "Backs distributed campaign locks, idempotency keys, blacklists, rate limits, and the 30-second credit-balance cache.",
  },
];

export const posts = [
  {
    slug: "sendafrica-api-v2-sms-billing-changes",
    title: "API v2: what changed in SMS billing and idempotency",
    excerpt:
      "Credits, parts, and idempotency keys — how SendAfrica charges exactly and how retries stay safe.",
    date: "September 1, 2025",
  },
  {
    slug: "building-tanzania-first-sms-infrastructure",
    title: "Building Tanzania-first SMS infrastructure",
    excerpt:
      "Why we validate +255 mobile numbers only and how the 30s worker loop keeps campaigns reliable.",
    date: "September 1, 2025",
  },
  {
    slug: "mobile-money-top-ups-snippe-webhooks",
    title: "Mobile money top-ups: how Snippe webhooks grant credits",
    excerpt: "From USSD prompt to signed callback to a posted credit balance.",
    date: "September 1, 2025",
  },
];

export const popularPosts = [
  {
    slug: "sender-id-registration-what-you-need",
    title: "Sender ID registration: documents and rules",
    excerpt:
      "How to register a branded Sender ID, what files are accepted, and why ADMIN and OTP are reserved.",
    date: "September 1, 2025",
  },
  {
    slug: "gsm-7-vs-ucs-2-why-your-message-split",
    title: "GSM-7 vs UCS-2: why your message split into parts",
    excerpt: "The exact character counting that drives 1 credit per part billing.",
    date: "September 1, 2025",
  },
  {
    slug: "api-key-rotation-and-security",
    title: "API key rotation and security best practices",
    excerpt:
      "Keys are SA-<64 hex>, SHA-256 hashed, shown once. How to store and rotate them safely.",
    date: "September 1, 2025",
  },
  {
    slug: "campaign-worker-crash-resume",
    title: "Crash-resume: how the campaign worker never double-sends",
    excerpt: "Redis locks, per-recipient accounting, and the 30s poll that recovers automatically.",
    date: "September 1, 2025",
  },
  {
    slug: "credit-ledger-atomic-idempotent",
    title: "The credit ledger: atomic, idempotent, never stale",
    excerpt: "A walkthrough of TransactCredits and the 30-second Redis balance cache.",
    date: "September 1, 2025",
  },
  {
    slug: "payg-vouchers-tiered-tariffs",
    title: "Pay-as-you-go vouchers and tiered TZS tariffs",
    excerpt: "How custom-amount top-ups compute credits from 35/32/30 TZS-per-credit tiers.",
    date: "September 1, 2025",
  },
];

export const jobs = [
  {
    title: "Backend Engineer (Go / SMS)",
    body: "Build and harden the SMS automation backend — credit accounting, campaign workers, and Africa's Talking integration. Must care about idempotency, retries, and mobile-money webhooks.",
    date: "September 1, 2025",
  },
  {
    title: "Frontend Engineer (API-driven dashboard)",
    body: "Build the user-facing dashboard that talks to the /v1 REST API. Experience with JWT refresh flows, delivery logs, and real-time campaign progress.",
    date: "September 1, 2025",
  },
  {
    title: "DevRel / Developer Advocate",
    body: "Write docs and code samples that help developers send their first SMS via our API keys and JWT auth. Tanzania-first, globally minded.",
    date: "September 1, 2025",
  },
  {
    title: "Product Manager (Messaging)",
    body: "Own the roadmap for SMS, campaigns, credits, and payments. Balance Tanzanian mobile-money flows with global gateway reliability.",
    date: "September 1, 2025",
  },
  {
    title: "Growth Engineer",
    body: "Instrument delivery analytics, sender-ID lifecycle, and the voucher tier pricing so we can grow with data.",
    date: "September 1, 2025",
  },
];

export const partnerLogos = [
  "/images/logo-1.svg",
  "/images/logo-2.svg",
  "/images/logo-3.svg",
  "/images/logo-4.svg",
];
