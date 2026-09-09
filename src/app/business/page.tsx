import type { Metadata } from "next";
import { Bell, Clock, Package, ShieldCheck, Tag, Wallet } from "lucide-react";
import {
  CtaSection,
  FaqSection,
  FeatureGrid,
  PageHero,
  ShowcaseCards,
} from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Business SMS — SendAfrica",
  description:
    "Reach customers across Tanzania with branded Sender IDs, appointment reminders, payment alerts, promotional campaigns, and real-time delivery tracking. Pay-as-you-go credits, exact billing.",
  openGraph: {
    title: "Business SMS — SendAfrica",
    description:
      "Branded Sender IDs, appointment reminders, payment alerts, and campaigns on a SMS API with real-time delivery tracking.",
  },
};

const useCases = [
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Appointment reminders",
    body: "Schedule sends and reduce no-shows — delivery confirmations, bookings, and follow-ups land automatically.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Payment alerts",
    body: "Trigger real-time top-up and payment confirmations the moment a transaction is recorded.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "OTP & verification",
    body: "Deliver one-time passwords and security codes with idempotent retries and fast delivery.",
  },
  {
    icon: <Tag className="h-6 w-6" />,
    title: "Custom Sender IDs",
    body: "Register your brand as a branded alphanumeric Sender ID, submitted and tracked through SwalaSMS.",
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: "Order & status updates",
    body: "Keep customers informed from dispatch to delivery, with live delivery receipts in your message log.",
  },
  {
    icon: <Wallet className="h-6 w-6" />,
    title: "Promotional campaigns",
    body: "Upload a contact list and schedule a campaign — the worker sends in chunks of 500 with per-recipient credit billing.",
  },
];

export default function Business() {
  return (
    <>
      <PageHero
        title="Business SMS"
        highlight="that delivers"
        sub="From appointment reminders to branded Sender IDs and promotional campaigns, SendAfrica gives businesses the API, dashboard, and real-time tracking to reach customers across Tanzania."
      />

      <section className="bg-background py-20">
        <div className="container-sendafrica">
          <Reveal variant="blur" className="mx-auto max-w-2xl text-center">
            <h2 className="text-[34px] leading-[1.1] text-primary sm:text-[44px]">
              Built for <span className="text-[var(--brand-bright)]">businesses</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              One platform for the messages your business relies on every day — alerts, reminders,
              verifications, and campaigns, all with exact credit billing.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((c, i) => (
              <Reveal
                key={c.title}
                variant="up"
                delay={i * 110}
                as="article"
                className="hover-lift group rounded-3xl border border-border bg-background p-7 shadow-sendafrica-card"
              >
                <div className="text-[var(--brand-bright)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                  {c.icon}
                </div>
                <h3 className="mt-6 text-[22px] text-primary">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid
        heading="Powerful"
        highlight="SMS automation"
        sub="REST endpoints, JWT and API-key auth, idempotent sends, real-time delivery tracking, and exact credit billing."
      />
      <ShowcaseCards />
      <FaqSection />
      <CtaSection />
    </>
  );
}
