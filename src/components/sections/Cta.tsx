import { ButtonLink } from "@/components/ui/button";

export function Cta({ id, title, subtitle, buttonText, buttonUrl, buttonSecondaryText, buttonSecondaryUrl }: { id?: string; tone?: string; title?: string; subtitle?: string; buttonText?: string; buttonUrl?: string; buttonSecondaryText?: string; buttonSecondaryUrl?: string }) {
  return (
    <section id={id} className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl rounded-site bg-primary px-8 py-16 text-center text-white sm:px-16">
        {title && <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>}
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">{subtitle}</p>}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {buttonText && <ButtonLink href={buttonUrl} variant="light">{buttonText}</ButtonLink>}
          {buttonSecondaryText && <ButtonLink href={buttonSecondaryUrl} variant="outline">{buttonSecondaryText}</ButtonLink>}
        </div>
      </div>
    </section>
  );
}
