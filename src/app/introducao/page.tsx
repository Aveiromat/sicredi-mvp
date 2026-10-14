import { gamePageMetadata } from "@/lib/seo";
export const metadata = gamePageMetadata(
  "Como jogar",
  "Conheça os seis desafios, acumule XP e descubra como desbloquear sua recompensa demonstrativa.",
  "/introducao",
);
import { Experience } from "@/components/game/experience";
export default function Page() {
  return <Experience screen="intro" />;
}
