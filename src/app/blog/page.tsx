import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CtaSection, PageHero } from "@/components/site/sections";
import { blogPosts, featuredPosts, popularPosts } from "@/components/site/blog-data";

export const metadata: Metadata = {
  title: "SMS API and bulk messaging articles — SendAfrica",
  description:
    "30 practical articles on SMS APIs, bulk SMS, SDKs, campaigns, billing, webhooks, and developer workflows in Tanzania and across supported African networks.",
  openGraph: {
    title: "Ideas for developers shipping reliable SMS — SendAfrica",
    description:
      "Explore practical guides to the SendAfrica SMS API, bulk messaging, SDKs, billing, campaigns, and delivery tracking.",
  },
};

function Card({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-border bg-[var(--mist)] p-3">
      <Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`} className="block overflow-hidden rounded-2xl">
        <img src={post.image} alt={`Illustration for ${post.title}`} loading="lazy" className="h-48 w-full object-cover transition-transform duration-300 hover:scale-[1.03]" />
      </Link>
      <div className="flex flex-1 flex-col px-4 pb-4 pt-5">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{post.date} · {post.readTime}</p>
        <h2 className="mt-3 text-[20px] leading-snug text-primary">{post.title}</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-bright)]">
          Read more <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <>
      <PageHero
        title="Ideas for developers shipping reliable SMS"
        sub="Practical writing on API design, SMS billing, campaigns, and sending across African mobile networks."
      />

      <section className="bg-background py-20">
        <div className="container-sendafrica">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-bright)]">30 practical guides · January–September 2026</p>
            <h2 className="mt-3 text-[30px] text-primary">Featured articles</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((p) => (
              <Card key={p.slug} post={p} />
            ))}
          </div>

          <h2 className="mt-20 text-[30px] text-primary">Popular articles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popularPosts.map((p) => (
              <Card key={p.slug} post={p} />
            ))}
          </div>

          <h2 className="mt-20 text-[30px] text-primary">All articles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.filter((p) => !p.featured && !popularPosts.some((popular) => popular.slug === p.slug)).map((p) => (
              <Card key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
