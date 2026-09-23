import Image from "next/image";
import Link from "next/link";
import { experience, profile, projects, site, skills, ui } from "@/content";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Arrow, Section } from "@/components/section";
import { formatMonth, href, isLocale, t, type Locale } from "@/lib/i18n";
import { JsonLd, pageMetadata, personJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata({ locale, path: "", description: t(profile.bio, locale), type: "profile" });
}

export default async function Home({ params }: Props) {
  const { locale: raw } = await params;
  const locale = raw as Locale;

  return (
    <>
      <Header locale={locale} />
      <JsonLd data={personJsonLd(locale)} />

      <main id="main" className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Intro */}
        <div className="pt-20 sm:pt-32">
          <h1 className="max-w-[23ch] text-[clamp(1.85rem,4.6vw,3.4rem)] leading-[1.14] font-normal text-balance ltr:tracking-[-0.022em] rtl:leading-[1.45]">
            {t(profile.headline, locale)}
          </h1>
          <div className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-[11rem_1fr]">
            <div className="flex items-end gap-5 md:flex-col md:items-start">
              <Image
                src={profile.photo}
                alt={t(profile.name, locale)}
                width={176}
                height={176}
                priority
                sizes="(min-width: 48rem) 11rem, 6rem"
                className="size-24 rounded-sm object-cover grayscale-[15%] md:size-44"
              />
              <p className="label">{t(profile.location, locale)}</p>
            </div>
            <div className="max-w-[60ch] md:pt-0.5">
              <p className="text-pretty">{t(profile.bio, locale)}</p>
              {profile.availability && (
                <p className="mt-6 flex items-center gap-2.5 text-sm">
                  <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                  {t(profile.availability, locale)}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Work */}
        <Section id="work" label={t(ui.selected_work, locale)}>
          <ol className="border-b border-line">
            {projects.map((p) => (
              <li key={p.slug} className="border-t border-line">
                <Link
                  href={href(locale, `/work/${p.slug}`)}
                  className="group grid grid-cols-[3.25rem_1fr_1rem] items-baseline gap-x-4 py-5 sm:grid-cols-[4rem_1fr_1rem] lg:grid-cols-[4rem_1fr_18rem_1rem]"
                >
                  <span className="font-mono text-sm text-muted">{p.year}</span>
                  <span>
                    <span className="font-medium decoration-1 underline-offset-4 group-hover:underline">
                      {t(p.title, locale)}
                    </span>
                    <span className="mt-1 block text-muted">{t(p.summary, locale)}</span>
                  </span>
                  <span className="font-mono text-xs leading-6 text-muted max-lg:hidden" dir="ltr">
                    {p.stack.slice(0, 3).join(" · ")}
                  </span>
                  <Arrow className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent rtl:group-hover:-translate-x-1" />
                </Link>
              </li>
            ))}
          </ol>
        </Section>

        {/* Experience */}
        <Section id="experience" label={t(ui.experience, locale)}>
          <ol className="space-y-10">
            {experience.map((job) => (
              <li key={job.company + job.start} className="grid gap-x-8 gap-y-1 sm:grid-cols-[11rem_1fr]">
                <p className="font-mono text-sm text-muted rtl:font-sans">
                  <time dateTime={job.start}>{formatMonth(job.start, locale)}</time>
                  {" – "}
                  {job.end ? (
                    <time dateTime={job.end}>{formatMonth(job.end, locale)}</time>
                  ) : (
                    t(ui.present, locale)
                  )}
                  {job.location && <span className="block font-sans">{t(job.location, locale)}</span>}
                </p>
                <div className="max-w-[60ch]">
                  <h3 className="font-medium">
                    {t(job.role, locale)}
                    {locale === "ar" ? "، " : ", "}
                    {job.url ? (
                      <a href={job.url} className="link" rel="noopener" target="_blank">
                        <bdi>{job.company}</bdi>
                      </a>
                    ) : (
                      <bdi>{job.company}</bdi>
                    )}
                  </h3>
                  <p className="mt-1 text-muted">
                    {t(job.description, locale)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Skills */}
        <Section label={t(ui.skills, locale)}>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-4">
            {skills.map((group) => (
              <div key={group.title.en}>
                <dt className="text-sm text-muted">{t(group.title, locale)}</dt>
                <dd className="mt-2">
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Contact */}
        <Section id="contact" label={t(ui.contact, locale)}>
          <p className="max-w-[48ch] text-muted">{t(ui.contact_line, locale)}</p>
          <a
            href={`mailto:${site.email}`}
            dir="ltr"
            className="link mt-4 inline-block text-[clamp(1.5rem,3.6vw,2.5rem)] ltr:tracking-[-0.02em]"
          >
            {site.email}
          </a>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {site.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} rel="me noopener" target="_blank" className="link">
                  {s.label}
                </a>
              </li>
            ))}
            {site.resume && (
              <li>
                <a href={site.resume} className="link">
                  {t(ui.resume, locale)}
                </a>
              </li>
            )}
          </ul>
        </Section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
