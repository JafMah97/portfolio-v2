import { profile, site, ui } from "@/content";
import { t, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const updated = new Intl.DateTimeFormat(locale === "ar" ? "ar-u-nu-latn" : "en-GB", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(site.updated));

  return (
    <footer className="mx-auto mt-28 max-w-6xl px-5 sm:px-8">
      <div className="flex flex-wrap justify-between gap-4 border-t border-line py-8 text-sm text-muted">
        <p>
          © {new Date(site.updated).getUTCFullYear()} {t(profile.name, locale)}
        </p>
        <p>
          {t(ui.updated, locale)} <time dateTime={site.updated}>{updated}</time>
        </p>
      </div>
    </footer>
  );
}
