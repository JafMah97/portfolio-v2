import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

const COOKIE = "NEXT_LOCALE";

/** Best match from the Accept-Language header, honoring q-values. */
function fromHeader(header: string | null): Locale | undefined {
  if (!header) return;
  return header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q)
    .map((x) => x.lang)
    .find(isLocale);
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const first = pathname.split("/")[1];

  // Already localized: remember the choice so "/" sends people back to it.
  if (isLocale(first)) {
    const res = NextResponse.next();
    if (request.cookies.get(COOKIE)?.value !== first) {
      res.cookies.set(COOKIE, first, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
    }
    return res;
  }

  const saved = request.cookies.get(COOKIE)?.value;
  const locale =
    (saved && isLocale(saved) ? saved : undefined) ??
    fromHeader(request.headers.get("accept-language")) ??
    defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  url.search = search;
  const res = NextResponse.redirect(url, 307);
  res.headers.set("Vary", "Accept-Language, Cookie");
  return res;
}

export const config = {
  // Skip Next internals, metadata routes and any file with an extension.
  matcher: [
    "/((?!_next|api|robots.txt|sitemap.xml|manifest.webmanifest|icon|apple-icon|opengraph-image|.*\\..*).*)",
  ],
};

