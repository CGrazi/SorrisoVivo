import { Section, SectionHeading, type Tone } from "@/components/Section";

export function Hours({ id, tone, title, address, phone, note, mapUrl, mapText, items = [] }: { id?: string; tone?: Tone; title?: string; address?: string; phone?: string; note?: string; mapUrl?: string; mapText?: string; items?: { day?: string; hours?: string }[] }) {
  return (
    <Section id={id} tone={tone}>
      <SectionHeading title={title} />
      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
        <dl className="divide-y divide-current/10">
          {items.map((item, i) => (
            <div key={i} className="flex justify-between py-3">
              <dt>{item.day}</dt>
              <dd className="font-medium">{item.hours}</dd>
            </div>
          ))}
        </dl>
        <div className="space-y-2">
          {address && <p>{address}</p>}
          {phone && <p><a href={"tel:" + phone.replace(/[^+\d]/g, "")}>{phone}</a></p>}
          {note && <p className="text-sm opacity-70">{note}</p>}
          {mapUrl && (
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="inline-block font-medium text-primary">
              {mapText || mapUrl}
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}
