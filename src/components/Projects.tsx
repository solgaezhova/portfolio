import { useEffect, useRef, useState } from 'react';
import { PROJECTS } from '../data/content';
import { scrollToProjectsHeading } from '../utils/scroll';
import './Projects.css';

const BIZ_BARS = [32, 46, 58, 70, 82, 94, 100];

/** Splits "Lead - rest" so the lead can be set in semi-bold. */
function splitLead(text: string) {
  const k = text.indexOf(' - ');
  return k > 0 ? { lead: text.slice(0, k), rest: ' - ' + text.slice(k + 3) } : { lead: '', rest: text };
}

/** Natural aspect ratios ("w/h") of every project image, so the laptop screen fits each one exactly. */
function useImageRatios() {
  const [ratios, setRatios] = useState<Record<string, string>>({});
  useEffect(() => {
    const srcs = new Set(PROJECTS.flatMap(p => p.media.map(m => (m.poster || m.src) as string)));
    srcs.forEach(src => {
      const im = new Image();
      im.onload = () => setRatios(r => ({ ...r, [src]: im.naturalWidth + '/' + im.naturalHeight }));
      im.src = src;
    });
  }, []);
  return ratios;
}

export function Projects({ narrow }: { narrow: boolean }) {
  const [proj, setProj] = useState(0);
  const [shot, setShot] = useState(0);
  const [caseOpen, setCaseOpen] = useState(false);
  const ratios = useImageRatios();
  // Scroll to run once React has committed the next render.
  const pendingScroll = useRef<(() => void) | null>(null);

  useEffect(() => {
    const fn = pendingScroll.current;
    pendingScroll.current = null;
    fn?.();
  });

  const p = PROJECTS[proj];
  const m = p.media[Math.min(shot, p.media.length - 1)];
  const hasBiz = !!p.biz;
  const challengeLabel = proj >= 2 ? 'GOAL' : 'CHALLENGE';

  const pick = (i: number) => {
    setProj(i);
    setShot(0);
    setCaseOpen(false);
  };
  const prev = () => pick((proj + PROJECTS.length - 1) % PROJECTS.length);
  const next = () => pick((proj + 1) % PROJECTS.length);
  const nextAndScroll = () => {
    next();
    pendingScroll.current = () => scrollToProjectsHeading(16);
  };
  const openCase = () => {
    setCaseOpen(true);
    pendingScroll.current = () =>
      requestAnimationFrame(() => {
        const el = document.getElementById('case-details');
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 88, behavior: 'smooth' });
      });
  };
  const closeCase = () => {
    setCaseOpen(false);
    pendingScroll.current = () => scrollToProjectsHeading(24);
  };

  const stackChips = (
    <div className="chips">
      {p.stack.map(t => <span key={t} className="chip">{t}</span>)}
    </div>
  );

  return (
    <section id="projects" className="projects">
      <div className="container projects-inner">
        <div className="projects-head">
          <div className="stack-16">
            <span className="eyebrow">02 — PROJECTS</span>
            <h2 className="section-title">Selected work</h2>
          </div>
          <div className="projects-pager">
            <span className="projects-count">{proj + 1} / {PROJECTS.length}</span>
            <button onClick={prev} className="btn-ghost">← Previous</button>
            <button onClick={next} className="btn btn-dark">Next →</button>
          </div>
        </div>

        <div className="projects-tabs">
          {PROJECTS.map((x, i) => (
            <button key={x.title} onClick={() => pick(i)} className={`projects-tab ${i === proj ? 'is-active' : ''}`} aria-pressed={i === proj}>
              <span className="projects-tab-n">0{i + 1}</span>
              <span className="projects-tab-title">{x.title}</span>
            </button>
          ))}
        </div>

        <div className="project">
          <div className="project-media">
            <div className="laptop">
              <div className="laptop-lid">
                <span className="laptop-camera" />
                <div className="laptop-screen" style={{ aspectRatio: ratios[(m.poster || m.src) as string] || '16/10' }}>
                  {m.video ? (
                    <video key={`${proj}-${shot}`} src={m.video} poster={m.poster} controls muted playsInline preload="none" />
                  ) : (
                    <img src={m.src} alt={m.caption} />
                  )}
                </div>
              </div>
              <div className="laptop-base"><span /></div>
            </div>
            <span className="project-caption">{m.caption}</span>
            <div className="project-thumbs">
              {p.media.map((x, i) => (
                <button key={i} onClick={() => setShot(i)} aria-label={x.caption} className={`project-thumb ${i === shot ? 'is-active' : ''}`}>
                  <img src={x.poster || x.src} alt="" />
                  {x.video && <span className="project-thumb-play">▶</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="project-summary">
            <span className="project-kicker">{p.kicker}</span>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            {p.role && (
              <div className="project-role">
                <span className="label">MY ROLE</span>
                <span className="project-role-name">{p.role}</span>
              </div>
            )}
            <div className="project-links">
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-live">↗ {p.liveLabel}</a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-github">GitHub</a>
              )}
            </div>
            {!hasBiz && (
              <div className="project-challenge">
                <span className="label"><b>{challengeLabel}</b></span>
                <p>{p.challenge}</p>
              </div>
            )}
            {hasBiz && (
              <div className="biz">
                <div className="biz-copy">
                  <span className="biz-label">BUSINESS IMPACT</span>
                  <p>{p.biz}</p>
                </div>
                <div className="biz-metric">
                  <div className="biz-metric-head">
                    <span className="biz-metric-value">{p.bizMetric}</span>
                    <span className="biz-metric-unit">FASTER</span>
                  </div>
                  <div className="biz-bars">
                    {BIZ_BARS.map((h, i) => <span key={i} className={i === BIZ_BARS.length - 1 ? 'is-peak' : ''} style={{ height: h + '%' }} />)}
                  </div>
                </div>
              </div>
            )}
            {!hasBiz && stackChips}
            {!caseOpen && (
              <div className="project-actions">
                <button onClick={openCase} aria-expanded={false} className="btn btn-outline">View details +</button>
                {narrow && <button onClick={nextAndScroll} className="btn btn-dark">Next project →</button>}
              </div>
            )}
          </div>
        </div>

        {caseOpen && (
          <>
            <div id="case-details" className="case-details">
              {hasBiz ? (
                <div className="case-grid case-intro">
                  <div className="case-col">
                    <span className="label"><b>{challengeLabel}</b></span>
                    <p className="case-challenge">{p.challenge}</p>
                  </div>
                  <div className="case-col case-tech">
                    <span className="label"><b>TECHNOLOGY</b></span>
                    {stackChips}
                  </div>
                </div>
              ) : (
                <>
                  <span className="label">{p.impactLabel}</span>
                  <div className="case-features">
                    {p.impact.map(f => (
                      <div key={f.title} className="case-feature">
                        <span className="case-feature-title">{f.title}</span>
                        <span className="case-feature-sub">{f.sub}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="case-grid case-lists">
              <div className="case-list">
                <span className="label case-list-label">WHAT I DID</span>
                {p.built.map((text, i) => {
                  const { lead, rest } = splitLead(text);
                  return (
                    <div key={i} className="case-list-row case-built">
                      <span className="case-built-n">{String(i + 1).padStart(2, '0')}</span>
                      <span><b>{lead}</b>{rest}</span>
                    </div>
                  );
                })}
              </div>
              <div className="case-list">
                <span className="label case-list-label">KEY DESIGN DECISIONS</span>
                {p.challenges.map(c => (
                  <div key={c.title} className="case-list-row">
                    <b>{c.title}</b> - {c.text}
                  </div>
                ))}
              </div>
            </div>
            <button onClick={closeCase} aria-expanded className="btn btn-outline case-hide">Hide details −</button>
          </>
        )}
      </div>
    </section>
  );
}
