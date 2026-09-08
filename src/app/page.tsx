import type { Metadata } from "next";
import Link from "next/link";
import {
  BeliefsSection,
  CtaSection,
  FaqSection,
  FeatureGrid,
  LogoMarquee,
  PricingSection,
  ShowcaseCards,
  TestimonialSection,
} from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";
import { heroCards } from "@/components/site/data";

export const metadata: Metadata = {
  title: "SendAfrica — Tanzania-first SMS automation API",
  description:
    "Built for messages that matter. SendAfrica gives your team the infrastructure to send, track and automate communication across Tanzania. REST API with JWT and API-key auth, idempotent sends, and real-time delivery.",
  openGraph: {
    title: "SendAfrica — Tanzania-first SMS automation API",
    description:
      "Built for messages that matter. SendAfrica gives your team the infrastructure to send, track and automate communication across Tanzania.",
  },
};

export default function Index() {
  return (
    <>
      <section className="py-24">
        <div className="container-sendafrica text-center">
          <Reveal variant="blur" delay={0} className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-bright)]">
              Tanzania-first
            </p>
          </Reveal>
          <Reveal
            variant="blur"
            delay={40}
            as="h1"
            className="mx-auto mt-4 max-w-4xl text-[44px] leading-[1.05] text-primary sm:text-[68px]"
          >
            Built for <span className="text-[var(--brand-bright)]">messages that matter.</span>
          </Reveal>
          <Reveal
            variant="blur"
            delay={120}
            as="p"
            className="mx-auto mt-6 max-w-2xl text-base text-primary/75 sm:text-lg"
          >
            SendAfrica gives your team the infrastructure to send, track and automate communication.
          </Reveal>
          <Reveal
            variant="blur"
            delay={200}
            as="p"
            className="mx-auto mt-4 max-w-2xl text-[15px] text-muted-foreground"
          >
            Get dedicated developer docs and support when you need it. We&apos;re always ready to
            help.
          </Reveal>
          <Reveal
            variant="up"
            delay={280}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/developers"
              className="rounded-xl bg-[var(--brand)] px-7 py-3.5 font-semibold text-primary-foreground btn-sendafrica shadow-sendafrica-card hover:opacity-90"
            >
              Get API Key
            </Link>
            <a
              href="https://docs.sendafrica.online"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-background px-7 py-3.5 font-semibold text-primary btn-sendafrica shadow-sendafrica-card hover:bg-[var(--mist)]"
            >
              Read Docs
            </a>
          </Reveal>
          <Reveal variant="up" delay={360} className="mt-16 grid gap-6 lg:grid-cols-2">
            {heroCards.map((card, i) => (
              <Reveal
                key={card.title}
                as="article"
                variant={i === 0 ? "left" : "right"}
                delay={(i + 1) * 60}
                className="zoom-media hover-lift overflow-hidden rounded-3xl border border-border bg-[var(--mist)] p-2 shadow-sendafrica-card"
              >
                <div className="flex h-[360px] items-center justify-center overflow-hidden rounded-2xl bg-background">
                  <img src={card.img} alt={card.alt} className="h-full w-full object-cover" />
                </div>
                <div className="px-6 pb-6 pt-6">
                  <h3 className="text-2xl text-primary">{card.title}</h3>
                  <p className="mt-2 text-[15px] text-muted-foreground">{card.subtitle}</p>
                </div>
              </Reveal>
            ))}
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
