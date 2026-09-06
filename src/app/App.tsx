import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Globe,
  ExternalLink,
  ChevronRight,
  Code2,
  Layers,
  Zap,
  BarChart3,
  Accessibility,
  Bot,
  Users,
  Lightbulb,
  CheckCircle2,
  Quote,
  MapPin,
  Menu,
  X,
  Monitor,
  Smartphone,
  ChevronLeft,
  ChevronDown,
  Phone,
  Clock3,
  Palette,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import ss1 from "@/imports/screenshots/project1-screenshot1-overview.png";
import ss2 from "@/imports/screenshots/project1-screenshot2-search-results.png";
import ss3 from "@/imports/screenshots/project1-screenshot3-nearby-clinics.png";
import ss4 from "@/imports/screenshots/project1-screenshot4-map-view.png";
import project1FlowVideo from "@/imports/recordings/project1-recording.mp4";
import project2FlowVideo from "@/imports/recordings/project2-recording.mp4";
import project1Poster from "@/imports/posters/project1-poster.png";
import picHomepage from "@/imports/screenshots/project2-screenshot1-home.png";
import picProviderPage from "@/imports/screenshots/project2-screenshot2-provider-page.png";
import picPracticePage from "@/imports/screenshots/project2-screenshot4-practice-page.png";
import picDashboard1 from "@/imports/screenshots/project3-screenshot1-dashboard-light.png";
import picDashboard2 from "@/imports/screenshots/project3-screenshot2-dashboard-full.png";
import picDashboard3 from "@/imports/screenshots/project3-screenshot3-dashboard-dark.png";
import picMarket1 from "@/imports/screenshots/project4-screenshot1-market-today.png";
import picMarket2 from "@/imports/screenshots/project4-screenshot2-market-monthly.png";
import picPracticeDetails from "@/imports/screenshots/project2-screenshot3-practice-details.png";
import certMobileUX from "@/imports/certificates/Certificate_Mobile_UX-Design.jpg";
import certMasterClass from "@/imports/certificates/masterclass-certificate-how-to-create-complex-tables-users-love-a-ui-designers-guide.jpg";
import certAiDesignSystems from "@/imports/certificates/certificate-ai-for-design-systems-how-to-stay-ahead-and-lead.jpg";
import certConversationDesign from "@/imports/certificates/certificate-conversation-design-practical-tips-for-ai-design.jpg";
import certDesignPatternsAiUx from "@/imports/certificates/certificate-design-patterns-for-ai-ux.jpg";
import certGetAheadProductAi from "@/imports/certificates/certificate-get-ahead-in-product-design-with-ai.jpg";
import certHealthcareUx from "@/imports/certificates/certificate-healthcare-ux-design-for-patient-engagement-and-technology-adoption.jpg";
import certHumanCenteredAi from "@/imports/certificates/certificate-human-centered-design-for-ai.jpg";

// ─── NAV ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Articles", href: "#articles" },
  { label: "Certificates", href: "#certificates" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#projects");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const activationOffset = window.scrollY + 120;
      let currentSection = "#projects";

      for (const link of NAV_LINKS) {
        const section = document.querySelector(link.href) as HTMLElement | null;
        if (section && section.offsetTop <= activationOffset) {
          currentSection = link.href;
        }
      }

      setActiveSection((prev) => (prev === currentSection ? prev : currentSection));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-tight text-foreground">
          Olya Ezhova
        </span>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveSection(link.href)}
                aria-current={isActive ? "page" : undefined}
                className={`px-3 py-1.5 text-sm transition-colors rounded-full ${
                  isActive
                    ? "font-medium bg-foreground text-background hover:bg-foreground/90"
                    : link.label === "Projects"
                      ? "font-medium text-foreground/90 bg-secondary hover:text-foreground hover:bg-secondary/80"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary font-normal rounded-md"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <button
          className="md:hidden p-2 text-muted-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-border px-6 pb-4">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.href);
                  setMobileOpen(false);
                }}
                aria-current={isActive ? "page" : undefined}
                className={`block py-2 px-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? "text-foreground bg-secondary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}

// ─── SECTION LABEL ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="h-px w-6 bg-primary" />
      <span className="text-xs font-semibold tracking-widest uppercase text-primary">
        {children}
      </span>
    </div>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
  y = 10,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function TypewriterPhilosophy({
  intro,
  emphasis,
  className,
  speed = 22,
}: {
  intro: string;
  emphasis: string;
  className?: string;
  speed?: number;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [startTyping, setStartTyping] = useState(reduceMotion);
  const totalLength = intro.length + emphasis.length;
  const [visibleChars, setVisibleChars] = useState(reduceMotion ? totalLength : 0);

  useEffect(() => {
    if (reduceMotion) {
      setStartTyping(true);
      setVisibleChars(totalLength);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduceMotion, totalLength]);

  useEffect(() => {
    if (!startTyping || reduceMotion || visibleChars >= totalLength) return;

    const timer = window.setInterval(() => {
      setVisibleChars((prev) => Math.min(prev + 1, totalLength));
    }, speed);

    return () => window.clearInterval(timer);
  }, [startTyping, reduceMotion, visibleChars, totalLength, speed]);

  const introVisible = intro.slice(0, Math.min(visibleChars, intro.length));
  const emphasisVisible = emphasis.slice(
    0,
    Math.max(0, Math.min(visibleChars - intro.length, emphasis.length)),
  );

  return (
    <p ref={ref} className={className}>
      {introVisible}
      <span className="font-semibold">{emphasisVisible}</span>
      {startTyping && !reduceMotion && visibleChars < totalLength && (
        <span className="ml-0.5 text-primary/70 animate-pulse">|</span>
      )}
    </p>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="min-h-screen flex flex-col justify-center pt-14 pb-24 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-end">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.04 }}
              className="text-xs font-semibold tracking-widest uppercase text-primary mb-8"
            >
              Available for new opportunities
            </motion.p>
            <motion.h1
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.34, delay: 0.08 }}
              className="text-[clamp(2.8rem,8vw,6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-black mb-0 md:mb-8"
            >
              Olya Ezhova
            </motion.h1>
            <motion.p
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.12 }}
              className="text-xl font-medium text-muted-foreground mt-3 mb-5 md:mt-0 md:mb-5 tracking-tight flex flex-wrap items-center gap-y-3 gap-x-2 sm:gap-x-0"
            >
              <span className="inline-flex w-full sm:w-auto h-10 justify-start items-center px-3.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 leading-none">
                Design Engineer
              </span>
              <span className="mx-2 text-muted-foreground/60 hidden sm:inline">·</span>
              <span className="text-teal-700 inline-flex">UI/UX Design</span>
              <span className="mx-0.5 sm:mx-2 text-muted-foreground/60 inline">·</span>
              <span className="text-sky-700 inline-flex">Healthcare</span>
              <span className="mx-0.5 sm:mx-2 text-muted-foreground/60 inline">·</span>
              <span className="text-cyan-700 inline-flex">SaaS</span>
            </motion.p>
            <motion.p
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.16 }}
              className="text-base text-muted-foreground max-w-xl leading-relaxed mb-10"
            >
              Designing and building intuitive healthcare and SaaS products through the intersection
              of engineering, UX, and AI.
            </motion.p>

            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/90 transition-colors"
              >
                View my work
                <ArrowRight size={14} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-full hover:bg-secondary transition-colors"
              >
                Get in touch
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 14 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="hidden lg:flex flex-col gap-3 text-right"
          >
            <ContactLink
              icon={<Mail size={13} />}
              label="olya.yezhova@gmail.com"
              href="mailto:olya.yezhova@gmail.com" target="_blank" rel="noopener noreferrer"
            />
            <ContactLink
              icon={<Linkedin size={13} />}
              label="linkedin.com/in/oezhova"
              href="https://linkedin.com/in/oezhova"
              target="_blank"
              rel="noopener noreferrer"
            />
            <ContactLink
              icon={<Github size={13} />}
              label="github.com/solgaezhova"
              href="https://github.com/solgaezhova"
              target="_blank"
              rel="noopener noreferrer"
            />
            <div className="mt-2 flex items-center gap-1.5 justify-end text-xs text-muted-foreground">
              <MapPin size={11} />
              Houston, Texas · Remote
            </div>
          </motion.div>
        </div>

        <div className="mt-20 relative left-1/2 right-1/2 w-screen -translate-x-1/2">
          <div className="relative h-px w-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 w-[220%] bg-gradient-to-r from-cyan-300/55 via-sky-300/45 to-teal-300/55"
              initial={{ x: "-55%" }}
              animate={reduceMotion ? { x: "-55%" } : { x: ["-55%", "0%"] }}
              transition={{ duration: 5, ease: "linear", repeat: Infinity }}
            />
          </div>
          <div className="pt-6 pl-[max(1.5rem,calc((100vw-72rem)/2))] pr-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {[
            {
              number: "20+",
              label: "Large-scale applications",
              glow: "from-teal-400/28 via-teal-300/10 to-transparent",
              accent: "bg-teal-500/65",
              ring: "group-hover:border-teal-400/40",
              numberTone: "group-hover:text-teal-700",
            },
            {
              number: "5,000+",
              label: "Daily users",
              glow: "from-sky-400/28 via-sky-300/10 to-transparent",
              accent: "bg-sky-500/65",
              ring: "group-hover:border-sky-400/40",
              numberTone: "group-hover:text-sky-700",
            },
            {
              number: "330+",
              label: "Healthcare clinics supported",
              glow: "from-blue-400/28 via-blue-300/10 to-transparent",
              accent: "bg-blue-500/65",
              ring: "group-hover:border-blue-400/40",
              numberTone: "group-hover:text-blue-700",
            },
            {
              number: "30%",
              label: "Processing time reduced",
              glow: "from-emerald-400/26 via-emerald-300/10 to-transparent",
              accent: "bg-emerald-500/65",
              ring: "group-hover:border-emerald-400/40",
              numberTone: "group-hover:text-emerald-700",
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.28, delay: 0.035 * i }}
              className="group"
            >
              <div className={`relative overflow-hidden rounded-2xl border border-border/80 bg-card/70 backdrop-blur-sm px-5 py-5 md:px-6 md:py-6 min-h-[138px] md:min-h-[150px] shadow-[0_1px_0_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 h-full ${stat.ring}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.glow} opacity-60`} />
                <div className="absolute -top-10 -right-8 w-24 h-24 rounded-full bg-white/30 blur-2xl" />
                <div className="relative">
                <div className={`h-1.5 w-11 rounded-full mb-3 ${stat.accent}`} />
                <div className={`text-3xl font-semibold tracking-tight text-foreground mb-1 transition-colors ${stat.numberTone}`}>
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground leading-snug">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon,
  label,
  href,
  target,
  rel,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors justify-end"
    >
      {icon}
      {label}
    </a>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────

