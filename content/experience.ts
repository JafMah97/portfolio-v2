import type { Job, SkillGroup } from "./types";

// Newest first.
export const experience: Job[] = [
  {
    company: "Davinda",
    url: "/work/davinda",
    role: { en: "Frontend Developer", ar: "مطوّر واجهات أمامية" },
    start: "2026-02",
    end: "2026-09",
    location: { en: "Latakia", ar: "اللاذقية" },
    description: {
      en: "Frontend on Filter Car, a multi-tenant SaaS for car service and wash businesses: data-fetching hooks over TanStack Query, the permission layer, and Arabic/English localization. The code and screens are confidential, so they are not shown here.",
      ar: "واجهات منصة Filter Car، نظام SaaS من نوع multi-tenant لمراكز خدمة وغسيل السيارات: طبقة جلب البيانات فوق TanStack Query، وطبقة الصلاحيات، والتعريب بالعربية والإنجليزية. الكود والواجهات سرّية، لذلك لا أعرضها هنا.",
    },
  },
  {
    company: "The Deal (freelance)",
    url: "https://thedeal.qa/en",
    role: { en: "Frontend Developer", ar: "مطوّر واجهات أمامية" },
    start: "2025-09",
    end: "2025-10",
    location: { en: "Remote", ar: "عن بُعد" },
    description: {
      en: "Built the landing page and project pages of a Qatari marketplace, in a two-person team with a senior developer.",
      ar: "بنيت الصفحة الرئيسية وصفحات المشاريع لمنصة قطرية، ضمن فريق من شخصين مع مطوّر أكثر خبرة.",
    },
  },
];

export const skills: SkillGroup[] = [
  {
    title: { en: "Languages", ar: "اللغات" },
    items: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: { en: "Frontend", ar: "الواجهات" },
    items: ["React", "Next.js", "Tailwind CSS", "TanStack Query", "React Hook Form", "Zod"],
  },
  {
    title: { en: "Backend", ar: "الخادم" },
    items: ["Node.js", "Fastify", "Prisma", "PostgreSQL", "Socket.IO", "C# (learning)"],
  },
  {
    title: { en: "Tools", ar: "الأدوات" },
    items: ["Git", "GitHub", "Postman", "Figma", "i18next (RTL)"],
  },
];
