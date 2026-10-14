import { questions } from "../data/questions.ts";
import type { GameState } from "../types/game.ts";
export const initialState: GameState = {
  answers: [],
  completed: false,
  seenLessons: [],
  accountSimulated: false,
};
export function answerQuestion(
  state: GameState,
  id: string,
  option: number,
): GameState {
  const q = questions[state.answers.length];
  if (
    !q ||
    q.id !== id ||
    !Number.isInteger(option) ||
    option < 0 ||
    option >= q.options.length
  )
    return state;
  const answers = [...state.answers, { questionId: id, option }];
  return { ...state, answers, completed: answers.length === questions.length };
}
export function summarize(state: GameState) {
  const correct = state.answers.filter(
    (a) => questions.find((q) => q.id === a.questionId)?.correct === a.option,
  ).length;
  return {
    correct,
    xp: correct * 100,
    percent: Math.round((correct / questions.length) * 100),
    profile:
      correct >= 5
        ? "Jovem Estrategista"
        : correct >= 3
          ? "Organizador"
          : "Explorador Financeiro",
    message:
      correct >= 5
        ? "Você já entende bem os fundamentos. Agora é hora de transformar conhecimento em hábito."
        : correct >= 3
          ? "Você está conectando os pontos. Um pouco de organização hoje abre espaço para os seus planos de amanhã."
          : "Toda jornada começa com uma descoberta. Você já deu o primeiro passo para cuidar melhor do seu dinheiro.",
  };
}
export function restoreState(raw: string | null): GameState {
  try {
    const parsed = JSON.parse(raw ?? "null");
    if (!parsed || !Array.isArray(parsed.answers)) return initialState;
    let state = initialState;
    for (const a of parsed.answers) {
      if (!a || typeof a.questionId !== "string") break;
      const next = answerQuestion(state, a.questionId, a.option);
      if (next === state) break;
      state = next;
    }
    return {
      ...state,
      seenLessons: Array.isArray(parsed.seenLessons)
        ? parsed.seenLessons.filter((n: unknown) => n === 2 || n === 4)
        : [],
      accountSimulated: state.completed && parsed.accountSimulated === true,
    };
  } catch {
    return initialState;
  }
}
