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
    "SMS automation: developer API with JWT and SA- API keys, bulk campaigns, contact lists, Sender IDs, credits, and mobile-money top-ups.",
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
      <FeatureGrid />
      <ShowcaseCards />
      <FaqSection />
      <CtaSection />
    </>
  );
}