function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="1.25" strokeLinecap="round">
        <ellipse cx="12" cy="12" rx="8.5" ry="3.2" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="8.5" ry="3.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="8.5" ry="3.2" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm4.5 3.2h2.4v7.3h-2.4V8.7Zm4 0h5.1v2.1h-2.7v5.2h-2.4V10.8h-2.1V8.7h2.1Z" fill="#3178C6" />
    </svg>
  );
}

function ViteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M12 2.3 2.8 18.2l1.8 3.5 7.4-13.3 7.4 13.3 1.8-3.5L12 2.3Zm0 4.5 4.8 8.7H7.2L12 6.8Z" fill="#FFCF5A" />
      <path d="M4.8 18.7 12 5.6l7.2 13.1H4.8Z" fill="#6FE2D5" opacity="0.9" />
    </svg>
  );
}

function VitestIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M12 2.5c2 0 3.8 1.2 4.7 2.9l.6 1.3 1.4.6c1.8.8 2.9 2.8 2.5 4.8-.3 1.9-1.8 3.4-3.8 3.8l-1.4.3-.8 1.5c-.9 1.8-2.8 2.9-4.9 2.9-2.1 0-4-.9-4.9-2.7l-.7-1.4-1.5-.7c-2-.8-3.2-2.8-2.9-4.9.2-2.1 1.8-3.8 3.9-4.1l1.4-.2.8-1.4C8.3 4.1 10 2.5 12 2.5Zm.1 3.2-2.5 7.2h2.1l-.6 4.2 5.9-8.1h-2.5l1.4-3.3h-3.8Z" fill="#6E9F18" />
    </svg>
  );
}

function AzureIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M3 17.3 9.3 5.8l4.5 11.5H3Zm7.8-9.3L21 18.7H9.9L7.3 13.8l3.5-5.8Z" fill="#0078D4" />
    </svg>
  );
}

function FigmaIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M8.5 3.5a3.5 3.5 0 0 1 3.5 3.5H8.5V3.5Zm0 3.5H5a3.5 3.5 0 0 1 3.5-3.5v3.5Zm0 3.5a3.5 3.5 0 0 1-3.5-3.5H8.5v3.5Zm0 3.5a3.5 3.5 0 0 1-3.5-3.5H8.5v3.5Zm3.5 0a3.5 3.5 0 1 1 0-7h3.5v7H12Zm0 0v3.5a3.5 3.5 0 1 1 0-7V13Zm7-7a3.5 3.5 0 0 1 0 7H15v-7h4Z" fill="#F24E1E" />
      <path d="M15 3.5h3.5a3.5 3.5 0 0 1 0 7H15V3.5Zm0 7h3.5a3.5 3.5 0 0 1 0 7H15v-7Z" fill="#FF7262" opacity="0.8" />
      <path d="M8.5 20.5a3.5 3.5 0 0 1 0-7h3.5v7H8.5Z" fill="#A259FF" opacity="0.8" />
    </svg>
  );
}

const CORE_STRENGTHS = [
  {
    icon: <Code2 size={16} />,
    label: "Frontend Engineering",
    description:
      "Building modern, responsive, accessible web applications using React, TypeScript, JavaScript, HTML, CSS, and REST APIs.",
  },
  {
    icon: <Layers size={16} />,
    label: "UI/UX Design",
    description:
      "Designing intuitive interfaces, simplifying complex workflows, creating wireframes, prototypes, and dashboards; integrating design systems.",
  },
  {
    icon: <Users size={16} />,
    label: "Healthcare Technology",
    description:
      "Developing digital products used by clinicians, operational teams, and healthcare staff across large healthcare organizations.",
  },
  {
    icon: <Bot size={16} />,
    label: "AI-Enhanced Development",
    description:
      "Leveraging GitHub Copilot, ChatGPT, and Figma Make to accelerate design exploration, implementation, documentation, and development workflows.",
  },
];

