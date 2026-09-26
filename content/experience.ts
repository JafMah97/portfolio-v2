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
      en: "Frontend on two products: Filter Car, a multi-tenant SaaS for car service businesses, and Evexl, a digital business card platform. Data-fetching hooks, role-based access, payments and debugging with QA and backend.",
      ar: "واجهات لمنتجين: Filter Car، منصة SaaS من نوع multi-tenant لمراكز خدمة السيارات، و Evexl، منصة بطاقات عمل رقمية. طبقة جلب البيانات، والصلاحيات، والدفع، وحل الأخطاء مع فريق الاختبار والباك إند.",
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
