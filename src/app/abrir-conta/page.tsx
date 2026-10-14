import { gamePageMetadata } from "@/lib/seo";
export const metadata = gamePageMetadata(
  "Simulação de abertura de conta",
  "Experimente uma abertura de conta fictícia. Nenhuma conta bancária real é criada.",
  "/abrir-conta",
);
import { Experience } from "@/components/game/experience";
export default function Page() {
  return <Experience screen="account" />;
}
