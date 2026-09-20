import "@/styles.global.css";

import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { GeistMono } from "geist/font/mono";

import { Providers } from "./providers";
import { SiteLayout } from "@/components/layout/SiteLayout";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

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
    <html lang="en" className={`${outfit.variable} ${GeistMono.variable}`}>
      <body>
        <Providers>
          <SiteLayout>{children}</SiteLayout>
        </Providers>
      </body>
    </html>
  );
}
