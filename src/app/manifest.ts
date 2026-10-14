import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sicredi Play — Desafios financeiros",
    short_name: "Sicredi Play",
    description:
      "Desafios rápidos de educação financeira. Protótipo demonstrativo.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    lang: "pt-BR",
    background_color: "#f8faf6",
    theme_color: "#216849",
    icons: [
      {
        src: "/brand/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
