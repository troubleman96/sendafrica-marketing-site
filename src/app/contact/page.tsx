import { Clock, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { CtaSection, FaqSection, PageHero } from "@/components/site/sections";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact SendAfrica — Talk to our team",
  description:
    "Get in touch with SendAfrica for demos, support or partnership questions. We usually reply within one business day.",
  openGraph: {
    title: "Contact SendAfrica — Talk to our team",
    description: "Reach the SendAfrica team for demos, support or partnership questions.",
  },
};

const details = [
  { icon: <Mail className="h-5 w-5" />, label: "Email", value: "support@sendafrica.online" },
  { icon: <Clock className="h-5 w-5" />, label: "Office hours", value: "Mon–Fri, 8:00–17:00 EAT" },
  { icon: <MapPin className="h-5 w-5" />, label: "Based in", value: "Dar es Salaam, Tanzania" },
];

export default function Contact() {
  return (
    <>
      <PageHero
        title="Let's start"
        highlight="a conversation"
        sub="Tell us about your use case and we'll show you how SendAfrica fits into your workflow."
      />

      <section className="bg-background py-20">
        <div className="container-sendafrica grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {details.map((d) => (
              <div key={d.label} className="rounded-3xl border border-border bg-[var(--mist)] p-7">
                <span className="text-[var(--brand-bright)]">{d.icon}</span>
                <p className="mt-5 text-sm text-muted-foreground">{d.label}</p>
                <p className="mt-1 text-[17px] font-medium text-primary">{d.value}</p>
              </div>
            ))}
          </div>

          <ContactForm />
        </div>
      </section>

      <FaqSection />
      <CtaSection />
    </>
  );
}
