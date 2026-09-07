# SendAfrica — Domain Model

Marketing site for **SendAfrica**, a Tanzania-first SMS automation API
(`https://api.sendafrica.online`). This is a *rebrand* of the Cuppa SaaS
template: the **design system / layout is preserved**; only copy, data, and
route wiring change so every claim is grounded in the API
(`/home/cameltech/Projects/sendafrica/API`).

No real company headcount/revenue figures are known to the agent, so metrics
are expressed as defensible, API-grounded product facts (rate limits, token
TTLs, polling cadence, credit pricing), never fabricated customer counts.

## Glossary (canonical terms)

- **Account** — a single `accounts` row backs *both* a JWT dashboard session
  and an API-key developer integration. There is no separate "developer
  account" type.
- **Plan** — one of `free | pro | enterprise`. Drives rate limits:
  `60 / 600 / 6000 req/min` (public auth endpoints: `30 req/min/IP`, unplan-gated).
- **JWT** — dashboard/session auth. Access TTL `15 min` (env `JWT_ACCESS_TTL`),
  refresh TTL `7 days`, refresh token **rotates on every use**.
- **API Key** — developer/programmatic auth. Format `SA-<64 hex chars>`. Stored
  as SHA-256 (raw key shown **once** at creation; only `key_prefix` = `SA-` +
  first 8 hex is ever displayed again). JWT-only operations: create/list/revoke
  keys, logout, password/OTP, OAuth linking, admin.
- **Credit** — `1 credit = 1 SMS part` (`CREDIT_PRICE_PER_SMS_PART`). Ledger is
  append-only; balance derived from latest completed transaction row, cached in
  Redis 30s; all mutations atomic + idempotent (`TransactCredits`).
- **Sender ID** — branding string on outbound SMS. SwalaSMS default `TAARIFA`,
  Africa's Talking default `SendAfrika`. Registration is free, requires docs +
  sample message, statuses `pending|approved|rejected|suspended|cancelled`.
  Reserved names: `ADMIN, ALERT, BANK, GOV, OTP, SAFARICOM, VODACOM, WHATSAPP`.
- **Campaign** — bulk send to a contact list. Status lifecycle
  `draft → scheduled → processing → completed | failed | cancelled`. Worker
  polls every **30s**, sends in chunks of **500**, one `SendSingleSMS` per
  recipient so per-recipient credit accounting stays correct. Single-source-of-
  truth status values: `draft, scheduled, processing, completed, failed,
  cancelled`.
- **Contact** — one primary phone (E.164 `+255…`, **mobile only**; landlines
  `+255 22x–27x` are rejected) plus any number of additional labeled phones
  (`mobile|home|work|other`). Lists auto-create a default "My Contacts" list so
  the array is never empty (`source`: `manual | google`).
- **Payment order** — `manual` (admin-confirmed out-of-band) or `snippe`
  (Tanzania mobile money, USSD prompt + signature-verified webhook). Sizing via
  fixed `package_id` (`/v1/packages`) or arbitrary TZS amount (`/v1/vouchers`).
- **Voucher** — pay-as-you-go top-up for any amount ≥ `1000 TZS`. Credits =
  `amount / tier_rate`, integer division. Tier rates (configurable):
  ≤49,999 @ 35, ≤149,999 @ 32, rest @ 30 TZS/credit.
- **OTP** — 6-digit, 15-minute expiry, single-use; used for email verify +
  password reset + (optional, gated) phone verify.
- **Message log** — `/v1/sms/logs`; statuses `sent | delivered | failed |
  rejected`.

## Pricing (API-grounded)

- SMS sell price: **25 TZS/part** (SwalaSMS `SWALA_SELL_TZS_PER_PART`);
  35 TZS/part via Africa's Talking (`AT_SELL_TZS_PER_PART`). Cost to us 13/22.
- Credit packages served live from `GET /v1/packages` (documented example:
  *Starter — 1000 credits, 20,000 TZS*). Pricing page must not invent prices;
  it reads/packages the canonical endpoint shape.
- Plans gate **rate limits**, not subscription fees (no plan fee in the API).

## Messaging rules

- Tone: professional, factual, SEO-friendly. Avoid generic CEO hype.
- Replace every "Cuppa" → "SendAfrica"; every project-management claim → SMS
  automation / Tanzania-first / developer API claim.
- Keep layout, Tailwind classes, animations, and image references intact.

## Decisions (settled)

- D1 Scope: keep all routes; **remove `/home-02`**; **add `/developers`**; keep Blog.
- D2 Pricing: pay-as-you-go credits anchored to 25 TZS/SMS + live `/v1/packages`;
  plan tiers shown by rate-limit only.
- D3 Logo: use existing `/SendAfrica-logo.png`; fix alt text only.
