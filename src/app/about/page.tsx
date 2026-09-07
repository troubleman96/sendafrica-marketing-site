import type { Metadata } from "next";
import {
  BeliefsSection,
  CtaSection,
  PageHero,
  TestimonialSection,
} from "@/components/site/sections";

export const metadata: Metadata = {
  title: "About SendAfrica — Africa's SMS automation backbone",
  description:
    "SendAfrica is a Tanzania-first SMS automation API built for developers. We handle Africa's Talking and SwalaSMS routing, exact credit billing, and real-time delivery so teams can focus on their message.",
  openGraph: {
    title: "About SendAfrica — Africa's SMS automation backbone",
    description: "SendAfrica is a Tanzania-first SMS automation API for developers and teams.",
  },
};

const metrics = [
  { value: "25Tsh", label: "Per SMS part (SwalaSMS)" },
  { value: "35Tsh", label: "Per SMS part (Africa's Talking)" },
  { value: "30s", label: "Campaign worker poll interval" },
  { value: "15 min", label: "JWT access token TTL" },
];

const team = [
  { name: "Asha Njeri", role: "Co-founder & CEO", img: "/images/team-1.avif" },
  { name: "Juma Mwangi", role: "Head of Engineering", img: "/images/team-2.avif" },
  { name: "Maria Okafor", role: "Product Lead", img: "/images/team-3.avif" },
  { name: "Daniel Kim", role: "Head of Developer Relations", img: "/images/team-4.avif" },
];

export default function About() {
  return (
    <>
      <PageHero
        title="SMS infrastructure,"
        highlight="built for Africa"
        sub="SendAfrica started with a simple idea: sending SMS across African mobile networks should be reliable, cheap, and exact. Today thousands of developers send billions of messages through our API."
      />

      <section className="bg-background py-20">
        <div className="container-sendafrica">
          <img
            src="/images/about-office.avif"
            alt="SendAfrica team"
            className="w-full rounded-3xl object-cover shadow-sendafrica-float"
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-3xl border border-border bg-[var(--mist)] p-8">
                <p className="text-[40px] font-semibold text-[var(--brand-bright)]">{m.value}</p>
                <p className="mt-2 text-[15px] text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background pb-24">
        <div className="container-sendafrica grid items-center gap-12 lg:grid-cols-2">
          <img
            src="/images/ceo.avif"
            alt="SendAfrica CEO"
            className="w-full rounded-3xl object-cover"
          />
          <div>
            <h2 className="text-[34px] leading-tight text-primary sm:text-[42px]">
              A word from <span className="text-[var(--brand-bright)]">the founding team</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              &quot;We built SendAfrica because every other SMS platform priced African traffic like
              it was a luxury. Every feature we ship has to earn its place by making a
              developer&apos;s day simpler — from a single OTP to a million-recipient campaign. That
              principle has guided us from the first prototype to the API teams rely on across East
              Africa.&quot;
            </p>
            <p className="mt-6 font-semibold text-primary">Asha Njeri</p>
            <p className="text-sm text-muted-foreground">Co-founder &amp; CEO, SendAfrica</p>
          </div>
        </div>
      </section>

      <section className="bg-background pb-24">
        <div className="container-sendafrica">
          <h2 className="text-center text-[34px] leading-tight text-primary sm:text-[42px]">
            Meet the <span className="text-[var(--brand-bright)]">leadership team</span>
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <article
                key={t.name}
                className="rounded-3xl border border-border bg-[var(--mist)] p-3"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-64 w-full rounded-2xl object-cover object-top"
                />
                <div className="px-3 pb-3 pt-5">
                  <p className="text-lg font-semibold text-primary">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BeliefsSection />
      <TestimonialSection />
      <CtaSection />
    </>
  );
}
