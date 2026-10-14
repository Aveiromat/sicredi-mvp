import { gamePageMetadata } from "@/lib/seo";
export const metadata = gamePageMetadata(
  "Seu perfil financeiro",
  "Veja seus acertos, XP e perfil lúdico ao concluir o desafio.",
  "/resultado",
);
import { Experience } from "@/components/game/experience";
export default function Page() {
  return <Experience screen="result" />;
}
