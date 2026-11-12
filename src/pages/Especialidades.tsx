import { Cta } from "@/components/sections/Cta";
import { Features } from "@/components/sections/Features";

export default function EspecialidadesPage() {
  return (
    <>
      <title>Serviços · Sorriso Vivo</title>
      <meta name="description" content="Conheça os serviços odontológicos da Sorriso Vivo: clínica geral, ortodontia, implantes, estética dental, endodontia e odontopediatria." />
      <Features
        id="features"
        title="Serviços odontológicos"
        intro="Tratamentos completos para todas as idades, particulares e por convênio."
        layout="rows"
        items={[{"icon":"🦷","title":"Odontologia geral","description":"Limpeza profissional (profilaxia), check-up semestral, restaurações em resina, tratamento de cáries e extrações simples.","image":"https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80"},{"icon":"😁","title":"Ortodontia","description":"Aparelhos fixos metálicos e estéticos, alinhadores transparentes e contenção. Planejamento digital do sorriso.","image":"https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80"},{"icon":"🔩","title":"Implantes dentários","description":"Reposição de um ou mais dentes com implantes de titânio, coroas de porcelana e próteses sobre implantes.","image":"https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80"},{"icon":"✨","title":"Estética dental","description":"Clareamento a laser e caseiro supervisionado, facetas de porcelana, lentes de contato dental e gengivoplastia."},{"icon":"🔬","title":"Endodontia","description":"Tratamento de canal com microscopia operatória, localizador apical e sessão única quando a anatomia permite."},{"icon":"👶","title":"Odontopediatria","description":"Acompanhamento do desenvolvimento dental infantil, aplicação de flúor, selantes e educação em higiene bucal."},{"icon":"🩺","title":"Periodontia","description":"Tratamento de gengivite e periodontite, raspagem, alisamento radicular e manutenção periodontal."},{"icon":"🔪","title":"Cirurgia oral","description":"Extração de sisos, frenectomia, biópsias e pequenas cirurgias ambulatoriais com sedação consciente."}]}
      />
      <Cta
        id="cta"
        title="Não encontrou o que precisa?"
        subtitle="Fale com a nossa recepção. Orientamos e encaminhamos para a rede parceira quando necessário."
        buttonText="Falar com a recepção"
        buttonUrl="/agendar"
      />
    </>
  );
}
