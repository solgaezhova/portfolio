import './Nav.css';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#testimonials', label: 'Testimonials' },
];

interface Props {
  wide: boolean;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
}

export function Nav({ wide, menuOpen, onToggleMenu, onCloseMenu }: Props) {
  return (
    <nav className="nav">
      <div className="nav-bar">
        <a href="#top" className="nav-brand">
          <span className="nav-logo">OE</span>
          Olya Ezhova
        </a>
        {wide ? (
          <div className="nav-links">
            {LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={onCloseMenu} className="nav-link">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="nav-contact">Contact</a>
          </div>
        ) : (
          <button onClick={onToggleMenu} aria-label="Menu" aria-expanded={menuOpen} className="nav-menu-btn">
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        )}
      </div>
      {!wide && menuOpen && (
        <div className="nav-drawer">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={onCloseMenu} className="nav-drawer-link">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={onCloseMenu} className="nav-drawer-contact">Contact</a>
        </div>
      )}
    </nav>
  );
}
