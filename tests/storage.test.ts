import { it } from "node:test";
import assert from "node:assert/strict";
import {
  readSnapshot,
  saveProgress,
  resetProgress,
  subscribeProgress,
} from "../src/lib/storage.ts";
import { answerQuestion, initialState, restoreState } from "../src/lib/game.ts";
import { questions } from "../src/data/questions.ts";
it("notifica telas já visitadas sobre respostas e reset, inclusive sem localStorage", () => {
  const values = new Map<string, string>();
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: new EventTarget(),
  });
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: {
      getItem: (key: string) => values.get(key) ?? null,
      setItem: (key: string, value: string) => values.set(key, value),
    },
  });
  let notifications = 0;
  const unsubscribe = subscribeProgress(() => notifications++);
  const answered = answerQuestion(
    initialState,
    questions[0].id,
    questions[0].correct,
  );
  assert.equal(saveProgress(answered), true);
  assert.equal(restoreState(readSnapshot()).answers.length, 1);
  resetProgress();
  assert.deepEqual(restoreState(readSnapshot()), initialState);
  assert.equal(notifications, 2);
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    get() {
      throw new Error("blocked");
    },
  });
  assert.equal(saveProgress(answered), false);
  assert.equal(restoreState(readSnapshot()).answers.length, 1);
  resetProgress();
  assert.deepEqual(restoreState(readSnapshot()), initialState);
  unsubscribe();
});
