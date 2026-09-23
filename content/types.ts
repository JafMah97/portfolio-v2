export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** A string that exists in every supported language. */
export type Text = Record<Locale, string>;

export type Project = {
  slug: string;
  year: number;
  title: Text;
  /** One line, shown in lists and used as the meta description. */
  summary: Text;
  role: Text;
  client?: Text;
  stack: string[];
  /** Live site first — it is also used as the project's main URL for search engines. */
  links?: { label: Text; href: string }[];
  /** Screenshots in /public. The first one is also the social share image. */
  images?: { src: string; width: number; height: number; alt: Text }[];
  featured?: boolean;
  /** Case study body. Each block is a heading + paragraphs. */
  sections: { heading: Text; body: Text[] }[];
  /** Short measurable results, shown as a list. */
  outcomes?: Text[];
};

export type Job = {
  company: string;
  url?: string;
  role: Text;
  start: string; // "2023-04"
  end?: string; // omit when current
  location?: Text;
  description: Text;
};

export type SkillGroup = { title: Text; items: string[] };
