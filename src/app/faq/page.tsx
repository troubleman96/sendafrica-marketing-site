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
        sub="Everything you need to know about SendAfrica SMS, credits, campaigns, and top-ups."
      />
      <FaqSection />
      <CtaSection />
    </>
  );
}
