import type { Question } from "@/types/game";

export function AnswerExplanations({
  question,
  selectedOption,
}: {
  question: Question;
  selectedOption: number;
}) {
  return (
    <section
      className="answer-explanations"
      aria-label="Explicações das alternativas incorretas"
    >
      <h2>Por que as outras respostas não funcionam?</h2>
      <ul>
        {question.options.map(
          (option, index) =>
            index !== question.correct && (
              <li
                key={option}
                className={
                  index === selectedOption ? "chosen-explanation" : undefined
                }
              >
                <strong>
                  <span aria-hidden="true">
                    {String.fromCharCode(65 + index)} ·{" "}
                  </span>
                  {option}
                </strong>
                {index === selectedOption && (
                  <span className="chosen-label">Sua escolha</span>
                )}
                <p>{question.incorrectExplanations[index]}</p>
              </li>
            ),
        )}
      </ul>
    </section>
  );
}
