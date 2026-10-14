import { gamePageMetadata } from "@/lib/seo";
export const metadata = gamePageMetadata(
  "Sua recompensa",
  "Conheça os brindes ilustrativos desbloqueados na campanha demonstrativa.",
  "/recompensa",
);
import { Experience } from "@/components/game/experience";
export default function Page() {
  return <Experience screen="reward" />;
}
