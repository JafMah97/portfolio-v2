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
    en: "Frontend developer working with React, TypeScript and Next.js. One year of production experience on a multi-tenant SaaS platform in Arabic and English, and a business marketplace website for a client in Qatar. I'm now growing into a full software engineer: I have backend experience with Node.js, and I'm learning C# and .NET.",
    ar: "مطوّر واجهات أمامية أعمل بـ React و TypeScript و Next.js. خبرة سنة في مشاريع حقيقية: منصة SaaS من نوع multi-tenant بالعربية والإنجليزية، وموقع منصة أعمال لعميل في قطر. أعمل حاليًا لأصبح مهندس برمجيات شاملًا: لدي خبرة في الباك إند بـ Node.js، وأتعلم C# و .NET.",
  } satisfies Text,
  /** Set to null to hide the availability line. */
  availability: {
    en: "Open to frontend roles in Syria and remote",
    ar: "متاح لوظائف الواجهات الأمامية في سوريا وعن بُعد",
  } as Text | null,
};
