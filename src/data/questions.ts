import type { Question } from "../types/game.ts";
export const questions: Question[] = [
  {
    id: "credit",
    topic: "Cartão de crédito",
    title: "R$ 1.000 de limite. Você tem R$ 1.000 para gastar?",
    options: ["Sim, o dinheiro é meu", "Não, é dinheiro emprestado"],
    correct: 1,
    explanation:
      "Limite é crédito, não saldo. O que você usa vira uma conta para pagar.",
    symbol: "💳",
  },
  {
    id: "reserve",
    topic: "Reserva de emergência",
    title: "O celular quebrou. De onde deveria sair o conserto?",
    options: [
      "Da reserva de emergência",
      "De mais uma parcela no cartão",
      "Do dinheiro do aluguel",
    ],
    correct: 0,
    explanation:
      "A reserva ajuda nos imprevistos sem comprometer as contas essenciais.",
    symbol: "🛟",
  },
  {
    id: "profit",
    topic: "Seu primeiro negócio",
    title: "Vendeu R$ 2.000 e gastou R$ 1.500. Quanto sobrou?",
    options: ["R$ 2.000 de lucro", "R$ 500 de lucro", "R$ 1.500 de lucro"],
    correct: 1,
    explanation:
      "Lucro é o que sobra da receita depois de todos os custos e despesas.",
    symbol: "📦",
  },
  {
    id: "business",
    topic: "CPF × CNPJ",
    title: "Seu negócio começou a render. Misturar as contas é uma boa?",
    options: ["Verdadeiro: é tudo meu", "Falso: melhor separar"],
    correct: 1,
    explanation:
      "Separar dinheiro pessoal e do negócio ajuda a enxergar os resultados reais.",
    symbol: "🧩",
  },
  {
    id: "salary",
    topic: "Pró-labore",
    title: "Você trabalha no próprio negócio. O que é pró-labore?",
    options: [
      "Todo o dinheiro que entrou",
      "Um empréstimo da empresa",
      "A remuneração pelo seu trabalho",
    ],
    correct: 2,
    explanation:
      "Pró-labore remunera o trabalho de quem é sócio. É diferente da distribuição de lucro.",
    symbol: "💸",
  },
  {
    id: "plan",
    topic: "Planejamento",
    title: "O salário caiu. Qual é o primeiro movimento?",
    options: [
      "Organizar contas, metas e o que posso gastar",
      "Comprar agora e conferir depois",
      "Usar tudo e esperar o próximo",
    ],
    correct: 0,
    explanation:
      "Um plano simples dá direção ao dinheiro e deixa espaço para os seus objetivos.",
    symbol: "🎯",
  },
];
export const lessons = [
  {
    after: 2,
    title: "Um respiro para os imprevistos.",
    kicker: "RESERVA DE EMERGÊNCIA",
    symbol: "🛟",
    text: "Comece com o que cabe no seu bolso. Guardar um pouco com frequência já é um primeiro passo.",
    tip: "Pequenos valores. Um hábito gigante.",
    duration: "25 s",
  },
  {
    after: 4,
    title: "Entrou dinheiro. Mas é tudo seu?",
    kicker: "VIDA REAL, SEM COMPLICAÇÃO",
    symbol: "📦",
    text: "Faturamento é tudo que entra. Lucro é o que sobra depois dos custos. E a conta do negócio merece seu próprio espaço.",
    tip: "Separe as contas. Enxergue o resultado.",
    duration: "20 s",
  },
];
