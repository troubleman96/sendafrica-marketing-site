import type { Metadata } from "next";
import {
  CtaSection,
  FaqSection,
  FeatureGrid,
  PageHero,
  ShowcaseCards,
} from "@/components/site/sections";

export const metadata: Metadata = {
  title: "Features — SendAfrica SMS automation API",
  description:
    "Tanzania-first SMS automation: developer API with JWT and SA- API keys, bulk campaigns, contact lists, Sender IDs, credits, and mobile-money top-ups.",
  openGraph: {
    title: "Features — SendAfrica SMS automation API",
    description:
      "Single sends, bulk campaigns, contact lists, Sender IDs, credits, and mobile-money top-ups in one API.",
  },
};

export default function Features() {
  return (
    <>
      <PageHero
        title="SMS automation"
        highlight="built for Africa"
        sub="From a single OTP to a million-recipient campaign, SendAfrica gives you the API, dashboard, and delivery tracking you need."
      />
      <section className="bg-background py-20">
        <div className="container-sendafrica grid gap-6 lg:grid-cols-2">
          <img
            src="/images/features-team.avif"
            alt="Developer sending SMS"
            className="h-[360px] w-full rounded-3xl object-cover shadow-sendafrica-card"
          />
          <img
            src="/images/features-office.avif"
            alt="SendAfrica campaign dashboard"
            className="h-[360px] w-full rounded-3xl object-cover shadow-sendafrica-card"
          />
        </div>
      </section>
      <FeatureGrid />
      <ShowcaseCards />
      <FaqSection />
      <CtaSection />
    </>
  );
}
