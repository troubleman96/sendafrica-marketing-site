import "@/styles.global.css";

import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Providers } from "./providers";
import { GeistSans, GeistMono } from "geist/font";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SendAfrica — Tanzania-first SMS automation API",
  description:
    "Send SMS across African mobile networks with SendAfrica's REST API. JWT and SA- API keys, idempotent sends, exact credit billing, and real-time delivery tracking.",
  authors: [{ name: "SendAfrica" }],
  openGraph: {
    title: "SendAfrica — Tanzania-first SMS automation API",
    description:
      "REST API for sending SMS across African mobile networks. JWT and API-key auth, 25 TZS per SMS part, real-time delivery.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.className} ${GeistMono.variable}`}>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
