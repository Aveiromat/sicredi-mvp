import { gamePageMetadata } from "@/lib/seo";
export const metadata = gamePageMetadata(
  "Desafio financeiro",
  "Responda situações rápidas sobre cartão, reserva, planejamento e seu primeiro negócio.",
  "/desafio",
);
import { Experience } from "@/components/game/experience";
export default function Page() {
  return <Experience screen="game" />;
}
