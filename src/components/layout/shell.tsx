"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { resetProgress } from "@/lib/storage";
export function Shell({ children }: { children: ReactNode }) {
  const path = usePathname();
  const router = useRouter();
  return (
    <div className="app-shell">
      <header className="header">
        <Link href="/" className="brand" aria-label="Sicredi Play, início">
          <span className="brand-symbol">✳</span>
          <span>
            sicredi<span className="brand-play">play</span>
          </span>
        </Link>
        <nav aria-label="Navegação principal">
          <Link className={path === "/" ? "active" : ""} href="/">
            O desafio
          </Link>
          <Link
            className={path === "/recompensa" ? "active" : ""}
            href="/recompensa"
          >
            Recompensas ↗
          </Link>
        </nav>
        <span className="prototype">● EXPERIÊNCIA DEMO</span>
      </header>
      <main id="main">{children}</main>
      <footer className="footer">
        <span>Um próximo passo. Muitas possibilidades.</span>
        <span>
          Protótipo educacional · Sem campanha oficial{" "}
          <Link href="/admin">Métricas ↗</Link>
        </span>
      </footer>
      {process.env.NODE_ENV === "development" && (
        <button
          className="reset"
          onClick={() => {
            resetProgress();
            router.push("/");
            router.refresh();
          }}
        >
          Resetar progresso
        </button>
      )}
    </div>
  );
}
