import { createFileRoute } from "@tanstack/react-router";
import { CtaSection, FaqSection, PageHero } from "@/components/site/sections";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Answers about SendAfrica SMS" },
      {
        name: "description",
        content:
          "Answers to common questions about SendAfrica: credit billing, SMS delivery, campaigns, Sender IDs, and mobile-money top-ups.",
      },
      { property: "og:title", content: "FAQ — Answers about SendAfrica SMS" },
      {
        property: "og:description",
        content:
          "Common questions about SendAfrica billing, delivery, campaigns, and mobile-money top-ups.",
      },
    ],
  }),
  component: Faq,
});

function Faq() {
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
