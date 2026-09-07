import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaSection, PageHero } from "@/components/site/sections";
import { popularPosts, posts } from "@/components/site/data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — SendAfrica developer & SMS insights" },
      {
        name: "description",
        content:
          "Guides and ideas on API design, SMS billing, Tanzania mobile networks, campaigns, and developer best practices.",
      },
      { property: "og:title", content: "Blog — SendAfrica developer & SMS insights" },
      {
        property: "og:description",
        content:
          "Guides on API design, SMS billing, campaigns, and sending across African mobile networks.",
      },
    ],
  }),
  component: Blog,
});

function Card({ post }: { post: { title: string; excerpt: string; date: string } }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-border bg-[var(--mist)] p-3">
      <div className="h-44 rounded-2xl bg-[var(--brand)]/10" />
      <div className="flex flex-1 flex-col px-4 pb-4 pt-5">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{post.date}</p>
        <h2 className="mt-3 text-[20px] leading-snug text-primary">{post.title}</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <Link to="/developers" className="mt-5 text-sm font-medium text-[var(--brand-bright)]">
          Read more →
        </Link>
      </div>
    </article>
  );
}

function Blog() {
  return (
    <>
      <PageHero
        title="Ideas for developers"
        highlight="shipping reliable SMS"
        sub="Practical writing on API design, SMS billing, campaigns, and sending across African mobile networks."
      />

      <section className="bg-background py-20">
        <div className="container-sendafrica">
          <h2 className="text-[30px] text-primary">Featured articles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Card key={p.slug} post={p} />
            ))}
          </div>

          <h2 className="mt-20 text-[30px] text-primary">Popular articles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popularPosts.map((p) => (
              <Card key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
