import { Plug } from "lucide-react";
import type { Metadata } from "next";
import { CtaSection, FaqSection, PageHero } from "@/components/site/sections";
import { integrations } from "@/components/site/data";

export const metadata: Metadata = {
  title: "Integrations — Connect SendAfrica to your stack",
  description:
    "SendAfrica connects to Africa's Talking and SwalaSMS for delivery, Snippe for mobile-money, and Google Contacts for phonebooks — all over a REST API.",
  openGraph: {
    title: "Integrations — Connect SendAfrica to your stack",
    description:
      "Africa's Talking, SwalaSMS, Snippe, Google Contacts, and no-code tools, all via REST.",
  },
};

export default function Integration() {
  return (
    <>
      <PageHero
        title="Integrations that"
        highlight="fit right in"
        sub="SendAfrica plugs into the gateways and carriers African teams already use — over a single REST API."
      />

      <section className="bg-background py-20">
        <div className="container-sendafrica">
          <img
            src="/images/integration-orbit.avif"
            alt="SendAfrica integrations"
            className="mx-auto w-full max-w-4xl rounded-3xl object-cover shadow-sendafrica-float"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {integrations.map((i) => (
              <article
                key={i.name}
                className="rounded-3xl border border-border bg-[var(--mist)] p-7 transition-shadow hover:shadow-sendafrica-float"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-background text-[var(--brand-bright)]">
                  <Plug className="h-6 w-6" />
                </span>
                <h2 className="mt-6 text-[22px] text-primary">{i.name}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{i.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <CtaSection />
    </>
  );
}
