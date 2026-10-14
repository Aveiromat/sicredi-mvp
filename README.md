# Sicredi Play

MVP educacional gamificado, mobile-first, para validar a percepção de modernidade e relevância do Sicredi entre jovens de 18 a 25 anos. Protótipo demonstrativo: sem campanha oficial, conta bancária, prêmio real ou coleta de dados pessoais.

## Executar

Requer Node.js 22.18+ (recomendado: 24 LTS) e npm.

```sh
npm ci
npm run dev
```

Acesse http://localhost:3000. O botão “Resetar progresso” aparece apenas em desenvolvimento.

```sh
npm test
npm run typecheck
npm run lint
npm run build
npm start
```

## Rotas

- `/`: landing
- `/introducao`: regras e retomada
- `/desafio`: seis questões e dois microconteúdos (após questões 2 e 4)
- `/resultado`: perfil, XP e acertos
- `/recompensa`: quatro brindes ilustrativos e código fictício
- `/abrir-conta`: simulação sem formulário ou transmissão de dados
- `/admin`: painel público com métricas totalmente fictícias

## Arquitetura

Next.js App Router, React, TypeScript estrito e Tailwind CSS 4. Páginas são componentes de servidor; a experiência interativa usa um componente cliente. Ilustração da landing feita em CSS, sem imagens remotas ou fontes dependentes de rede.

- `src/data/questions.ts`: perguntas, alternativas, explicações e microconteúdos.
- `src/data/rewards.ts`: brindes e campanha fictícia.
- `src/lib/game.ts`: regras puras, recuperação validada e classificação; sem dependência de React, DOM ou Next.js.
- `src/lib/storage.ts`: adaptador de localStorage com tratamento de indisponibilidade.
- `src/types/game.ts`: contratos do jogo.
- `src/components/game/experience.tsx`: fluxo de interface.
- `src/components/layout/shell.tsx` e `src/components/ui/button.tsx`: componentes compartilhados.

Cada acerto vale 100 XP, sem penalização por erro. Perfis: 0–2 acertos = Explorador Financeiro; 3–4 = Organizador; 5–6 = Jovem Estrategista. Respostas duplicadas e saltos são rejeitados. O estado persistido é validado e a pontuação recalculada. A conclusão protege as telas finais apenas para coerência da demonstração, sem representar segurança/autenticação. Progresso fica restrito ao navegador/dispositivo.

A separação das regras permite uma futura adaptação a TikTok Mini Games substituindo interface e persistência. Nenhum SDK ou integração TikTok foi incluído.

## Deploy na Vercel

1. Publique este repositório no GitHub.
2. Na Vercel, escolha Add New → Project e importe o repositório.
3. Mantenha o preset Next.js, raiz do projeto e comandos padrão (`npm run build`).
4. Selecione Node.js 24 e clique em Deploy.

Não há variáveis de ambiente, banco de dados ou serviços externos para configurar. Não é necessário `vercel.json`. Depois do deploy, percorra o desafio até a simulação e confira `/admin`.

## Métricas e hipótese

Os números de `/admin` são fixos e não medem visitantes reais. 73% é a taxa arredondada de conclusão (912/1.240); 23% representa intenção via clique (286/1.240), não contas abertas. Uma próxima rodada de validação pode medir eventos e percepção antes/depois, mediante definição de consentimento e instrumentação. Nenhuma plataforma analítica foi adicionada.

## Acessibilidade

HTML em pt-BR, foco visível, link para pular navegação, áreas de toque grandes, progresso com ARIA, feedback anunciado e respeito à preferência por movimento reduzido. Conteúdo do jogo limitado a 430px; landing e painel adaptados para desktop.
