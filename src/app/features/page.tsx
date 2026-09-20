import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaSection, FeatureGrid, PageHero, ShowcaseCards } from "@/components/site/sections";

export const metadata: Metadata = {
  title: "SMS API and bulk messaging features — SendAfrica",
  description:
    "Explore SendAfrica SMS features: a REST API, SDKs, campaigns, contact lists, Sender IDs, credit billing, and delivery reports for Tanzanian businesses and developers.",
  openGraph: {
    title: "SendAfrica SMS platform features",
    description:
      "Choose the right way to send: integrate the SMS API, run a campaign, or manage customer messaging from one account.",
  },
};

export default function Features() {
  return (
    <>
      <PageHero
        title="The tools to send SMS with confidence"
        sub="Send a message from your application, run a customer campaign, or manage contact lists from the dashboard. SendAfrica brings the API, billing and delivery records together for teams in Tanzania and across supported routes."
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://app.sendafrica.online/auth/sign-up"
            className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[var(--brand)] px-6 py-3 font-semibold text-primary-foreground shadow-sendafrica-card transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Create an account <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <Link
            href="/developers"
            className="inline-flex min-h-12 items-center rounded-xl border border-white/70 bg-white/90 px-6 py-3 font-semibold text-primary transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explore the API
          </Link>
        </div>
      </PageHero>

      <section className="bg-background pb-2 pt-16 sm:pt-20">
        <div className="container-sendafrica">
          <div className="max-w-3xl">
            <h2 className="text-[32px] leading-tight text-primary sm:text-[42px]">
              Start with the workflow you need today
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Use the dashboard for campaigns and contact lists. Use the REST API and SDKs to
              trigger messages from your product. Track submissions and delivery reports in your
              account, and check the credit usage attached to each send.
            </p>
          </div>
        </div>
      </section>
      <FeatureGrid
        heading="One platform"
        highlight="for the full SMS workflow"
        sub="Build, send, manage credits, and follow message status with tools designed for both operators and developers."
      />
      <ShowcaseCards />
      <section className="bg-[var(--mist)] py-16 sm:py-20">
        <div className="container-sendafrica grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl leading-tight text-primary sm:text-4xl">
              Know the message parts before you send
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              SMS length and character encoding affect how many parts a message uses. Review current
              rates and billing guidance before planning a large campaign.
            </p>
          </div>
          <Link
            href="/pricing"
            className="inline-flex min-h-12 w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-primary transition-colors hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand)]"
          >
            Understand pricing <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
