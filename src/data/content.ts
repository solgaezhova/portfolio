// Site copy: projects, articles, testimonials, stats, skills and contacts.
import project1Poster from '../assets/posters/project1-poster.png';
import project1Screenshot2SearchResults from '../assets/screenshots/project1-screenshot2-search-results.png';
import project1Screenshot3NearbyClinics from '../assets/screenshots/project1-screenshot3-nearby-clinics.png';
import project1Screenshot4MapView from '../assets/screenshots/project1-screenshot4-map-view.png';
import project2Screenshot1Home from '../assets/screenshots/project2-screenshot1-home.png';
import project2Screenshot2ProviderPage from '../assets/screenshots/project2-screenshot2-provider-page.png';
import project2Screenshot3PracticeDetails from '../assets/screenshots/project2-screenshot3-practice-details.png';
import project2Screenshot4PracticePage from '../assets/screenshots/project2-screenshot4-practice-page.png';
import project3Screenshot1DashboardLight from '../assets/screenshots/project3-screenshot1-dashboard-light.png';
import project3Screenshot3DashboardDark from '../assets/screenshots/project3-screenshot3-dashboard-dark.png';
import project3Screenshot5DashboardFullAlt from '../assets/screenshots/project3-screenshot5-dashboard-full-alt.png';
import project4Screenshot1MarketToday from '../assets/screenshots/project4-screenshot1-market-today.png';
import project4Screenshot2MarketMonthly from '../assets/screenshots/project4-screenshot2-market-monthly.png';
import type { Article, Project, Quote, StatCard } from './types';

export const ROLES = [
  "Healthcare",
  "Digital Products"
];

