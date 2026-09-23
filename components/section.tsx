/** Two-column block: label on the start side, content on the other. Stacks on mobile. */
export function Section({
  id,
  label,
  children,
}: {
  id?: string;
  label: string;
  children: React.ReactNode;
}) {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="mt-24 grid scroll-mt-8 gap-x-10 gap-y-6 sm:mt-32 md:grid-cols-[11rem_1fr]"
    >
      <h2 id={headingId} className="label pt-1">
        {label}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

/** Arrow that points "forward" in both reading directions. */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`inline-block rtl:-scale-x-100 ${className}`}>
      →
    </span>
  );
}
