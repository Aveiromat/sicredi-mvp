import Link from "next/link";
import { Button } from "@/components/ui/button";
import { rewards } from "@/data/rewards";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="pill">🎁 &nbsp; TEM BRINDE NO FIM DESSA JORNADA</div>
          <h1>
            Dê play no desafio.
            <br />
            <span>
              Desbloqueie
              <br />
              seu brinde.
            </span>
          </h1>
          <p>
            Mais conhecimento no bolso.
            <br />
            Uma conquista pra chamar de sua.
          </p>
          <p className="hero-description">
            Responda 6 desafios rápidos sobre dinheiro e chegue à sua
            recompensa. Camiseta, pelúcia, copo ou ecobag: qual combina com
            você?
          </p>
          <div
            className="reward-preview"
            aria-label="Brindes ilustrativos da campanha"
          >
            {rewards.map((reward) => (
              <div key={reward.name}>
                <span aria-hidden="true">{reward.icon}</span>
                <span>{reward.name}</span>
              </div>
            ))}
          </div>
          <div className="hero-cta">
            <Button href="/introducao">Desbloquear meu brinde ↗</Button>
            <span className="time">
              ◷ Menos de 3 minutos
              <small>Grátis. Sem cadastro. Sem complicação.</small>
            </span>
          </div>
          <p className="hero-demo-note">
            Campanha demonstrativa. Brindes ilustrativos, sem entrega real.
          </p>
        </div>
        <div
          className="hero-visual reward-visual"
          role="img"
          aria-label="Caixa de presente com camiseta, pelúcia, copo e ecobag ilustrativos"
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="floating star-one">✳</span>
          <span className="floating star-two">✦</span>
          <div className="xp-float">
            ⚡ <b>6 desafios</b>
            <small>uma nova conquista</small>
          </div>
          <div className="prize-halo" />
          <div className="prize-item prize-shirt">👕</div>
          <div className="prize-item prize-bear">🧸</div>
          <div className="prize-item prize-cup">🥤</div>
          <div className="prize-item prize-bag">🛍️</div>
          <div className="gift-box">
            <div className="gift-lid" />
            <span className="gift-ribbon" />
            <div className="gift-label">
              <small>SEU PRÓXIMO</small>
              <strong>brinde.</strong>
              <span>COMEÇA COM UM PLAY ↗</span>
            </div>
          </div>
          <div className="level-float">
            <span>🎁</span>
            <div>
              <small>APRENDEU. COMPLETOU.</small>
              <strong>Recompensa desbloqueada!</strong>
            </div>
            <b>✓</b>
          </div>
          <span className="visual-caption">
            conhecimento que vira conquista. ✦
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
              icon: "🎁",
              title: "Chegue ao seu brinde",
              text: "Complete o desafio e descubra os brindes da nossa campanha demonstrativa.",
              tag: "SUA RECOMPENSA TE ESPERA",
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
        <span>🎁</span>
        <div>
          <h2>Um desafio rápido. Um brinde no seu radar.</h2>
          <p>Aprenda sobre dinheiro e desbloqueie sua recompensa demo.</p>
        </div>
        <Link href="/introducao">Quero meu brinde ↗</Link>
      </section>
    </>
  );
}
