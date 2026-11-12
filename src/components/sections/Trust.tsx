import { Section, SectionHeading, type Tone } from "@/components/Section";

export function Trust({ id, tone, title, items = [] }: { id?: string; tone?: Tone; title?: string; items?: { label?: string; detail?: string }[] }) {
  return (
    <Section id={id} tone={tone} className="py-14 sm:py-16">
      <SectionHeading title={title} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <div key={i} className="flex gap-3">
            <span className="mt-1 text-primary">✓</span>
            <div>
              <p className="font-semibold">{item.label}</p>
              {item.detail && <p className="text-sm opacity-70">{item.detail}</p>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
