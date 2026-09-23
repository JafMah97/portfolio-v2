import type { Project, Text } from "./types";

const live: Text = { en: "Live site", ar: "الموقع" };
const code: Text = { en: "Source code", ar: "الكود المصدري" };

// Order here is the order on the site.
export const projects: Project[] = [
  {
    slug: "konekta",
    year: 2025,
    featured: true,
    title: { en: "Konekta", ar: "كونكتا" },
    summary: {
      en: "A bilingual social network, built end to end — interface and API.",
      ar: "شبكة اجتماعية ثنائية اللغة، بنيتها بالكامل من الواجهة حتى الخادم.",
    },
    role: { en: "Full-stack, solo project", ar: "مشروع شخصي، واجهة وخادم" },
    stack: ["Next.js 16", "TypeScript", "TanStack Query", "Socket.IO", "Fastify", "Prisma", "PostgreSQL"],
    links: [
      { label: live, href: "https://konekta.jafarmahmoud.sy" },
      { label: { en: "Frontend code", ar: "كود الواجهة" }, href: "https://github.com/JafMah97/konekta-social-frontend" },
      { label: { en: "Backend code", ar: "كود الخادم" }, href: "https://github.com/JafMah97/konekta-social-backend" },
    ],
    images: [
      {
        src: "/work/konekta/feed-light.jpg",
        width: 1898,
        height: 908,
        alt: { en: "Konekta feed in Arabic, light theme", ar: "الصفحة الرئيسية في كونكتا بالعربية، الوضع الفاتح" },
      },
      {
        src: "/work/konekta/comments-dark.jpg",
        width: 1898,
        height: 908,
        alt: { en: "A post with its comment thread, dark theme", ar: "منشور مع التعليقات، الوضع الداكن" },
      },
      {
        src: "/work/konekta/settings-dark.jpg",
        width: 1898,
        height: 908,
        alt: {
          en: "Settings: private account, theme and language",
          ar: "الإعدادات: الحساب الخاص والمظهر واللغة",
        },
      },
    ],
    sections: [
      {
        heading: { en: "Overview", ar: "نظرة عامة" },
        body: [
          {
            en: "Konekta is a social platform with a feed, image posts, comments, likes, bookmarks, follow suggestions, notifications and private accounts. It works fully in Arabic and English, with light, dark and system themes.",
            ar: "كونكتا منصة تواصل اجتماعي فيها صفحة رئيسية ومنشورات بالصور وتعليقات وإعجابات ومحفوظات واقتراحات متابعة وإشعارات وحسابات خاصة. تعمل بالكامل بالعربية والإنجليزية، مع وضع فاتح وداكن وحسب النظام.",
          },
        ],
      },
      {
        heading: { en: "Frontend", ar: "الواجهة" },
        body: [
          {
            en: "Built with Next.js 16 and React 19. Server state and caching run through TanStack Query, forms are validated with React Hook Form and Zod, and real-time updates arrive over Socket.IO.",
            ar: "مبنية بـ Next.js 16 و React 19. تُدار بيانات الخادم والتخزين المؤقت عبر TanStack Query، وتُتحقق النماذج بـ React Hook Form و Zod، وتصل التحديثات اللحظية عبر Socket.IO.",
          },
        ],
      },
      {
        heading: { en: "Backend", ar: "الخادم" },
        body: [
          {
            en: "A Fastify and TypeScript API on PostgreSQL through Prisma, with server-side sessions that can be revoked, email verification, password reset, rate limiting, image uploads, realtime notifications and Swagger documentation.",
            ar: "واجهة برمجية بـ Fastify و TypeScript فوق PostgreSQL عبر Prisma، مع جلسات محفوظة على الخادم يمكن إلغاؤها، وتأكيد البريد الإلكتروني، واستعادة كلمة المرور، وتحديد معدل الطلبات، ورفع الصور، وإشعارات لحظية، وتوثيق Swagger.",
          },
        ],
      },
    ],
    outcomes: [
      { en: "Feed database queries cut from 112 to 12 per page", ar: "تقليل استعلامات قاعدة البيانات في الصفحة الرئيسية من 112 إلى 12" },
      { en: "Database latency cut from 407 ms to 15 ms by moving the database to the same region as the API", ar: "تقليل زمن الوصول لقاعدة البيانات من 407 إلى 15 ملّي ثانية بنقلها إلى نفس منطقة الخادم" },
    ],
  },
  {
    slug: "the-deal",
    year: 2025,
    featured: true,
    title: { en: "The Deal", ar: "ذا ديل" },
    summary: {
      en: "Landing and project pages for a Qatari marketplace of business opportunities.",
      ar: "الصفحة الرئيسية وصفحات المشاريع لمنصة قطرية لفرص الأعمال.",
    },
    role: { en: "Freelance frontend, in a two-person team", ar: "واجهات أمامية، عمل مستقل ضمن فريق من شخصين" },
    client: { en: "The Deal, Qatar", ar: "ذا ديل، قطر" },
    stack: ["Next.js", "React", "Tailwind CSS", "Radix UI"],
    links: [{ label: live, href: "https://thedeal.qa/en" }],
    images: [
      {
        src: "/work/the-deal/landing-en.jpg",
        width: 1422,
        height: 804,
        alt: { en: "The Deal landing page with business and job search", ar: "الصفحة الرئيسية في ذا ديل مع البحث عن الأعمال والوظائف" },
      },
      {
        src: "/work/the-deal/projects-en.jpg",
        width: 1422,
        height: 804,
        alt: { en: "Projects listing with search and filters", ar: "قائمة المشاريع مع البحث والتصفية" },
      },
      {
        src: "/work/the-deal/project-en.jpg",
        width: 1422,
        height: 804,
        alt: { en: "A project detail page", ar: "صفحة تفاصيل مشروع" },
      },
      {
        src: "/work/the-deal/landing-ar.jpg",
        width: 1402,
        height: 804,
        alt: { en: "The landing page in Arabic, right to left", ar: "الصفحة الرئيسية بالعربية، من اليمين إلى اليسار" },
      },
    ],
    sections: [
      {
        heading: { en: "Overview", ar: "نظرة عامة" },
        body: [
          {
            en: "The Deal is a platform in Qatar for buying and selling businesses, presenting new projects and finding jobs. The site runs in Arabic and English.",
            ar: "ذا ديل منصة في قطر لبيع وشراء المشاريع القائمة، وعرض المشاريع الجديدة، والبحث عن الوظائف. يعمل الموقع بالعربية والإنجليزية.",
          },
        ],
      },
      {
        heading: { en: "My part", ar: "دوري" },
        body: [
          {
            en: "My first freelance project. I built the landing page and the project pages, working alongside a more experienced frontend developer who brought me onto the team — a real client project to learn on.",
            ar: "أول مشروع مستقل لي. بنيت الصفحة الرئيسية وصفحات المشاريع، وعملت إلى جانب مطوّر واجهات أكثر خبرة أشركني في الفريق، فكانت فرصة للتعلّم على مشروع حقيقي لعميل.",
          },
        ],
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
