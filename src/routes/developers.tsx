import { createFileRoute } from "@tanstack/react-router";
import { CtaSection, FaqSection, PageHero } from "@/components/site/sections";

export const Route = createFileRoute("/developers")({
  head: () => ({
    meta: [
      { title: "Developers — SendAfrica SMS API reference" },
      {
        name: "description",
        content:
          "SendAfrica REST API for Tanzania-first SMS: JWT and SA- API key auth, idempotent sends, exact credit billing, and real-time delivery. Full reference at docs.sendafrica.online.",
      },
      { property: "og:title", content: "Developers — SendAfrica SMS API reference" },
      {
        property: "og:description",
        content:
          "REST API for sending SMS across African mobile networks. JWT and API-key auth, idempotent sends, 25 TZS per part.",
      },
    ],
  }),
  component: Developers,
});

const endpointGroups = [
  {
    title: "Auth & account",
    items: [
      "POST /v1/auth/register — create an account",
      "POST /v1/auth/login — get a JWT access token",
      "POST /v1/auth/refresh — rotate your refresh token",
      "GET /v1/auth/me — your profile and plan",
      "GET/POST /v1/auth/api-keys — manage SA- API keys",
    ],
  },
  {
    title: "SMS",
    items: [
      "POST /v1/sms/ — single send (API key)",
      "POST /v1/sms/send — single send (JWT)",
      "POST /v1/sms/bulk — bulk send up to 100 recipients",
      "GET /v1/sms/logs — paginated message logs",
    ],
  },
  {
    title: "Contacts & campaigns",
    items: [
      "GET/POST /v1/contact-lists — contact lists",
      "GET/POST /v1/contact-lists/{id}/contacts — manage contacts",
      "POST /v1/contact-lists/{id}/import — bulk import CSV",
      "GET/POST /v1/campaigns — schedule & track campaigns",
    ],
  },
  {
    title: "Credits & payments",
    items: [
      "GET /v1/credits/balance — current credit balance",
      "GET /v1/credits/history — transaction ledger",
      "GET /v1/packages — credit packages to top up",
      "POST /v1/payments — initiate a package top-up",
      "GET /v1/vouchers/rate — pay-as-you-go tariffs",
    ],
  },
  {
    title: "Sender IDs & more",
    items: [
      "GET /v1/sender-ids/requirements — documents & rules",
      "POST /v1/sender-ids — register a branded Sender ID",
      "GET /v1/sender-ids/usable — available Sender IDs",
      "GET /v1/notifications — in-app notifications",
    ],
  },
];

function Developers() {
  return (
    <>
      <PageHero
        title="SMS automation"
        highlight="for developers"
        sub="A REST API built for Tanzania. Authenticate with JWT or SA- API keys, send with idempotency keys, and bill exactly one credit per SMS part."
      >
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://docs.sendafrica.online"
            className="rounded-xl bg-[var(--brand)] px-7 py-3.5 font-semibold text-primary-foreground btn-sendafrica shadow-sendafrica-card hover:opacity-90"
          >
            Read the full docs
          </a>
          <a
            href="https://api.sendafrica.online/health"
            className="rounded-xl bg-background px-7 py-3.5 font-semibold text-primary btn-sendafrica shadow-sendafrica-card hover:bg-[var(--mist)]"
          >
            Visit the API
          </a>
        </div>
      </PageHero>

      <section className="bg-background py-20">
        <div className="container-sendafrica">
          <h2 className="text-center text-[34px] leading-tight text-primary sm:text-[42px]">
            Base <span className="text-[var(--brand-bright)]">URL</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] text-primary/75">
            <code className="rounded-md bg-[var(--mist)] px-2 py-1">
              https://api.sendafrica.online
            </code>
            <span className="mx-2 text-muted-foreground">·</span> All routes are prefixed with
            <code className="rounded-md bg-[var(--mist)] px-2 py-1">/v1</code>. Every body is JSON,
            and every response uses a unified envelope:
            <code className="rounded-md bg-[var(--mist)] px-2 py-1">
              {"{success, data, error, meta, request_id, timestamp}"}
            </code>
            .
          </p>
        </div>
      </section>

      <section className="bg-background pb-20">
        <div className="container-sendafrica">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-[34px] leading-tight text-primary sm:text-[42px]">
                Authentication <span className="text-[var(--brand-bright)]">modes</span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                One account supports both. Use a JWT (15-minute access tokens, 7-day rotating
                refresh) for the dashboard, or an{" "}
                <code className="rounded-md bg-[var(--mist)] px-1.5 py-0.5 text-sm">SA-</code>
                API key ({"<64 hex chars>"}) for programmatic access. API keys can't manage
                credentials or reach admin routes.
              </p>
              <div className="mt-8 overflow-x-auto">
                <pre className="overflow-x-auto rounded-3xl bg-[var(--mist)] p-6 text-[15px]">
                  {`// Single SMS — JWT or API key
curl -X POST https://api.sendafrica.online/v1/sms/send \\
  -H "Authorization: Bearer SA-xxxx" \\
  -H "Content-Type: application/json" \\
  -H "Idempotency-Key: <your-request-id>" \\
  -d '{
    "to": "+255712345678",
    "message": "Hello from SendAfrica",
    "from": "SendAfrika"
  }'`}
                </pre>
              </div>
            </div>

            <div className="grid gap-10 sm:gap-0 sm:pl-6">
              {endpointGroups.map((g) => (
                <div key={g.title}>
                  <h3 className="text-xl font-semibold text-primary">{g.title}</h3>
                  <ul className="mt-3 space-y-2 text-[15px] text-muted-foreground">
                    {g.items.map((it) => (
                      <li key={it} className="font-mono">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background pb-12">
        <div className="container-sendafrica">
          <h2 className="text-center text-[34px] leading-tight text-primary sm:text-[42px]">
            Rate <span className="text-[var(--brand-bright)]">limits</span>
          </h2>
          <div className="mt-10 mx-auto max-w-2xl overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[var(--mist)]">
                <tr>
                  <th className="px-6 py-4 text-[15px] font-semibold text-primary">Plan</th>
                  <th className="px-6 py-4 text-[15px] font-semibold text-primary">Limit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-6 py-4 text-[15px] text-primary">Free</td>
                  <td className="px-6 py-4 text-[15px] text-[var(--brand-bright)]">60 req/min</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-6 py-4 text-[15px] text-primary">Pro</td>
                  <td className="px-6 py-4 text-[15px] text-[var(--brand-bright)]">600 req/min</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-6 py-4 text-[15px] text-primary">Enterprise</td>
                  <td className="px-6 py-4 text-[15px] text-[var(--brand-bright)]">
                    6,000 req/min
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FaqSection />
      <CtaSection />
    </>
  );
}
