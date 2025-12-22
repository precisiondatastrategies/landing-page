import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./animations.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://precisiondatastrategies.com"),
  title: "Precision Data Strategies",
  description: "AI Automation for Every Conversation, Every Lead, Every Workflow.",
  openGraph: {
    title: "Precision Data Strategies",
    description: "AI Automation for Every Conversation, Every Lead, Every Workflow.",
    url: "https://precisiondatastrategies.com",
    siteName: "Precision Data Strategies",
    images: [
      {
        url: "/pds-logo.png",
        alt: "Precision Data Strategies Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Precision Data Strategies",
    description: "AI Automation for Every Conversation, Every Lead, Every Workflow.",
    images: ["/pds-logo.png"],
  },
  verification: {
    google: "qM1TDlwmBgF556RxKEoHVkz_HRCSrfG4-kyOmk8DFSM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GRW4M8WRTJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GRW4M8WRTJ');
          `}
        </Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


// -1200-1500 words
// -keyword density between 1%-1.5%
// -2-3 internal links with anchor text
// -3-5 external links from non-competing anchor text
// using Focus Keyword in the SEO Title.
// Focus Keyword used inside SEO Meta Description.
// Focus Keyword used in the URL.
// Focus Keyword appears in the first 10% of the content.
// Focus Keyword found in the subheading(s).
// Focus Keyword found in image alt attribute(s).
// URL under 70 characters total
// Focus Keyword used at the beginning of SEO title.
// Your title has a positive or a negative sentiment.
// Table of Contents plugin to break-down your text.
// You are using short paragraphs.
// Your content contains images and/or video(s).