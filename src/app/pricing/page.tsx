import { CtaSection, FaqSection, PageHero, PricingSection } from "@/components/site/sections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — SendAfrica pay-as-you-go SMS",
  description:
    "SendAfrica charges 25Tsh per SMS part. Plans set your rate limit; credits are bought in packages from the API.",
  openGraph: {
    title: "Pricing — SendAfrica pay-as-you-go SMS",
    description: "25Tsh per SMS part. Pro 600, Enterprise 6,000 requests per minute.",
  },
};

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

export default function Pricing() {
  return (
    <>
      <PageHero
        title="Pay as you send,"
        highlight="no subscriptions"
        sub="1 credit = 1 SMS part. Plans set your rate limit; you only pay for the credits you use."
      />
      <PricingSection withHeading={false} />

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
