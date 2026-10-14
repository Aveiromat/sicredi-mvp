import { Button } from "@/components/ui/button";
const metrics = [
  { label: "Pessoas iniciaram", value: "1.240", ratio: 100 },
  { label: "Concluíram o desafio", value: "912", ratio: 73.5 },
  { label: "Clicaram em abrir conta", value: "286", ratio: 23.1 },
  { label: "Conversão simulada*", value: "23%", ratio: 23 },
];
export default function Admin() {
  return (
    <section className="admin">
      <span className="eyebrow">PAINEL DE DEMONSTRAÇÃO</span>
      <h1>
        Pequenos plays.
        <br />
        <em>Novas possibilidades.</em>
      </h1>
      <p>Como poderíamos acompanhar a jornada e validar a hipótese.</p>
      <div className="admin-notice">
        ✦ Dados inteiramente fictícios · Não refletem o uso deste navegador ·
        Sem autenticação
      </div>
      <div className="metrics">
        {metrics.map((m) => (
          <article key={m.label}>
            <span>{m.label}</span>
            <strong>{m.value}</strong>
            <div className="metric-bar">
              <span style={{ width: `${m.ratio}%` }} />
            </div>
          </article>
        ))}
      </div>
      <div className="admin-panel">
        <h2>Da curiosidade ao próximo passo.</h2>
        <p>Funil ilustrativo de engajamento</p>
        {metrics.slice(0, 3).map((m) => (
          <div className="funnel" key={m.label}>
            <span>{m.label}</span>
            <div>
              <i style={{ width: `${m.ratio}%` }} />
            </div>
            <b>{m.value}</b>
          </div>
        ))}
        <p className="legal">
          Taxa de conclusão: 73% (912 ÷ 1.240, arredondado). *Conversão simulada
          representa cliques em abrir conta ÷ inícios: 286 ÷ 1.240 ≈ 23%. Não
          representa contas efetivamente abertas.
        </p>
      </div>
      <div className="admin-panel">
        <h2>O que queremos aprender?</h2>
        <p>
          Jovens percebem o Sicredi como mais moderno e relevante depois de uma
          experiência financeira rápida e gamificada?
        </p>
        <p className="legal">
          Em uma validação real: medir inícios, respostas, conclusão, tempo e
          cliques; comparar percepção antes e depois. Este MVP não envia eventos
          nem coleta dados pessoais.
        </p>
      </div>
      <Button href="/">Voltar para a experiência ↗</Button>
    </section>
  );
}
