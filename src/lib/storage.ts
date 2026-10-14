import { initialState, summarize } from "./game.ts";
import type { GameState } from "@/types/game";
export const STORAGE_KEY = "sicredi-play:v1";
const CHANGE_EVENT = "sicredi-progress";
let memorySnapshot: string | null = null;
let memoryOnly = false;
export function readSnapshot(): string | null {
  if (memoryOnly) return memorySnapshot;
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return memorySnapshot;
  }
}
export function subscribeProgress(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener(CHANGE_EVENT, listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener(CHANGE_EVENT, listener);
  };
}
export function saveProgress(state: GameState) {
  memorySnapshot = JSON.stringify({ ...state, xp: summarize(state).xp });
  let saved = true;
  try {
    localStorage.setItem(STORAGE_KEY, memorySnapshot);
    memoryOnly = false;
  } catch {
    saved = false;
    memoryOnly = true;
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
  return saved;
}
export function resetProgress() {
  saveProgress(initialState);
}
