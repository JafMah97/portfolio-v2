import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, profile, projects, ui, type Text } from "@/content";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Arrow } from "@/components/section";
import { href, isLocale, locales, t, type Locale } from "@/lib/i18n";
import { absolute, JsonLd, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () =>
  locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project || !isLocale(locale)) return {};
  const cover = project.images?.[0];
  return pageMetadata({
    locale,
    path: `/work/${slug}`,
    title: t(project.title, locale),
    description: t(project.summary, locale),
    type: "article",
    image: cover && { url: cover.src, width: cover.width, height: cover.height, alt: t(cover.alt, locale) },
  });
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-x-10 gap-y-3 md:grid-cols-[11rem_1fr]">
      <h2 className="label pt-1">{label}</h2>
      <div className="max-w-[62ch] text-pretty">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const project = getProject(slug);
  if (!project) notFound();

  const path = `/work/${slug}`;
  const images = project.images ?? [];
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  const meta: { label: Text; value: string; ltr?: boolean }[] = [
    { label: ui.year, value: String(project.year) },
    { label: ui.role, value: t(project.role, locale) },
    ...(project.client ? [{ label: ui.client, value: t(project.client, locale) }] : []),
    { label: ui.stack, value: project.stack.join(", "), ltr: true },
  ];

  return (
    <>
      <Header locale={locale} path={path} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: t(project.title, locale),
          description: t(project.summary, locale),
          dateCreated: String(project.year),
          inLanguage: locale,
          url: absolute(href(locale, path)),
          author: { "@id": absolute("/#person"), name: t(profile.name, locale) },
          keywords: project.stack.join(", "),
          ...(project.links?.[0] && { sameAs: project.links[0].href }),
          ...(images[0] && { image: absolute(images[0].src) }),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: t(profile.name, locale), item: absolute(href(locale)) },
            { "@type": "ListItem", position: 2, name: t(project.title, locale), item: absolute(href(locale, path)) },
          ],
        }}
      />

      <main id="main" className="mx-auto max-w-6xl px-5 sm:px-8">
        <article>
          <div className="pt-16 sm:pt-24">
            <Link href={`${href(locale)}#work`} className="text-sm text-muted hover:text-ink">
              <Arrow className="me-2 rotate-180" />
              {t(ui.back, locale)}
            </Link>
            <h1 className="mt-8 text-[clamp(2rem,5vw,3.6rem)] leading-[1.1] font-normal text-balance ltr:tracking-[-0.025em] rtl:leading-[1.4]">
              {t(project.title, locale)}
            </h1>
            <p className="mt-5 max-w-[50ch] text-lg text-pretty text-muted">{t(project.summary, locale)}</p>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-line py-6 md:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label.en}>
                <dt className="label">{t(m.label, locale)}</dt>
                <dd className="mt-1.5 text-sm" dir={m.ltr ? "ltr" : undefined}>
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>

          {images.length > 0 && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {images.map((img, i) => (
                <figure
                  key={img.src}
                  // First image full width; a lone image left in the last row also spans both columns.
                  className={i === 0 || (i === images.length - 1 && i % 2 === 1) ? "sm:col-span-2" : undefined}
                >
                  <Image
                    src={img.src}
                    alt={t(img.alt, locale)}
                    width={img.width}
                    height={img.height}
                    priority={i === 0}
                    sizes={i === 0 ? "(min-width: 72rem) 68rem, 100vw" : "(min-width: 72rem) 34rem, (min-width: 40rem) 50vw, 100vw"}
                    className="w-full rounded-md border border-line"
                  />
                </figure>
              ))}
            </div>
          )}

          <div className="mt-16 space-y-14">
            {project.sections.map((s) => (
              <Block key={s.heading.en} label={t(s.heading, locale)}>
                <div className="space-y-4">
                  {s.body.map((para, i) => (
                    <p key={i}>{t(para, locale)}</p>
                  ))}
                </div>
              </Block>
            ))}

            {project.outcomes && (
              <Block label={t(ui.outcomes, locale)}>
                <ul className="space-y-2">
                  {project.outcomes.map((o) => (
                    <li key={o.en} className="flex gap-3">
                      <span aria-hidden className="text-accent">
                        —
                      </span>
                      {t(o, locale)}
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            {project.links && (
              <Block label={t(ui.links, locale)}>
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {project.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="link" target="_blank" rel="noopener">
                        {t(l.label, locale)}
                      </a>
                    </li>
                  ))}
                </ul>
              </Block>
            )}
          </div>
        </article>

        {next !== project && (
          <nav aria-label={t(ui.next_project, locale)} className="mt-24 border-t border-line pt-6">
            <Link href={href(locale, `/work/${next.slug}`)} className="group block">
              <span className="label">{t(ui.next_project, locale)}</span>
              <span className="mt-2 flex items-baseline justify-between gap-6 text-[clamp(1.4rem,3vw,2rem)] ltr:tracking-[-0.02em]">
                <span className="decoration-1 underline-offset-[0.2em] group-hover:underline">
                  {t(next.title, locale)}
                </span>
                <Arrow className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent rtl:group-hover:-translate-x-1" />
              </span>
            </Link>
          </nav>
        )}
      </main>

      <Footer locale={locale} />
    </>
  );
}
