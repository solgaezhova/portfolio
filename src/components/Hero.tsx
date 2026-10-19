import { useState, type MouseEvent } from 'react';
import { EMAIL, HERO_SHOTS, ROLES } from '../data/content';
import { useInterval } from '../hooks/useInterval';
import './Hero.css';

export function Hero({ wide }: { wide: boolean }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [shot, setShot] = useState(0);
  const [tilt, setTilt] = useState<[string, string] | null>(null);

  useInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2200);
  useInterval(() => setShot(i => (i + 1) % HERO_SHOTS.length), 3800);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt([(x * 8).toFixed(2), (-y * 6).toFixed(2)]);
  };

  return (
    <header id="top" className="hero">
      <div className="hero-glow" />
      <div className="hero-copy">
        <h1 className="hero-name">
          Olya
          <br />
          <span className="gradient-text hero-name-accent">Ezhova</span>
        </h1>
        <div className="hero-roles">
          <span className="hero-title-pill">Product Designer &amp; Developer</span>
          <span className="hero-role">{ROLES[roleIdx]}</span>
        </div>
        <p className="hero-lede">
          Designing and building intuitive healthcare products through the intersection of engineering, UX, and AI.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="hero-cta-primary">View my work →</a>
          <a href={`mailto:${EMAIL}`} className="hero-cta-secondary">{EMAIL}</a>
        </div>
      </div>

      <div className="hero-visual" onMouseMove={onMove} onMouseLeave={() => setTilt(null)}>
        <div className="hero-visual-glow" />
        <div
          className="hero-laptop"
          style={{ transform: tilt && wide ? `rotateX(${tilt[1]}deg) rotateY(${tilt[0]}deg)` : 'none' }}
        >
          <div className="hero-laptop-shadow" />
          <div className="hero-laptop-lid">
            <span className="hero-laptop-camera" />
            <div className="hero-laptop-screen">
              {HERO_SHOTS.map((s, i) => (
                <img key={s.src} src={s.src} alt={s.label} style={{ opacity: i === shot ? 1 : 0 }} />
              ))}
              <div className="hero-laptop-glare" />
            </div>
          </div>
          <div className="hero-laptop-base">
            <span />
          </div>
        </div>
        {/* Empty row kept from the design: with the column gap it adds space under the laptop. */}
        <div className="hero-visual-footer" />
      </div>
    </header>
  );
}
