import type { Metadata } from "next";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Toaster } from "react-hot-toast";

import Header from "../components/layout/Header";
import ConditionalFooter from "../components/layout/ConditionalFooter";
import SmoothScroll from "../components/ui/SmoothScroll";

const SITE_URL = "https://www.visionarydynamicsas.com";
const SITE_NAME = "Visionary Dynamics";
const DEFAULT_DESCRIPTION =
  "Visionary Dynamics offers expert accounting, IT asset management, and marketing solutions to help businesses streamline operations and drive growth.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Accounting, IT & Digital Marketing Services`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "accounting services",
    "bookkeeping",
    "payroll services",
    "taxation",
    "IT asset management",
    "digital marketing",
    "SEO services",
    "business analytics",
    "Visionary Dynamics",
    "St Petersburg Florida",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Accounting, IT & Digital Marketing Services`,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/VD-Logo-e1737873827576.png",
        width: 1200,
        height: 630,
        alt: "Visionary Dynamics — Business Consulting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visionary Dynamics | Digital, IT & Business Solutions",
    description: DEFAULT_DESCRIPTION,
    images: ["/VD-Logo-e1737873827576.png"],
    creator: "@VisionaryD64371",
    site: "@VisionaryD64371",
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "",   // Add Google Search Console verification token when available
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/VD-Logo-e1737873827576.png`,
  description: DEFAULT_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "7901 4th St N STE 300",
    addressLocality: "St. Petersburg",
    addressRegion: "FL",
    postalCode: "33702",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-727-564-9476",
    contactType: "customer service",
    email: "connect@visionarydynamicsas.com",
    availableLanguage: "English",
  },
  sameAs: [
    "https://in.linkedin.com/company/visionarydynamicsas",
    "https://x.com/VisionaryD64371",
    "https://www.facebook.com/visionarydynamicsas/",
    "https://www.instagram.com/visionary.dynamics/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <SmoothScroll>

          <Header />

          <main>{children}</main>

          <ConditionalFooter />

          {/* GLOBAL POPUP */}
          <Toaster
            position="top-right"
            reverseOrder={false}
          />

        </SmoothScroll>
      </body>
    </html>
  );
}
