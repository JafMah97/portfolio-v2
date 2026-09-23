import Link from "next/link";
import { profile, ui } from "@/content";
import { href, otherLocale, t, type Locale } from "@/lib/i18n";

/** `path` is the current page without the locale, so the language switch keeps you on it. */
export function Header({ locale, path = "" }: { locale: Locale; path?: string }) {
  const other = otherLocale(locale);
  const nav = [
    { label: ui.nav_work, hash: "#work" },
    { label: ui.nav_experience, hash: "#experience" },
    { label: ui.nav_contact, hash: "#contact" },
  ];

  return (
    <header className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-x-8 gap-y-3 px-5 pt-6 sm:px-8 sm:pt-8">
      <a
        href="#main"
        className="absolute start-4 top-4 -translate-y-20 bg-ink px-3 py-2 text-paper focus:translate-y-0"
      >
        {t(ui.skip, locale)}
      </a>

      <Link href={href(locale)} className="font-medium">
        {t(profile.name, locale)}
        <span className="text-muted max-sm:hidden"> — {t(profile.role, locale)}</span>
      </Link>

      <nav aria-label={t(ui.nav_label, locale)} className="flex items-baseline gap-5 text-sm sm:gap-7">
        {nav.map((item) => (
          <Link key={item.hash} href={`${href(locale)}${item.hash}`} className="text-muted hover:text-ink">
            {t(item.label, locale)}
          </Link>
        ))}
        {/* Plain <a>: a language switch changes <html lang/dir>, so load the full document. */}
        <a
          href={href(other, path)}
          hrefLang={other}
          lang={other}
          aria-label={t(ui.switch_lang_label, locale)}
          className="link"
        >
          {t(ui.switch_lang, locale)}
        </a>
        {/* Click is handled by the inline theme script in the layout. */}
        <button
          type="button"
          data-theme-toggle
          aria-label={t(ui.theme_toggle, locale)}
          title={t(ui.theme_toggle, locale)}
          className="-m-2 grid size-8 cursor-pointer place-items-center self-center rounded-full text-muted hover:text-ink"
        >
          <svg className="theme-moon" width="16" height="16" viewBox="0 0 16 16" aria-hidden>
            <path d="M13.5 9.8A5.8 5.8 0 0 1 6.2 2.5a5.8 5.8 0 1 0 7.3 7.3Z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          </svg>
          <svg className="theme-sun" width="16" height="16" viewBox="0 0 16 16" aria-hidden>
            <circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.3" />
            <path d="M8 1v1.6M8 13.4V15M1 8h1.6M13.4 8H15M3 3l1.1 1.1M11.9 11.9 13 13M3 13l1.1-1.1M11.9 4.1 13 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
