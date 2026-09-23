import Link from "next/link";
import { ui } from "@/content";
import { locales, t } from "@/lib/i18n";

// not-found.tsx receives no params, so it speaks both languages.
export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-36">
      <p className="label">404</p>
      {locales.map((l) => (
        <div key={l} lang={l} dir={l === "ar" ? "rtl" : "ltr"} className="mt-10">
          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight">{t(ui.not_found_title, l)}</h1>
          <p className="mt-2 text-muted">{t(ui.not_found_body, l)}</p>
          <Link href={`/${l}`} className="link mt-4 inline-block">
            {t(ui.go_home, l)}
          </Link>
        </div>
      ))}
    </main>
  );
}
