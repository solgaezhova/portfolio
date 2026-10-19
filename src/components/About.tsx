import { useState } from 'react';
import olya from '../assets/olya.jpeg';
import { ENJOY, STEPS } from '../data/content';
import './About.css';

const HIGHLIGHTS = [
  {
    icon: '★', label: 'RECOGNITION', iconBg: 'oklch(0.95 0.06 85)', color: 'oklch(0.5 0.1 70)',
    body: <>Recognized with <b>HCA Healthcare's Service Excellence Award (2025)</b> for delivering high-quality, customer-focused solutions.</>,
  },
  {
    icon: '◆', label: 'MEMBERSHIP', iconBg: 'oklch(0.95 0.03 255)', color: 'oklch(0.52 0.19 258)',
    body: <>Member of the <b>Interaction Design Foundation</b> - continuously expanding expertise in UX, design systems, and AI for designers.</>,
  },
  {
    icon: '✦', label: 'FUN FACT', iconBg: 'oklch(0.95 0.035 190)', color: 'oklch(0.42 0.08 195)',
    body: <>Before software, I worked in law. That experience taught me to question assumptions, and notice edge cases others might miss.</>,
  },
];

export function About({ wide }: { wide: boolean }) {
  const [step, setStep] = useState(4);

  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <div className="about-grid">
          <div className="about-intro">
            <div className="about-portrait-row">
              <div className="about-portrait">
                <div className="about-portrait-frame" />
                <img src={olya} alt="Olya Ezhova" />
              </div>
              <div className="about-greeting">
                <span className="eyebrow">01 — ABOUT</span>
                <span>Hi, I'm Olya</span>
              </div>
            </div>
            <h2 className="about-title">
              Designing products.
              <br />
              <span>Building the technology.</span>
            </h2>
            <p className="about-p">
              I'm a Product Designer with <b>5+ years</b> of experience designing and building healthcare and SaaS applications.
            </p>
            <p className="about-p">
              My strength is <b>end-to-end ownership</b> - understanding the problem, designing the experience, building the
              interface, and delivering a production-ready solution.
            </p>
          </div>
          <div className="about-enjoy">
            <span className="about-enjoy-label">WHAT I ENJOY BUILDING</span>
            {ENJOY.map((label, i) => (
              <div key={label} className="about-enjoy-item">
                <span>{label}</span>
                <span className="about-enjoy-n">0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The Research → Ship flow is hidden on phones. */}
        {wide && (
          <div className="about-steps">
            {STEPS.map((label, i) => {
              const state = i === step ? 'is-active' : i < step ? 'is-done' : '';
              return (
                <button key={label} className={`about-step ${state}`} onMouseEnter={() => setStep(i)} onClick={() => setStep(i)}>
                  <span className="about-step-n">0{i + 1}</span>
                  <span className="about-step-label">{label}</span>
                </button>
              );
            })}
          </div>
        )}

        <div className="about-highlights">
          {HIGHLIGHTS.map(h => (
            <div key={h.label} className="about-card">
              <span className="about-card-icon" style={{ background: h.iconBg, color: h.color }}>{h.icon}</span>
              <span className="about-card-label" style={{ color: h.color }}>{h.label}</span>
              <p>{h.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Philosophy() {
  return (
    <section className="philosophy">
      <span className="eyebrow">PERSONAL PHILOSOPHY</span>
      <p className="philosophy-quote">
        Great design engineers don't just build interfaces.{' '}
        <span className="gradient-text">They understand the people, processes, and workflows behind them.</span>
      </p>
    </section>
  );
}
