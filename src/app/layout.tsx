import type { Metadata } from "next";
import { Shell } from "@/components/layout/shell";
import "./globals.css";
export const metadata: Metadata = {
  title: "Sicredi Play · Seu próximo nível",
  description:
    "Seis desafios rápidos para descobrir seu perfil financeiro. Protótipo educacional.",
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
