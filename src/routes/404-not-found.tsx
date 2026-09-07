import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/404-not-found")({
  head: () => ({
    meta: [
      { title: "Page not found — SendAfrica" },
      { name: "description", content: "The page you're looking for doesn't exist or has moved." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Page not found — SendAfrica" },
      { property: "og:description", content: "The page you're looking for doesn't exist." },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-bg.avif)" }}
        aria-hidden
      />
      <div className="relative container-sendafrica flex min-h-screen flex-col items-center justify-center text-center">
        <p className="text-[110px] font-semibold leading-none text-[var(--brand-bright)]">404</p>
        <h1 className="mt-4 text-[34px] text-primary sm:text-[44px]">This page went missing</h1>
        <p className="mt-4 max-w-lg text-primary/75">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you
          back on track.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-xl bg-[var(--brand)] px-7 py-3.5 font-semibold text-primary-foreground shadow-sendafrica-card"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
