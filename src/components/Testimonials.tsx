import { useState } from 'react';
import { QUOTES } from '../data/content';
import { useInterval } from '../hooks/useInterval';
import './Testimonials.css';

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  // Auto-rotation stops once the visitor picks a quote.
  const [picked, setPicked] = useState(false);
  useInterval(() => setIdx(i => (i + 1) % QUOTES.length), picked ? null : 9000);
  const q = QUOTES[idx];

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-head">
        <div className="stack-16">
          <span className="eyebrow">05 — TESTIMONIALS</span>
          <h2 className="section-title">What colleagues say</h2>
        </div>
        <div className="testimonials-people">
          {QUOTES.map((p, i) => (
            <button
              key={p.name}
              aria-label={p.name}
              aria-pressed={i === idx}
              className={`testimonials-person ${i === idx ? 'is-active' : ''}`}
              onClick={() => {
                setPicked(true);
                setIdx(i);
              }}
            >
              {p.initials}
            </button>
          ))}
        </div>
      </div>
      <div className="testimonial">
        <span className="testimonial-mark">“</span>
        <div className="testimonial-body">
          <p className="testimonial-text">{q.text}</p>
          <div className="testimonial-author">
            <span className="testimonial-avatar">{q.initials}</span>
            <div className="testimonial-who">
              <span className="testimonial-name">{q.name}</span>
              <span className="testimonial-role">{q.role}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
