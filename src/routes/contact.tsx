import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { CtaSection, FaqSection, PageHero } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SendAfrica — Talk to our team" },
      {
        name: "description",
        content:
          "Get in touch with SendAfrica for demos, support or partnership questions. We usually reply within one business day.",
      },
      { property: "og:title", content: "Contact SendAfrica — Talk to our team" },
      {
        property: "og:description",
        content: "Reach the SendAfrica team for demos, support or partnership questions.",
      },
    ],
  }),
  component: Contact,
});

const details = [
  { icon: <Mail className="h-5 w-5" />, label: "Email", value: "support@sendafrica.online" },
  { icon: <Clock className="h-5 w-5" />, label: "Office hours", value: "Mon–Fri, 8:00–17:00 EAT" },
  { icon: <MapPin className="h-5 w-5" />, label: "Based in", value: "Dar es Salaam, Tanzania" },
];

function Contact() {
  const [sent, setSent] = useState(false);

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

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl border border-border bg-[var(--mist)] p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-primary">First name</span>
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-[15px] text-primary outline-none focus:border-[var(--brand-bright)]"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-primary">Last name</span>
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-[15px] text-primary outline-none focus:border-[var(--brand-bright)]"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-primary">Email address</span>
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-[15px] text-primary outline-none focus:border-[var(--brand-bright)]"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-primary">Message</span>
                <textarea
                  required
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-[15px] text-primary outline-none focus:border-[var(--brand-bright)]"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 rounded-xl bg-[var(--brand)] px-7 py-3.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {sent ? "Message sent" : "Send message"}
            </button>
            {sent && (
              <p className="mt-3 text-sm text-[var(--brand-bright)]">
                Thanks — we&apos;ll be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </section>

      <FaqSection />
      <CtaSection />
    </>
  );
}
