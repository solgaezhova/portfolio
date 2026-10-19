export type StatFormat = 'plus' | 'thousandsPlus' | 'approxPercent';

export interface StatCard {
  value: number;
  format: StatFormat;
  label: string;
  backTitle: string;
  items: string[];
}

export interface ProjectMedia {
  caption: string;
  /** Still image shown in the laptop frame. */
  src?: string;
  /** Video URL; `poster` is used as its thumbnail and to size the frame. */
  video?: string;
  poster?: string;
}

export interface Project {
  title: string;
  kicker: string;
  desc: string;
  role?: string;
  live?: string;
  liveLabel?: string;
  github?: string;
  challenge: string;
  stack: string[];
  impactLabel: string;
  /** When set, the summary shows a Business Impact card and Challenge/Technology move into the details. */
  biz?: string;
  bizMetric?: string;
  impact: { title: string; sub: string }[];
  built: string[];
  challenges: { title: string; text: string }[];
  media: ProjectMedia[];
}

export interface Article {
  title: string;
  tags: string[];
  preview: string;
  body: string[];
}

export interface Quote {
  name: string;
  initials: string;
  role: string;
  text: string;
}
