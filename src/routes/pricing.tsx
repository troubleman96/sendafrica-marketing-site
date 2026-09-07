import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaSection, FaqSection, PageHero, PricingSection } from "@/components/site/sections";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — SendAfrica pay-as-you-go SMS" },
      {
        name: "description",
        content:
          "SendAfrica charges 25 TZS per SMS part (SwalaSMS) or 35 TZS via Africa's Talking. Plans set your rate limit; credits are bought in packages from the API.",
      },
      { property: "og:title", content: "Pricing — SendAfrica pay-as-you-go SMS" },
      {
        property: "og:description",
        content: "25 TZS per SMS part. Free 60, Pro 600, Enterprise 6,000 requests per minute.",
      },
    ],
  }),
  component: Pricing,
});

const tiers = [
  {
    plan: "Free",
    limit: "60 req/min",
    note: "Good for low-volume development, testing, and small sends.",
  },
  {
    plan: "Pro",
    limit: "600 req/min",
    note: "For growing teams sending thousands of messages per minute.",
  },
  {
    plan: "Enterprise",
    limit: "6,000 req/min",
    note: "High throughput with priority support. Contact sales for SLA terms.",
  },
];

const packages = [
  {
    name: "Starter",
    credits: 1000,
    price: 20000,
    currency: "TZS",
    note: "Best for trying the API.",
  },
];

function Pricing() {
  return (
    <>
      <PageHero
        title="Pay as you send,"
        highlight="no subscriptions"
        sub="1 credit = 1 SMS part. Plans set your rate limit; you only pay for the credits you use."
      />
      <PricingSection withHeading={false} />

      <section className="bg-background py-20">
        <div className="container-sendafrica">
          <h2 className="text-center text-[34px] leading-tight text-primary sm:text-[42px]">
            How <span className="text-[var(--brand-bright)]">credits work</span>
          </h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[var(--mist)]">
                <tr>
                  <th className="px-6 py-5 text-[15px] font-semibold text-primary">Gateway</th>
                  <th className="px-6 py-5 text-[15px] font-semibold text-primary">
                    Cost per part
                  </th>
                  <th className="px-6 py-5 text-[15px] font-semibold text-primary">Our cost</th>
                  <th className="px-6 py-5 text-[15px] font-semibold text-primary">Rate limit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { gateway: "SwalaSMS", sell: "25 TZS", cost: "13 TZS", limit: "pro plan" },
                  {
                    gateway: "Africa's Talking",
                    sell: "35 TZS",
                    cost: "22 TZS",
                    limit: "all plans",
                  },
                ].map((r) => (
                  <tr key={r.gateway} className="border-t border-border">
                    <td className="px-6 py-4 text-[15px] text-primary">{r.gateway}</td>
                    <td className="px-6 py-4 text-[15px] text-[var(--brand-bright)]">{r.sell}</td>
                    <td className="px-6 py-4 text-[15px] text-muted-foreground">{r.cost}</td>
                    <td className="px-6 py-4 text-[15px] text-muted-foreground">{r.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-6 text-[15px] text-muted-foreground">
              One credit buys one SMS part. A 160-character GSM-7 message is 1 part; longer messages
              concatenate in 153-character segments. Non-GSM-7 (emoji, Arabic, CJK) switches the
              whole message to UCS-2 at 70/67-character segments.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-sendafrica">
          <h2 className="text-center text-[34px] leading-tight text-primary sm:text-[42px]">
            Credit <span className="text-[var(--brand-bright)]">packages</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Buy credits in a package, or top up any amount as a pay-as-you-go voucher (35/32/30 TZS
            per credit across tiers). Packages below are served live from GET /v1/packages — sign in
            to your dashboard for the full, up-to-date list.
          </p>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {packages.map((p) => (
              <article
                key={p.name}
                className="rounded-3xl border border-border bg-[var(--mist)] p-8 shadow-sendafrica-card"
              >
                <h3 className="text-[26px] text-primary">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
                <p className="mt-6 text-[40px] font-semibold text-primary">
                  {p.price.toLocaleString()} {p.currency}
                </p>
                <p className="mt-1 text-[15px] text-muted-foreground">{p.credits} SMS credits</p>
                <Link
                  to="/contact"
                  className="mt-8 block rounded-xl bg-[var(--brand)] px-6 py-3.5 text-center font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Buy credits
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background pb-24">
        <div className="container-sendafrica">
          <h2 className="text-center text-[34px] leading-tight text-primary sm:text-[42px]">
            Plan <span className="text-[var(--brand-bright)]">limits</span>
          </h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[var(--mist)]">
                <tr>
                  <th className="px-6 py-5 text-[15px] font-semibold text-primary">Plan</th>
                  <th className="px-6 py-5 text-[15px] font-semibold text-primary">Rate limit</th>
                  <th className="px-6 py-5 text-[15px] font-semibold text-primary">Notes</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((t) => (
                  <tr key={t.plan} className="border-t border-border">
                    <td className="px-6 py-4 text-[15px] font-medium text-primary">{t.plan}</td>
                    <td className="px-6 py-4 text-[15px] text-[var(--brand-bright)]">{t.limit}</td>
                    <td className="px-6 py-4 text-[15px] text-muted-foreground">{t.note}</td>
                  </tr>
                ))}
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
