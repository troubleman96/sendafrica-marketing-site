import Link from "next/link";
import type { Metadata } from "next";
import { CtaSection, PageHero } from "@/components/site/sections";

export const metadata: Metadata = {
  title: "Privacy Policy — SendAfrica",
  description:
    "How SendAfrica collects, uses, stores and protects your personal information across our website and API.",
  openGraph: {
    title: "Privacy Policy — SendAfrica",
    description: "How SendAfrica collects, uses, stores and protects your personal information.",
  },
};

const sections = [
  {
    title: "Information we collect",
    body: "We collect the information you provide when registering, contacting support, or sending SMS through SendAfrica — including your name, email address, company, phone number, and usage data that helps us improve the API.",
  },
  {
    title: "How we use your information",
    body: "Your information is used to operate and improve the service, authenticate your requests, process SMS and payments, send important product updates, and keep the platform secure. We never sell your personal data.",
  },
  {
    title: "Data storage and security",
    body: "SendAfrica uses advanced encryption in transit and at rest, regular backups, and strict access controls. Credit mutations are atomic and idempotent, and only authorised personnel can access production systems — all access is logged.",
  },
  {
    title: "Cookies",
    body: "We use cookies and similar technologies to keep you signed in, remember your preferences, and understand how the API is used so we can make it better.",
  },
  {
    title: "Your rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time by contacting support@sendafrica.online. We respond to all requests within 30 days.",
  },
  {
    title: "Changes to this policy",
    body: "We may update this policy from time to time. Material changes will be communicated by email or through an in-product notice before they take effect.",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy"
        highlight="Policy"
        sub="Last updated September 1, 2025. Your privacy matters to us, and this page explains exactly how we handle your data."
      />
      <section className="bg-background py-20">
        <div className="container-sendafrica mx-auto max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-[26px] text-primary">{s.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
