import olya from '../assets/olya.jpeg';
import { CONTACTS } from '../data/content';
import './Contact.css';

export function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="contact-glow" />
      <div className="contact-inner">
        <div className="contact-grid">
          <div className="contact-intro">
            <span className="eyebrow contact-eyebrow">06 — CONTACT</span>
            <h2 className="contact-title">
              Let's build something <span className="gradient-text">great.</span>
            </h2>
            <p className="contact-lede">
              I'm open to frontend, UI/UX, and product engineering roles- especially teams building healthcare, SaaS, or data
              products.
            </p>
          </div>
          <div className="contact-links">
            <div className="contact-status">
              <span className="contact-status-head">
                <span className="contact-avatar">
                  <img src={olya} alt="" />
                  <span className="contact-online" />
                </span>
                Open to opportunities
              </span>
              <span className="contact-status-sub">
                Available for full-time and part-time roles. Based in Houston, TX · Open to remote.
              </span>
            </div>
            {CONTACTS.map(c => (
              <a key={c.href} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-link-text">
                  <span className="contact-link-label">{c.label}</span>
                  <span className="contact-link-sub">{c.sub}</span>
                </span>
                <span className="contact-link-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
        <div className="contact-bottom">
          <span>© 2026 Olya Ezhova. All rights reserved.</span>
          <span className="contact-built">Built with React · TypeScript · Vite</span>
          <a href="#top" className="contact-top">↑ BACK TO TOP</a>
        </div>
      </div>
    </footer>
  );
}