export const STATS: StatCard[] = [
  {
    "value": 20,
    "format": "plus",
    "label": "Large-scale Applications",
    "backTitle": "Selected Applications",
    "items": [
      "Healthcare Intelliboard",
      "Scheduling System",
      "Mobile Operations App",
      "Urgent Care Services Dashboard",
      "Electronic Logs",
      "Telehealth Dashboard"
    ]
  },
  {
    "value": 5000,
    "format": "thousandsPlus",
    "label": "Daily Users",
    "backTitle": "Who Uses Them",
    "items": [
      "Patients",
      "Providers",
      "Clinic Staff",
      "Operational Leaders",
      "Quality Managers"
    ]
  },
  {
    "value": 330,
    "format": "plus",
    "label": "Healthcare Clinics",
    "backTitle": "Multi-site Healthcare",
    "items": [
      "Deployed across 12 states",
      "Supported diverse clinical environments",
      "Designed for consistent workflows across multiple locations"
    ]
  },
  {
    "value": 30,
    "format": "approxPercent",
    "label": "Processing Time Reduced",
    "backTitle": "Key Improvements",
    "items": [
      "Improved Efficiency",
      "Reduced Support Requests",
      "Increased Task Completion Rates"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    "title": "Urgent Care Services Dashboard",
    "kicker": "HCA HEALTHCARE · PRODUCT DESIGN · DESIGN ENGINEERING · FRONTEND",
    "desc": "A production healthcare application that helps call-center teams find clinic services and availability faster.",
    "role": "Product Designer & Frontend Engineer",
    "live": "https://ucservices.cnw.hcahealthcare.cloud/",
    "liveLabel": "Live application",
    "challenge": "When a patient called the call center, operators needed to find a clinic that could provide the requested service. Previously, operators had to contact clinics individually to find availability.",
    "stack": [
      "React",
      "TypeScript",
      "Vite",
      "Azure Maps",
      "Vitest",
      "Figma"
    ],
    "impactLabel": "AT A GLANCE",
    "biz": "Replaced a manual clinic-availability workflow with a guided search experience used across 330+ locations.",
    "bizMetric": "~30%",
    "impact": [
      {
        "title": "330+",
        "sub": "Clinics"
      },
      {
        "title": "5,000+",
        "sub": "Daily users"
      },
      {
        "title": "Production",
        "sub": "Application"
      },
      {
        "title": "WCAG 2.1 AA",
        "sub": "Accessibility"
      }
    ],
    "built": [
      "End-to-end product design - Designed the user experience and product workflow.",
      "Product architecture - Shaped the overall architecture and information hierarchy.",
      "API & data requirements - Defined what the frontend needed from the backend.",
      "Frontend implementation - Built the complete experience in React and TypeScript.",
      "Responsive + accessible - Designed touch-friendly experiences across desktop and mobile.",
      "Neutron design system - Used HCA's existing design system for consistent, accessible UI."
    ],
    "challenges": [
      {
        "title": "Progressive disclosure",
        "text": "Show only relevant clinics first; reveal nearby options when needed."
      },
      {
        "title": "Proximity-based alternatives",
        "text": "Show nearby clinics sorted by distance when the selected clinic has no availability."
      },
      {
        "title": "List + Map",
        "text": "Use the list for quick comparison and the map for geographic context."
      },
      {
        "title": "Responsive + accessible",
        "text": "Designed touch-friendly, accessible experiences across desktop and mobile."
      },
      {
        "title": "HCA Design System",
        "text": "Used Neutron components for consistency and established accessibility patterns."
      }
    ],
    "media": [
      {
        "caption": "From clinic search to availability and nearby alternatives",
        "video": "/videos/project1-recording.mp4",
        "poster": project1Poster
      },
      {
        "caption": "Step 1 - Check service availability by clinic",
        "src": project1Screenshot2SearchResults
      },
      {
        "caption": "Step 2 - Compare nearby clinics",
        "src": project1Screenshot3NearbyClinics
      },
      {
        "caption": "Step 3 - Explore locations on the map",
        "src": project1Screenshot4MapView
      }
    ]
  },
  {
    "title": "Practice Information Card",
    "kicker": "HCA HEALTHCARE · RE-DESIGN",
    "desc": "A UX redesign that makes provider and practice information faster to find, easier to scan, and more accessible.",
    "role": "UX Researcher & UI/UX Designer",
    "live": "https://practice-info-card.figma.site/",
    "liveLabel": "Interactive prototype",
    "challenge": "Call center teams needed a faster way to find providers, services, and practice details. The existing experience was difficult to scan and slowed access to critical information.",
    "stack": [
      "Figma Make",
      "UX Research",
      "UI/UX Design",
      "Accessibility"
    ],
    "impactLabel": "BUSINESS IMPACT",
    "biz": "Turned a hard-to-scan provider lookup into a fast, accessible search experience for call-center teams.",
    "bizMetric": "~40%",
    "impact": [
      {
        "title": "WCAG AA",
        "sub": "Accessible design"
      },
      {
        "title": "~40% faster",
        "sub": "Search time"
      },
      {
        "title": "Real-time",
        "sub": "Autocomplete & filters"
      },
      {
        "title": "Direct search",
        "sub": "Provider & practice information"
      }
    ],
    "built": [
      "Redesigned the provider and practice information experience.",
      "Designed categorized autocomplete search and filters.",
      "Restructured dense provider and practice data.",
      "Designed and prototyped the experience in Figma Make."
    ],
    "challenges": [
      {
        "title": "Accessibility",
        "text": "Fixed WCAG issues across contrast, ARIA, and keyboard navigation."
      },
      {
        "title": "Search",
        "text": "Designed real-time autocomplete with categorized results and filters."
      },
      {
        "title": "Dense data",
        "text": "Reworked provider and practice information into scannable cards."
      },
      {
        "title": "Variable content",
        "text": "Designed layouts that adapt to different provider and practice data."
      }
    ],
    "media": [
      {
        "caption": "Redesigned provider search and practice information experience",
        "video": "/videos/project2-recording.mp4",
        "poster": project2Screenshot2ProviderPage
      },
      {
        "caption": "Home - autosuggest search with categorized Clinics & Providers results and filter chips",
        "src": project2Screenshot1Home
      },
      {
        "caption": "Provider page - header with status badges, specialty chips, and quick action buttons",
        "src": project2Screenshot2ProviderPage
      },
      {
        "caption": "Practice page - header card with key metrics, tabbed navigation, and provider cards with status badges",
        "src": project2Screenshot4PracticePage
      },
      {
        "caption": "Practice Details tab - general info, policies, contact cards, hours, and insurance accepted",
        "src": project2Screenshot3PracticeDetails
      }
    ]
  },
  {
    "title": "Healthcare Clinic Dashboard",
    "kicker": "OPEN SOURCE · PERSONAL PROJECT · DESIGN & BUILD",
    "desc": "A personal healthcare dashboard exploring accessible data visualization, reusable UI patterns, and responsive clinical workflows.",
    "role": "Healthcare UI/UX Designer & Frontend Engineer",
    "live": "https://solgaezhova.github.io/shadcn-dashboard/",
    "liveLabel": "Interactive demo",
    "github": "https://github.com/solgaezhova/shadcn-dashboard",
    "challenge": "Built as a personal project to explore modern frontend patterns for healthcare dashboards, with a focus on accessibility, data visualization, and reusable UI components.",
    "stack": [
      "Next.js 16",
      "TypeScript",
      "shadcn/ui",
      "Tailwind CSS",
      "Recharts",
      "TanStack Table",
      "GitHub Pages",
      "GitHub Actions"
    ],
    "impactLabel": "KEY FEATURES",
    "impact": [
      {
        "title": "4 metric cards",
        "sub": "Patients, wait time, rooms, staff"
      },
      {
        "title": "Trend analysis",
        "sub": "3-month, 30-day, and 7-day"
      },
      {
        "title": "Data table",
        "sub": "Sorting, filtering, table controls"
      },
      {
        "title": "Dark mode",
        "sub": "Full theme switching"
      }
    ],
    "built": [
      "Designed and implemented the complete healthcare dashboard UI.",
      "Built interactive metric cards, charts, and data tables.",
      "Implemented responsive layouts and dark mode.",
      "Used Figma Make and GitHub Copilot to accelerate design and development."
    ],
    "challenges": [
      {
        "title": "Accessible data visualization",
        "text": "Designed an OKLCH-based color system to distinguish chart data without relying on color alone."
      },
      {
        "title": "Reusable UI system",
        "text": "Built dashboard components with shared tokens and shadcn/ui for consistent styling."
      },
      {
        "title": "Dense clinical data",
        "text": "Organized metrics, charts, and tables into a clear hierarchy without overwhelming the user."
      },
      {
        "title": "Responsive dashboard",
        "text": "Designed two-column layout to adapt across desktop, tablet, and mobile."
      }
    ],
    "media": [
      {
        "caption": "Interactive dashboard with trends, data tables, and dark mode",
        "video": "/videos/project3-recording.mp4",
        "poster": project3Screenshot3DashboardDark
      },
      {
        "caption": "Light mode - metric cards (patients, wait time, exam rooms, staff) and patient trend chart",
        "src": project3Screenshot1DashboardLight
      },
      {
        "caption": "Full view - trend chart with tooltip active and clinic operations table",
        "src": project3Screenshot5DashboardFullAlt
      },
      {
        "caption": "Dark mode - full color token switching for 24/7 clinical operations",
        "src": project3Screenshot3DashboardDark
      }
    ]
  },
  {
    "title": "Healthcare Market Dashboard",
    "kicker": "PERSONAL · CONCEPT · DESIGN",
    "desc": "A personal concept exploring how healthcare leaders can monitor multi-clinic performance, identify exceptions, and spot trends in one view.",
    "challenge": "Designed as a personal concept to explore how healthcare leaders could monitor multi-clinic performance in one view, with a focus on prioritizing exceptions and trends.",
    "stack": [
      "Figma",
      "UI/UX Design",
      "Data Visualization",
      "Dashboard Design"
    ],
    "impactLabel": "KEY FEATURES",
    "impact": [
      {
        "title": "Today / Monthly",
        "sub": "Switch between operational and strategic views"
      },
      {
        "title": "Exception Panel",
        "sub": "Surface clinics requiring attention"
      },
      {
        "title": "Market Health",
        "sub": "Composite performance score"
      }
    ],
    "built": [
      "Designed a market-level dashboard for monitoring multiple clinics.",
      "Created a Market Health Score and executive KPIs.",
      "Designed exception monitoring and clinic performance rankings.",
      "Designed data visualizations for trends, utilization, and satisfaction.",
      "Created a high-fidelity interactive prototype in Figma."
    ],
    "challenges": [
      {
        "title": "Information density",
        "text": "Created a clear hierarchy for KPIs, rankings, charts, and exceptions within one dashboard."
      },
      {
        "title": "Prioritization",
        "text": "Designed the Exception Panel to surface clinics requiring attention first."
      },
      {
        "title": "Composite metrics",
        "text": "Designed a Market Health Score that combines multiple performance dimensions into one readable signal."
      },
      {
        "title": "Data comparison",
        "text": "Used visual comparisons to make clinic performance, trends, and outliers easy to identify."
      }
    ],
    "media": [
      {
        "caption": "Today view - market health score, live KPIs, clinic performance table, exception panel, and visit distribution",
        "src": project4Screenshot1MarketToday
      },
      {
        "caption": "Monthly view - rolling performance, market volume vs prior periods, satisfaction vs utilization scatter",
        "src": project4Screenshot2MarketMonthly
      }
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    "title": "Being product-oriented is becoming more important for frontend engineers than being great at React, Angular, or Vue.",
    "tags": [
      "#FrontendEngineering",
      "#ProductThinking",
      "#HealthTech"
    ],
    "preview": "Frameworks matter. Technical skills matter. But today, everyone has access to tools like GitHub Copilot, Claude Code, and ChatGPT that can generate components, write tests, and help build interfaces faster.",
    "body": [
      "Frameworks matter. Technical skills matter. But today, everyone has access to tools like GitHub Copilot, Claude Code, and ChatGPT that can generate components, write tests, and help build interfaces faster.",
      "Frameworks come and go. The ability to understand users and translate complex workflows into meaningful solutions is what remains most important.",
      "I've realized that frontend work becomes much more valuable when you understand the workflow behind the interface. The best projects I've worked on required a mix of: frontend development, UI/UX thinking, product understanding, and domain knowledge.",
      "In healthcare, that often means finding ways to reduce administrative burden and make people's jobs a little easier.",
      "One of the most interesting projects I worked on was replacing multiple paper-based clinic and laboratory logs with a digital workflow. Before building anything, I visited a clinic, reviewed the existing forms, and talked with technical staff and quality managers about their daily routines.",
      "The most useful insights didn't come from a requirements document. They came from watching how people worked. I learned where time was being lost, why compliance tracking was difficult, and where staff needed clearer guidance when issues occurred.",
      "The solution wasn't just about turning paper forms into digital forms. We automated reporting, made compliance issues easier to track, and introduced guided remediation workflows to help staff navigate challenging situations.",
      "As a result, clinic teams spent less time on administrative tasks, had better visibility into compliance, and could resolve issues more consistently.",
      "For me, the most rewarding part of frontend engineering isn't when a feature looks great or works exactly as designed. It's when a provider, clinic manager, or operations leader tells me that something that used to take a lot of time is now easier.",
      "Those conversations matter more than any deployment or release. Great frontend engineers don't just build interfaces. They understand the people, processes, and workflows behind them. And success isn't measured by features shipped - it's measured by the time, effort, and frustration removed from someone's day."
    ]
  },
  {
    "title": "People sometimes ask how I went from 10+ years in law to software engineering.",
    "tags": [
      "#SoftwareEngineering",
      "#CareerChange",
      "#WomenInTech",
      "#HealthTech"
    ],
    "preview": "Honestly? The two professions have more in common than they seem. Both are about translating complexity into something people can actually use.",
    "body": [
      "Honestly? The two professions have more in common than they seem. Both are about translating complexity into something people can actually use.",
      "In law, that meant turning dense regulations, contracts, and legal processes into clear advice and practical documents. In software engineering, it means turning business requirements, edge cases, and user pain points into products that actually work.",
      "Both require attention to detail, structured thinking, asking the right questions, spotting risks early, and staying calm when something important breaks at the last minute.",
      "So yes, one world has contracts and the other has code reviews… but both involve reading things very carefully and trying to prevent future problems before anyone else notices them.",
      "My legal background has made me a stronger engineer in ways I didn't fully appreciate at first. I'm comfortable working through ambiguity. I naturally think about workflows, rules, exceptions, and compliance. I care a lot about precision, clarity, and user impact. And I've probably been overtrained to document things properly.",
      "These days, I build frontend applications in healthcare, where that mix of problem-solving, structure, and empathy turns out to be incredibly useful.",
      "I'm grateful that my career path hasn't been linear. Law taught me how to think. Engineering taught me how to build. Together, they've shaped how I solve problems.",
      "Curious to hear from others who made a non-traditional move into tech - what skills from your previous career turned out to be unexpectedly valuable?"
    ]
  },
  {
    "title": "AI can compress weeks of product discovery and design exploration into days - while making human judgment even more important, not less.",
    "tags": [
      "#AI",
      "#UXDesign",
      "#FrontendDevelopment",
      "#ProductDesign"
    ],
    "preview": "As someone working across UI/UX Design and Frontend Development, I'm constantly exploring AI tools for both design and development. I recently completed the AI for Designers certification from the IxDF.",
    "body": [
      "As someone working across UI/UX Design and Frontend Development, I'm constantly exploring AI tools for both design and development. I recently completed the AI for Designers certification from the IxDF - The Interaction Design Foundation, and I'd highly recommend it to designers, developers, and product professionals looking to integrate AI more intentionally into their workflows.",
      "One insight that particularly resonated with me is that AI can compress weeks of product discovery and design exploration into days - while making human judgment even more important, not less.",
      "The course also helped me become more intentional about prompt engineering - learning how to provide better context, structure requests effectively, and use different prompting techniques to get more accurate and useful results.",
      "Currently, my AI toolkit looks like this: ChatGPT for ideation and problem-solving, Figma Make for rapid prototyping, and GitHub Copilot for accelerating frontend development.",
      "The course introduced me to a much broader workflow, where AI can support every stage of product development: Research analysis and insight generation (Dovetail), Problem definition (Claude), Feature planning and wireframing (Relume), UX writing and content creation (Frontitude), Usability testing and validation (Maze).",
      "My biggest takeaway: AI is most effective when you know which tool creates the most value at each stage of the product lifecycle - and where human expertise must take over."
    ]
  },
  {
    "title": "Every healthcare interface should follow one simple rule: CCS - Clean. Consistent. Simple.",
    "tags": [
      "#HealthcareUX",
      "#DesignPhilosophy",
      "#ProductDesign",
      "#HealthTech"
    ],
    "preview": "I call it CCS: Clean. Consistent. Simple. It guides almost every design decision I make in healthcare products, where success is measured by how confidently someone completes a task.",
    "body": [
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
      "That is what CCS - Clean. Consistent. Simple. is all about."
    ]
  }
];

export const QUOTES: Quote[] = [
  {
    "name": "Chris Hart",
    "initials": "CH",
    "role": "AVP Application Development, HCA Healthcare",
    "text": "Olya has a unique ability to bridge technical and business perspectives, navigating ambiguity and complex requirements while helping drive successful outcomes. The positive feedback she receives from stakeholders is a testament to both the quality of her work and the trust she earns through her professionalism, communication, and partnership."
  },
  {
    "name": "Taylor Smith, MBA",
    "initials": "TS",
    "role": "Consulting Product Analyst, Software Development, HCA IT&S",
    "text": "Olya has unmatched talent in UI/UX design and development. Every time she touches a product, it is improved greatly. She has high attention to detail and thinks about things that most others miss. Olya would be a fantastic addition to any team and will greatly improve any product/solution she works with."
  },
  {
    "name": "Dan Garvin",
    "initials": "DG",
    "role": "Consulting Application System Engineer, HCA Healthcare",
    "text": "What sets Olya apart is her rare combination of big-picture thinking and meticulous execution. Her UI/UX instincts are second to none; she consistently creates solutions that are intuitive, elegant, and user-centered-even when the underlying problem is highly complex. Working with her, I saw firsthand how her design decisions elevated not just the interface, but the entire product experience."
  }
];

export const HERO_SHOTS = [
  { src: project3Screenshot1DashboardLight, label: 'Overview' },
  { src: project3Screenshot3DashboardDark, label: 'Dark mode' },
];

export const ENJOY = [
  'Complex dashboards',
  'Data visualization',
  'Workflow automation',
  'Internal business applications',
  'Accessible user interfaces',
];

export const STEPS = ['Research', 'Design', 'Code', 'Test', 'Ship'];

export const SKILLS = [
  { n: '01', title: 'Frontend Engineering', text: 'Building modern, responsive, accessible web applications using React, TypeScript, JavaScript, HTML, CSS, and REST APIs.' },
  { n: '02', title: 'UI/UX Design', text: 'Designing intuitive interfaces, simplifying complex workflows, creating wireframes, prototypes, and dashboards.' },
  { n: '03', title: 'Patient Experience', text: 'Recognizing challenges that may not be obvious from the screen alone, but matter to the people using the product.' },
  { n: '04', title: 'AI-Assisted Flow', text: 'Leveraging Claude Design, GitHub Copilot, and ChatGPT to accelerate design exploration, implementation, and development.' },
];

export const CONTACTS = [
  { label: 'olya.yezhova@gmail.com', sub: 'Preferred first contact', href: 'mailto:olya.yezhova@gmail.com' },
  { label: 'linkedin.com/in/oezhova', sub: 'Professional background', href: 'https://linkedin.com/in/oezhova' },
  { label: 'github.com/solgaezhova', sub: 'Open source & side projects', href: 'https://github.com/solgaezhova' },
];

export const EMAIL = 'olya.yezhova@gmail.com';
