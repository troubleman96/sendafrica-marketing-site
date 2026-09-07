import { createFileRoute } from "@tanstack/react-router";
import { CtaSection, PageHero } from "@/components/site/sections";

export const Route = createFileRoute("/terms-condition")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — SendAfrica" },
      {
        name: "description",
        content:
          "The terms that govern your use of the SendAfrica SMS API, including accounts, billing, acceptable use, and liability.",
      },
      { property: "og:title", content: "Terms & Conditions — SendAfrica" },
      {
        property: "og:description",
        content: "Terms governing accounts, billing, acceptable use, and liability on SendAfrica.",
      },
    ],
  }),
  component: Terms,
});

const sections = [
  {
    title: "Acceptance of terms",
    body: "By creating a SendAfrica account or using the API, you agree to these terms. If you are using SendAfrica on behalf of an organisation, you confirm you have authority to bind that organisation.",
  },
  {
    title: "Accounts",
    body: "You are responsible for keeping your credentials secure and for all activity that happens under your account. One account supports both JWT dashboard access and SA- API keys. Notify us immediately if you suspect unauthorised access.",
  },
  {
    title: "Billing",
    body: "Credits are charged per SMS part: 1 credit = 1 part. Credits are deducted atomically and idempotently — retries keyed with an Idempotency-Key never double-charge. You buy credits in packages or via pay-as-you-go vouchers, topped up by manual confirmation or mobile money.",
  },
  {
    title: "Acceptable use",
    body: "You may not use SendAfrica to store or transmit unlawful content, attempt to breach our security, reverse engineer the service, send to landlines, or resell access without written permission.",
  },
  {
    title: "Intellectual property",
    body: "SendAfrica retains all rights to the platform, brand, and software. You retain full ownership of the content and data you send through the API.",
  },
  {
    title: "Limitation of liability",
    body: "SendAfrica is provided on an as-is basis. To the maximum extent permitted by law, our aggregate liability is limited to the fees you paid in the twelve months before the claim.",
  },
];

function Terms() {
  return (
    <>
      <PageHero
        title="Terms of"
        highlight="Conditions"
        sub="Last updated September 1, 2025. Please read these terms carefully before using SendAfrica."
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
