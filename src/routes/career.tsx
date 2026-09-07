import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaSection, PageHero } from "@/components/site/sections";
import { jobs } from "@/components/site/data";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — Build SendAfrica with us" },
      {
        name: "description",
        content:
          "Open roles across engineering, product, and developer relations at SendAfrica. Build Tanzania-first SMS infrastructure used by developers across East Africa.",
      },
      { property: "og:title", content: "Careers — Build SendAfrica with us" },
      {
        property: "og:description",
        content: "Open roles in engineering, product, and developer relations at SendAfrica.",
      },
    ],
  }),
  component: Career,
});

function Career() {
  return (
    <>
      <PageHero
        title="Come build the"
        highlight="future of SMS in Africa"
        sub="We're a focused team building the SMS automation platform developers trust across East Africa. Join us."
      />

      <section className="bg-background py-20">
        <div className="container-sendafrica space-y-4">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="flex flex-col gap-5 rounded-3xl border border-border bg-[var(--mist)] p-8 md:flex-row md:items-center md:justify-between"
            >
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{job.date}</p>
                <h2 className="mt-2 text-[24px] text-primary">{job.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{job.body}</p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 rounded-xl bg-[var(--brand)] px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Apply now
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
