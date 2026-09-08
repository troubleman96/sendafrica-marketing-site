"use client";

import Link from "next/link";
import {
  BrainCircuit,
  CheckCircle2,
  Cloud,
  CreditCard,
  Layers,
  Lock,
  MessageSquare,
  Minus,
  Phone,
  Plus,
  RefreshCw,
  Send,
  Sparkles,
  Tag,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Reveal } from "./Reveal";
import { faqs, features, analyticsCards, partnerLogos, plans, testimonials } from "./data";

const iconMap: Record<string, ReactNode> = {
  sms: <MessageSquare className="h-7 w-7" />,
  campaign: <Send className="h-7 w-7" />,
  phone: <Phone className="h-7 w-7" />,
  tracking: <BrainCircuit className="h-7 w-7" />,
  credits: <Wallet className="h-7 w-7" />,
  payments: <CreditCard className="h-7 w-7" />,
  sender: <Tag className="h-7 w-7" />,
  google: <Cloud className="h-7 w-7" />,
};

export function SectionHeading({
  lead,
  highlight,
  sub,
  className = "",
}: {
  lead: string;
  highlight?: string;
  sub?: string;
  className?: string;
}) {
  return (
    <Reveal variant="blur" className={`mx-auto max-w-2xl text-center ${className}`}>
      <h2 className="text-[34px] leading-[1.1] text-primary sm:text-[44px]">
        {lead} {highlight && <span className="text-[var(--brand-bright)]">{highlight}</span>}
      </h2>
      {sub && <p className="mt-4 text-base text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

export function PageHero({
  title,
  highlight,
  sub,
  children,
}: {
  title: string;
  highlight?: string;
  sub?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-bg.avif)" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/10 to-background"
        aria-hidden
      />
      <Reveal variant="blur" className="relative container-sendafrica pb-24 pt-40 text-center">
        <h1 className="mx-auto max-w-4xl text-[42px] leading-[1.05] text-primary sm:text-[64px]">
          {title} {highlight && <span className="text-[var(--brand-bright)]">{highlight}</span>}
        </h1>
        {sub && (
          <p className="mx-auto mt-6 max-w-2xl text-base text-primary/75 sm:text-lg">{sub}</p>
        )}
        {children}
      </Reveal>
    </section>
  );
}

export function LogoMarquee() {
  const row = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos];
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto flex max-w-[1400px] flex-col items-stretch gap-0 md:flex-row">
        <div className="shrink-0 border-border px-6 py-8 md:w-[380px] md:border-r">
          <p className="text-[15px] font-medium text-primary">Built for Africa</p>
          <p className="text-[15px] font-medium text-[var(--brand-bright)]">
            From startups to enterprise messaging platforms
          </p>
        </div>
        <div className="marquee-mask relative flex-1 overflow-hidden py-8">
          <div className="animate-marquee flex w-max items-center gap-24 pr-24">
            {row.map((logo, i) => (
              <a
                key={i}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-3 opacity-90 transition-opacity hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-8 shrink-0 rounded-full object-contain"
                />
                <span className="text-sm font-medium text-primary">{logo.alt}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ShowcaseCards() {
  return (
    <section className="bg-background py-24">
      <div className="container-sendafrica">
        <SectionHeading
          lead="Track every message"
          highlight="from send to delivery"
          sub="A RESTful API built for Tanzania, with JWT and API-key auth, idempotent sends, and delivery tracked in real time."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {analyticsCards.map((card, i) => (
            <Reveal
              key={card.title}
              as="article"
              variant="up"
              delay={(i % 3) * 110}
              className="zoom-media hover-lift rounded-3xl border border-border bg-[var(--mist)] p-2 shadow-sendafrica-card"
            >
              <div className="flex h-[300px] items-center justify-center overflow-hidden rounded-2xl bg-background">
                <img src={card.img} alt={card.alt} className="h-full w-full object-cover" />
              </div>
              <div className="px-5 pb-5 pt-5">
                <h3 className="text-[22px] text-primary">{card.title}</h3>
                <div className="mt-3 space-y-1">
                  {card.stats.map((stat) => (
                    <p key={stat} className="text-[15px] font-semibold text-primary">
                      {stat}
                    </p>
                  ))}
                </div>
                <p className="mt-2 text-[15px] text-muted-foreground">{card.meta}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid({
  heading = "Tanzania-first",
  highlight = "SMS automation",
  sub = "REST endpoints, JWT and API-key auth, idempotent sends, and delivery tracked in real time.",
}: {
  heading?: string;
  highlight?: string;
  sub?: string;
}) {
  return (
    <section className="bg-background py-24">
      <div className="container-sendafrica">
        <SectionHeading lead={heading} highlight={highlight} sub={sub} />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              as="article"
              variant="up"
              delay={(i % 3) * 110}
              className="hover-lift group rounded-3xl border border-border bg-background p-7 shadow-sendafrica-card"
            >
              <div className="text-[var(--brand-bright)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                {iconMap[f.icon]}
              </div>
              <h3 className="mt-8 text-[22px] text-primary">{f.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BeliefsSection() {
  const cards = [
    {
      icon: <RefreshCw className="h-7 w-7" />,
      title: "Reliability, by design",
      body: "Every message has an idempotency key, every credit mutation is atomic, and campaign state is locked before a worker picks it up. Retries never double-send or double-charge.",
      dark: false,
      rotate: "-rotate-2",
    },
    {
      icon: <Layers className="h-7 w-7" />,
      title: "Tanzania-first, built right",
      body: "Numbers validate to E.164 +255, mobile prefixes only, and SMS parts count via GSM-7 / UCS-2 so the bill always matches the API response.",
      dark: true,
      rotate: "rotate-2",
    },
    {
      icon: <Lock className="h-7 w-7" />,
      title: "Transparency you can audit",
      body: "The credit ledger is append-only and every action — sends, top-ups, grants — is a single row. Delivery arrives from Africa's Talking and is deduplicated before it is logged.",
      dark: false,
      rotate: "-rotate-1",
    },
  ];

  return (
    <section className="beliefs-section relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/footer-bg.avif)" }}
        aria-hidden
      />
      <div className="relative container-sendafrica py-24">
        <Reveal variant="blur" className="mx-auto max-w-2xl text-center">
          <h2 className="text-[34px] leading-tight text-primary sm:text-[44px]">
            The beliefs <span className="text-[var(--brand-bright)]">behind SendAfrica</span>
          </h2>
          <p className="mt-4 text-primary/75">
            SendAfrica exists so teams can send SMS confidently across African mobile networks.
          </p>
        </Reveal>

        <div className="beliefs-stack mx-auto mt-14 max-w-2xl pb-10">
          {cards.map((c, i) => (
            <div
              key={i}
              className="beliefs-card sticky mb-8"
              style={{ top: `${96 + i * 28}px`, zIndex: i + 1 }}
            >
              <article
                className={`${c.rotate} rounded-[28px] p-8 shadow-sendafrica-float transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] ${
                  c.dark
                    ? "bg-[var(--brand-bright)] text-white"
                    : "border border-border bg-background text-primary"
                }`}
              >
                <div className={c.dark ? "text-white" : "text-[var(--brand-bright)]"}>{c.icon}</div>
                <h3 className={`mt-10 text-[26px] ${c.dark ? "text-white" : "text-primary"}`}>
                  {c.title}
                </h3>

                <p
                  className={`mt-3 text-[15px] leading-relaxed ${c.dark ? "text-white/90" : "text-muted-foreground"}`}
                >
                  {c.body}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-background py-24">
      <div className="container-sendafrica">
        <SectionHeading
          lead="What our"
          highlight="customers say"
          sub="Teams trust SendAfrica to deliver their SMS reliably, from OTP to campaigns."
        />

        <div className="mt-14 space-y-4">
          {testimonials.map((t, i) => {
            const open = active === i;
            return (
              <Reveal
                key={t.name}
                as="article"
                variant="up"
                delay={i * 80}
                className={`overflow-hidden rounded-3xl border transition-all duration-500 ${
                  open ? "border-border bg-[var(--mist)] p-3" : "border-border bg-[var(--mist)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(open ? -1 : i)}
                  className="flex w-full items-start justify-between gap-6 px-6 py-6 text-left"
                >
                  <div className={open ? "grid flex-1 gap-6 md:grid-cols-[240px_1fr]" : "flex-1"}>
                    {open && (
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-56 w-full rounded-2xl object-cover object-top"
                      />
                    )}
                    <div className={open ? "flex flex-col justify-between py-2" : ""}>
                      {open && <p className="text-xl leading-snug text-primary">{t.quote}</p>}
                      <div className={open ? "mt-8" : ""}>
                        <p className="text-lg font-semibold text-primary">{t.name}</p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                  <span className="mt-1 text-primary">
                    {open ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PricingSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="bg-background py-24">
      <div className="container-sendafrica">
        {withHeading && (
          <SectionHeading
            lead="Pay as you send,"
            highlight="no subscriptions"
            sub="1 credit = 1 SMS part. Plans set your rate limit — Free 60, Pro 600, Enterprise 6,000 requests per minute."
          />
        )}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              as="article"
              variant="scale"
              delay={i * 120}
              className={`hover-lift rounded-[28px] p-4 shadow-sendafrica-card ${
                plan.highlighted ? "bg-[var(--brand)]" : "border border-border bg-[var(--mist)]"
              }`}
            >
              <div
                className={`rounded-3xl px-7 py-8 ${
                  plan.highlighted ? "bg-[var(--brand-bright)] text-white" : "bg-background"
                }`}
              >
                <p
                  className={
                    plan.highlighted ? "text-sm text-white/85" : "text-sm text-muted-foreground"
                  }
                >
                  {plan.eyebrow}
                </p>
                <h3
                  className={`mt-3 text-[30px] ${plan.highlighted ? "text-white" : "text-primary"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-6 text-[40px] font-semibold ${plan.highlighted ? "text-white" : "text-primary"}`}
                >
                  {plan.price}
                  <span className="ml-1 align-middle text-base font-normal">{plan.unit}</span>
                </p>
              </div>

              <div className="px-7 pb-4 pt-7">
                <p
                  className={`text-[15px] leading-relaxed ${plan.highlighted ? "text-white/85" : "text-muted-foreground"}`}
                >
                  {plan.note}
                </p>
                <ul
                  className={`mt-7 space-y-4 border-t pt-7 ${plan.highlighted ? "border-white/20" : "border-border"}`}
                >
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-3 text-[15px] ${plan.highlighted ? "text-white" : "text-primary"}`}
                    >
                      <CheckCircle2
                        className={`h-5 w-5 shrink-0 ${plan.highlighted ? "text-white" : "text-[var(--brand-bright)]"}`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 block rounded-xl px-6 py-3.5 text-center font-medium transition-opacity hover:opacity-90 ${
                    plan.highlighted
                      ? "bg-background text-primary"
                      : "bg-[var(--brand)] text-primary-foreground"
                  }`}
                >
                  Get started
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background py-24">
      <div className="container-sendafrica grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal variant="left">
          <h2 className="text-[34px] leading-tight text-primary sm:text-[42px]">
            Have questions?{" "}
            <span className="text-[var(--brand-bright)]">We&apos;ve got answers</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know about SendAfrica SMS, credits, and campaigns.
          </p>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal
                key={f.q}
                variant="right"
                delay={i * 70}
                className={`rounded-2xl border bg-[var(--mist)] px-6 transition-colors duration-300 ${
                  isOpen ? "border-[var(--brand-bright)]/40" : "border-border"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-[17px] font-medium text-primary">{f.q}</span>
                  <span
                    className={`shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="accordion-body pb-6 text-[15px] leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-bg.avif)" }}
        aria-hidden
      />
      <Reveal variant="blur" className="relative container-sendafrica pb-0 pt-24 text-center">
        <h2 className="mx-auto max-w-3xl text-[40px] leading-[1.06] text-primary sm:text-[56px]">
          Send smarter, <span className="text-[var(--brand-bright)]">deliver better.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-primary/75">
          Tanzania-first SMS automation for developers and teams. Get JWT or API-key auth, exact
          credit billing, and real-time delivery — all backed by Africa's Talking and SwalaSMS.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/developers"
            className="rounded-xl bg-[var(--brand)] px-7 py-3.5 font-semibold text-primary-foreground btn-sendafrica shadow-sendafrica-card hover:opacity-90"
          >
            Read the API docs
          </Link>
          <Link
            href="/pricing"
            className="rounded-xl bg-background px-7 py-3.5 font-semibold text-primary btn-sendafrica shadow-sendafrica-card hover:bg-[var(--mist)]"
          >
            See Pricing
          </Link>
        </div>
        <img
          src="/images/dashboard.avif"
          alt="SendAfrica dashboard"
          className="mx-auto mt-14 w-full max-w-5xl rounded-t-3xl shadow-sendafrica-float"
        />
      </Reveal>
    </section>
  );
}
