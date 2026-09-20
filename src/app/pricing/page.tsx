import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { CtaSection, FaqSection, PageHero, PricingSection } from "@/components/site/sections";

export const metadata: Metadata = {
  title: "SMS pricing and credits — SendAfrica",
  description:
    "Understand SendAfrica SMS credit billing, message parts, API rate limits, and where to check current Tanzanian shilling top-up rates.",
  openGraph: {
    title: "SendAfrica SMS pricing and credits",
    description:
      "Pay for the SMS credits you use. Learn how message parts are counted and compare API request limits by plan.",
  },
};

const tiers = [
  {
    plan: "Free",
    limit: "60 requests/minute",
    note: "Useful for development, testing, and lower request volumes.",
  },
  {
    plan: "Pro",
    limit: "600 requests/minute",
    note: "A higher API request allowance for growing integrations.",
  },
  {
    plan: "Enterprise",
    limit: "6,000 requests/minute",
    note: "The highest published request allowance. Ask the team about your workload.",
  },
];

export default function Pricing() {
  return (
    <>
      <PageHero
        title="Clear credit billing for every SMS part"
        sub="SendAfrica is pay-as-you-go. One credit is charged for each SMS part; message length and character set determine how many parts a message uses. Check the current TZS rate for your available top-up option before purchasing credits."
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://app.sendafrica.online/auth/sign-up"
            className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[var(--brand)] px-6 py-3 font-semibold text-primary-foreground shadow-sendafrica-card transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            View credit options <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <Link
            href="https://docs.sendafrica.online/guides/phone-numbers"
            className="inline-flex min-h-12 items-center rounded-xl border border-white/70 bg-white/90 px-6 py-3 font-semibold text-primary transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Read billing docs
          </Link>
        </div>
      </PageHero>

      <PricingSection withHeading={false} />

      <section className="bg-[var(--mist)] py-16 sm:py-20">
        <div className="container-sendafrica grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="text-[32px] leading-tight text-primary sm:text-[40px]">
              Separate your credit cost from your request limit
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Credits cover message parts. Your plan sets how many API requests you can make per
              minute. A bulk request can include multiple recipients, so request limits are not a
              message delivery speed guarantee.
            </p>
            <Link
              href="https://sdk.sendafrica.online/docs/rate-limits"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--brand-bright)] underline underline-offset-4 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand)]"
            >
              Read rate-limit guidance <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-x-auto border-y border-border">
            <table className="w-full min-w-[620px] text-left">
              <caption className="sr-only">
                API requests allowed per minute by SendAfrica plan
              </caption>
              <thead className="bg-white/70">
                <tr>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-primary">
                    Plan
                  </th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-primary">
                    API request limit
                  </th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-primary">
                    Best fit
                  </th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((tier) => (
                  <tr key={tier.plan} className="border-t border-border">
                    <th scope="row" className="px-5 py-5 text-sm font-semibold text-primary">
                      {tier.plan}
                    </th>
                    <td className="px-5 py-5 text-sm font-medium text-[var(--brand-bright)]">
                      {tier.limit}
                    </td>
                    <td className="px-5 py-5 text-sm leading-relaxed text-muted-foreground">
                      {tier.note}
                    </td>
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
