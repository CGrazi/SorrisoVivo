import { Stats } from "@/components/sections/Stats";
import { Team } from "@/components/sections/Team";

export default function CorpoClinicoPage() {
  return (
    <>
      <title>Corpo clínico · Sorriso Vivo</title>
      <meta name="description" content="Conheça os dentistas da Sorriso Vivo: especialistas em clínica geral, ortodontia, implantodontia e mais." />
      <Team
        id="team"
        title="Corpo clínico"
        items={[{"name":"Dra. Helena Duarte","role":"Cirurgiã-dentista · Clínica geral, CRO/SP 00001","photo":"https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=500&q=80"},{"name":"Dr. Rodrigo Almeida","role":"Ortodontia, CRO/SP 00002","photo":"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80"},{"name":"Dr. Thiago Ramos","role":"Implantodontia, CRO/SP 00003","photo":"https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80"}]}
      />
      <Stats
        id="stats"
        variant="cards"
        items={[{"value":"8","label":"especialidades"},{"value":"12 anos","label":"de atendimento"},{"value":"30+","label":"convênios aceitos"}]}
      />
    </>
  );
}
