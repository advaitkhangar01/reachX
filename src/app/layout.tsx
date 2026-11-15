import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import JsonLd from "@/components/seo/JsonLd";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reachex.io"),
  title: {
    default: "ReachX — #1 Social Media Marketing Agency (SMMA) & Meta Ads Specialist Near Me",
    template: "%s | ReachX",
  },
  description:
    "Top-rated social media marketing agency (SMMA) and certified Meta ads specialist near you. ReachX scales brands through precision Facebook & Instagram ads, live CAPI tracking, high-ROAS lead generation, and intelligent growth ecosystems.",
  keywords: [
    "social media marketing agency near me",
    "smma near me",
    "meta ads near me",
    "meta ads specialist",
    "performance marketing agency near me",
    "facebook ads agency near me",
    "instagram ads specialist",
    "best smma in nagpur",
    "social media marketing agency maharashtra",
    "lead generation agency india",
    "franchise marketing agency",
    "meta advertising agency",
    "paid social specialist",
    "conversion api specialist",
    "b2b performance marketing",
  ],
  authors: [{ name: "ReachX Team", url: "https://reachex.io" }],
  creator: "ReachX",
  publisher: "ReachX",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://reachex.io",
  },
  openGraph: {
    title: "ReachX — #1 Social Media Marketing Agency (SMMA) & Meta Ads Specialist Near Me",
    description:
      "Scaling brands beyond reach with high-ROAS Meta ad systems, CAPI tracking, and full-funnel lead generation.",
    url: "https://reachex.io",
    siteName: "ReachX",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ReachX — Leading SMMA & Meta Ads Specialist Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReachX — #1 Social Media Marketing Agency (SMMA) & Meta Ads Specialist",
    description:
      "Top-rated SMMA & Meta ads specialist scaling brands with precision performance marketing and high-ROAS creatives.",
    images: ["/og-image.jpg"],
    creator: "@reachex_io",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Nagpur, Maharashtra, India",
    "geo.position": "21.114011;79.041712",
    "ICBM": "21.114011, 79.041712",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-body antialiased selection:bg-rx-purple-vivid/20 selection:text-rx-purple-deep`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
