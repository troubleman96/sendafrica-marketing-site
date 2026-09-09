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
        sub="Developers and businesses send billions of messages through SendAfrica — reliably, and for less."
        bg="/images/hero-safari.webp"
      />
      <LogoMarquee />

      <section className="bg-background py-20">
        <div className="container-sendafrica grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <article key={i} className="rounded-3xl border border-border bg-[var(--mist)] p-8">
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
      </section>

      <CtaSection />
    </>
  );
}
