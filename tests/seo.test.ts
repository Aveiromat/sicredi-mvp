import { it } from "node:test";
import assert from "node:assert/strict";
import { getSiteConfig } from "../src/lib/site.ts";
it("usa domínio personalizado e o domínio de produção da Vercel para URLs canônicas", () => {
  assert.equal(
    getSiteConfig({ NEXT_PUBLIC_SITE_URL: "https://play.example.com/" }).url,
    "https://play.example.com",
  );
  assert.equal(
    getSiteConfig({
      VERCEL_PROJECT_PRODUCTION_URL: "demo.vercel.app",
      VERCEL_URL: "preview.vercel.app",
    }).url,
    "https://demo.vercel.app",
  );
});
it("evita indexação local e de previews, mesmo com domínio de produção configurado", () => {
  assert.equal(getSiteConfig({}).indexable, false);
  assert.equal(
    getSiteConfig({
      NODE_ENV: "production",
      VERCEL_ENV: "preview",
      VERCEL_PROJECT_PRODUCTION_URL: "demo.vercel.app",
    }).indexable,
    false,
  );
  assert.equal(
    getSiteConfig({
      NODE_ENV: "production",
      VERCEL_ENV: "production",
      VERCEL_PROJECT_PRODUCTION_URL: "demo.vercel.app",
    }).indexable,
    true,
  );
  assert.equal(
    getSiteConfig({ NEXT_PUBLIC_SITE_URL: "invalid url" }).url,
    "http://localhost:3000",
  );
});
