import type { Text } from "./types";

/** Interface labels. Every key must have both languages. */
export const ui = {
  skip: { en: "Skip to content", ar: "تخطَّ إلى المحتوى" },
  nav_label: { en: "Main", ar: "القائمة الرئيسية" },
  nav_work: { en: "Work", ar: "الأعمال" },
  nav_experience: { en: "Experience", ar: "الخبرة" },
  nav_contact: { en: "Contact", ar: "تواصل" },
  switch_lang: { en: "العربية", ar: "English" },
  theme_toggle: { en: "Switch between light and dark theme", ar: "التبديل بين الوضع الفاتح والداكن" },
  switch_lang_label:{ en: "اقرأ الموقع بالعربية", ar: "Read this site in English" },

  about: { en: "About", ar: "نبذة" },
  selected_work: { en: "Selected work", ar: "أعمال مختارة" },
  experience: { en: "Experience", ar: "الخبرة" },
  skills: { en: "Skills", ar: "المهارات" },
  contact: { en: "Contact", ar: "تواصل" },
  contact_line: {
    en: "The fastest way to reach me is email. I reply within 24 hours.",
    ar: "أسرع طريقة للتواصل معي هي البريد الإلكتروني، وأرد خلال 24 ساعة.",
  },
  resume: { en: "Résumé (PDF)", ar: "السيرة الذاتية (PDF)" },
  present: { en: "Present", ar: "الآن" },

  back: { en: "All work", ar: "كل الأعمال" },
  year: { en: "Year", ar: "السنة" },
  role: { en: "Role", ar: "الدور" },
  client: { en: "Client", ar: "العميل" },
  stack: { en: "Stack", ar: "التقنيات" },
  links: { en: "Links", ar: "روابط" },
  outcomes: { en: "Outcomes", ar: "النتائج" },
  next_project: { en: "Next project", ar: "المشروع التالي" },

  updated: { en: "Updated", ar: "آخر تحديث" },
  not_found_title: { en: "Page not found", ar: "الصفحة غير موجودة" },
  not_found_body: {
    en: "The link may be old, or the page has moved.",
    ar: "ربما الرابط قديم، أو نُقلت الصفحة.",
  },
  go_home: { en: "Back to the home page", ar: "العودة إلى الصفحة الرئيسية" },
} satisfies Record<string, Text>;
