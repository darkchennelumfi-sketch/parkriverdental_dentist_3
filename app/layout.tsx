import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Manrope } from "next/font/google";

import { BackToTop } from "@/components/back-to-top";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteData, fullAddress } from "@/lib/site-data";

import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = "https://parkriverdental.com";
const title =
  "Park River Dental | Gentle Family & Cosmetic Dentistry";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Park River Dental",
  },
  description: siteData.description,
  applicationName: siteData.name,
  keywords: [
    "Park River Dental",
    "dentist Park River ND",
    "family dentistry",
    "cosmetic dentistry",
    "dental implants",
    "Invisalign",
    "Park River North Dakota dentist",
    "Dr. Nicholas Beneda",
    "Dr. Brian Larson",
    "Dr. Gretchen Brummond",
  ],
  authors: [{ name: siteData.name, url: siteUrl }],
  creator: siteData.name,
  publisher: siteData.name,
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteData.name,
    title,
    description: siteData.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Park River Dental — Gentle Family & Cosmetic Dentistry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteData.description,
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111225",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${siteUrl}/#dentist`,
  name: siteData.name,
  description: siteData.description,
  url: siteUrl,
  telephone: "+1-701-284-6131",
  email: siteData.email,
  image: `${siteUrl}/logo.png`,
  logo: `${siteUrl}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteData.address.line1,
    addressLocality: siteData.address.city,
    addressRegion: siteData.address.state,
    postalCode: siteData.address.zip,
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Park River",
    containedInPlace: { "@type": "State", name: "North Dakota" },
  },
  medicalSpecialty: "Dentistry",
  knowsAbout: siteData.services.map((service) => service.title),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  employee: siteData.doctors.map((doctor) => ({
    "@type": "Person",
    name: doctor.name,
    jobTitle: "Dentist",
    worksFor: { "@id": `${siteUrl}/#dentist` },
  })),
  sameAs: [siteData.social.facebook, siteData.social.google],
  hasMap: siteData.map.url,
  slogan: siteData.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${manrope.variable} ${plexMono.variable} font-sans`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream focus:shadow-xl focus:outline-none"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <BackToTop />
        <MobileActionBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <p className="sr-only">{fullAddress}</p>
      </body>
    </html>
  );
}
