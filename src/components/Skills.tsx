import { SKILLS } from '../data/content';
import './Skills.css';

export function Skills({ wide }: { wide: boolean }) {
  return (
    <section id="skills" className={`skills ${wide ? '' : 'is-compact'}`}>
      <div className="stack-16">
        <span className="eyebrow">03 — SKILLS</span>
        <h2 className="section-title">Core strengths</h2>
      </div>
      <div className="skills-grid">
        {SKILLS.map(k => (
          <div key={k.n} className="skill">
            <span className="skill-n">{k.n}</span>
            <div className="skill-body">
              <span className="skill-title">{k.title}</span>
              <span className="skill-text">{k.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
