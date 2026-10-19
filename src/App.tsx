import { useEffect, useState } from 'react';
import { About, Philosophy } from './components/About';
import { Articles } from './components/Articles';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { useViewportWidth, WIDE_MIN } from './hooks/useViewportWidth';

export default function App() {
  const vw = useViewportWidth();
  const wide = vw >= WIDE_MIN;
  const [menuOpen, setMenuOpen] = useState(false);

  // The mobile menu closes itself when the window grows to desktop width.
  useEffect(() => {
    if (wide) setMenuOpen(false);
  }, [wide]);

  return (
    <div className="page">
      <Nav wide={wide} menuOpen={menuOpen} onToggleMenu={() => setMenuOpen(o => !o)} onCloseMenu={() => setMenuOpen(false)} />
      <Hero wide={wide} />
      <Stats vw={vw} wide={wide} />
      <About wide={wide} />
      <Philosophy />
      <Projects narrow={!wide} />
      <Skills wide={wide} />
      <Articles vw={vw} />
      <Testimonials />
      <Contact />
    </div>
  );
}
