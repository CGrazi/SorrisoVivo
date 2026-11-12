import { Section, SectionHeading, type Tone } from "@/components/Section";

export function Team({ id, tone, title, items = [] }: { id?: string; tone?: Tone; title?: string; items?: { name?: string; role?: string; photo?: string }[] }) {
  return (
    <Section id={id} tone={tone}>
      <SectionHeading title={title} />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((person, i) => (
          <div key={i} className="text-center">
            {person.photo ? (
              <img src={person.photo} alt={person.name ?? ""} className="mx-auto aspect-square w-40 rounded-full object-cover" />
            ) : (
              <div className="mx-auto flex aspect-square w-40 items-center justify-center rounded-full bg-primary/10 font-heading text-3xl text-primary">{(person.name ?? "?").slice(0, 1)}</div>
            )}
            <p className="mt-4 font-semibold">{person.name}</p>
            {person.role && <p className="text-sm opacity-70">{person.role}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}
