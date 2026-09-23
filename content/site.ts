import type { Text } from "./types";

/**
 * Global settings. Change `url` to your domain before deploying —
 * canonical URLs, sitemap, hreflang and Open Graph tags are built from it.
 */
export const site = {
  url: "https://jafarmahmoud.sy",
  email: "jafmah9@gmail.com",
  /** Used in the footer ("Updated …") and in the sitemap. */
  updated: "2026-09-23",
  socials: [
    { label: "GitHub", href: "https://github.com/JafMah97" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jafmah97/" },
    { label: "X", href: "https://x.com/JafarMah97" },
  ],
  /** Optional: a PDF placed in /public. Remove to hide the link. */
  resume: "/resume.pdf" as string | undefined,
};

export const profile = {
  name: { en: "Jafar Mahmoud", ar: "جعفر محمود" } satisfies Text,
  role: { en: "Frontend Developer", ar: "مطوّر واجهات أمامية" } satisfies Text,
  location: { en: "Latakia, Syria", ar: "اللاذقية، سوريا" } satisfies Text,
  /** Square portrait (at least 400x400). A file in /public. */
  photo: "/photo.png",
  /** Big opening statement on the home page. */
  headline: {
    en: "I build web interfaces in React and Next.js, in Arabic and English.",
    ar: "أبني واجهات ويب بـ React و Next.js، بالعربية والإنجليزية.",
  } satisfies Text,
  bio: {
    en: "Frontend developer with about a year of production work: a multi-tenant SaaS platform and a client website in Qatar. I also built Konekta, a full-stack social network, to learn how the backend side works. I studied mechatronics engineering at Latakia University.",
    ar: "مطوّر واجهات أمامية بخبرة سنة تقريبًا في مشاريع حقيقية: منصة SaaS متعددة المستأجرين وموقع لعميل في قطر. وبنيت كونكتا، شبكة اجتماعية كاملة من الواجهة حتى الخادم، لأتعلم كيف يعمل الجانب الخلفي. درست هندسة الميكاترونيكس في جامعة اللاذقية.",
  } satisfies Text,
  /** Set to null to hide the availability line. */
  availability: {
    en: "Open to frontend roles in Syria and remote",
    ar: "متاح لوظائف الواجهات الأمامية في سوريا وعن بُعد",
  } as Text | null,
};
