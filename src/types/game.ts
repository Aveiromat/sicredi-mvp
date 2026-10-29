export type Question = {
  id: string;
  topic: string;
  title: string;
  options: string[];
  correct: number;
  explanation: string;
  incorrectExplanations: Record<number, string>;
  symbol: string;
};
export type GameState = {
  answers: { questionId: string; option: number }[];
  completed: boolean;
  seenLessons: number[];
  accountSimulated: boolean;
};
