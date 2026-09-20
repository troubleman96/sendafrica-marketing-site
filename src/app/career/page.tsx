import Link from "next/link";
import { ArrowRight, Code2, MessageSquareText, RadioTower } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/site/sections";

export const metadata: Metadata = {
  title: "Careers — Build SendAfrica with us",
  description:
    "Learn about the engineering, product, and developer experience work behind SendAfrica. Check current openings or contact the team about future opportunities.",
  openGraph: {
    title: "Careers at SendAfrica",
    description:
      "Help build messaging tools for developers and businesses in Tanzania and across Africa.",
  },
};

const areas = [
  {
    icon: RadioTower,
    title: "Messaging infrastructure",
    text: "Build reliable APIs, campaign processing, delivery tracking, and credit accounting for real-world SMS workloads.",
  },
  {
    icon: Code2,
    title: "Developer experience",
    text: "Make integrations easier through SDKs, practical documentation, testing tools, and clear error handling.",
  },
  {
    icon: MessageSquareText,
    title: "Product and customer workflows",
    text: "Shape the dashboard and account tools that help teams manage contacts, campaigns, credits, and Sender IDs.",
  },
];

export default function Career() {
  return (
    <>
      <PageHero
        title="Build messaging tools for Africa"
        sub="SendAfrica works on the infrastructure and product experience behind customer messaging. Explore the kinds of problems our team solves and get in touch about future opportunities."
      >
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[var(--brand)] px-6 py-3 font-semibold text-primary-foreground shadow-sendafrica-card transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Contact the team <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-sendafrica">
          <div className="max-w-3xl">
            <h2 className="text-[32px] leading-tight text-primary sm:text-[42px]">
              Problems worth working on
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our work spans the message lifecycle: helping businesses send, helping developers
              integrate, and helping teams understand what happened after a request.
            </p>
          </div>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {areas.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="grid gap-4 py-7 sm:grid-cols-[48px_0.8fr_1.2fr] sm:items-start sm:gap-7 sm:py-8"
              >
                <Icon aria-hidden="true" className="h-6 w-6 text-[var(--brand-bright)]" />
                <h3 className="text-xl font-semibold text-primary">{title}</h3>
                <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-5 border-t border-border pt-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-primary">
                No active roles are listed right now
              </h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
                We’ll post openings here when applications are open. If you’d like to introduce
                yourself for a future role, contact the team with a short note about your
                experience.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-12 w-fit items-center gap-2 rounded-xl bg-[var(--mist)] px-5 py-3 font-semibold text-primary transition-colors hover:bg-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand)]"
            >
              Ask about future roles <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
