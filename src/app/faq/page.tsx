import type { Metadata } from "next";
import { CtaSection, FaqSection, PageHero } from "@/components/site/sections";

export const metadata: Metadata = {
  title: "FAQ — Answers about SendAfrica SMS",
  description:
    "Answers to common questions about SendAfrica: credit billing, SMS delivery, campaigns, Sender IDs, and mobile-money top-ups.",
  openGraph: {
    title: "FAQ — Answers about SendAfrica SMS",
    description:
      "Common questions about SendAfrica billing, delivery, campaigns, and mobile-money top-ups.",
  },
};

export default function Faq() {
  return (
    <>
      <PageHero
        title="Questions?"
        highlight="We've got answers"
        sub="Find clear answers about sending SMS, credit billing, campaigns, delivery status, and setting up your integration."
      />
      <section className="bg-background py-12 sm:py-16">
        <div className="container-sendafrica">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-bright)]">
            Jump to the right resource
          </p>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4 border-y border-border py-5">
            <a
              href="/pricing"
              className="font-medium text-primary underline underline-offset-4 hover:text-[var(--brand-bright)]"
            >
              Pricing and credits
            </a>
            <a
              href="/developers"
              className="font-medium text-primary underline underline-offset-4 hover:text-[var(--brand-bright)]"
            >
              API and integration docs
            </a>
            <a
              href="/contact"
              className="font-medium text-primary underline underline-offset-4 hover:text-[var(--brand-bright)]"
            >
              Contact support
            </a>
          </div>
        </div>
      </section>
      <FaqSection />
      <CtaSection />
    </>
  );
}
