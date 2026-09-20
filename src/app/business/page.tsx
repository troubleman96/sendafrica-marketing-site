import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  CircleDollarSign,
  Code2,
  ContactRound,
  FileText,
  MessageSquareText,
  ShieldCheck,
  Smartphone,
  WalletCards,
} from "lucide-react";
import { PageHero } from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "SMS for Tanzanian businesses — SendAfrica",
  description:
    "Send appointment reminders, payment alerts and bulk SMS campaigns with SendAfrica. Manage contacts, Sender IDs, credits and delivery reports in one place.",
  openGraph: {
    title: "SMS for Tanzanian businesses — SendAfrica",
    description:
      "Reach customers with transactional SMS and campaigns. Start with the dashboard or integrate the SMS API into your business.",
  },
};

const workflows = [
  {
    icon: <BellRing className="h-6 w-6" />,
    title: "Reminders and service updates",
    body: "Send appointment reminders, booking confirmations, order updates and other messages customers need at the right point in their journey.",
  },
  {
    icon: <WalletCards className="h-6 w-6" />,
    title: "Payment and account alerts",
    body: "Notify customers when a payment is recorded, an account changes or an important action needs their attention. Trigger messages from your own system through the API.",
  },
  {
    icon: <MessageSquareText className="h-6 w-6" />,
    title: "Bulk SMS campaigns",
    body: "Organise customer numbers into contact lists, compose a campaign and schedule it for the time that suits your audience.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Verification messages",
    body: "Send codes and account-verification messages from your application, with idempotency support to make safe retries easier to manage.",
  },
];

const steps = [
  {
    title: "Create your account",
    body: "Set up your SendAfrica account and choose whether your team will work in the dashboard, integrate the API, or use both.",
  },
  {
    title: "Add contacts and a sender",
    body: "Import a contact list for campaigns or connect your application. Submit a branded Sender ID for review when your use case needs one.",
  },
  {
    title: "Send and follow results",
    body: "Send a test, then track message states and campaign progress in your account. Delivery reports update as network reports arrive.",
  },
];

function SectionTitle({ title, text }: { title: string; text: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-[32px] leading-[1.1] text-primary sm:text-[42px]">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

export default function Business() {
  return (
    <>
      <PageHero
        title="Make every customer message count."
        sub="Keep customers informed with service updates, payment alerts and bulk SMS campaigns. SendAfrica gives your team one place to manage messaging across Tanzania — from the first send to the delivery report."
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://app.sendafrica.online/auth/sign-up"
            className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[var(--brand)] px-6 py-3 font-semibold text-primary-foreground shadow-sendafrica-card transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand)]"
          >
            Create your account <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex min-h-12 items-center rounded-xl border border-white/70 bg-white/90 px-6 py-3 font-semibold text-primary transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            View pricing
          </Link>
        </div>
      </PageHero>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-sendafrica">
          <Reveal variant="blur">
            <SectionTitle
              title="Messaging that fits the way your business works"
              text="Start with a campaign in the dashboard, or connect your own software to send messages when business events happen. Both paths use the same account, credits and message history."
            />
          </Reveal>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {workflows.map((workflow, index) => (
              <Reveal key={workflow.title} variant="up" delay={index * 60}>
                <article className="grid gap-4 py-7 sm:grid-cols-[52px_0.8fr_1.2fr] sm:items-start sm:gap-7 sm:py-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--mist)] text-[var(--brand-bright)]">
                    {workflow.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{workflow.title}</h3>
                  <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                    {workflow.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--mist)] py-20 sm:py-24">
        <div className="container-sendafrica grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal variant="left">
            <SectionTitle
              title="A straightforward path from setup to send"
              text="Give your operations team a useful workflow from day one, then connect the API when messaging needs to become part of your product or internal systems."
            />
            <Link
              href="/developers"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[var(--brand-bright)] underline underline-offset-4 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand)]"
            >
              Explore the developer platform <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <div className="divide-y divide-border border-y border-border">
            {steps.map((step, index) => (
              <Reveal key={step.title} variant="right" delay={index * 80}>
                <article className="grid gap-3 py-6 sm:grid-cols-[42px_1fr] sm:gap-5">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-[var(--brand-bright)]"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="container-sendafrica grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal variant="left">
            <SectionTitle
              title="Know what you spend and what happened"
              text="SMS uses credits, with one credit charged per message part. Longer messages and some character sets can use more than one part, so check the pricing details before you plan a large send."
            />
            <Link
              href="/pricing"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[var(--brand-bright)] underline underline-offset-4 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand)]"
            >
              See plans, rates and credit details{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal variant="right" className="border-y border-border">
            <ul className="divide-y divide-border">
              <li className="flex gap-4 py-5">
                <CircleDollarSign
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-bright)]"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-primary">Pay for message parts</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Review the current credit packages and rates before topping up. Your balance
                    follows recorded credit transactions.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 py-5">
                <ContactRound
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-bright)]"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-primary">Choose the right sending route</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Use campaigns and contact lists for planned audience sends, or integrate the SMS
                    API for messages triggered by your software.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 py-5">
                <Smartphone
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-bright)]"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-primary">Read status with context</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    A successful API response confirms submission. Delivery reports arrive
                    separately as supported network updates are received.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 py-5">
                <FileText
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-bright)]"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-primary">Request a branded Sender ID</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Submit the required business information and track the registration review
                    before using an approved Sender ID.
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--brand)] py-16 text-primary-foreground sm:py-20">
        <Reveal
          variant="blur"
          className="container-sendafrica flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Ready to bring your customer messages together?
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-primary-foreground/85">
              Create an account to explore the dashboard, campaigns, credits and API tools for your
              business.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="https://app.sendafrica.online/auth/sign-up"
              className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-primary transition-colors hover:bg-[var(--mist)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Get started <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/developers"
              className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/50 px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Code2 className="h-4 w-4" aria-hidden="true" /> API docs
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
