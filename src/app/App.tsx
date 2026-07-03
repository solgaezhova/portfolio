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
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import ss1 from "@/imports/Screenshot_2026-06-29_at_16.52.46.png";
import ss2 from "@/imports/Screenshot_2026-06-29_at_16.53.58.png";
import ss3 from "@/imports/Screenshot_2026-06-29_at_16.58.10.png";
import ss4 from "@/imports/Screenshot_2026-06-29_at_16.59.42.png";
import picHomepage from "@/imports/image.png";
import picProviderPage from "@/imports/Screenshot_2026-06-29_at_19.27.03.png";
import picPracticePage from "@/imports/Screenshot_2026-06-29_at_19.43.53.png";
import picDashboard1 from "@/imports/image-1.png";
import picDashboard2 from "@/imports/image-2.png";
import picDashboard3 from "@/imports/Screenshot_2026-07-01_at_16.06.30.png";
import picMarket1 from "@/imports/IMG_3602.png";
import picMarket2 from "@/imports/IMG_3603.png";
import picPracticeDetails from "@/imports/Screenshot_2026-06-29_at_19.31.41.png";
import certMobileUX from "@/imports/Certificate_Mobile_UX-Design.jpg";
import certMasterClass from "@/imports/masterclass-certificate-how-to-create-complex-tables-users-love-a-ui-designers-guide.jpg";
import certAiDesignSystems from "@/imports/certificate-ai-for-design-systems-how-to-stay-ahead-and-lead.jpg";
import certConversationDesign from "@/imports/certificate-conversation-design-practical-tips-for-ai-design.jpg";
import certDesignPatternsAiUx from "@/imports/certificate-design-patterns-for-ai-ux.jpg";
import certGetAheadProductAi from "@/imports/certificate-get-ahead-in-product-design-with-ai.jpg";
import certHealthcareUx from "@/imports/certificate-healthcare-ux-design-for-patient-engagement-and-technology-adoption.jpg";
import certHumanCenteredAi from "@/imports/certificate-human-centered-design-for-ai.jpg";

// ─── NAV ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "AI Workflow", href: "#ai" },
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
                Senior Frontend Engineer
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
              Designing intuitive healthcare and SaaS products through the intersection
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
                  {"I'm a Senior Frontend Engineer with 5+ years of experience designing and building healthcare and SaaS applications. My strength is translating complex business workflows into intuitive, accessible, and scalable user experiences."}
                </p>
                <p>
                  I combine frontend engineering, UX design, and product
                  thinking to create applications that are both technically
                  robust and easy to use. I enjoy collaborating with clinicians,
                  product teams, and stakeholders to solve real-world problems
                  and deliver measurable business impact.
                </p>
                <p>
                  {"Recently, I've been incorporating AI tools into both my design and development workflow to prototype faster, explore more ideas, and increase development efficiency."}
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
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-4xl font-semibold tracking-tight text-foreground mb-12">
          What I bring to the table
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3, delay: i * 0.025 }}
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
            </motion.div>
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
type Screenshot = { src: any; alt: string; caption: string };
type ImpactItem = { metric: string; label: string };

