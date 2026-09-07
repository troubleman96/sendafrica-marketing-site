import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CtaSection,
  FaqSection,
  FeatureGrid,
  LogoMarquee,
  PricingSection,
  ShowcaseCards,
  TestimonialSection,
  BeliefsSection,
} from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SendAfrica — Tanzania-first SMS automation API" },
      {
        name: "description",
        content:
          "Send SMS across African mobile networks with SendAfrica. REST API, JWT and SA- API keys, idempotent sends, exact credit billing, and real-time delivery tracking.",
      },
      { property: "og:title", content: "SendAfrica — Tanzania-first SMS automation API" },
      {
        property: "og:description",
        content:
          "Send SMS across African mobile networks. REST API with JWT and API-key auth, idempotent sends, and 25 TZS per SMS part.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-bg.avif)" }}
          aria-hidden
        />
        <div className="relative container-sendafrica pb-0 pt-40 text-center">
          <Reveal
            variant="blur"
            as="h1"
            className="mx-auto max-w-4xl text-[44px] leading-[1.05] text-primary sm:text-[68px]"
          >
            Tanzania-first <span className="text-[var(--brand-bright)]">SMS automation.</span>
          </Reveal>
          <Reveal
            variant="up"
            delay={120}
            as="p"
            className="mx-auto mt-6 max-w-2xl text-base text-primary/75 sm:text-lg"
          >
            A REST API for sending single messages and bulk campaigns across African mobile
            networks. JWT and SA- API keys, idempotent sends, and delivery tracked in real time.
          </Reveal>
          <Reveal
            variant="up"
            delay={240}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/developers"
              className="rounded-xl bg-[var(--brand)] px-7 py-3.5 font-semibold text-primary-foreground btn-sendafrica shadow-sendafrica-card hover:opacity-90"
            >
              Read the API docs
            </Link>
            <Link
              to="/contact"
              className="rounded-xl bg-background px-7 py-3.5 font-semibold text-primary btn-sendafrica shadow-sendafrica-card hover:bg-[var(--mist)]"
            >
              Talk to sales
            </Link>
          </Reveal>
          <Reveal variant="scale" delay={320} className="mt-16">
            <img
              src="/images/dashboard.avif"
              alt="SendAfrica dashboard"
              className="mx-auto w-full max-w-5xl rounded-t-3xl shadow-sendafrica-float"
            />
          </Reveal>
        </div>
      </section>

      <LogoMarquee />
      <ShowcaseCards />
      <FeatureGrid />
      <BeliefsSection />
      <TestimonialSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
