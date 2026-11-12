import { Section, SectionHeading, type Tone } from "@/components/Section";
import { cn } from "@/lib/utils";

export function Stats({ id, tone, title, variant = "band", items = [] }: { id?: string; tone?: Tone; title?: string; variant?: string; items?: { value?: string; label?: string }[] }) {
  return (
    <Section id={id} tone={tone}>
      <SectionHeading title={title} />
      <dl className={cn("grid grid-cols-2 gap-6 lg:grid-cols-4", variant === "cards" && "gap-4")}>
        {items.map((item, i) => (
          <div key={i} className={cn("text-center", variant === "cards" && "rounded-site border border-current/10 p-6")}>
            <dt className="font-heading text-4xl font-semibold text-primary">{item.value}</dt>
            <dd className="mt-2 opacity-75">{item.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
