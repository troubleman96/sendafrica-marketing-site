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
    body: "Every send lands in your message log with live status — sent, delivered, failed, or rejected — updated from real-time delivery reports.",
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
    body: "Register and manage your own branded alphanumeric Sender ID through our gateway partners. Submit documents, set a purpose, and track approval status live.",
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
    a: "SendAfrica is pay-as-you-go: one credit is charged per SMS part. A message can use multiple parts depending on its length and character set. The TZS value per credit depends on the available package or voucher option; review the current rate in your account before topping up.",
  },
  {
    q: "Do you support Nigeria / Kenya / international numbers?",
    a: "Tanzania mobile numbers are supported and normalized to E.164 format. Other destinations depend on the currently published rate card and gateway coverage; check GET /v1/rates before sending internationally.",
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
    a: "A successful send response confirms the provider accepted the message; it does not by itself confirm handset delivery. Delivery reports arrive asynchronously and update the message log. Applications can use signed webhooks to receive those status changes.",
  },
  {
    q: "Can I schedule a message to my whole list?",
    a: "Yes. Create a campaign using a contact list and optionally set a scheduled time. Follow campaign progress and recipient statuses from your account as the send runs.",
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
    eyebrow: "Pay-as-you-go",
    name: "Pay as you go",
    price: "1 credit",
    unit: "/ SMS part",
    note: "The TZS amount per credit is shown with the available package or voucher options in your account.",
    features: [
      "One credit per SMS part",
      "Long and Unicode messages may use multiple parts",
      "Check current TZS rates before topping up",
    ],
    highlighted: true,
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
    title: "Building SMS infrastructure",
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

export const partnerLogos = [
  { src: "/images/CamelPay.jpeg", href: "https://camelpay.in", alt: "CamelPay" },
  { src: "/images/ngamia.png", href: "https://ngamia.cc", alt: "Ngamia" },
  { src: "/images/TMlogo.png", href: "https://tumamaoni.com", alt: "Tuma Maoni" },
  { src: "/images/ziada.jpg", href: "https://ziadapos.com", alt: "ZiadaPOS" },
  { src: "/images/BusaraDigital.jpg", href: "https://busaradigital.com", alt: "Busara Digital" },
];

export const heroCards = [
  {
    img: "/images/sendafrica_sms_api_playground.webp",
    title: "API Playground",
    subtitle: "An API built for reliability.",
    alt: "SendAfrica API Playground — POST /v1/messages endpoint with JSON request body and response envelope",
  },
  {
    img: "/images/sendafrica_live_message_logs.webp",
    title: "Delivery Logs",
    subtitle: "A dashboard that tells the truth.",
    alt: "SendAfrica delivery logs showing delivered, sent, and failed message counts from real-time delivery webhooks",
  },
] as const;

export const analyticsCards = [
  {
    img: "/images/sendafrica_campaign_analytics.webp",
    title: "Campaign Analytics",
    stats: ["12,450 messages", "95.5% delivered"],
    meta: "7 day chart",
    description: "Campaigns with clarity.",
    alt: "SendAfrica campaign analytics dashboard with 7-day delivery trend chart",
  },
  {
    img: "/images/sendafrica_webhook_events.webp",
    title: "Webhook Events",
    stats: ["delivery.delivered", "delivery.sent", "delivery.failed"],
    meta: "HMAC verified",
    description: "Events your application can trust.",
    alt: "SendAfrica webhook events dashboard showing delivery callbacks with HMAC verification",
  },
  {
    img: "/images/sendafrica_credits_usage_alt.webp",
    title: "Credits & Usage",
    stats: ["1,240 credits", "≈ TZS 43,400"],
    meta: "usage chart",
    description: "Simple pricing. Clear usage.",
    alt: "SendAfrica credits and usage dashboard showing balance and cost visualization",
  },
] as const;
