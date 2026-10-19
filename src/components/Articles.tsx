import { useLayoutEffect, useRef, useState } from 'react';
import { ARTICLES } from '../data/content';
import { navHeight } from '../utils/scroll';
import './Articles.css';

const readTime = (body: string[]) => Math.max(1, Math.round(body.join(' ').split(/\s+/).length / 200)) + ' MIN READ';

export function Articles({ vw }: { vw: number }) {
  const [openArt, setOpenArt] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  // Runs after the DOM updates, before paint, to keep the reader's place.
  const pendingScroll = useRef<(() => void) | null>(null);

  useLayoutEffect(() => {
    const fn = pendingScroll.current;
    pendingScroll.current = null;
    fn?.();
  });

  const toggle = (i: number) => {
    const top0 = document.getElementById('article-' + i)?.getBoundingClientRect().top ?? 0;
    const closing = openArt === i;
    setOpenArt(closing ? null : i);
    pendingScroll.current = () => {
      const el = document.getElementById('article-' + i);
      if (!el) return;
      const navH = navHeight();
      const r = el.getBoundingClientRect();
      // Collapsing a long article on a phone: jump back to its card instead of landing further down the page.
      if (closing && (r.top < navH || r.top > window.innerHeight)) window.scrollTo({ top: r.top + window.scrollY - navH - 16 });
      // Opening: keep this card where it was, in case another article above it just closed.
      else if (!closing && Math.abs(r.top - top0) > 1) window.scrollBy(0, r.top - top0);
    };
  };

  const toggleAll = () => {
    if (showAll && openArt !== null && openArt > 0) setOpenArt(null);
    setShowAll(!showAll);
  };

  return (
    <section id="articles" className="articles">
      <div className="container articles-inner">
        <div className="articles-intro" style={{ position: vw >= 860 ? 'sticky' : 'static' }}>
          <span className="eyebrow">04 — ARTICLES</span>
          <h2 className="articles-title">Thoughts on engineering &amp; design</h2>
          <p className="articles-lede">
            Posts originally published on LinkedIn - perspectives on frontend engineering, product thinking, and working at
            the intersection of design and code.
          </p>
          <button onClick={toggleAll} aria-expanded={showAll} className="btn btn-outline articles-all">
            {showAll ? 'Show fewer articles ↑' : `View all articles (${ARTICLES.length}) →`}
          </button>
        </div>
        <div className="articles-list">
          {ARTICLES.slice(0, showAll ? ARTICLES.length : 1).map((a, i) => {
            const open = openArt === i;
            return (
              <article key={a.title} id={'article-' + i} className="article">
                <div className="article-meta">
                  <span>LINKEDIN · {String(i + 1).padStart(2, '0')}</span>
                  <span>{readTime(a.body)}</span>
                </div>
                <h3 className="article-title">{a.title}</h3>
                {open ? (
                  <div className="article-body">
                    {a.body.map((para, j) => <p key={j}>{para}</p>)}
                  </div>
                ) : (
                  <p className="article-preview">{a.preview}</p>
                )}
                <div className="article-foot">
                  <div className="article-tags">
                    {a.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                  <button onClick={() => toggle(i)} aria-expanded={open} className="article-toggle">
                    {open ? 'Collapse −' : 'Read full article +'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
