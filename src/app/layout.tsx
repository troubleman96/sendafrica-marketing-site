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
  title: "SendAfrica — SMS automation API",
  description:
    "Send SMS across African mobile networks with SendAfrica's REST API. JWT and SA- API keys, idempotent sends, exact credit billing, and real-time delivery tracking.",
  authors: [{ name: "SendAfrica" }],
  openGraph: {
    title: "SendAfrica — SMS automation API",
    description:
      "REST API for sending SMS across African mobile networks. JWT and API-key auth, 25Tsh per SMS part, real-time delivery.",
    images: ["/SendAfrica-logo.png"],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/SendAfrica-logo.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
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
