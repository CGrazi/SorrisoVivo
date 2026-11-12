import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Hours } from "@/components/sections/Hours";
import { Steps } from "@/components/sections/Steps";
import { Team } from "@/components/sections/Team";
import { Trust } from "@/components/sections/Trust";

export default function IndexPage() {
  return (
    <>
      <title>Sorriso Vivo · Clínica Odontológica em São Paulo</title>
      <meta name="description" content="Clínica odontológica em São Paulo. Agende sua consulta com especialistas em ortodontia, implantes, estética dental e mais." />
      <Hero
        id="hero"
        eyebrow="Clínica odontológica em São Paulo"
        title="Seu sorriso saudável começa com uma consulta simples"
        subtitle="Atendimento particular e por convênios odontológicos, com equipamentos modernos e retorno combinado ao final de cada sessão."
        buttonText="Agendar consulta"
        buttonUrl="/agendar"
        buttonSecondaryText="Ver serviços"
        buttonSecondaryUrl="/especialidades"
        image="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1600&q=80"
        alignment="left"
        variant="split-image"
        highlights={[{"value":"8","label":"especialidades"},{"value":"12 anos","label":"de experiência"},{"value":"30+","label":"convênios aceitos"}]}
      />
      <Trust
        id="trust"
        title="Registros e credenciamentos"
        items={[{"label":"Responsável técnico","detail":"CRO/SP 00000"},{"label":"Licença sanitária","detail":"Vigilância Sanitária – SP"},{"label":"Convênios","detail":"Principais operadoras odontológicas"},{"label":"Biossegurança","detail":"Protocolos ANVISA e LGPD"}]}
      />
      <Features
        id="features"
        eyebrow="Serviços"
        title="Cuidado completo para o seu sorriso"
        intro="Da prevenção à reabilitação, tudo no mesmo endereço. A lista completa está na página de serviços."
        layout="grid"
        items={[{"icon":"🦷","title":"Odontologia geral","description":"Limpeza, check-up semestral, restaurações e tratamento de cáries."},{"icon":"😁","title":"Ortodontia","description":"Aparelhos fixos, alinhadores transparentes e contenção."},{"icon":"🔩","title":"Implantes dentários","description":"Reposição de dentes perdidos com implantes de titânio e coroas."},{"icon":"✨","title":"Estética dental","description":"Clareamento, facetas de porcelana e lentes de contato dental."},{"icon":"🔬","title":"Endodontia","description":"Tratamento de canal com microscopia e sessão única quando possível."},{"icon":"👶","title":"Odontopediatria","description":"Acompanhamento do desenvolvimento dental de crianças e adolescentes."}]}
      />
      <Steps
        id="steps"
        tone="soft"
        title="Como agendar"
        intro="Do pedido à cadeira do dentista, sem complicação."
        layout="horizontal"
        items={[{"title":"Escolha o serviço","description":"Informe se é limpeza, avaliação, ortodontia ou outro procedimento."},{"title":"Envie o pedido","description":"Pelo formulário ou WhatsApp, com o melhor período para você."},{"title":"Receba a confirmação","description":"Retornamos em horário comercial com dia e hora marcados."},{"title":"Compareça à consulta","description":"Documento com foto, carteirinha do convênio e radiografias anteriores."}]}
      />
      <Team
        id="team"
        title="Corpo clínico"
        items={[{"name":"Dra. Helena Duarte","role":"Cirurgiã-dentista · Clínica geral, CRO/SP 00001","photo":"https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=500&q=80"},{"name":"Dr. Rodrigo Almeida","role":"Ortodontia, CRO/SP 00002","photo":"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80"},{"name":"Dr. Thiago Ramos","role":"Implantodontia, CRO/SP 00003","photo":"https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80"}]}
      />
      <Faq
        id="faq"
        title="Perguntas frequentes"
        items={[{"question":"Vocês atendem convênio odontológico?","answer":"Atendemos as principais operadoras. Informe o convênio e o plano ao agendar para confirmarmos a cobertura antes da consulta."},{"question":"Como funciona o retorno?","answer":"O retorno é combinado com o dentista ao final da sessão e segue as regras do seu convênio ou do atendimento particular."},{"question":"Fazem radiografia e tomografia aqui?","answer":"Realizamos radiografia panorâmica e periapical no local. Tomografias são encaminhadas a centros de imagem parceiros."},{"question":"O que levar na primeira consulta?","answer":"Documento com foto, carteirinha do convênio odontológico e radiografias ou exames anteriores, se tiver."},{"question":"Como remarcar ou cancelar?","answer":"Avise com 24 horas de antecedência pelo WhatsApp ou telefone para liberarmos o horário para outro paciente."}]}
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
      <Contact
        id="contact"
        title="Agende sua consulta"
        subtitle="Informe o serviço desejado, o convênio (se houver) e o melhor período."
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
    </>
  );
}
