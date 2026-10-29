import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  answerQuestion,
  initialState,
  summarize,
  restoreState,
} from "../src/lib/game.ts";
import { questions } from "../src/data/questions.ts";

describe("desafio financeiro", () => {
  it("explica individualmente todas as alternativas incorretas", () => {
    for (const question of questions) {
      question.options.forEach((_, index) => {
        if (index !== question.correct) {
          assert.ok(
            question.incorrectExplanations[index]?.trim().length > 20,
            `${question.id}: falta explicação para a alternativa ${index}`,
          );
        }
      });
      assert.equal(
        Object.keys(question.incorrectExplanations).length,
        question.options.length - 1,
      );
    }
  });
  it("pontua apenas uma vez e não permite pular questões", () => {
    const first = answerQuestion(
      initialState,
      questions[0].id,
      questions[0].correct,
    );
    assert.equal(summarize(first).xp, 100);
    assert.deepEqual(answerQuestion(first, questions[0].id, 0), first);
    assert.deepEqual(
      answerQuestion(initialState, questions[2].id, 0),
      initialState,
    );
  });
  it("classifica os três perfis e conclui com seis respostas", () => {
    for (const [correct, profile] of [
      [0, "Explorador Financeiro"],
      [3, "Organizador"],
      [6, "Jovem Estrategista"],
    ] as const) {
      const state = questions.reduce(
        (s, q, i) =>
          answerQuestion(
            s,
            q.id,
            i < correct ? q.correct : (q.correct + 1) % q.options.length,
          ),
        initialState,
      );
      assert.equal(summarize(state).profile, profile);
      assert.equal(state.completed, true);
      assert.equal(summarize(state).xp, correct * 100);
    }
  });
  it("recupera dados inválidos sem confiar em XP ou conclusão armazenados", () => {
    assert.deepEqual(restoreState("{invalid"), initialState);
    assert.deepEqual(
      restoreState(JSON.stringify({ answers: [], completed: true, xp: 9000 })),
      initialState,
    );
    assert.deepEqual(
      restoreState(
        JSON.stringify({ answers: [{ questionId: "credit", option: 99 }] }),
      ),
      initialState,
    );
  });
});
