import type { Metadata, Viewport } from "next";
import { site, siteName, siteTitle, siteDescription } from "@/lib/site";
import { Shell } from "@/components/layout/shell";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: siteTitle, template: "%s | Sicredi Play" },
  description: siteDescription,
  applicationName: siteName,
  category: "education",
  alternates: { canonical: "/" },
  robots: { index: site.indexable, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/brand/social-card.png",
        width: 1200,
        height: 630,
        alt: "Sicredi Play — Dê play no desafio. Desbloqueie seu brinde. Protótipo demonstrativo.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/brand/social-card.png"],
  },
  icons: {
    icon: [
      { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/brand/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
};
export const viewport: Viewport = {
  themeColor: "#216849",
  colorScheme: "light",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip" href="#main">
          Pular para conteúdo
        </a>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
