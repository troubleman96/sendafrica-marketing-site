import type { Metadata } from "next";
import {
  ArrowDownRight,
  ArrowRight,
  Braces,
  Code2,
  Command,
  CreditCard,
  Gauge,
  Globe2,
  KeyRound,
  MessageSquareText,
  RadioTower,
  ShieldCheck,
  Webhook,
} from "lucide-react";
import { PageHero } from "@/components/site/sections";

const portal = "https://developers.sendafrica.online";
const docs = "https://docs.sendafrica.online";
const sdkDocs = "https://sdk.sendafrica.online";

export const metadata: Metadata = {
  title: "SendAfrica for Developers — SMS API, SDKs and guides",
  description:
    "Build SMS into your product with the SendAfrica REST API, Python, TypeScript and Go SDKs, CLI, sandbox, webhooks, and developer guides.",
  openGraph: {
    title: "Build with the SendAfrica SMS API",
    description:
      "API references, SDKs, quickstarts, and production guides for developers building SMS integrations in Tanzania and across supported destinations.",
  },
};

const sdkOptions = [
  {
    language: "Python",
    install: "pip install sendafrica",
    description: "Typed resources, sync and async clients, phone helpers, and SMS part analysis.",
    href: `${sdkDocs}/sdks/python`,
  },
  {
    language: "TypeScript / Node.js",
    install: "npm install sendafrica",
    description: "Typed requests, native fetch, local phone normalization, and idempotent sends.",
    href: `${sdkDocs}/sdks/typescript`,
  },
  {
    language: "Go",
    install: "go get github.com/SendAfrica/GO-SDK",
    description: "A dependency-free client with typed resources, retries, and webhook verification.",
    href: `${sdkDocs}/sdks/go`,
  },
];

const capabilities = [
  {
    icon: MessageSquareText,
    title: "Send SMS",
    text: "Single and bulk sends, per-recipient outcomes, message logs, and asynchronous delivery updates.",
    href: `${docs}/api/sms`,
  },
  {
    icon: RadioTower,
    title: "Campaigns and contacts",
    text: "Manage contact lists and use campaigns for scheduled or larger audience workflows.",
    href: `${docs}/api`,
  },
  {
    icon: CreditCard,
    title: "Credits and rates",
    text: "Read balances and history, discover packages, and check supported destination rates.",
    href: `${docs}/api`,
  },
  {
    icon: Globe2,
    title: "Sender IDs",
    text: "Read provider requirements, submit a registration request, and check which IDs are usable.",
    href: `${docs}/api`,
  },
  {
    icon: Webhook,
    title: "Webhooks",
    text: "Verify delivery events and payment callbacks before updating your own records.",
    href: `${docs}/api/webhooks`,
  },
  {
    icon: Gauge,
    title: "Safe testing",
    text: "Use the isolated developer sandbox to exercise accepted, rejected, and error outcomes.",
    href: `${docs}/sandbox`,
  },
];

