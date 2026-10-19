import { useRef, useState } from 'react';
import { STATS } from '../data/content';
import type { StatFormat } from '../data/types';
import { useCountUp } from '../hooks/useCountUp';
import './Stats.css';

const TINTS = ['oklch(0.94 0.045 205)', 'oklch(0.94 0.045 180)', 'oklch(0.94 0.04 235)', 'oklch(0.94 0.05 160)'];
const ACCENTS = ['oklch(0.65 0.12 205)', 'oklch(0.62 0.11 180)', 'oklch(0.6 0.13 240)', 'oklch(0.65 0.13 160)'];
const OUTCOME = 'Better user & operational outcomes';

const format = (n: number, f: StatFormat) =>
  f === 'thousandsPlus' ? n.toLocaleString('en-US') + '+' : f === 'approxPercent' ? '~' + n + '%' : n + '+';

export function Stats({ vw, wide }: { vw: number; wide: boolean }) {
  const t = useCountUp(1600);
  const [flips, setFlips] = useState<Record<number, boolean>>({});
  // Mouse users flip on hover; touch / keyboard users flip on click.
  const pointer = useRef<string | null>(null);
  const cols = vw >= 1100 ? 4 : vw >= 560 ? 2 : 1;

  return (
    <section className="stats">
      <div className="stats-grid" style={{ gridTemplateColumns: `repeat(${cols},minmax(0,1fr))` }}>
        {STATS.map((s, i) => {
          const flipped = !!flips[i];
          const set = (v: boolean) => setFlips(f => ({ ...f, [i]: v }));
          return (
            <button
              key={s.label}
              className="stat"
              aria-pressed={flipped}
              aria-label={s.label + ' - show details'}
              onPointerDown={e => (pointer.current = e.pointerType)}
              onPointerEnter={e => e.pointerType === 'mouse' && set(true)}
              onPointerLeave={e => e.pointerType === 'mouse' && set(false)}
              onClick={() => {
                const wasMouse = pointer.current === 'mouse';
                pointer.current = null;
                if (!wasMouse) set(!flipped);
              }}
            >
              <div className="stat-inner" style={{ transform: `rotateY(${flipped ? '180deg' : '0deg'})` }}>
                <div className="stat-front" style={{ background: `linear-gradient(140deg,${TINTS[i]},oklch(0.995 0 0) 60%)` }}>
                  <span className="stat-bar" style={{ background: ACCENTS[i] }} />
                  <span className="stat-value">{format(Math.round(s.value * t), s.format)}</span>
                  <span className="stat-label">{s.label}</span>
                  <span className="stat-hint">{flipped ? '' : wide ? 'HOVER TO REVEAL ↻' : 'TAP TO REVEAL ↻'}</span>
                </div>
                <div className="stat-back">
                  <span className="stat-back-title">
                    <span className="stat-back-dot" style={{ background: ACCENTS[i] }} />
                    {s.backTitle}
                  </span>
                  <div className="stat-back-items">
                    {s.items.map(it => (
                      <span key={it} className="stat-back-item">
                        <span />
                        {it}
                      </span>
                    ))}
                  </div>
                  {i === 3 && <span className="stat-back-outcome">→ {OUTCOME}</span>}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
