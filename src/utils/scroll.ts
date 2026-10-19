export const navHeight = () => document.querySelector('nav')?.offsetHeight ?? 64;

/** Smooth-scrolls so the "Selected work" header sits `gap` px below the sticky nav. */
export function scrollToProjectsHeading(gap: number) {
  const section = document.getElementById('projects');
  const target = section?.firstElementChild ?? section;
  if (!target) return;
  window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navHeight() - gap, behavior: 'smooth' });
}
