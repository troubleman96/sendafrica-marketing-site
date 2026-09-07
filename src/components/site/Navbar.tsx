"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type NavLink = { label: string; to: string };

const topLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Features", to: "/features" },
  { label: "Developers", to: "/developers" },
  { label: "Pricing", to: "/pricing" },
];

const pageLinks: NavLink[] = [
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "Careers", to: "/career" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Conditions", to: "/terms-condition" },
];

function Dropdown({ label, items }: { label: string; items: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 rounded-full px-3 py-2 text-[15px] font-medium text-primary transition-colors hover:text-accent"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`absolute left-0 top-full z-50 w-56 pt-3 transition-all duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="rounded-2xl border border-border bg-card p-2 shadow-sendafrica-float">
          {items.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className="block rounded-xl px-3 py-2 text-sm font-medium text-primary transition-all hover:translate-x-1 hover:bg-muted hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 320 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`nav-shell pointer-events-none fixed inset-x-0 top-4 z-50 px-4 ${
        hidden && !mobileOpen ? "-translate-y-[140%]" : "translate-y-0"
      }`}
    >
      <nav
        className={`nav-shell pointer-events-auto mx-auto flex w-full items-center justify-between gap-2 rounded-[20px] border border-border backdrop-blur-xl ${
          scrolled
            ? "max-w-2xl bg-background/85 px-3 py-2 shadow-sendafrica-float"
            : "max-w-3xl bg-background/95 px-3 py-2.5 shadow-sendafrica-nav"
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="SendAfrica home">
          <img
            src="/SendAfrica-logo.png"
            alt="SendAfrica"
            className={`w-auto rounded-lg transition-all duration-300 ${scrolled ? "h-8" : "h-10"}`}
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {topLinks.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className="rounded-full px-3 py-2 text-[15px] font-medium text-primary transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
          <Dropdown label="Pages" items={pageLinks} />
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-xl border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex btn-sendafrica"
          >
            Get in Touch
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-primary md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="animate-in fade-in slide-in-from-top-3 duration-300 pointer-events-auto mx-auto mt-2 max-h-[75vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-border bg-card p-4 shadow-sendafrica-float md:hidden">
          <p className="px-2 pb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Navigate
          </p>
          {[...topLinks, ...pageLinks].map((l) => (
            <Link
              key={l.to}
              href={l.to}
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-2 py-2 font-medium text-primary"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block rounded-xl bg-primary px-4 py-3 text-center font-medium text-primary-foreground"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
