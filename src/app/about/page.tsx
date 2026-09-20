import type { Metadata } from "next";
import { ArrowRight, CreditCard, MessageSquareText, RadioTower } from "lucide-react";
import Link from "next/link";
import { CtaSection, PageHero } from "@/components/site/sections";

export const metadata: Metadata = {
  title: "About SendAfrica — SMS tools for African teams",
  description:
    "Meet the SendAfrica team and learn how our SMS API, campaigns, credit billing, and delivery reports help teams manage customer messaging.",
  openGraph: {
    title: "About SendAfrica",
    description:
      "The people and product behind SendAfrica's SMS API and customer messaging platform.",
  },
};

const team = [
  { name: "Ditrick Mpangile", role: "Co-founder & CEO", img: "/images/team-1.avif" },
  { name: "Emmanuel Lugenge", role: "Head of Engineering", img: "/images/team-2.avif" },
  { name: "Mohamed Sinani", role: "Product Lead", img: "/images/team-3.avif" },
  { name: "Charity", role: "Head of Developer Relations", img: "/images/team-4.avif" },
];

const focus = [
  {
    icon: RadioTower,
    title: "Built around messaging workflows",
    text: "Run contact-list campaigns from the dashboard or connect your application through the REST API and SDKs.",
  },
  {
    icon: CreditCard,
    title: "Understand usage as you send",
    text: "Credits are charged per SMS part. Message length and character set determine how many parts a message uses.",
  },
  {
    icon: MessageSquareText,
    title: "Follow messages beyond submission",
    text: "See message records in your account and use asynchronous delivery reports to learn when network updates arrive.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        title="SMS tools, built for the work behind every message"
        sub="SendAfrica brings customer messaging workflows, developer tools, and usage visibility together for businesses and teams in Tanzania and across supported destinations."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="container-sendafrica">
          <video
            src="/SendAfrica.mp4"
            autoPlay
            muted
            loop
            controls
            playsInline
            preload="metadata"
            className="w-full rounded-3xl object-cover"
            aria-label="SendAfrica branding video"
          />
          <div className="mt-14 grid gap-x-10 md:grid-cols-[0.75fr_1.25fr] md:items-start">
            <h2 className="text-[32px] leading-tight text-primary sm:text-[40px]">
              One place for the work around an SMS
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground md:mt-0">
              A message is only one part of customer communication. Teams also need to prepare
              audiences, integrate sending into their own systems, understand credit usage, and
              follow delivery status. SendAfrica gives those workflows a shared home.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--mist)] py-16 sm:py-20">
        <div className="container-sendafrica">
          <div className="max-w-2xl">
            <h2 className="text-[32px] leading-tight text-primary sm:text-[40px]">
              What we focus on
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Practical tools for operators and developers, with clear billing and useful message
              status information built into the workflow.
            </p>
          </div>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {focus.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="grid gap-4 py-6 sm:grid-cols-[32px_0.8fr_1.2fr] sm:items-start sm:gap-6"
              >
                <Icon aria-hidden="true" className="h-6 w-6 text-[var(--brand-bright)]" />
                <h3 className="text-lg font-semibold text-primary">{title}</h3>
                <p className="max-w-2xl leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
          <Link
            href="/developers"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-[var(--brand-bright)] underline underline-offset-4 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand)]"
          >
            Explore the developer platform <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-sendafrica">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[32px] leading-tight text-primary sm:text-[42px]">
              Meet the people behind SendAfrica
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A team working across company leadership, engineering, product, and developer
              relations.
            </p>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person) => (
              <article key={person.name} className="flex flex-col items-center text-center">
                <img
                  src={person.img}
                  alt=""
                  width={144}
                  height={144}
                  loading="lazy"
                  className="h-32 w-32 rounded-full border-4 border-[var(--mist)] object-cover object-center shadow-sendafrica-card sm:h-36 sm:w-36"
                />
                <h3 className="mt-5 text-lg font-semibold text-primary">{person.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{person.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
