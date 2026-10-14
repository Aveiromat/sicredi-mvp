export function getSiteConfig(
  env: Record<string, string | undefined> = process.env,
) {
  const configured =
    env.NEXT_PUBLIC_SITE_URL ||
    (env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
      : env.VERCEL_URL
        ? `https://${env.VERCEL_URL}`
        : "http://localhost:3000");
  let origin = new URL("http://localhost:3000");
  try {
    const url = new URL(configured);
    if (url.protocol === "https:" || url.protocol === "http:") origin = url;
  } catch {
    /* Keep local fallback for invalid deployment configuration. */
  }
  return {
    url: origin.origin,
    indexable:
      env.NODE_ENV === "production" &&
      env.VERCEL_ENV !== "preview" &&
      origin.protocol === "https:" &&
      !["localhost", "127.0.0.1", "[::1]"].includes(origin.hostname),
  };
}
export const site = getSiteConfig();
export const siteName = "Sicredi Play";
export const siteTitle = "Sicredi Play | Desafios financeiros e brindes";
export const siteDescription =
  "Dê play em 6 desafios de educação financeira, descubra seu perfil e desbloqueie um brinde demonstrativo. Grátis, sem cadastro e em menos de 3 minutos.";