export default function Developers() {
  return (
    <>
      <PageHero
        title="Build messaging into"
        highlight="your product"
        sub="Start with one API request, then choose the tools and delivery workflows that fit your stack. SendAfrica provides the REST API, official SDKs, CLI, sandbox, and production guides in one developer journey."
        bg="/images/sendafrica_sms_api_playground.webp"
      >
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={portal}
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-7 py-3.5 font-semibold text-primary-foreground btn-sendafrica shadow-sendafrica-card hover:opacity-90"
          >
            Open developer portal <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <a
            href={`${docs}/getting-started`}
            className="rounded-xl bg-background px-7 py-3.5 font-semibold text-primary btn-sendafrica shadow-sendafrica-card hover:bg-[var(--mist)]"
          >
            Read the quickstart
          </a>
        </div>
      </PageHero>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-sendafrica grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-bright)]">REST API · HTTPS · JSON</p>
            <h2 className="mt-4 text-4xl leading-tight text-primary sm:text-5xl">Your first request starts here.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Create a developer API key in the portal, store it on your server, and send a request to the versioned API. This example uses a placeholder destination: replace it with a test number you control before running it. The request sends a real SMS and may use credits.
            </p>
            <a href={portal} className="mt-7 inline-flex items-center gap-2 font-semibold text-[var(--brand-bright)]">
              Create an API key <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl bg-[#10241b] text-[#e9f4ec] shadow-sendafrica-card">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#34c648]" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              </div>
              <span className="font-mono text-xs text-white/55">curl · POST /v1/sms/</span>
            </div>
            <pre className="overflow-x-auto p-6 text-[13px] leading-7 sm:p-8 sm:text-sm"><code>{`curl -X POST https://api.sendafrica.online/v1/sms/ \\
  -H "X-API-Key: $SENDAFRICA_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "<YOUR_TEST_NUMBER>",
    "message": "Your order update is ready."
  }'`}</code></pre>
            <div className="border-t border-white/10 px-6 py-4 text-sm text-white/65 sm:px-8">
              Keep credentials server-side. A successful submission is not delivery confirmation.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--mist)] py-20 sm:py-24">
        <div className="container-sendafrica">
          <div className="grid gap-8 border-b border-border pb-10 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <h2 className="text-4xl leading-tight text-primary sm:text-5xl">Use the tools your stack already speaks.</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Keep the REST API as your stable foundation, or add an official client for typed resources, local helpers, and consistent error handling.
            </p>
          </div>
          <div className="mt-3 divide-y divide-border">
            {sdkOptions.map((sdk) => (
              <article key={sdk.language} className="grid gap-4 py-7 md:grid-cols-[0.8fr_1.1fr_1.1fr_auto] md:items-center md:gap-8">
                <h3 className="text-2xl font-semibold text-primary">{sdk.language}</h3>
                <code className="w-fit rounded-lg bg-white px-3 py-2 font-mono text-sm text-primary">{sdk.install}</code>
                <p className="max-w-lg text-[15px] leading-relaxed text-muted-foreground">{sdk.description}</p>
                <a href={sdk.href} className="inline-flex items-center gap-2 font-semibold text-[var(--brand-bright)]">
                  SDK guide <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-7">
            <a href={`${docs}/tools/cli`} className="inline-flex items-center gap-2 font-medium text-primary hover:text-[var(--brand-bright)]">
              <Command aria-hidden="true" className="h-4 w-4" /> Use the CLI <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a href={`${docs}/sandbox`} className="inline-flex items-center gap-2 font-medium text-primary hover:text-[var(--brand-bright)]">
              <Code2 aria-hidden="true" className="h-4 w-4" /> Test in the sandbox <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a href={portal} className="inline-flex items-center gap-2 font-medium text-primary hover:text-[var(--brand-bright)]">
              <KeyRound aria-hidden="true" className="h-4 w-4" /> Manage developer access <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-sendafrica">
          <div className="max-w-3xl">
            <h2 className="text-4xl leading-tight text-primary sm:text-5xl">One API for the messaging work around the send.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Build beyond a single message with account-scoped resources for contacts, campaigns, credits, sender IDs, and delivery events.
            </p>
          </div>
          <div className="mt-12 grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, text, href }) => (
              <a key={title} href={href} className="group border-t border-border py-7">
                <Icon aria-hidden="true" className="h-5 w-5 text-[var(--brand-bright)]" strokeWidth={1.8} />
                <h3 className="mt-4 text-xl font-semibold text-primary group-hover:text-[var(--brand-bright)]">{title}</h3>
                <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-muted-foreground">{text}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-bright)]">
                  Read the guide <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--mist)] py-20 sm:py-24">
        <div className="container-sendafrica grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <h2 className="text-4xl leading-tight text-primary sm:text-5xl">Plan for production from the first message.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              SMS integrations need to account for retries, segmentation, and asynchronous delivery. The docs explain the practical details behind each one.
            </p>
            <a href={portal} className="mt-7 inline-flex items-center gap-2 font-semibold text-[var(--brand-bright)]">
              Continue in the developer portal <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
          <div className="divide-y divide-border border-y border-border">
            <article className="grid gap-3 py-6 sm:grid-cols-[auto_1fr] sm:gap-6">
              <ShieldCheck aria-hidden="true" className="mt-1 h-5 w-5 text-[var(--brand-bright)]" />
              <div><h3 className="text-lg font-semibold text-primary">Protect credentials</h3><p className="mt-2 leading-relaxed text-muted-foreground">API keys are shown once. Store them in server-side secrets, never in a browser bundle, committed file, or public log.</p></div>
            </article>
            <article className="grid gap-3 py-6 sm:grid-cols-[auto_1fr] sm:gap-6">
              <Braces aria-hidden="true" className="mt-1 h-5 w-5 text-[var(--brand-bright)]" />
              <div><h3 className="text-lg font-semibold text-primary">Count parts accurately</h3><p className="mt-2 leading-relaxed text-muted-foreground">GSM-7 and Unicode messages use different segment limits. Use SDK analysis for a preview and `credits_used` from the API as the final value.</p></div>
            </article>
            <article className="grid gap-3 py-6 sm:grid-cols-[auto_1fr] sm:gap-6">
              <ArrowDownRight aria-hidden="true" className="mt-1 h-5 w-5 text-[var(--brand-bright)]" />
              <div><h3 className="text-lg font-semibold text-primary">Retry the same operation safely</h3><p className="mt-2 leading-relaxed text-muted-foreground">Use an `Idempotency-Key` for retryable writes and reuse it for the same logical request. A new key represents a new send.</p></div>
            </article>
            <article className="grid gap-3 py-6 sm:grid-cols-[auto_1fr] sm:gap-6">
              <Webhook aria-hidden="true" className="mt-1 h-5 w-5 text-[var(--brand-bright)]" />
              <div><h3 className="text-lg font-semibold text-primary">Track delivery asynchronously</h3><p className="mt-2 leading-relaxed text-muted-foreground">A provider accepting a message is not the same as handset delivery. Reconcile final states from message logs and verified callbacks.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-sendafrica grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="text-4xl leading-tight text-primary sm:text-5xl">Go from idea to first integration.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Open the developer portal for your API key, complete guides, SDK references, and practical testing tools.
            </p>
          </div>
          <a href={portal} className="inline-flex w-fit items-center gap-2 rounded-xl bg-[var(--brand)] px-7 py-4 font-semibold text-primary-foreground btn-sendafrica hover:opacity-90">
            Visit developers.sendafrica.online <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
