import type { Metadata } from "next";
import { profile, site } from "@/content";
import { href, locales, t, type Locale } from "./i18n";

const ogLocale: Record<Locale, string> = { en: "en_US", ar: "ar_SY" };

export const absolute = (path: string) => new URL(path, site.url).toString();

/** hreflang map for a path that exists in every language. */
export function languageAlternates(path: string) {
  return {
    ...Object.fromEntries(locales.map((l) => [l, absolute(href(l, path))])),
    "x-default": absolute("/"),
  };
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  type = "website",
  image,
}: {
  locale: Locale;
  path: string;
  title?: string;
  description: string;
  type?: "website" | "article" | "profile";
  /** Overrides the generated share card, e.g. a project screenshot. */
  image?: { url: string; width: number; height: number; alt: string };
}): Metadata {
  const url = absolute(href(locale, path));
  const name = t(profile.name, locale);
  const fullTitle = title ? `${title} — ${name}` : `${name} · ${t(profile.role, locale)}`;

  return {
    title: title ? title : { absolute: fullTitle },
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: name,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      ...(image && { images: [image] }),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, ...(image && { images: [image.url] }) },
  };
}

/** schema.org Person — helps search engines show a knowledge panel. */
export function personJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absolute("/#person"),
    name: t(profile.name, locale),
    alternateName: locales.filter((l) => l !== locale).map((l) => t(profile.name, l)),
    jobTitle: t(profile.role, locale),
    description: t(profile.bio, locale),
    url: absolute(href(locale)),
    image: absolute(profile.photo),
    email: `mailto:${site.email}`,
    address: { "@type": "PostalAddress", addressLocality: t(profile.location, locale) },
    sameAs: site.socials.map((s) => s.href),
    knowsLanguage: ["en", "ar"],
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
    />
  );
}
