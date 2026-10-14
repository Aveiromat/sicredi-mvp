import type { Metadata } from "next";
import { site, siteName } from "./site";
export function gamePageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: false, follow: path !== "/admin" },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: `${site.url}${path}`,
      siteName,
      locale: "pt_BR",
      type: "website",
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
      title: `${title} | ${siteName}`,
      description,
      images: ["/brand/social-card.png"],
    },
  };
}
