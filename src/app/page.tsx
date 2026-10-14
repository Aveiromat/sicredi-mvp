import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="pill">
            ● &nbsp; SEU DINHEIRO. SUAS REGRAS. SEU FUTURO.
          </div>
          <h1>
            Você sobreviveria
            <br />
            financeiramente
            <br />
            <span>aos 22?</span>
            <span className="title-spark">✳</span>
          </h1>
          <p>
            A vida não vem com tutorial.
            <br /> Mas o seu dinheiro pode ter um.
          </p>
          <p className="hero-description">
            Complete o desafio, descubra seu nível financeiro e desbloqueie uma
            recompensa. Bora dar play?
          </p>
          <div className="hero-cta">
            <Button href="/introducao">Começar desafio ↗</Button>
            <span className="time">
              ◷ Menos de 3 minutos
              <small>Grátis. Sem cadastro. Sem complicação.</small>
            </span>
          </div>
          <div className="social-proof">
            <div className="avatars">
              <span>👩🏽</span>
              <span>🧑🏻</span>
              <span>👨🏾</span>
              <span>👩🏼</span>
            </div>
            <span>
              <strong>Seu próximo nível começa aqui.</strong>
              <small>Conhecimento que faz diferença na vida real.</small>
            </span>
          </div>
        </div>
        <div
          className="hero-visual"
          role="img"
          aria-label="Cartão modo vida real ativado, moedas e conquistas"
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="floating star-one">✳</span>
          <span className="floating star-two">✦</span>
          <div className="xp-float">
            ⚡ <b>+100 XP</b>
            <small>um passo à frente</small>
          </div>
          <div className="game-card">
            <div className="game-card-top">
              <span>SEU FUTURO</span>
              <span>↗</span>
            </div>
            <div className="card-label">MODO</div>
            <strong>
              vida real<span>ON.</span>
            </strong>
            <div className="card-bottom">
              <span>●●●● &nbsp; 2026</span>
              <span>✳</span>
            </div>
          </div>
          <div className="coin coin-one">$</div>
          <div className="coin coin-two">$</div>
          <div className="level-float">
            <span>🏆</span>
            <div>
              <small>CONQUISTA DESBLOQUEADA</small>
              <strong>O primeiro passo é seu.</strong>
            </div>
            <b>✓</b>
          </div>
          <span className="visual-caption">
            menos perrengue. mais possibilidades.
          </span>
        </div>
      </section>
      <section className="journey">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              UM JOGO RÁPIDO. UM APRENDIZADO PRA VIDA.
            </span>
            <h2>Seu próximo nível é logo ali.</h2>
          </div>
          <span className="journey-tag">6 desafios ✦ 600 XP possíveis</span>
        </div>
        <div className="journey-grid">
          {[
            {
              n: "01",
              icon: "ϟ",
              title: "Jogue com a vida real",
              text: "Cartão, grana, imprevistos. Decisões rápidas que fazem parte do seu dia.",
              tag: "SEM ECONOMÊS",
              cls: "mint",
            },
            {
              n: "02",
              icon: "◎",
              title: "Descubra seu perfil",
              text: "Cada resposta é uma descoberta. Qual é o seu momento financeiro?",
              tag: "CADA PASSO CONTA",
              cls: "lilac",
            },
            {
              n: "03",
              icon: "♧",
              title: "Desbloqueie o próximo",
              text: "Conhecimento na bagagem e uma recompensa para celebrar sua jornada.",
              tag: "TEM CONQUISTA NO FINAL",
              cls: "peach",
            },
          ].map((c) => (
            <article key={c.n} className="journey-card">
              <div className="journey-card-top">
                <span className={`feature-icon ${c.cls}`}>{c.icon}</span>
                <small>/{c.n}</small>
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <span className="card-tag">{c.tag} ↗</span>
            </article>
          ))}
        </div>
      </section>
      <section className="bottom-banner">
        <span>✳</span>
        <div>
          <h2>O futuro é seu. O primeiro play também.</h2>
          <p>Educação financeira no seu ritmo, do seu jeito.</p>
        </div>
        <Link href="/introducao">Bora descobrir? ↗</Link>
      </section>
    </>
  );
}