const WHAT_I_BUILD = [
  "Complex dashboards",
  "Data visualization",
  "Workflow automation",
  "Internal business applications",
  "Accessible user interfaces"
];

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Summary */}
        <div>
          <SectionLabel>About</SectionLabel>
          <div className="grid lg:grid-cols-[2fr_1fr] gap-16 items-start">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-foreground mb-6">
                Engineering clarity,
                <br />
                designing with purpose.
              </h2>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  {"I'm a Design Engineer with 5+ years of experience designing and building healthcare and SaaS applications. My strength is translating complex business workflows into intuitive, accessible, and scalable user experiences."}
                </p>
                <p>
                  I combine frontend engineering, UX design, and product
                  thinking to create applications that are both technically
                  robust and easy to use. I enjoy collaborating with clinicians,
                  product teams, and stakeholders to solve real-world problems
                  and deliver measurable business impact.
                </p>
                <p>
                  {"I'm incorporating AI tools into both my design and development workflow to prototype faster, explore more ideas, and increase development efficiency."}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                  Industries
                </h3>
                {[
                  {
                    label: "Healthcare",
                    tone: "text-sky-800",
                  },
                  {
                    label: "SaaS",
                    tone: "text-teal-800",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`py-3.5 border-b border-border text-lg font-semibold tracking-tight ${item.tone}`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                  What I enjoy building
                </h3>
                {WHAT_I_BUILD.map((v) => (
                  <div
                    key={v}
                    className="flex items-center gap-2 py-2 border-b border-border text-sm text-muted-foreground"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {v}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core strengths */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            Core Strengths
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_STRENGTHS.map((s, i) => (
              <div
                key={s.label}
                className="relative overflow-hidden p-5 bg-card/75 backdrop-blur-sm border border-border rounded-xl hover:border-primary/30 hover:shadow-md transition-all duration-200 group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${[
                  "from-cyan-400/22 via-cyan-200/8 to-transparent",
                  "from-teal-400/22 via-teal-200/8 to-transparent",
                  "from-sky-400/22 via-sky-200/8 to-transparent",
                  "from-emerald-400/22 via-emerald-200/8 to-transparent",
                ][i % 4]} opacity-70`} />
                <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-white/35 blur-2xl" />
                <div className="relative">
                  <div className="w-8 h-8 rounded-lg bg-white/65 border border-white/60 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    {s.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    {s.label}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Award + background row */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 bg-card border border-border rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 text-amber-500">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">
                Recognition
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                Recognized with{" "}
                <span className="font-semibold">
                  HCA Healthcare's Service Excellence Award (2025)
                </span>{" "}
                for delivering high-quality, customer-focused solutions.
              </p>
            </div>
          </div>

          <div className="p-6 bg-card border border-border rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-primary shrink-0">
              <Layers size={18} />
            </div>
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">
                Membership
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                Member of the{" "}
                <span className="font-semibold">
                  Interaction Design Foundation
                </span>{" "}
                - continuously expanding expertise in UX, design systems, and AI for designers.
              </p>
            </div>
          </div>

          <div className="p-6 bg-card border border-border rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-primary shrink-0">
              <Globe size={18} />
            </div>
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">
                Background
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Having lived and worked across multiple countries and cultures, I
                bring adaptability, curiosity, strong communication skills, and
                diverse perspectives to collaborative teams.
              </p>
            </div>
          </div>

          <div className="p-6 bg-card border border-border rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 text-amber-500">
              <Lightbulb size={18} />
            </div>
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">
                Fun Fact
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I was a{" "}
                <span className="font-semibold text-foreground">lawyer for over 10 years</span>{" "}
                before switching to software engineering - bringing structured thinking, attention to detail, and a deep appreciation for clear documentation to everything I build.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="relative overflow-hidden p-8 bg-card border border-cyan-200/70 rounded-2xl grid lg:grid-cols-[auto_1fr] gap-6 items-start shadow-[0_10px_30px_-18px_rgba(8,145,178,0.45)]">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/14 via-sky-300/8 to-transparent" />
          <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-cyan-200/25 blur-3xl" />
          <div className="relative w-10 h-10 rounded-xl bg-white/80 border border-cyan-100 flex items-center justify-center text-cyan-700 shrink-0">
            <Quote size={18} />
          </div>
          <div className="relative">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
              Personal Philosophy
            </h3>
            <TypewriterPhilosophy
              intro="Great frontend engineers don't just build interfaces. "
              emphasis="They understand the people, processes, and workflows behind them."
              className="text-base text-foreground leading-relaxed mb-3"
            />
           
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── SKILLS ───────────────────────────────────────────────────────────────────

const SKILL_CATEGORIES = [
  {
    icon: <Code2 size={18} />,
    label: "Frontend Development",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Vite",
      "Next.js",
      "REST APIs",
      "Shadcn/ui"
    ],
  },
  {
    icon: <Layers size={18} />,
    label: "UI Engineering",
    skills: [
      "Tailwind CSS",
      "Bootstrap",
      "Responsive layout",
      "Animation",
      "Design System Integration",
    ],
  },
  {
    icon: <Lightbulb size={18} />,
    label: "UX Design",
    skills: [
      "Figma",
      "User research",
      "Wireframing",
      "Prototyping",
    ],
  },
  {
    icon: <BarChart3 size={18} />,
    label: "Data Visualization",
    skills: ["Plotly", "D3.js", "Recharts", "Dashboard design", "Charting", "DataTables", "Chart.js"],
  },
  {
    icon: <Accessibility size={18} />,
    label: "Accessibility",
    skills: [
      "WCAG 2.1 AA",
      "ARIA",
      "Keyboard navigation",
      "Screen reader testing",
      "Color contrast",
    ],
  },
  {
    icon: <Bot size={18} />,
    label: "AI Tools",
    skills: [
      "GitHub Copilot",
      "ChatGPT",
      "Figma Make",
      "Cursor",
      "Claude",
      "AI-assisted prototyping",
    ],
  },
  {
    icon: <Users size={18} />,
    label: "Collaboration",
    skills: [
      "Git / GitHub",
      "Agile / Scrum",
      "Cross-functional teams",
      "Design handoff",
      "Code review",
    ],
  },
  {
    icon: <Zap size={18} />,
    label: "Product Thinking",
    skills: [
      "Requirements analysis",
      "User story mapping",
      "Stakeholder collaboration",
      "Workflow optimization"
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-4xl font-semibold tracking-tight text-foreground mb-12">
          What I bring to the table
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={cat.label}
              className="relative overflow-hidden p-5 border border-border rounded-xl bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200 group"
            >
              <div
                className={`absolute inset-0 opacity-40 pointer-events-none bg-gradient-to-br ${[
                  "from-cyan-200/45 via-transparent to-transparent",
                  "from-sky-200/45 via-transparent to-transparent",
                  "from-teal-200/45 via-transparent to-transparent",
                  "from-blue-200/45 via-transparent to-transparent",
                ][i % 4]}`}
              />
              <div
                className={`relative mb-3 h-1.5 w-11 rounded-full ${[
                  "bg-cyan-500/65",
                  "bg-sky-500/65",
                  "bg-teal-500/65",
                  "bg-blue-500/65",
                ][i % 4]}`}
              />
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-3">
                {cat.label}
              </h3>
              <div className="relative flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-0.5 bg-secondary/90 border border-border/60 text-muted-foreground rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TECH BADGE ───────────────────────────────────────────────────────────────

function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex min-w-0 max-w-full items-center gap-1 text-xs px-2.5 py-1 bg-secondary border border-border text-foreground rounded-full font-mono whitespace-normal break-all sm:break-words">
      {label}
    </span>
  );
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Screenshot = {
  type?: "image" | "video";
  src: any;
  alt: string;
  caption: string;
  poster?: string;
};
type ImpactItem = { metric: string; label: string };

const PROJECTS = [
  {
    number: "01",
    title: "Urgent Care Services Dashboard",
    subtitle: "A production application that helps call center operators quickly find nearby clinics offering the service a patient needs, check availability, and compare options.",
    organization: "HCA Healthcare",
    industry: "Healthcare",
    status: "Product Design · Design Engineering · Frontend",
    liveUrl: "https://ucservices.cnw.hcahealthcare.cloud/",
    githubUrl: null,
    tech: ["React", "TypeScript", "Vite", "Azure Maps", "Vitest", "Figma"],
    myRole: "Product Designer & Frontend Engineer",
    responsibilities: [
      "End-to-end product design — Designed the user experience and product workflow.",
      "Product architecture — Shaped the overall architecture and information hierarchy.",
      "API & data requirements — Defined what the frontend needed from the backend.",
      "Frontend implementation — Built the complete experience in React and TypeScript.",
      "Responsive + accessible — Designed touch-friendly experiences across desktop and mobile.",
      "Neutron design system — Used HCA's existing design system for consistent, accessible UI.",
    ],
    challenge:
      "When a patient called the call center, operators needed to find a clinic that could provide the requested service. Previously, operators had to contact clinics individually to find availability.",
    architecture:
      "I translated the UX requirements into the data and API requirements needed to support the experience, including the data required for clinic results, availability, and the map.\n\nI also proposed in-memory caching to reduce unnecessary API requests while keeping availability data reasonably fresh.",
    technicalChallenges: [
      "Progressive disclosure::Show only relevant clinics first; reveal nearby options when needed.",
      "Proximity-based alternatives::Show nearby clinics sorted by distance when the selected clinic has no availability.",
      "List + Map::Use the list for quick comparison and the map for geographic context.",
      "Responsive + accessible::Designed touch-friendly, accessible experiences across desktop and mobile.",
      "HCA Design System::Used Neutron components for consistency and established accessibility patterns.",
    ],
    impact: [
      { metric: "330+", label: "clinics" },
      { metric: "5,000+", label: "daily users" },
      { metric: "Production", label: "application" },
      { metric: "WCAG 2.1 AA", label: "accessibility" },
    ],
    screenshots: [
      {
        type: "video",
        src: project1FlowVideo,
        poster: project1Poster,
        alt: "Urgent Care Services Dashboard demo flow",
        caption: "From clinic search to availability and nearby alternatives",
      },
      { src: ss2, alt: "Search results with service hours", caption: "Step 1 — Check service availability by clinic" },
      { src: ss3, alt: "Nearby clinics expanded panel", caption: "Step 2 — Compare nearby clinics" },
      { src: ss4, alt: "Map view with clinic pins", caption: "Step 3 — Explore locations on the map" },
    ] as Screenshot[],
  },
  {
    number: "02",
    title: "Practice Information Card",
    subtitle: "HCA Healthcare · UI/UX Redesign",
    organization: "HCA Healthcare",
    industry: "Healthcare",
    status: "Re-Design",
    liveUrl: "https://practice-info-card.figma.site/",
    githubUrl: null,
    tech: ["Figma Make", "UX Research", "UI/UX Design", "Accessibility"],
    myRole: "UX Researcher & UI/UX Designer",
    responsibilities: [
      "Redesigned the provider and practice information experience.",
      "Designed categorized autocomplete search and filters.",
      "Restructured dense provider and practice data.",
      "Designed and prototyped the experience in Figma Make.",
    ],
    challenge:
      "Call center teams needed a faster way to find providers, services, and practice details. The existing experience was difficult to scan and slowed access to critical information.",
    architecture:
      "The redesign covered four surfaces: (1) Home - clear subtitle, search bar with helper text and descriptive placeholder, 'Recently Viewed' section, card-based help resources. (2) Search - autosuggest dropdown after 3 characters with results categorized into Clinics, Providers, and COID, plus quick filter chips (All / Clinic Only / Provider Only / COID Only). (3) Practice page - tabbed navigation (Providers / Sites / Practice Details), card layout for contact and location details, insurance chips, and breadcrumb navigation. (4) Provider page - dedicated page with specialty chips, status badges, quick action buttons (Contact Provider, Schedule Appointment, Send Message), and organized card sections for professional info, practice affiliation, and practice policies. The prototype was built with Figma Make.",
    technicalChallenges: [
      "Accessibility::Fixed WCAG issues across contrast, ARIA, and keyboard navigation.",
      "Search::Designed real-time autocomplete with categorized results and filters.",
      "Dense data::Reworked provider and practice information into scannable cards.",
      "Variable content::Designed layouts that adapt to different provider and practice data.",
    ],
    impact: [
      { metric: "WCAG AA", label: "Accessible design" },
      { metric: "50% faster", label: "Search time" },
      { metric: "Real-time", label: "Live search" },
      { metric: "Direct search", label: "Direct provider search" },
    ],
    screenshots: [
      {
        type: "video",
        src: project2FlowVideo,
        poster: picHomepage,
        alt: "Practice Information Card demo flow",
        caption: "",
      },
      { src: picHomepage, alt: "Practice Information Card home page with search", caption: "Home - autosuggest search with categorized Clinics & Providers results and filter chips" },
      { src: picProviderPage, alt: "Provider detail page - upper section", caption: "Provider page - header with status badges, specialty chips, and quick action buttons" },
      { src: picPracticePage, alt: "Practice page with Providers tab", caption: "Practice page - header card with key metrics, tabbed navigation, and provider cards with status badges" },
      { src: picPracticeDetails, alt: "Practice details tab", caption: "Practice Details tab - general info, policies, contact cards, hours, and insurance accepted" },
    ] as Screenshot[],
  },
  {
    number: "03",
    title: "Healthcare Clinic Dashboard",
    subtitle: "Open Source · Personal Project",
    organization: "Personal / Open Source",
    industry: "Healthcare",
    status: "Design & Build",
    liveUrl: "https://solgaezhova.github.io/shadcn-dashboard/",
    githubUrl: "https://github.com/solgaezhova/shadcn-dashboard",
    tech: ["Next.js 16", "TypeScript", "shadcn/ui", "Tailwind CSS", "Recharts", "TanStack Table", "GitHub Pages", "GitHub Actions"],
    myRole: "Healthcare UI/UX Designer & Frontend Engineer",
    responsibilities: [
      "Designed and implemented the complete healthcare dashboard UI.",
      "Built interactive metric cards, charts, and data tables.",
      "Implemented responsive layouts and dark mode.",
      "Used Figma Make and GitHub Copilot to accelerate design and development.",
    ],
    challenge:
      "Built as a personal project to explore modern frontend patterns for healthcare dashboards, with a focus on accessibility, data visualization, and reusable UI components.",
    architecture:
      "Next.js 16 app with static export deployed via GitHub Pages and automated GitHub Actions workflow. React component hierarchy built with shadcn/ui providing WCAG 2.1 AA-compliant components. Global CSS variables define an oklch-based color system ensuring perceptual uniformity across all surfaces. Patient metrics displayed via Recharts with interactive area charts, time range selectors (Last 3 months / Last 30 days / Last 7 days), and tooltips. Advanced data table uses TanStack React Table for column visibility, sorting, filtering, and pagination. Sidebar navigation with active state indicators. Mock data simulates real clinic operations: patient count, average wait time, open exam rooms, staff status, and triage levels.",
    technicalChallenges: [
      "Accessible data visualization::Designed an OKLCH-based color system to distinguish chart data without relying on color alone.",
      "Reusable UI system::Built dashboard components with shared tokens and shadcn/ui for consistent styling.",
      "Dense clinical data::Organized metrics, charts, and tables into a clear hierarchy without overwhelming the user.",
      "Responsive dashboard::Designed two-column layout to adapt across desktop, tablet, and mobile.",
    ],
    impactLabel: "KEY FEATURES",
    impact: [
      { metric: "4 metric cards", label: "Patients, wait time, rooms, staff" },
      { metric: "Trend analysis", label: "3-month, 30-day, and 7-day" },
      { metric: "Data table", label: "Sorting, filtering, table controls" },
      { metric: "Dark mode", label: "Full theme switching" },
    ],
    screenshots: [
      { src: picDashboard1, alt: "Healthcare clinic dashboard showing metric cards and area chart", caption: "Light mode - metric cards (patients, wait time, exam rooms, staff) and patient trend chart" },
      { src: picDashboard2, alt: "Full dashboard view with metrics, chart, and data table", caption: "Full view - trend chart with tooltip active and clinic operations table" },
      { src: picDashboard3, alt: "Dashboard in dark mode", caption: "Dark mode - full color token switching for 24/7 clinical operations" },
    ] as Screenshot[],
  },
  {
    number: "04",
    title: "Healthcare Market Dashboard",
    subtitle: "UI/UX Design (Figma)",
    organization: "Personal / Concept",
    industry: "Healthcare",
    status: "Design",
    liveUrl: "",
    githubUrl: null,
    tech: ["Figma", "UI/UX Design", "Data Visualization", "Dashboard Design"],
    myRole: "UI/UX Designer",
    responsibilities: [
      "Designed a market-level dashboard for monitoring multiple clinics.",
      "Created a Market Health Score and executive KPIs.",
      "Designed data visualizations for trends, utilization, satisfaction.",
      "Created the high-fidelity interactive prototype in Figma.",
    ],
    challenge:
      "Designed as a personal concept to explore how healthcare leaders could monitor multi-clinic performance in one view, with a focus on prioritizing exceptions and trends.",
    architecture:
      "Designed in Figma Make as a high-fidelity interactive prototype (desktop only). The layout is structured around a management-by-exception model: a Market Health Score at top-left anchors the view, followed by six executive KPI cards, then a full-width clinic performance ranking table. The lower section splits into three panels - an Exception Panel flagging critical and watch clinics, a Satisfaction vs. Utilization scatter plot positioning all clinics on a 2x2 performance grid, and a Visit Reason donut chart. A Today / Monthly toggle switches the entire dashboard between daily operational data and rolling monthly performance.",
    technicalChallenges: [
      "Information density::Created a clear hierarchy for KPIs, rankings, charts, and exceptions within one dashboard.",
      "Prioritization::Designed the Exception Panel to surface clinics requiring attention first.",
      "Composite metrics::Designed a Market Health Score that combines multiple performance dimensions into one readable signal.",
      "Data comparison::Used visual comparisons to make clinic performance, trends, and outliers easy to identify.",
    ],
    impactLabel: "Key Features",
    impact: [
      { metric: "Today / Monthly", label: "Switch between operational and strategic views" },
      { metric: "Exception Panel", label: "Surface clinics requiring attention" },
      { metric: "Market Health", label: "Composite performance score" },
      { metric: "Satisfaction vs. Utilization", label: "Compare clinic performance at a glance" },
    ],
    screenshots: [
      { src: picMarket1, alt: "Market dashboard - today view", caption: "Today view - market health score, live KPIs, clinic performance table, exception panel, and visit distribution" },
      { src: picMarket2, alt: "Market dashboard - monthly view", caption: "Monthly view - rolling performance, market volume vs prior periods, satisfaction vs utilization scatter" },
    ] as Screenshot[],
  },
];

function ScreenshotGallery({ screenshots, title }: { screenshots: Screenshot[]; title: string }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [failedVideoSrcs, setFailedVideoSrcs] = useState<Set<string>>(new Set());
  const [showPlayOverlay, setShowPlayOverlay] = useState<Record<string, boolean>>({});
  const reduceMotion = useReducedMotion();
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const setVideoRef = (key: string, node: HTMLVideoElement | null) => {
    videoRefs.current[key] = node;
  };

  const playFromOverlay = (key: string) => {
    const video = videoRefs.current[key];
    if (!video) return;
    void video.play().then(() => {
      setShowPlayOverlay((prev) => ({ ...prev, [key]: false }));
    }).catch(() => {
      // If autoplay/play is blocked, keep overlay visible.
    });
  };

  const isOverlayVisible = (key: string) => showPlayOverlay[key] ?? true;

  const resetVideoToPoster = (video: HTMLVideoElement) => {
    if (video.dataset.resetting === "1") return;

    video.dataset.resetting = "1";
    video.currentTime = 0;
    video.load();

    window.setTimeout(() => {
      video.dataset.resetting = "0";
    }, 0);
  };

  if (screenshots.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-secondary/50 h-64 flex flex-col items-center justify-center gap-3 text-muted-foreground">
        <Monitor size={32} className="opacity-30" />
        <p className="text-sm">Screenshots coming soon</p>
      </div>
    );
  }
  const safeIdx = Math.min(activeIdx, screenshots.length - 1);
  const current = screenshots[safeIdx];
  return (
    <div className="space-y-3 min-w-0">
      <div className="md:hidden flex items-center justify-between px-1 text-[13px] text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Smartphone size={13} />
          Swipe left or right to view screenshots
        </span>
        <span className="inline-flex items-center gap-0.5" aria-hidden="true">
          <ChevronLeft size={12} />
          <ChevronRight size={12} />
        </span>
      </div>

      <div className="md:hidden overflow-x-auto snap-x snap-mandatory -mx-1 px-1 pb-1 cursor-grab active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-3">
          {screenshots.map((shot, i) => (
            <div key={`${title}-mobile-${i}-${shot.alt}`} className="w-full min-w-full snap-center space-y-2">
              <div className="rounded-xl overflow-hidden border border-border bg-secondary/30 shadow-sm">
                {shot.type === "video" && !failedVideoSrcs.has(String(shot.src)) ? (
                  <div className="relative">
                    <video
                      ref={(node) => setVideoRef(`${title}-mobile-video-${i}`, node)}
                      src={shot.src}
                      poster={shot.poster || ss2}
                      muted
                      playsInline
                      controls
                      preload="metadata"
                      className="w-full object-cover"
                      aria-label={shot.alt}
                      onPlay={() =>
                        setShowPlayOverlay((prev) => ({ ...prev, [`${title}-mobile-video-${i}`]: false }))
                      }
                      onPause={(e) => {
                        if (e.currentTarget.currentTime <= 0.05) {
                          setShowPlayOverlay((prev) => ({ ...prev, [`${title}-mobile-video-${i}`]: true }));
                        }
                      }}
                      onEnded={(e) => {
                        resetVideoToPoster(e.currentTarget);
                        setShowPlayOverlay((prev) => ({ ...prev, [`${title}-mobile-video-${i}`]: true }));
                      }}
                      onError={() =>
                        setFailedVideoSrcs((prev) => new Set(prev).add(String(shot.src)))
                      }
                    />
                  </div>
                ) : (
                  <ImageWithFallback
                    src={shot.type === "video" ? shot.poster || ss2 : shot.src}
                    alt={shot.alt}
                    className="w-full object-cover"
                  />
                )}
              </div>
              <p className="text-xs text-muted-foreground text-center px-2 break-words">{shot.caption || "\u00A0"}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <div className="rounded-xl overflow-hidden border border-border bg-secondary/30 shadow-sm">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${title}-${safeIdx}`}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 10 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
                {current.type === "video" && !failedVideoSrcs.has(String(current.src)) ? (
                  <div className="relative">
                    <video
                      key={`${title}-video-${safeIdx}`}
                      ref={(node) => setVideoRef(`${title}-desktop-video-${safeIdx}`, node)}
                      src={current.src}
                      poster={current.poster || ss2}
                      muted
                      playsInline
                      controls
                      preload="metadata"
                      className="w-full object-cover"
                      aria-label={current.alt}
                      onPlay={() =>
                        setShowPlayOverlay((prev) => ({ ...prev, [`${title}-desktop-video-${safeIdx}`]: false }))
                      }
                      onPause={(e) => {
                        if (e.currentTarget.currentTime <= 0.05) {
                          setShowPlayOverlay((prev) => ({ ...prev, [`${title}-desktop-video-${safeIdx}`]: true }));
                        }
                      }}
                      onEnded={(e) => {
                        resetVideoToPoster(e.currentTarget);
                        setShowPlayOverlay((prev) => ({ ...prev, [`${title}-desktop-video-${safeIdx}`]: true }));
                      }}
                      onError={() =>
                        setFailedVideoSrcs((prev) => new Set(prev).add(String(current.src)))
                      }
                    />
                    {isOverlayVisible(`${title}-desktop-video-${safeIdx}`) && (
                      <button
                        type="button"
                        onClick={() => playFromOverlay(`${title}-desktop-video-${safeIdx}`)}
                        className="absolute inset-0 m-auto h-20 w-20 rounded-full bg-black/55 text-white backdrop-blur-[1px] flex items-center justify-center hover:bg-black/65 transition-colors"
                        aria-label="Play video"
                      >
                        <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current" aria-hidden="true">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    )}
                  </div>
                ) : (
                  <ImageWithFallback
                    src={current.type === "video" ? current.poster || ss2 : current.src}
                    alt={current.alt}
                    className="w-full object-cover"
                  />
                )}
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={`${title}-caption-${safeIdx}`}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 5 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -5 }}
            transition={{ duration: 0.16 }}
            className="text-xs text-muted-foreground text-center mt-3"
          >
            {current.caption || "\u00A0"}
          </motion.p>
        </AnimatePresence>
      </div>

      {screenshots.length > 1 && (
        <div className="hidden md:flex items-center justify-center gap-2">
          <button
            onClick={() => setActiveIdx((i) => Math.max(0, i - 1))}
            disabled={activeIdx === 0}
            className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-30 transition-colors"
          >
            <ChevronLeft size={14} />
          </button>
          <div className="flex gap-1.5">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === activeIdx ? "bg-primary w-4" : "bg-border hover:bg-muted-foreground"}`}
              />
            ))}
          </div>
          <button
            onClick={() => setActiveIdx((i) => Math.min(screenshots.length - 1, i + 1))}
            disabled={activeIdx === screenshots.length - 1}
            className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-30 transition-colors"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

function Projects() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const projectCardRef = useRef<HTMLDivElement | null>(null);
  const totalProjects = PROJECTS.length;
  const project = PROJECTS[active];

  const goToProject = (index: number) => {
    setActive(index);
    requestAnimationFrame(() => {
      projectCardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Projects</SectionLabel>
        <h2 className="text-4xl font-semibold tracking-tight text-foreground mb-10">
          Selected work
        </h2>

        {/* Project tabs */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {PROJECTS.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                active === i
                  ? "bg-foreground text-background"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              }`}
            >
              {p.number} · {p.title.split(" ").slice(0, 3).join(" ")}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={project.number}
            ref={projectCardRef}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
          >
          {project.number !== "01" && (
            <div className="px-4 sm:px-8 py-5 sm:py-6 border-b border-border flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                  <span className="text-xs font-mono text-muted-foreground">{project.number}</span>
                  <span className="text-xs px-2 py-0.5 bg-accent text-primary rounded-full font-medium">{project.status}</span>
                  <span className="text-xs text-muted-foreground">{project.organization}</span>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground break-words">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{project.subtitle}</p>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 flex max-w-full items-start gap-1 text-xs text-primary/70 hover:text-primary transition-colors font-mono break-all"
                  >
                    <Globe size={11} className="mt-[1px] shrink-0" />
                    <span className="min-w-0">{project.liveUrl.replace(/^https?:\/\//, "")}</span>
                  </a>
                )}
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 shrink-0">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-xs font-medium rounded-full hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink size={11} />
                    {project.number === "01" ? "Live Application" : "Live Demo"}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-border text-foreground text-xs font-medium rounded-full hover:bg-secondary transition-colors"
                  >
                    <Github size={11} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          )}

          <div className="p-4 sm:p-8">
            {project.number === "01" ? (
              <>
                <div className="relative pb-8 border-b border-border mb-8 pt-1">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-0 top-0 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-primary/90"
                    >
                      Live Application
                      <ExternalLink size={12} />
                    </a>
                  )}

                  <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:gap-8 pt-14 xl:pt-4">
                    <div className="space-y-4 min-w-0 py-1">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                        HCA HEALTHCARE · PRODUCTION APP
                      </div>
                      <h3 className="text-[1.7rem] sm:text-[2rem] lg:text-[2.2rem] font-semibold tracking-[-0.06em] text-foreground leading-[1.02] break-words">
                        Urgent Care Services Dashboard
                      </h3>
                      <p className="text-[15px] text-muted-foreground leading-[1.7]">
                        A production application that helps call center operators quickly find nearby clinics offering the service a patient needs, check availability, and compare options.
                      </p>

                      <div className="min-w-0 pt-1 mt-6">
                        <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                          TECH STACK
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { name: "React", Icon: ReactIcon },
                            { name: "TypeScript", Icon: TypeScriptIcon },
                            { name: "Vite", Icon: ViteIcon },
                            { name: "Azure Maps", Icon: AzureIcon },
                            { name: "Figma", Icon: FigmaIcon },
                          ].map(({ name, Icon }) => (
                            <span key={name} className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-2.5 py-1.5 text-[11px] font-medium text-foreground shadow-[0_1px_0_rgba(15,23,42,0.02)]">
                              <span className="flex h-4 w-4 items-center justify-center shrink-0">
                                <Icon />
                              </span>
                              {name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 min-w-0 pt-1">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                        >
                          View on GitHub
                          <Github size={14} />
                        </a>
                      )}

                      <div className="min-w-0">
                        <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                          MY ROLE
                        </div>
                        <h4 className="text-[1.2rem] sm:text-[1.4rem] font-semibold tracking-[-0.03em] text-foreground mb-3 mt-3 leading-snug">
                          Frontend Engineer & UI/UX Designer
                        </h4>
                        <ul className="space-y-2 text-[12px] sm:text-[13px] leading-relaxed text-muted-foreground">
                          <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />Designed and implemented the production UI and frontend architecture.</li>
                          <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />Built clinic/service search and real-time availability lookup.</li>
                          <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />Integrated REST APIs and Azure Maps for clinic discovery.</li>
                          <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />Improved accessibility and documented the architecture.</li>
                          <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />Applied HCA's Neutron Design System to maintain consistent, accessible UI.</li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 mb-10">
                  <div className="space-y-8 min-w-0">
                    <div className="min-w-0">
                      <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                        THE PROBLEM
                      </div>
                      <h4 className="text-[1.3rem] sm:text-[1.5rem] font-semibold tracking-[-0.04em] text-foreground leading-[1.2] mb-3">
                        Finding availability was a manual, multi-step process.
                      </h4>
                      <p className="text-[13px] text-muted-foreground leading-[1.7] mb-2">
                        Call-center operators had to contact clinics individually to find a location that offered the requested service and had availability.
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-2.5 text-[12px] text-muted-foreground">
                        {[
                          "Patient requests a service",
                          "Operator contacts multiple clinics",
                          "Checks service & availability",
                          "Repeats as needed",
                        ].map((step, index, arr) => (
                          <div key={step} className="flex items-center gap-2.5">
                            <div className="rounded-full border border-border bg-white px-2.5 py-2 text-[12px] font-medium text-foreground shadow-[0_1px_0_rgba(15,23,42,0.02)]">
                              {step}
                            </div>
                            {index < arr.length - 1 && <ChevronRight size={12} className="text-muted-foreground/80" />}
                          </div>
                        ))}
                      </div>

                      <p className="mt-4 text-[13px] text-muted-foreground leading-[1.7]">
                        330+ clinics made this process difficult to scale.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8 min-w-0">
                    <div className="min-w-0 pt-1">
                      <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                        THE SOLUTION
                      </div>
                      <h4 className="text-[1.3rem] sm:text-[1.5rem] font-semibold tracking-[-0.04em] text-foreground leading-[1.2] mb-3">
                        A guided workflow that makes it easier to find the right clinic.
                      </h4>
                      <p className="text-[13px] text-muted-foreground leading-[1.7] mb-5">
                        I designed a progressive experience that takes operators from a known clinic to availability, nearby alternatives, and geographic context in a few steps.
                      </p>

                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 xl:grid-cols-5">
                        {[
                          { label: "Find a clinic", detail: "Autocomplete search", icon: Monitor, badge: "bg-gradient-to-br from-sky-100 to-blue-100 text-sky-700 border-sky-200" },
                          { label: "Select a service", detail: "Dropdown selection", icon: CheckCircle2, badge: "bg-gradient-to-br from-emerald-100 to-green-100 text-emerald-700 border-emerald-200" },
                          { label: "Check availability", detail: "Today / tomorrow hours", icon: Clock3, badge: "bg-gradient-to-br from-violet-100 to-indigo-100 text-violet-700 border-violet-200" },
                          { label: "Find nearby options", detail: "Distance-sorted alternatives", icon: MapPin, badge: "bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700 border-cyan-200" },
                          { label: "View on map", detail: "Interactive map location", icon: Globe, badge: "bg-gradient-to-br from-pink-100 to-rose-100 text-pink-700 border-pink-200" },
                        ].map((step, index) => {
                          const Icon = step.icon;
                          return (
                            <div key={step.label} className="rounded-xl border border-border bg-white p-3 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
                              <div className="mb-3 flex items-center justify-between gap-2">
                                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border ${step.badge}`}>
                                  <Icon size={16} />
                                </span>
                                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">0{index + 1}</span>
                              </div>
                              <div className="text-[11px] font-semibold text-foreground mb-1">{step.label}</div>
                              <div className="text-[10px] leading-relaxed text-muted-foreground">{step.detail}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                </div>

                <div className="mt-10 flex flex-col items-center">
                  <div className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                    VIDEO + SCREENSHOTS
                  </div>
                  <div className="flex justify-center w-full">
                    <div className="w-full max-w-4xl rounded-[1.5rem] border border-border bg-white/80 p-2.5 shadow-[0_16px_35px_rgba(15,23,42,0.08)]">
                      <ScreenshotGallery key={project.number} screenshots={project.screenshots} title={project.title} />
                    </div>
                  </div>
                </div>

                <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
                  <div className="border-t border-border pt-8 self-stretch">
                    <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                      KEY DESIGN DECISIONS
                    </div>
                    <div className="grid h-full grid-cols-2 gap-3">
                      {[
                        { title: "Progressive disclosure", text: "Show relevant information only when needed to keep the experience focused.", icon: Layers, badge: "bg-gradient-to-br from-sky-100 to-indigo-100 text-indigo-700 border-indigo-200" },
                        { title: "Proximity-based results", text: "Nearby clinics are sorted by distance so operators can quickly find the closest option.", icon: MapPin, badge: "bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700 border-cyan-200" },
                        { title: "List + Map", text: "The list is great for comparison; the map adds geographic context.", icon: Monitor, badge: "bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700 border-emerald-200" },
                        { title: "Responsive & accessible", text: "Built for desktop and mobile with accessible interactions and touch-friendly controls.", icon: Accessibility, badge: "bg-gradient-to-br from-violet-100 to-purple-100 text-violet-700 border-violet-200" },
                      ].map((item) => {
                        const Icon = item.icon;

                        return (
                          <div key={item.title} className="h-full rounded-xl border border-border bg-white p-3.5 min-h-[140px] shadow-[0_1px_0_rgba(15,23,42,0.02)]">
                            <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                              <span className={`inline-flex h-7 w-7 items-center justify-center rounded-md border ${item.badge}`}>
                                <Icon size={12} />
                              </span>
                              {item.title}
                            </div>
                            <p className="text-[12px] leading-relaxed text-muted-foreground">{item.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-6 border-t border-border pt-8 self-stretch">
                    <div className="min-w-0 h-full">
                      <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                        BUSINESS IMPACT
                      </div>
                      <div className="grid h-full grid-cols-2 gap-3">
                        {[
                          { metric: "330+", label: "clinics" },
                          { metric: "5,000+", label: "daily users" },
                          { metric: "~30%", label: "time optimization" },
                          { metric: "WCAG 2.1 AA", label: "accessibility" },
                        ].map((item) => (
                          <div key={item.label} className="h-full rounded-xl border border-primary/15 bg-[#f2f6ff] p-4 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
                            <div className="flex h-full min-h-[76px] flex-col items-center justify-center text-center leading-none">
                              <div className="text-[1.5rem] sm:text-[1.7rem] font-semibold tracking-[-0.05em] text-primary">{item.metric}</div>
                              <div className={`mt-1.5 text-[11px] sm:text-[12px] font-medium tracking-normal text-muted-foreground leading-[1.2] ${item.label === "time optimization" ? "max-w-[14ch] whitespace-nowrap" : "max-w-[10ch]"}`}>
                                {item.label}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                <div className="mt-10 border-t border-border pt-8">
                  <div className="grid lg:grid-cols-[1.35fr_0.85fr] gap-8">
                  <div className="rounded-xl border border-border bg-secondary/30 p-4 min-w-0 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
                    <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                      FROM DESIGN TO PRODUCTION
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
                      {[
                        { label: "User needs", icon: Users, badge: "bg-gradient-to-br from-sky-500 to-cyan-600 text-white border-sky-400/60" },
                        { label: "UX & IA", icon: Layers, badge: "bg-gradient-to-br from-violet-500 to-indigo-600 text-white border-violet-400/60" },
                        { label: "Data & API", icon: Code2, badge: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-emerald-400/60" },
                        { label: "React", icon: Zap, badge: "bg-gradient-to-br from-amber-500 to-orange-600 text-white border-amber-400/60" },
                        { label: "Production", icon: BarChart3, badge: "bg-gradient-to-br from-rose-500 to-pink-600 text-white border-rose-400/60" },
                      ].map((step, index, arr) => {
                        const Icon = step.icon;
                        return (
                          <div key={step.label} className="flex items-center gap-1.5 md:gap-2">
                            <div className="flex min-w-0 items-center gap-1.5 rounded-full border border-border bg-white px-2.5 py-1.5 text-[9px] font-medium text-foreground shadow-sm">
                              <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full border ${step.badge}`}>
                                <Icon size={11} />
                              </span>
                              <span className="whitespace-nowrap">{step.label}</span>
                            </div>
                            {index < arr.length - 1 && <ChevronRight size={11} className="hidden text-muted-foreground/80 md:block" />}
                          </div>
                        );
                      })}
                    </div>
                    <p className="mt-5 text-[15px] text-muted-foreground leading-[1.75]">
                      I translated the UX requirements into the data and API requirements needed to support the experience and implemented the complete frontend.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-secondary/30 p-4 min-w-0 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-amber-400/60 bg-gradient-to-br from-amber-400 to-orange-500 text-white">
                        <Zap size={15} />
                      </span>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                        PERFORMANCE OPTIMIZATION
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold tracking-[-0.03em] text-foreground mb-2">
                      In-memory caching
                    </h4>
                    <p className="text-[15px] text-muted-foreground leading-[1.75]">
                      I proposed in-memory caching for dashboard results to reduce unnecessary API requests while keeping availability data reasonably fresh.
                    </p>
                  </div>
                </div>
                </div>
              </>
            ) : (
              <>
                {/* Screenshots + overview */}
                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6 sm:gap-10 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-border">
                  <div className="min-w-0">
                    <ScreenshotGallery key={project.number} screenshots={project.screenshots} title={project.title} />
                  </div>

                  <div className="space-y-5 min-w-0">
                    <div className="border border-border rounded-xl p-4 bg-card/50">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Challenge
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.challenge}</p>
                    </div>

                    <div className="border border-border rounded-xl p-4 bg-card/50">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        My Role
                      </h4>
                      <p className="text-sm font-medium text-foreground mb-3 break-words">{project.myRole}</p>
                      <ul className="space-y-1.5">
                        {project.responsibilities.map((r) => (
                          <li key={r} className="text-sm text-muted-foreground flex items-start gap-2 min-w-0">
                            <ChevronRight size={12} className="text-primary mt-0.5 shrink-0" />
                            <span className="min-w-0 break-words">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border border-border rounded-xl p-4 bg-card/50">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Tech Stack
                      </h4>
                      <p className="text-sm text-foreground/90 leading-relaxed">{project.tech.join(" · ")}</p>
                    </div>
                  </div>
                </div>

                {/* Details grid */}
                <div className="grid lg:grid-cols-[1fr_0.95fr] gap-10">
                  <div className="space-y-6">
                    <div className="border border-border rounded-xl p-4 bg-card/50">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        {project.number === "02" || project.number === "03" || project.number === "04" ? "Technical Challenges & Solutions" : "Technical Challenges"}
                      </h4>
                      <ul className="space-y-2">
                        {project.technicalChallenges.map((c) => (
                          <li key={c} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                            {project.number === "02" || project.number === "03" || project.number === "04" ? (
                              <span className="min-w-0 break-words">
                                <span className="font-medium text-foreground">{c.split("::")[0]}</span>
                                <span className="text-muted-foreground"> - {c.split("::")[1]}</span>
                              </span>
                            ) : (
                              c
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  <div className="lg:pl-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      {project.impactLabel ?? "Business Impact"}
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.impact.map((imp) => (
                        <div key={imp.label} className="p-4.5 sm:p-5 bg-accent rounded-xl border border-primary/15 shadow-sm">
                          <div className="text-xl sm:text-2xl font-semibold text-primary tracking-tight leading-tight">
                            {imp.metric}
                          </div>
                          <div className="text-xs sm:text-[13px] text-muted-foreground mt-1.5 leading-relaxed">{imp.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="text-xs text-muted-foreground font-mono">
                Project {active + 1} / {totalProjects}
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
                <button
                  onClick={() => goToProject(Math.max(0, active - 1))}
                  disabled={active === 0}
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-border text-foreground text-xs font-medium rounded-full hover:bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={12} />
                  Previous project
                </button>
                <button
                  onClick={() => goToProject(active === totalProjects - 1 ? 0 : active + 1)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-foreground text-background text-xs font-medium rounded-full hover:bg-foreground/90 transition-colors"
                >
                  {active === totalProjects - 1 ? "Back to first project" : "Next project"}
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>
          </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── DESIGN PROCESS ───────────────────────────────────────────────────────────

const PROCESS_STEPS = [
  {
    step: "01",
    label: "Research",
    description:
      "User interviews, analytics review, competitive analysis, stakeholder alignment.",
  },
  {
    step: "02",
    label: "Discovery",
    description:
      "Problem framing, opportunity mapping, success metrics definition.",
  },
  {
    step: "03",
    label: "UX",
    description:
      "Journey mapping, information architecture, user flow diagrams.",
  },
  {
    step: "04",
    label: "Prototypes",
    description:
      "Rapid prototyping with Figma Make to validate flows, interactions, and usability.",
  },
  {
    step: "05",
    label: "Development",
    description:
      "React implementation, TypeScript, API integration, performance tuning.",
  },
  {
    step: "06",
    label: "Testing",
    description:
      "Usability testing, QA, accessibility audit, cross-browser review.",
  },
  {
    step: "07",
    label: "Delivery",
    description: "Staged rollout, monitoring, documentation, retrospective.",
  },
];

function Process() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 },
    visible: reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
  };

  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Design Process</SectionLabel>
        <h2 className="text-4xl font-semibold tracking-tight text-foreground mb-4">
          How I work
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-10">
          I follow a structured design process that balances research, creativity, and technical execution. Each step is informed by user needs, business goals, and accessibility standards to ensure the final product is both effective and inclusive.
        </p>
        {/* Mobile: vertical list */}
        <motion.div
          className="flex flex-col gap-4 md:hidden"
          variants={containerVariants}
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {PROCESS_STEPS.map((s) => (
            <motion.div
              key={s.step}
              className="flex items-start gap-4"
              variants={itemVariants}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col items-center shrink-0">
                <div className="w-7 h-7 rounded-full bg-accent border border-primary/20 flex items-center justify-center">
                  <span className="text-[10px] font-mono font-semibold text-primary">{s.step}</span>
                </div>
              </div>
              <div className="pt-0.5">
                <div className="text-sm font-semibold text-foreground mb-0.5">{s.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{s.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="relative hidden md:block">
          <div className="absolute top-6 left-0 right-0 h-px bg-border" />
          <motion.div
            className="grid md:grid-cols-4 lg:grid-cols-7 gap-0"
            variants={containerVariants}
            initial={reduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {PROCESS_STEPS.map((s) => (
              <motion.div
                key={s.step}
                className="relative pt-10 pr-4"
                variants={itemVariants}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-primary border-2 border-white ring-1 ring-primary translate-y-[-5px]" />
                <div className="text-xs font-mono text-primary mb-1">{s.step}</div>
                <div className="text-sm font-semibold text-foreground mb-2">{s.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{s.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── ARTICLES ────────────────────────────────────────────────────────────────

const ARTICLES = [
  {
    id: 1,
    title: "Being product-oriented is becoming more important for frontend engineers than being great at React, Angular, or Vue.",
    tags: ["#FrontendEngineering", "#ProductThinking", "#HealthTech"],
    preview: "Frameworks matter. Technical skills matter. But today, everyone has access to tools like GitHub Copilot, Claude Code, and ChatGPT that can generate components, write tests, and help build interfaces faster.",
    body: [
      "Frameworks matter. Technical skills matter. But today, everyone has access to tools like GitHub Copilot, Claude Code, and ChatGPT that can generate components, write tests, and help build interfaces faster.",
      "Frameworks come and go. The ability to understand users and translate complex workflows into meaningful solutions is what remains most important.",
      "I've realized that frontend work becomes much more valuable when you understand the workflow behind the interface. The best projects I've worked on required a mix of: frontend development, UI/UX thinking, product understanding, and domain knowledge.",
      "In healthcare, that often means finding ways to reduce administrative burden and make people's jobs a little easier.",
      "One of the most interesting projects I worked on was replacing multiple paper-based clinic and laboratory logs with a digital workflow. Before building anything, I visited a clinic, reviewed the existing forms, and talked with technical staff and quality managers about their daily routines.",
      "The most useful insights didn't come from a requirements document. They came from watching how people worked. I learned where time was being lost, why compliance tracking was difficult, and where staff needed clearer guidance when issues occurred.",
      "The solution wasn't just about turning paper forms into digital forms. We automated reporting, made compliance issues easier to track, and introduced guided remediation workflows to help staff navigate challenging situations.",
      "As a result, clinic teams spent less time on administrative tasks, had better visibility into compliance, and could resolve issues more consistently.",
      "For me, the most rewarding part of frontend engineering isn't when a feature looks great or works exactly as designed. It's when a provider, clinic manager, or operations leader tells me that something that used to take a lot of time is now easier.",
      "Those conversations matter more than any deployment or release. Great frontend engineers don't just build interfaces. They understand the people, processes, and workflows behind them. And success isn't measured by features shipped - it's measured by the time, effort, and frustration removed from someone's day.",
    ],
  },
  {
    id: 2,
    title: "People sometimes ask how I went from 10+ years in law to software engineering.",
    tags: ["#SoftwareEngineering", "#CareerChange", "#WomenInTech", "#HealthTech"],
    preview: "Honestly? The two professions have more in common than they seem. Both are about translating complexity into something people can actually use.",
    body: [
      "Honestly? The two professions have more in common than they seem. Both are about translating complexity into something people can actually use.",
      "In law, that meant turning dense regulations, contracts, and legal processes into clear advice and practical documents. In software engineering, it means turning business requirements, edge cases, and user pain points into products that actually work.",
      "Both require attention to detail, structured thinking, asking the right questions, spotting risks early, and staying calm when something important breaks at the last minute.",
      "So yes, one world has contracts and the other has code reviews… but both involve reading things very carefully and trying to prevent future problems before anyone else notices them.",
      "My legal background has made me a stronger engineer in ways I didn't fully appreciate at first. I'm comfortable working through ambiguity. I naturally think about workflows, rules, exceptions, and compliance. I care a lot about precision, clarity, and user impact. And I've probably been overtrained to document things properly.",
      "These days, I build frontend applications in healthcare, where that mix of problem-solving, structure, and empathy turns out to be incredibly useful.",
      "I'm grateful that my career path hasn't been linear. Law taught me how to think. Engineering taught me how to build. Together, they've shaped how I solve problems.",
      "Curious to hear from others who made a non-traditional move into tech - what skills from your previous career turned out to be unexpectedly valuable?",
    ],
  },
  {
    id: 3,
    title: "AI can compress weeks of product discovery and design exploration into days - while making human judgment even more important, not less.",
    tags: ["#AI", "#UXDesign", "#FrontendDevelopment", "#ProductDesign"],
    preview: "As someone working across UI/UX Design and Frontend Development, I'm constantly exploring AI tools for both design and development. I recently completed the AI for Designers certification from the IxDF.",
    body: [
      "As someone working across UI/UX Design and Frontend Development, I'm constantly exploring AI tools for both design and development. I recently completed the AI for Designers certification from the IxDF - The Interaction Design Foundation, and I'd highly recommend it to designers, developers, and product professionals looking to integrate AI more intentionally into their workflows.",
      "One insight that particularly resonated with me is that AI can compress weeks of product discovery and design exploration into days - while making human judgment even more important, not less.",
      "The course also helped me become more intentional about prompt engineering - learning how to provide better context, structure requests effectively, and use different prompting techniques to get more accurate and useful results.",
      "Currently, my AI toolkit looks like this: ChatGPT for ideation and problem-solving, Figma Make for rapid prototyping, and GitHub Copilot for accelerating frontend development.",
      "The course introduced me to a much broader workflow, where AI can support every stage of product development: Research analysis and insight generation (Dovetail), Problem definition (Claude), Feature planning and wireframing (Relume), UX writing and content creation (Frontitude), Usability testing and validation (Maze).",
      "My biggest takeaway: AI is most effective when you know which tool creates the most value at each stage of the product lifecycle - and where human expertise must take over.",
    ],
  },
  {
    id: 4,
    title: "Every healthcare interface should follow one simple rule: CCS - Clean. Consistent. Simple.",
    tags: ["#HealthcareUX", "#DesignPhilosophy", "#ProductDesign", "#HealthTech"],
    preview:
      "I call it CCS: Clean. Consistent. Simple. It guides almost every design decision I make in healthcare products, where success is measured by how confidently someone completes a task.",
    body: [
      "Every healthcare interface should follow one simple rule. I call it CCS: Clean. Consistent. Simple.",
      "It is my personal design philosophy, shaped by building healthcare applications, and today it guides almost every design decision I make.",
      "I did not always think this way. When I moved from a SaaS company to healthcare, I wanted every interface to feel polished and visually impressive.",
      "I still appreciate beautiful design, and I still catch myself wanting to introduce a more creative interaction or visual pattern.",
      "But healthcare changed the way I measure success. Success is not measured by how beautiful an interface is. It is measured by how confidently someone completes a task.",
      "That is what CCS means to me.",
      "Clean: Remove anything that distracts users from the task.",
      "Consistent: Make layouts and interactions predictable so users do not have to stop and think, 'How does this work?'",
      "Simple: Reduce unnecessary choices. Every extra click, field, or decision adds cognitive load.",
      "When you are designing internal healthcare applications, people are not there to admire the UI. They are checking in patients, managing clinic operations, reviewing schedules, or making decisions that affect patient care.",
      "The interface should support those workflows, not compete for attention.",
      "The more I design, the more I realize CCS extends beyond healthcare.",
      "We live in a world full of notifications, dashboards, AI tools, and endless information. More than ever, people value products that feel simple, familiar, and predictable.",
      "Good design reduces cognitive load.",
      "Great design almost disappears. When people stop noticing the interface and stay focused on their work, the design has done its job.",
      "That is what CCS - Clean. Consistent. Simple. is all about.",
    ],
  },
];

function Articles() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showAllArticles, setShowAllArticles] = useState(false);

  return (
    <section id="articles" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Articles</SectionLabel>
        <h2 className="text-4xl font-semibold tracking-tight text-foreground mb-4">
          Thoughts on engineering & design
        </h2>
        <p className="text-base text-muted-foreground mb-12 max-w-xl">
          Posts originally published on LinkedIn - perspectives on frontend engineering, product thinking, and working at the intersection of design and code.
        </p>

        <div className="space-y-4">
          {ARTICLES.map((article, index) => {
            const isOpen = expanded === article.id;
            return (
              <article
                key={article.id}
                className={`bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-colors ${
                  !showAllArticles && index >= 2 ? "hidden sm:block" : ""
                }`}
              >
                <button
                  className="w-full text-left p-7 flex items-start justify-between gap-6"
                  onClick={() => setExpanded(isOpen ? null : article.id)}
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-foreground leading-snug mb-2 pr-4">
                      {article.title}
                    </h3>
                    {!isOpen && (
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {article.preview}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-primary/70 bg-accent px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 mt-0.5 inline-flex items-center gap-2 rounded-full border border-border px-2.5 py-1 text-muted-foreground">
                    <span className="text-[11px] font-medium uppercase tracking-wider">
                      {isOpen ? "Collapse" : "Expand"}
                    </span>
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-7 pb-7 border-t border-border pt-6">
                    <div className="space-y-4 max-w-3xl">
                      {article.body.map((para, i) => (
                        <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                    <a
                      href="https://www.linkedin.com/in/oezhova"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-6 text-xs font-medium text-primary hover:underline"
                    >
                      <Linkedin size={12} />
                      View on LinkedIn
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {!showAllArticles && ARTICLES.length > 2 && (
          <div className="sm:hidden mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllArticles(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-full hover:bg-secondary transition-colors"
            >
              View more articles
              <ChevronDown size={14} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── CERTIFICATES ────────────────────────────────────────────────────────────

const CERT_IMAGE_LIST = [
  {
    title: "AI for Design Systems: How to Stay Ahead and Lead",
    issuer: "Interaction Design Foundation",
    type: "Master Class Certificate",
    date: "Mar 2026",
    hours: null,
    img: certAiDesignSystems,
  },
  {
    title: "Conversation Design: Practical Tips for AI Design",
    issuer: "Interaction Design Foundation",
    type: "Master Class Certificate",
    date: "Mar 2026",
    hours: null,
    img: certConversationDesign,
  },
  {
    title: "How to Elevate the User Experience of AI with Design Patterns",
    issuer: "Interaction Design Foundation",
    type: "Master Class Certificate",
    date: "Mar 2026",
    hours: null,
    img: certDesignPatternsAiUx,
  },
  {
    title: "Get Ahead in Product Design with AI",
    issuer: "Interaction Design Foundation",
    type: "Master Class Certificate",
    date: "Mar 2026",
    hours: null,
    img: certGetAheadProductAi,
  },
  {
    title: "Healthcare UX: Design for Patient Engagement and Technology Adoption",
    issuer: "Interaction Design Foundation",
    type: "Master Class Certificate",
    date: "Mar 2026",
    hours: null,
    img: certHealthcareUx,
  },
  {
    title: "Human-Centered Design for AI",
    issuer: "Interaction Design Foundation",
    type: "Master Class Certificate",
    date: "Mar 2026",
    hours: null,
    img: certHumanCenteredAi,
  },
  {
    title: "How to Create Complex Tables Users Love",
    issuer: "Interaction Design Foundation",
    type: "Master Class · Certificate of Participation",
    date: "Nov 2023",
    hours: null,
    img: certMasterClass,
  },
  {
    title: "Mobile UX Design: The Beginner's Guide",
    issuer: "Interaction Design Foundation",
    type: "Course Certificate",
    date: "May-Nov 2023",
    hours: "12 hrs 24 min",
    img: certMobileUX,
  },
];

function Certificates() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  return (
    <section id="certificates" className="py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Certificates</SectionLabel>
        <h2 className="text-4xl font-semibold tracking-tight text-foreground mb-12">
          Continuing education
        </h2>

        {/* Image certificates grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERT_IMAGE_LIST.map((cert, index) => (
            <div
              key={cert.title}
              className={`group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-200 cursor-pointer ${
                !showAllCertificates && index >= 3 ? "hidden sm:block" : ""
              }`}
              onClick={() => setLightbox(cert.img as unknown as string)}
            >
              <div className="bg-secondary/60 overflow-hidden">
                <ImageWithFallback
                  src={cert.img}
                  alt={cert.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="text-xs font-medium text-primary mb-1">{cert.type}</div>
                <h3 className="text-sm font-semibold text-foreground leading-snug mb-1.5">
                  {cert.title}
                </h3>
                <div className="text-xs text-muted-foreground">{cert.issuer}</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                  {cert.hours && (
                    <>
                      <span className="text-muted-foreground/40">·</span>
                      <span className="text-xs text-muted-foreground">{cert.hours}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAllCertificates && CERT_IMAGE_LIST.length > 3 && (
          <div className="sm:hidden mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllCertificates(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-full hover:bg-secondary transition-colors"
            >
              View more certificates
              <ChevronDown size={14} />
            </button>
          </div>
        )}

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6 cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white flex items-center gap-1.5 text-sm"
              >
                <X size={16} /> Close
              </button>
              <img
                src={lightbox}
                alt="Certificate"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote:
      "Olya has a unique ability to bridge technical and business perspectives, navigating ambiguity and complex requirements while helping drive successful outcomes. The positive feedback she receives from stakeholders is a testament to both the quality of her work and the trust she earns through her professionalism, communication, and partnership.",
    author: "Chris Hart",
    title: "AVP Application Development",
    company: "HCA Healthcare",
    initials: "CH",
  },
  {
    quote:
      "Olya has unmatched talent in UI/UX design and development. Every time she touches a product, it is improved greatly. She has high attention to detail and thinks about things that most others miss. Olya would be a fantastic addition to any team and will greatly improve any product/solution she works with.",
    author: "Taylor Smith, MBA",
    title: "Consulting Product Analyst, Software Development",
    company: "HCA IT&S",
    initials: "TS",
  },
  {
    quote:
      "What sets Olya apart is her rare combination of big‑picture thinking and meticulous execution. Her UI/UX instincts are second to none; she consistently creates solutions that are intuitive, elegant, and user‑centered-even when the underlying problem is highly complex. Working with her, I saw firsthand how her design decisions elevated not just the interface, but the entire product experience.",
    author: "Dan Garvin",
    title: "Consulting Application System Engineer",
    company: "HCA Healthcare",
    initials: "DG",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Testimonials</SectionLabel>
        <h2 className="text-4xl font-semibold tracking-tight text-foreground mb-12">
          What colleagues say
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="p-6 bg-card border border-border rounded-2xl flex flex-col gap-5 hover:border-primary/20 hover:shadow-md transition-all duration-200"
            >
              <Quote size={20} className="text-primary/40" />
              <p className="text-sm text-foreground leading-relaxed flex-1">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-primary text-xs font-semibold">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {t.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t.title}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              Contact
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-white mb-4">
              {"Let's build something great."}
            </h2>
            <p className="text-base text-white/60 leading-relaxed mb-10 max-w-lg">
              {"I'm open to frontend, UI/UX, and product engineering roles-especially teams building healthcare, SaaS, or data products."}
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: <Mail size={14} />,
                  label: "olya.yezhova@gmail.com",
                  sub: "Preferred first contact",
                  href: "mailto:olya.yezhova@gmail.com",
                },
                {
                  icon: <Linkedin size={14} />,
                  label: "linkedin.com/in/oezhova",
                  sub: "Professional background",
                  href: "https://linkedin.com/in/oezhova",
                },
                {
                  icon: <Github size={14} />,
                  label: "github.com/solgaezhova",
                  sub: "Open source & side projects",
                  href: "https://github.com/solgaezhova",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 group-hover:text-white transition-colors">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-sm text-white group-hover:underline">{c.label}</div>
                    <div className="text-xs text-white/40">{c.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="flex flex-col gap-5">
            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-white font-medium">
                  Open to opportunities
                </span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed">
                Available for full-time and part-time roles. Based in Houston, TX · Open to remote.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <span className="text-sm text-white/30">
            © 2026 Olya Ezhova. All rights reserved.
          </span>
          <span className="text-xs text-white/20 font-mono">
            Built with React · TypeScript · Tailwind · Figma Make
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <Nav />
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Process />
      </Reveal>
      <Reveal>
        <Articles />
      </Reveal>
      <Reveal>
        <Certificates />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </div>
  );
}
