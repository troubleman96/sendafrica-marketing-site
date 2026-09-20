import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/site/sections";
import { blogPosts, getBlogPost } from "@/components/site/blog-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — SendAfrica`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image], type: "article", publishedTime: new Date(post.date).toISOString() },
  };
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="bg-background pb-20">
        <div className="container-sendafrica pt-10">
          <Link href="/blog" className="text-sm font-medium text-[var(--brand-bright)]">← All articles</Link>
          <header className="mx-auto mt-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-bright)]">{post.category}</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-primary sm:text-6xl">{post.title}</h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <p className="mt-5 text-sm text-muted-foreground">{post.date} <span aria-hidden="true">·</span> {post.readTime}</p>
          </header>
          <figure className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-border bg-[var(--mist)]">
            <img src={post.image} alt={`Illustration for ${post.title}`} className="aspect-[16/8] w-full object-cover" />
          </figure>
          <div className="mx-auto mt-14 max-w-3xl">
            {post.content.map((section) => (
              <section key={section.heading} className="mb-10">
                <h2 className="text-2xl font-semibold text-primary sm:text-3xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index} className="mt-4 text-lg leading-8 text-muted-foreground">{paragraph}</p>
                ))}
              </section>
            ))}
            <p className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
              Technical details can change. Check the current <a className="text-[var(--brand-bright)] underline" href="https://docs.sendafrica.online">SendAfrica developer documentation</a> before deploying an integration.
            </p>
            <Link href="/blog" className="mt-8 inline-block font-medium text-[var(--brand-bright)]">← Browse more articles</Link>
          </div>
        </div>
      </article>
      <CtaSection />
    </>
  );
}
