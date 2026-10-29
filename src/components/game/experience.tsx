"use client";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { useRouter } from "next/navigation";
import { questions, lessons } from "@/data/questions";
import { rewards, campaignCode } from "@/data/rewards";
import {
  answerQuestion,
  initialState,
  restoreState,
  summarize,
} from "@/lib/game";
import { readSnapshot, subscribeProgress, saveProgress } from "@/lib/storage";

import { Button } from "@/components/ui/button";
import { AnswerExplanations } from "@/components/game/answer-explanations";
import type { GameState } from "@/types/game";
const subscribeToHydration = () => () => {};
const clientReady = () => true;
const serverReady = () => false;
export function Experience({
  screen,
}: {
  screen: "intro" | "game" | "result" | "reward" | "account";
}) {
  const router = useRouter();
  const snapshot = useSyncExternalStore(
    subscribeProgress,
    readSnapshot,
    () => null,
  );
  const state = useMemo(() => restoreState(snapshot), [snapshot]);
  const ready = useSyncExternalStore(
    subscribeToHydration,
    clientReady,
    serverReady,
  );
  const [feedback, setFeedback] = useState<{
    option: number;
    index: number;
  } | null>(null);
  const [warning, setWarning] = useState(false);
  const promptRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (ready && screen === "game" && !feedback) promptRef.current?.focus();
  }, [ready, screen, feedback, state.answers.length, state.seenLessons.length]);
  function update(next: GameState) {
    setWarning(!saveProgress(next));
  }
  const score = summarize(state);
  if (!ready)
    return (
      <div className="flow loading" role="status">
        Preparando sua jornada…
      </div>
    );
  if (screen !== "intro" && screen !== "game" && !state.completed)
    return (
      <section className="flow">
        <span className="big-emoji">🔒</span>
        <h1>Uma conquista de cada vez.</h1>
        <p>
          Complete o desafio para descobrir seu perfil e desbloquear sua
          recompensa.
        </p>
        <Button href="/desafio">Ir para o desafio →</Button>
      </section>
    );
  const notice = warning && (
    <p role="status" className="notice">
      O navegador não permitiu salvar. Ao sair desta tela, o progresso pode ser
      perdido.
    </p>
  );
  if (screen === "intro")
    return (
      <section className="flow">
        <span className="eyebrow">SEU FUTURO DÁ MATCH COM VOCÊ</span>
        <h1>
          Pequenos desafios.
          <br />
          <em>Grandes descobertas.</em>
        </h1>
        <p>
          Sem prova difícil. Sem economês. Só você e as decisões da vida real.
        </p>
        <div className="steps">
          {[
            ["01", "Responda 6 desafios", "Situações que poderiam ser suas."],
            ["02", "Acumule até 600 XP", "Cada descoberta vale a pena."],
            ["03", "Descubra seu perfil", "E desbloqueie uma recompensa demo."],
          ].map(([n, title, text]) => (
            <div key={n}>
              <b>{n}</b>
              <span>
                <strong>{title}</strong>
                <small>{text}</small>
              </span>
            </div>
          ))}
        </div>
        <Button href={state.completed ? "/resultado" : "/desafio"}>
          {state.completed
            ? "Ver meu resultado"
            : state.answers.length
              ? "Continuar de onde parei"
              : "Bora começar"}{" "}
          →
        </Button>
        <small>◷ Menos de 3 minutos · No seu ritmo</small>
      </section>
    );
  if (screen === "game") {
    if (state.completed && !feedback)
      return (
        <section className="flow">
          <span className="big-emoji">🏆</span>
          <h1>Desafio concluído!</h1>
          <p>Seis passos mais perto da sua melhor versão financeira.</p>
          <Button href="/resultado">Descobrir meu perfil →</Button>
        </section>
      );
    const index = feedback?.index ?? state.answers.length;
    const q = questions[index];
    const lesson =
      !feedback &&
      lessons.find(
        (l) =>
          l.after === state.answers.length &&
          !state.seenLessons.includes(l.after),
      );
    return (
      <section className="flow game-flow">
        {notice}
        <div className="game-top">
          <span>DESAFIO FINANCEIRO</span>
          <b>ϟ {score.xp} XP</b>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-label="Progresso do desafio"
          aria-valuenow={state.answers.length}
          aria-valuemin={0}
          aria-valuemax={6}
        >
          <span style={{ width: `${(state.answers.length / 6) * 100}%` }} />
        </div>
        <div className="question-count">
          {Math.min(index + 1, 6)} de 6 <span>Um passo de cada vez.</span>
        </div>
        {lesson ? (
          <article className="lesson reveal">
            <div className="lesson-top">
              <span>PLAY INSIGHT</span>
              <span>▶ {lesson.duration} · leitura livre</span>
            </div>
            <span className="lesson-art">{lesson.symbol}</span>
            <small>{lesson.kicker}</small>
            <h1 ref={promptRef} tabIndex={-1}>
              {lesson.title}
            </h1>
            <p>{lesson.text}</p>
            <div className="lesson-tip">✦ {lesson.tip}</div>
            <Button
              onClick={() =>
                update({
                  ...state,
                  seenLessons: [...state.seenLessons, lesson.after],
                })
              }
            >
              Entendi, continuar →
            </Button>
          </article>
        ) : (
          <div className="reveal" key={q.id}>
            <span className="question-art">{q.symbol}</span>
            <span className="eyebrow">{q.topic}</span>
            <h1 className="question-title" ref={promptRef} tabIndex={-1}>
              {q.title}
            </h1>
            <div className="options">
              {q.options.map((option, i) => (
                <button
                  key={option}
                  disabled={!!feedback}
                  className={`option ${feedback && i === q.correct ? "correct" : ""} ${feedback && feedback.option === i && i !== q.correct ? "incorrect" : ""}`}
                  onClick={() => {
                    setFeedback({ index, option: i });
                    update(answerQuestion(state, q.id, i));
                  }}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {option}
                  <span className="option-check">
                    {feedback && i === q.correct
                      ? "✓"
                      : feedback && feedback.option === i
                        ? "×"
                        : ""}
                  </span>
                </button>
              ))}
            </div>
            {feedback ? (
              <div
                className={`feedback ${feedback.option === q.correct ? "good" : "learn"}`}
                role="status"
              >
                <strong>
                  {feedback.option === q.correct
                    ? "Mandou bem! +100 XP ✦"
                    : "Essa fica de aprendizado 💡"}
                </strong>
                <p>{q.explanation}</p>
                <AnswerExplanations
                  question={q}
                  selectedOption={feedback.option}
                />
                <Button
                  onClick={() => {
                    setFeedback(null);
                    if (state.completed) router.push("/resultado");
                  }}
                >
                  {state.completed ? "Ver meu resultado" : "Próximo passo"} →
                </Button>
              </div>
            ) : (
              <p className="answer-hint">
                Escolha uma resposta para continuar.
              </p>
            )}
          </div>
        )}
      </section>
    );
  }
  if (screen === "result")
    return (
      <section className="flow result">
        {notice}
        <span className="eyebrow">DESAFIO CONCLUÍDO. CONQUISTA SUA.</span>
        <div className="result-medal">🏆</div>
        <p>Seu perfil é</p>
        <h1>{score.profile}</h1>
        <p>{score.message}</p>
        <div className="result-stats">
          <b>
            {score.xp}
            <small>XP conquistados</small>
          </b>
          <b>
            {score.percent}%<small>de acertos · {score.correct}/6</small>
          </b>
        </div>
        <div className="notice">
          Este perfil é lúdico e não representa uma avaliação financeira.
        </div>
        <Button href="/recompensa">Minha recompensa →</Button>
        <Button
          secondary
          onClick={() => {
            update(initialState);
            router.push("/introducao");
          }}
        >
          Jogar de novo
        </Button>
      </section>
    );
  if (screen === "reward")
    return (
      <section className="flow">
        <span className="big-emoji">🎁</span>
        <span className="eyebrow">VOCÊ CHEGOU ATÉ AQUI!</span>
        <h1>
          Recompensa
          <br />
          <em>desbloqueada.</em>
        </h1>
        <p>
          Imagine abrir sua conta Sicredi e ganhar um brinde exclusivo. Esse
          próximo passo pode ser seu.
        </p>
        <div className="rewards-grid">
          {rewards.map((r) => (
            <div key={r.name}>
              <span>{r.icon}</span>
              <strong>{r.name}</strong>
              <small>Ilustrativo</small>
            </div>
          ))}
        </div>
        <div className="campaign">
          <small>CÓDIGO FICTÍCIO DA CAMPANHA</small>
          <strong>{campaignCode}</strong>
        </div>
        <Button href="/abrir-conta">Quero abrir minha conta ↗</Button>
        <p className="legal">
          Simulação para demonstração. Brindes ilustrativos, sem escolha,
          reserva ou entrega real. Não existe uma oferta comercial ativa.
        </p>
      </section>
    );
  return (
    <section className="flow">
      <span className="big-emoji">{state.accountSimulated ? "🎉" : "🌱"}</span>
      <span className="eyebrow">PRÓXIMO PASSO · SIMULAÇÃO</span>
      <h1>
        {state.accountSimulated
          ? "Conta simulada com sucesso."
          : "Seu futuro começa com um passo."}
      </h1>
      <p>
        {state.accountSimulated
          ? "Seu prêmio está reservado. Tudo de forma fictícia, só para experimentar a jornada."
          : "Em uma versão real, você seria direcionado para o fluxo oficial de abertura de conta do Sicredi."}
      </p>
      {!state.accountSimulated && (
        <Button onClick={() => update({ ...state, accountSimulated: true })}>
          Simular abertura de conta →
        </Button>
      )}
      {state.accountSimulated && (
        <div className="success" role="status">
          ✓ Jornada demonstrativa concluída!
        </div>
      )}
      <Button secondary href="/">
        Voltar ao início
      </Button>
      <small>Nenhuma conta é criada. Nenhum dado pessoal é solicitado.</small>
      {notice}
    </section>
  );
}
