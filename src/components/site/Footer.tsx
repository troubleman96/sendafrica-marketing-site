"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const columns: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Features", to: "/features" },
      { label: "Developers", to: "/developers" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    title: "Resource",
    links: [
      { label: "Testimonials", to: "/testimonials" },
      { label: "Blog", to: "/blog" },
      { label: "Careers", to: "/career" },
    ],
  },
  {
    title: "Utility pages",
    links: [
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Conditions", to: "/terms-condition" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--brand-deep)] text-white">
      <div
        className="absolute inset-0 bg-cover bg-bottom opacity-90"
        style={{ backgroundImage: "url(/images/footer-bg.avif)" }}
        aria-hidden
      />
      <div className="relative container-sendafrica pb-10 pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <img src="/SendAfrica-logo.png" alt="SendAfrica" className="h-10 rounded-lg" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">
              Tanzania-first SMS automation infrastructure for developers and teams. Send smarter,
              track delivery in real time, and scale from one message to millions across African
              mobile networks.
            </p>
            <a
              href="mailto:support@sendafrica.online"
              className="mt-6 inline-block text-sm text-white/90 underline-offset-4 hover:underline"
            >
              support@sendafrica.online
            </a>
            <div className="mt-16 flex items-center gap-6 text-white/85">
              <a href="https://www.facebook.com/" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-lg font-semibold text-white">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.to}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} SendAfrica. All rights reserved.</p>
          <p>Tanzania-first SMS automation for developers.</p>
        </div>
      </div>
    </footer>
  );
}
