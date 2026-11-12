import { Contact } from "@/components/sections/Contact";
import { Hours } from "@/components/sections/Hours";

export default function AgendarPage() {
  return (
    <>
      <title>Agendar consulta · Sorriso Vivo</title>
      <meta name="description" content="Agende sua consulta odontológica na Sorriso Vivo. Informe o serviço, o convênio e o melhor período." />
      <Contact
        id="contact"
        title="Agende sua consulta"
        subtitle="Informe o serviço desejado, o convênio odontológico (se houver) e o melhor período para você."
        email="contato@sorrisovivo.com.br"
        phone="(11) 4000-0000"
        buttonText="Solicitar agendamento"
        namePlaceholder="Seu nome"
        emailPlaceholder="Seu e-mail"
        messagePlaceholder="Serviço desejado, convênio e melhor período"
        showPhone
        showMap={false}
        mode="lead"
      />
      <Hours
        id="hours"
        title="Horários e endereço"
        address="Rua Augusta, 1234, Consolação, São Paulo – SP"
        phone="(11) 4000-0000"
        note="Estacionamento conveniado ao lado e acesso para cadeirantes."
        mapUrl="https://maps.google.com"
        items={[{"day":"Segunda a sexta","hours":"8h às 19h"},{"day":"Sábado","hours":"8h às 13h"}]}
      />
    </>
  );
}
