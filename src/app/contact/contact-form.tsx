"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border border-border bg-[var(--mist)] p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-primary">First name</span>
          <input
            required
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-[15px] text-primary outline-none focus:border-[var(--brand-bright)]"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-primary">Last name</span>
          <input
            required
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-[15px] text-primary outline-none focus:border-[var(--brand-bright)]"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-primary">Email address</span>
          <input
            required
            type="email"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-[15px] text-primary outline-none focus:border-[var(--brand-bright)]"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-primary">Message</span>
          <textarea
            required
            rows={5}
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-[15px] text-primary outline-none focus:border-[var(--brand-bright)]"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 rounded-xl bg-[var(--brand)] px-7 py-3.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        {sent ? "Message sent" : "Send message"}
      </button>
      {sent && (
        <p className="mt-3 text-sm text-[var(--brand-bright)]">
          Thanks — we&apos;ll be in touch shortly.
        </p>
      )}
    </form>
  );
}
