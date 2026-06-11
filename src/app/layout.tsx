import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

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
  title: "Reachex — Performance Marketing & Growth Agency",
  description: "Scaling brands beyond reach through performance marketing, intelligent systems, premium creatives, and conversion-driven growth.",
  keywords: ["performance marketing", "digital agency", "lead generation", "franchise growth", "meta ads", "google ads"],
  openGraph: {
    title: "Reachex — Scaling Brands Beyond Reach",
    description: "Scaling brands beyond reach through performance marketing, intelligent systems, and premium creatives.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: { 
    card: 'summary_large_image',
    title: "Reachex — Scaling Brands Beyond Reach",
    description: "Scaling brands beyond reach through performance marketing, intelligent systems, and premium creatives.",
  },
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-body antialiased selection:bg-rx-purple-vivid/20 selection:text-rx-purple-deep`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
