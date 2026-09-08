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
} from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";
import { Typewriter } from "@/components/site/Typewriter";

export const metadata: Metadata = {
  title: "SendAfrica — SMS-AUTOMATION SMS automation API",
  description:
    "Built for messages that matter. SendAfrica gives your team the infrastructure to send, track and automate communication across Tanzania. REST API with JWT and API-key auth, idempotent sends, and real-time delivery.",
  openGraph: {
    title: "SendAfrica — SMS-AUTOMATION SMS automation API",
    description:
      "Built for messages that matter. SendAfrica gives your team the infrastructure to send, track and automate communication across Tanzania.",
  },
};

export default function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-safari.jpeg)" }}
          aria-hidden
        />
        <div className="relative container-sendafrica pb-0 pt-24 text-center">
          <Reveal variant="blur" delay={0} className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-black">
              SMS-AUTOMATION
            </p>
          </Reveal>
          <Reveal
            variant="blur"
            delay={40}
            as="h1"
            className="mx-auto mt-4 max-w-4xl text-[44px] leading-[1.05] text-primary sm:text-[68px]"
          >
            Built for messages that matter for{" "}
            <span className="block sm:inline text-[var(--brand-bright)]">
              <Typewriter words={["Businesses", "Startups", "Developers"]} />
            </span>
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
            variant="up"
            delay={200}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="https://app.sendafrica.online"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[var(--brand)] px-7 py-3.5 font-semibold text-primary-foreground btn-sendafrica shadow-sendafrica-card hover:opacity-90"
            >
              Sign In
            </a>
            <a
              href="https://docs.sendafrica.online"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-background px-7 py-3.5 font-semibold text-primary btn-sendafrica shadow-sendafrica-card hover:bg-[var(--mist)]"
            >
              Read Docs
            </a>
          </Reveal>
          <Reveal variant="scale" delay={280} className="mt-16">
            <img
              src="/images/dashboard.png"
              alt="SendAfrica dashboard"
              loading="eager"
              className="mx-auto w-full max-w-5xl rounded-t-3xl shadow-sendafrica-float"
            />
          </Reveal>
        </div>
      </section>

      <LogoMarquee />
      <ShowcaseCards />
      <FeatureGrid />
      <BeliefsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