const PROJECTS = [
  {
    number: "01",
    title: "Urgent Care Services Dashboard",
    subtitle: "HCA Healthcare · Production App",
    organization: "HCA Healthcare",
    industry: "Healthcare",
    status: "Production",
    liveUrl: "https://ucservices.cnw.hcahealthcare.cloud/",
    githubUrl: null,
    tech: ["React 18", "TypeScript", "Vite", "Neutron UI SDK", "Azure Maps", "Bootstrap", ".NET Core", "REST APIs", "Vitest", "Figma", "GitHub Copilot"],
    myRole: "Senior Frontend Engineer & UI/UX Designer",
    responsibilities: [
      "End-to-end UI/UX design and frontend implementation of the production call-center app",
      "Real-time clinic search with autocomplete, match highlighting, and service type selection",
      "Service hours lookup with today/tomorrow date toggle and dynamic availability display",
      "Nearby clinic discovery with distance-sorted results, address, phone, and hours",
      "Interactive map view with clinic location markers and detail popups",
      "Authored technical documentation for the full app architecture - wiki and onboarding reference",
    ],
    challenge:
      "Call center teams needed a faster way to find nearby clinics by service and day without phone-based manual lookups. The solution had to stay reliable and easy to use at scale across 330+ clinics.",
    architecture:
      "Single-page React 18 + TypeScript app built with Vite, integrated into an ASP.NET Core backend - the React build outputs directly into the .NET app's wwwroot folder. State is managed locally in DashboardPage (no Redux/Context) and passed to stateless child components via props and callbacks. The UI renders in three progressive states: initial search → selected clinic results → nearby clinics panel. API calls hit three endpoints: /api/certifications, /api/clinics, and /api/servicesdashboard. Dashboard data is cached in-memory per clinic/certification/date with a 5-minute expiration to reduce redundant API calls. The Neutron UI SDK (HCA's design system) provides WCAG 2.1 AA-compliant components; Bootstrap handles responsive layout; Azure Maps renders nearby clinic locations with token-cached auth.",
    technicalChallenges: [
      "Gating the Search button until both clinic and certification are selected - coordinating two independent async inputs with clean loading and error states",
      "In-memory caching keyed by clinic/certification/date with 5-minute TTL to balance data freshness and API load",
      "Azure Maps integration: fetching and caching auth tokens from /api/azure-maps-token, building markers with popups, keeping map and list views in sync without duplicating state",
      "Three-column responsive layout that stacks cleanly on mobile and tablet - critical for shared clinical workstations and call center environments",
    ],
    impact: [
      { metric: "330+", label: "urgent care clinics accessible in real time" },
      { metric: "5,000+", label: "daily active users" },
      { metric: "30–40%", label: "reduction in clinic workflow processing time" },
      { metric: "WCAG 2.1 AA", label: "accessibility via Neutron Design System" },
    ],
    screenshots: [
      { src: ss1, alt: "Empty search state", caption: "Search interface - enter clinic name and select service" },
      { src: ss2, alt: "Search results with service hours", caption: "Results view - BAT service hours for Cypress clinic" },
      { src: ss3, alt: "Nearby clinics expanded panel", caption: "Expanded options - nearby clinics with addresses and hours" },
      { src: ss4, alt: "Map view with clinic pins", caption: "Map view - geographic clinic distribution" },
    ] as Screenshot[],
  },
  {
    number: "02",
    title: "Practice Information Card",
    subtitle: "HCA Healthcare · UI/UX Redesign",
    organization: "HCA Healthcare",
    industry: "Healthcare",
    status: "Design Preview",
    liveUrl: "https://practice-info-card.figma.site/",
    githubUrl: null,
    tech: ["Figma Make", "UX Research", "UI/UX Design", "Accessibility", "Figma"],
    myRole: "UX Researcher & UI/UX Designer",
    responsibilities: [
      "Conducted a full heuristic evaluation of the existing production app",
      "Documented accessibility issues: broken ARIA references, insufficient color contrast, non-mobile-friendly layout",
      "Created redesign concepts for home page, search experience, practice page, and provider page",
      "Prototyped the redesign interactively using Figma Make",
      "Produced a written before/after evaluation with specific improvement rationale per surface",
    ],
    challenge:
      "The existing Practice Information Card experience was hard to scan, inaccessible in key flows, and slow for finding provider and practice details. Users needed clearer navigation, faster search, and easier access to critical information.",
    architecture:
      "The redesign covered four surfaces: (1) Home - clear subtitle, search bar with helper text and descriptive placeholder, 'Recently Viewed' section, card-based help resources. (2) Search - autosuggest dropdown after 3 characters with results categorized into Clinics, Providers, and COID, plus quick filter chips (All / Clinic Only / Provider Only / COID Only). (3) Practice page - tabbed navigation (Providers / Sites / Practice Details), card layout for contact and location details, insurance chips, and breadcrumb navigation. (4) Provider page - dedicated page with specialty chips, status badges, quick action buttons (Contact Provider, Schedule Appointment, Send Message), and organized card sections for professional info, practice affiliation, and practice policies. The prototype was built with Figma Make.",
    technicalChallenges: [
      "Identifying and documenting WCAG failures: color contrast, broken ARIA, missing keyboard navigation",
      "Designing real-time autosuggest search with multi-category results (Clinics, Providers, COID) and filter chips",
      "Restructuring dense tables into scannable card layouts without losing information density",
      "Designing for variable-length provider and practice data across specialty lists, service tables, and multi-site practices",
    ],
    impact: [
      { metric: "WCAG AA", label: "accessibility target across all surfaces" },
      { metric: "50% faster", label: "search time reduced through direct provider search" },
      { metric: "Real-time", label: "autosuggest search with categorized results" },
      { metric: "Direct provider search", label: "find providers without opening a practice page first" },
    ],
    screenshots: [
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
    status: "Live Demo",
    liveUrl: "https://solgaezhova.github.io/shadcn-dashboard/",
    githubUrl: "https://github.com/solgaezhova/shadcn-dashboard",
    tech: ["Next.js 16", "TypeScript", "shadcn/ui", "Tailwind CSS", "Recharts", "TanStack Table", "GitHub Pages", "GitHub Actions"],
    myRole: "Healthcare UI/UX Designer & Frontend Engineer",
    responsibilities: [
      "End-to-end design and implementation of a modern clinic operations dashboard",
      "Accessible color system design using oklch color space for perceptual uniformity",
      "Real-time metrics visualization with interactive area charts and time range selectors",
      "Advanced data table with column visibility controls, sorting, filtering, and pagination",
      "Dark mode support for 24/7 clinical operations with full color token switching",
      "Responsive UI optimized for clinical workstations, tablets, and mobile devices",
    ],
    challenge:
      "Clinics needed one accessible dashboard to monitor patient flow and daily operations across devices. The key challenge was presenting dense data with clear visual hierarchy and color-blind-safe chart distinction.",
    architecture:
      "Next.js 16 app with static export deployed via GitHub Pages and automated GitHub Actions workflow. React component hierarchy built with shadcn/ui providing WCAG 2.1 AA-compliant components. Global CSS variables define an oklch-based color system ensuring perceptual uniformity across all surfaces. Patient metrics displayed via Recharts with interactive area charts, time range selectors (Last 3 months / Last 30 days / Last 7 days), and tooltips. Advanced data table uses TanStack React Table for column visibility, sorting, filtering, and pagination. Sidebar navigation with active state indicators. Mock data simulates real clinic operations: patient count, average wait time, open exam rooms, staff status, and triage levels.",
    technicalChallenges: [
      "Designing an accessible oklch-based color palette - ensuring visual distinction of data series for users with color blindness",
      "Mapping chart series colors to global CSS theme tokens for consistency across metrics cards, charts, and tables",
      "Building a responsive three-column dashboard layout that adapts cleanly to mobile, tablet, and desktop clinical workstations",
      "Syncing Tooltip provider context across nested sidebar components to prevent runtime errors",
      "Automating deployment with GitHub Actions while managing build optimization for static hosting on GitHub Pages",
    ],
    impactLabel: "Key Features",
    impact: [
      { metric: "4 metric cards", label: "live patient count, wait time, exam rooms, staff on duty" },
      { metric: "Area chart", label: "patient & wait time trends with 3-month / 30-day / 7-day range" },
      { metric: "Data table", label: "sortable, filterable columns with configurable visibility picker" },
      { metric: "oklch palette", label: "perceptually uniform, color-blind safe color system" },
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
    tech: ["Figma Make", "UI/UX Design", "Data Visualization", "Dashboard Design", "Healthcare Analytics"],
    myRole: "UI/UX Designer",
    responsibilities: [
      "Designed a market-level dashboard for urgent care leadership to monitor multiple clinics simultaneously",
      "Market Health Score surface with transparent composite scoring across volume, revenue, satisfaction, and staffing",
      "Executive KPI bar with real-time and monthly views: patients, avg clinic time, satisfaction, revenue, clinics needing attention",
      "Clinic Performance Ranking table with wait time, utilization, patient abandonment, visits/hr, and overall score",
      "Exception Panel surfacing clinics requiring immediate attention with key risk indicators",
      "Satisfaction vs. Utilization scatter plot and Visit Reason donut chart for operational insights",
    ],
    challenge:
      "Market leaders lacked a single view of multi-clinic performance and had to jump between dashboards. They needed an exception-driven interface that highlights risk clinics and trends immediately.",
    architecture:
      "Designed in Figma Make as a high-fidelity interactive prototype (desktop only). The layout is structured around a management-by-exception model: a Market Health Score at top-left anchors the view, followed by six executive KPI cards, then a full-width clinic performance ranking table. The lower section splits into three panels - an Exception Panel flagging critical and watch clinics, a Satisfaction vs. Utilization scatter plot positioning all clinics on a 2x2 performance grid, and a Visit Reason donut chart. A Today / Monthly toggle switches the entire dashboard between daily operational data and rolling monthly performance.",
    technicalChallenges: [
      "Designing a composite Market Health Score (0-100) that is immediately readable yet transparently derived from four sub-dimensions: volume, revenue, satisfaction, and staffing",
      "Fitting six executive KPIs, a ranked clinic table, three analytical panels, and a market volume chart into a single view without overwhelming the user",
      "Designing the Exception Panel to prioritize actionability - showing only the clinics that need attention, with the specific metrics driving each alert",
      "Creating a Satisfaction vs. Utilization scatter that positions all clinics at once and makes outliers immediately identifiable without a legend",
    ],
    impactLabel: "Key Features",
    impact: [
      { metric: "Today / Monthly", label: "toggle for operational and strategic views" },
      { metric: "Exception Panel", label: "surfaces critical clinics requiring immediate action" },
      { metric: "Market Health", label: "composite score across volume, revenue, satisfaction, staffing" },
      { metric: "Satisfaction vs. Utilization", label: "scatter plot positioning all clinics at a glance" },
    ],
    screenshots: [
      { src: picMarket1, alt: "Market dashboard - today view", caption: "Today view - market health score, live KPIs, clinic performance table, exception panel, and visit distribution" },
      { src: picMarket2, alt: "Market dashboard - monthly view", caption: "Monthly view - rolling performance, market volume vs prior periods, satisfaction vs utilization scatter" },
    ] as Screenshot[],
  },
];

function ScreenshotGallery({ screenshots, title }: { screenshots: Screenshot[]; title: string }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const reduceMotion = useReducedMotion();
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
      <div className="md:hidden flex items-center justify-between px-1 text-[11px] text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Smartphone size={12} />
          Swipe left or right to view screenshots
        </span>
        <span className="inline-flex items-center gap-0.5" aria-hidden="true">
          <ChevronLeft size={12} />
          <ChevronRight size={12} />
        </span>
      </div>

      <div className="md:hidden overflow-x-auto snap-x snap-mandatory -mx-1 px-1 pb-1 cursor-grab active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-3">
          {screenshots.map((shot) => (
            <div key={shot.caption} className="w-full min-w-full snap-center space-y-2">
              <div className="rounded-xl overflow-hidden border border-border bg-secondary/30 shadow-sm">
                <ImageWithFallback
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full object-cover"
                />
              </div>
              <p className="text-xs text-muted-foreground text-center px-2 break-words">{shot.caption}</p>
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
              <ImageWithFallback
                src={current.src}
                alt={current.alt}
                className="w-full object-cover"
              />
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
            {current.caption}
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
  const [expandedSections, setExpandedSections] = useState({
    architecture: false,
    technical: false,
  });
  const reduceMotion = useReducedMotion();
  const projectCardRef = useRef<HTMLDivElement | null>(null);
  const totalProjects = PROJECTS.length;
  const project = PROJECTS[active];

  useEffect(() => {
    setExpandedSections({
      architecture: false,
      technical: false,
    });
  }, [active]);

  const splitPreview = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return { preview: text, rest: "" };
    }

    const candidate = text.slice(0, maxLength);
    const lastSpace = candidate.lastIndexOf(" ");
    const cutPoint = lastSpace > Math.floor(maxLength * 0.6) ? lastSpace : maxLength;

    return {
      preview: `${text.slice(0, cutPoint).trim()}...`,
      rest: text.slice(cutPoint).trim(),
    };
  };

  const architectureSplit = splitPreview(project.architecture, 170);
  const previewChallenges = project.technicalChallenges.slice(0, 2);
  const extraChallenges = project.technicalChallenges.slice(2);

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
          {/* Header bar */}
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
                  Live Demo
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

          <div className="p-4 sm:p-8">
            {/* Screenshots + overview */}
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6 sm:gap-10 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-border">
              <div className="min-w-0">
                <ScreenshotGallery key={project.number} screenshots={project.screenshots} title={project.title} />
              </div>

              <div className="space-y-5 min-w-0">
                {/* My Role */}
                <div>
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

                {/* Tech stack */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <TechBadge key={t} label={t} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Details grid */}
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="border border-border rounded-xl p-4 bg-card/50">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Challenge
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.challenge}</p>
                </div>

                <div className="border border-border rounded-xl p-4 bg-card/50">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Architecture & Implementation
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {expandedSections.architecture ? project.architecture : architectureSplit.preview}
                  </p>
                  {architectureSplit.rest && (
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedSections((prev) => ({
                          ...prev,
                          architecture: !prev.architecture,
                        }))
                      }
                      className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      {expandedSections.architecture ? "Read less" : "Read more"}
                      <ChevronRight
                        size={12}
                        className={`transition-transform ${expandedSections.architecture ? "rotate-90" : ""}`}
                      />
                    </button>
                  )}
                </div>

                <div className="border border-border rounded-xl p-4 bg-card/50">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Technical Challenges
                  </h4>
                  <ul className="space-y-2">
                    {(expandedSections.technical ? project.technicalChallenges : previewChallenges).map((c) => (
                      <li key={c} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  {extraChallenges.length > 0 && (
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedSections((prev) => ({
                          ...prev,
                          technical: !prev.technical,
                        }))
                      }
                      className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      {expandedSections.technical ? "Read less" : "Read more"}
                      <ChevronRight
                        size={12}
                        className={`transition-transform ${expandedSections.technical ? "rotate-90" : ""}`}
                      />
                    </button>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  {project.impactLabel ?? "Business Impact"}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {project.impact.map((imp) => (
                    <div key={imp.label} className="p-4 bg-accent rounded-xl border border-primary/10">
                      <div className="text-lg font-semibold text-primary tracking-tight leading-tight">
                        {imp.metric}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{imp.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

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

// ─── AI WORKFLOW ──────────────────────────────────────────────────────────────

const AI_TOOLS = [
  {
    tool: "GitHub Copilot",
    category: "Code Generation",
    use: "Boilerplate reduction, unit test generation, refactoring suggestions, documentation drafts.",
    gain: "~30% faster coding on repetitive patterns",
    color: "bg-[#161b22] text-white",
    dot: "bg-white",
  },
  {
    tool: "ChatGPT / Claude",
    category: "Research & Writing",
    use: "Requirements clarification, copy drafting, code review discussion, architecture brainstorming.",
    gain: "~50% faster research and ideation cycles",
    color: "bg-accent",
    dot: "bg-primary",
  },
  {
    tool: "Figma Make",
    category: "Design Exploration",
    use: "Rapid UI prototypes, component variants, layout exploration, design-to-code hand-off.",
    gain: "Compress 2-day wireframe cycles to ~4 hours",
    color: "bg-secondary",
    dot: "bg-foreground",
  },
  {
    tool: "Cursor IDE",
    category: "AI-Native Coding",
    use: "Codebase-aware autocomplete, multi-file edits, inline explanations, one-shot component generation.",
    gain: "Reduces context-switching friction significantly",
    color: "bg-accent",
    dot: "bg-primary",
  },
];

function AIWorkflow() {
  return (
    <section id="ai" className="py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>AI Workflow</SectionLabel>
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground mb-4">
              I use AI as a force multiplier-not a shortcut.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              AI tools have changed how I work, not what I care about. I still
              write thoughtful code, make intentional design decisions, and own
              every pixel that ships. AI handles the mechanical parts so I can
              focus on the hard parts.
            </p>
            <div className="relative overflow-hidden rounded-xl border border-border/80 bg-card/70 backdrop-blur-sm px-5 py-5 min-h-[150px] shadow-[0_1px_0_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/28 via-sky-300/10 to-transparent opacity-60" />
              <div className="absolute -top-10 -right-8 w-24 h-24 rounded-full bg-white/30 blur-2xl" />
              <div className="relative">
                <div className="h-1.5 w-11 rounded-full mb-3 bg-cyan-500/65" />
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Overall productivity lift
                </div>
                <div className="text-4xl font-semibold text-foreground tracking-tight mb-1">
                  2–3×
                </div>
                <div className="text-sm text-muted-foreground">
                  Estimated output multiplier on greenfield features when AI tools
                  are paired with clear requirements and strong architectural
                  judgment.
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {AI_TOOLS.map((t) => (
              <div
                key={t.tool}
                className="p-5 bg-card border border-border rounded-xl hover:shadow-sm transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      {t.tool}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1.5 sm:mt-1">
                      {t.category}
                    </div>
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-accent text-primary rounded-full font-mono">
                    {t.gain}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.use}
                </p>
              </div>
            ))}
          </div>
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
          {ARTICLES.map((article) => {
            const isOpen = expanded === article.id;
            return (
              <article
                key={article.id}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-colors"
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
              {"I'm open to senior frontend, UI engineering, product engineering, and UX-focused software engineering roles-especially teams building healthcare, SaaS, or data products."}
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
        <Skills />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Process />
      </Reveal>
      <Reveal>
        <AIWorkflow />
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
