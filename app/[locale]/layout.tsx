import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { profile, site } from "@/content";
import { dir, isLocale, locales, t } from "@/lib/i18n";
import "../globals.css";

// Fonts live in app/fonts (IBM Plex, SIL Open Font License), so builds need no network.
const plex = localFont({
  src: "../fonts/plex-sans-latin-var.woff2",
  weight: "100 700",
  variable: "--font-plex",
  display: "swap",
});
const plexArabic = localFont({
  src: [
    { path: "../fonts/plex-sans-arabic-400.woff2", weight: "400" },
    { path: "../fonts/plex-sans-arabic-500.woff2", weight: "500" },
  ],
  variable: "--font-plex-ar",
  display: "swap",
});
const plexMono = localFont({
  src: "../fonts/plex-mono-400.woff2",
  weight: "400",
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
});

// Runs before first paint: applies the saved theme (no flash) and handles
// clicks on any [data-theme-toggle] button, so the toggle needs no React JS.
// React can rebuild <html> during client navigation and drop data-theme,
// so a MutationObserver puts the saved value back.
const themeScript = `(function(){if(window.__theme)return;window.__theme=1;var d=document.documentElement,k="theme";function saved(){try{var s=localStorage.getItem(k);return s==="light"||s==="dark"?s:null}catch(e){return null}}function apply(){var s=saved();if(s&&d.dataset.theme!==s)d.dataset.theme=s}apply();new MutationObserver(apply).observe(d,{attributes:true,attributeFilter:["data-theme","class","lang"]});document.addEventListener("click",function(e){var b=e.target.closest&&e.target.closest("[data-theme-toggle]");if(!b)return;var dark=d.dataset.theme?d.dataset.theme==="dark":matchMedia("(prefers-color-scheme: dark)").matches;var n=dark?"light":"dark";try{localStorage.setItem(k,n)}catch(e){}d.dataset.theme=n})})()`;

export const dynamicParams = false;
export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f4f0" },
    { media: "(prefers-color-scheme: dark)", color: "#121211" },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const name = t(profile.name, locale);
  return {
    metadataBase: new URL(site.url),
    title: { default: `${name} · ${t(profile.role, locale)}`, template: `%s — ${name}` },
    description: t(profile.bio, locale),
    applicationName: name,
    authors: [{ name, url: site.url }],
    creator: name,
    formatDetection: { telephone: false },
    robots: { index: true, follow: true, "max-image-preview": "large" },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      dir={dir(locale)}
      className={`${plex.variable} ${plexArabic.variable} ${plexMono.variable}`}
      // The inline script sets data-theme before React hydrates.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh text-[15px] leading-relaxed sm:text-base">{children}</body>
    </html>
  );
}
