import "@/styles.global.css";

import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";

import { Providers } from "./providers";
import { SiteLayout } from "@/components/layout/SiteLayout";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sendafrica.online"),
  title: "Bulk SMS Tanzania & SMS automation API | SendAfrica",
  description:
    "Bulk SMS Tanzania made reliable. Send SMS campaigns and automated messages across African mobile networks with SendAfrica's REST API, exact credit billing, and real-time delivery tracking.",
  keywords: [
    "bulk SMS Tanzania",
    "bulk SMS service Tanzania",
    "SMS marketing Tanzania",
    "SMS API Tanzania",
    "Tanzania SMS gateway",
    "SendAfrica",
  ],
  authors: [{ name: "SendAfrica" }],
  openGraph: {
    title: "Bulk SMS Tanzania & SMS automation API | SendAfrica",
    description:
      "Bulk SMS Tanzania and SMS automation for businesses and developers. Send campaigns through a reliable REST API with delivery reports and transparent credit billing.",
    url: "https://sendafrica.online",
    siteName: "SendAfrica",
    locale: "en_US",
    images: [
      {
        url: "/SendAfrica-logo.png",
        width: 512,
        height: 512,
        alt: "SendAfrica logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SendAfrica — SMS automation API",
    description:
      "Send SMS across African mobile networks with SendAfrica's REST API.",
    images: ["/SendAfrica-logo.png"],
  },
  alternates: { canonical: "https://sendafrica.online" },
  icons: {
    icon: [
      { url: "/SendAfrica-logo.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/SendAfrica-logo.png", sizes: "512x512" }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${GeistMono.variable}`}>
      <body>
        <Script
          defer
          src="https://analytics.camelcreatives.com/tracker.js"
          data-site="sendafrica"
        />
        <Providers>
          <SiteLayout>{children}</SiteLayout>
        </Providers>
      </body>
    </html>
  );
}
