import type { Metadata } from "next";
import { CtaSection, LogoMarquee, PageHero } from "@/components/site/sections";
import { testimonials } from "@/components/site/data";

export const metadata: Metadata = {
  title: "Testimonials — What SendAfrica customers say",
  description:
    "Read how teams across Tanzania and East Africa send SMS reliably and track delivery in real time with SendAfrica.",
  openGraph: {
    title: "Testimonials — What SendAfrica customers say",
    description: "Real stories from teams that send and deliver SMS reliably with SendAfrica.",
  },
};

export default function Testimonials() {
  return (
    <>
      <PageHero
        title="Loved by teams"
        highlight="across Africa"
        sub="Hear how teams use SMS for customer alerts, account verification, and campaign workflows — then explore the tools behind those everyday sends."
      />
      <LogoMarquee />

      <section className="bg-background py-20 sm:py-24">
        <div className="container-sendafrica">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-[32px] leading-tight text-primary sm:text-[40px]">
              Experiences from real messaging work
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Teams use SendAfrica to connect customer communications with the tools they already
              rely on. Read what each team values, from campaign visibility to delivery records.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <article key={t.name} className="border-t border-border py-7 sm:px-5 sm:py-8">
                <p className="text-[19px] leading-snug text-primary">{t.quote}</p>
                <div className="mt-8 flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-primary">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
