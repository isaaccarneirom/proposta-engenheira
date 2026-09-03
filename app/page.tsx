import type { Metadata } from "next";
import Image from "next/image";
import { MagneticLink } from "./components/MagneticLink";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511958247301";

const whatsappMessages = {
  landing:
    "Olá! Analisei a proposta e gostaria de seguir com a Landing Page Profissional.",
  institutional:
    "Olá! Analisei a proposta e gostaria de seguir com o Site Institucional + Link Bio.",
  general:
    "Olá! Analisei a proposta e gostaria de conversar sobre o projeto.",
} as const;

function whatsappUrl(message: string) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

const landingItems = [
  "Página personalizada",
  "Apresentação profissional",
  "Serviços",
  "Diferenciais",
  "Projetos / Portfólio",
  "Depoimentos",
  "Área de contato",
  "Integração com WhatsApp",
  "Formulário de contato/orçamento",
  "Layout responsivo",
  "SEO básico",
  "Configuração de domínio",
  "Certificado SSL",
  "Publicação",
];

const institutionalItems = [
  "Home",
  "Sobre",
  "Serviços",
  "Projetos / Portfólio",
  "Contato",
  "Até 5 páginas principais",
  "Formulário",
  "Integração com WhatsApp",
  "Integração com redes sociais",
  "Layout responsivo",
  "SEO básico",
  "Configuração de domínio",
  "Certificado SSL",
  "Publicação",
];

const linkBioItems = [
  "Página exclusiva para Instagram",
  "Identidade visual integrada ao site",
  "WhatsApp",
  "Serviços",
  "Solicitação de orçamento",
  "Projetos",
  "Instagram",
  "E-mail",
  "Acesso ao site",
  "Layout mobile-first",
];

const comparisonItems = [
  ["Página principal", true, true],
  ["Apresentação profissional", true, true],
  ["Serviços", true, true],
  ["Portfólio", true, true],
  ["WhatsApp", true, true],
  ["Formulário", true, true],
  ["Responsividade", true, true],
  ["SEO básico", true, true],
  ["Páginas individuais", false, true],
  ["Até 5 páginas", false, true],
  ["Link Bio personalizado", false, true],
  ["Estrutura institucional completa", false, true],
] as const;

const processSteps = [
  {
    number: "01",
    title: "Escolha da solução",
    description:
      "Definimos qual estrutura faz mais sentido para o seu momento.",
  },
  {
    number: "02",
    title: "Envio dos materiais",
    description:
      "Recebemos identidade visual, serviços, informações profissionais, projetos e contatos.",
  },
  {
    number: "03",
    title: "Design e desenvolvimento",
    description:
      "Transformamos as informações em uma experiência digital personalizada.",
  },
  {
    number: "04",
    title: "Apresentação e ajustes",
    description:
      "O projeto é apresentado para aprovação e refinamentos finais.",
  },
  {
    number: "05",
    title: "Publicação",
    description:
      "Realizamos as configurações necessárias e colocamos o projeto no ar.",
  },
];

const materials = [
  { title: "Identidade", items: ["Logo", "Identidade visual, caso exista"] },
  {
    title: "Conteúdo",
    items: ["Apresentação profissional", "Formação", "Especializações", "Serviços"],
  },
  {
    title: "Portfólio",
    items: ["Fotos profissionais", "Projetos realizados", "Depoimentos, caso possua"],
  },
  {
    title: "Contato",
    items: ["WhatsApp", "Instagram", "E-mail", "Região de atendimento"],
  },
];

export const metadata: Metadata = {
  title: "Proposta comercial | Presença digital profissional",
  description:
    "Proposta comercial para desenvolvimento de presença digital profissional.",
};

function ArrowIcon() {
  return <i className="bi bi-arrow-up-right" aria-hidden="true" />;
}

function WhatsAppLink({
  message,
  children,
  className = "button button-primary",
  hoverText,
}: {
  message: string;
  children: React.ReactNode;
  className?: string;
  hoverText?: string;
}) {
  return (
    <a
      className={className}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
    >
      {hoverText ? (
        <span className="aura-button-content">
          <span className="aura-icon" aria-hidden="true">
            <i className="bi bi-whatsapp" />
          </span>
          <span className="aura-text-container">
            <span className="aura-text-default">{children}</span>
            <span className="aura-text-hover" aria-hidden="true">
              {hoverText}
            </span>
          </span>
          <i className="bi bi-arrow-up-right aura-arrow" aria-hidden="true" />
        </span>
      ) : (
        <>
          <span>{children}</span>
          <i className="bi bi-whatsapp" aria-hidden="true" />
        </>
      )}
    </a>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <i className="bi bi-check-lg check-mark" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="glass-nav-shell">
          <div className="glass-nav-content">
            <a className="wordmark" href="#proposta" aria-label="Ir para o início">
              <i className="bi bi-diamond wordmark-mark" aria-hidden="true" />
              <span>Proposta digital</span>
            </a>

            <nav className="desktop-nav" aria-label="Navegação principal">
              <a href="#proposta">Proposta</a>
              <a href="#solucoes">Soluções</a>
              <a href="#comparativo">Comparativo</a>
              <a href="#processo">Processo</a>
              <a href="#investimento">Investimento</a>
            </nav>

            <WhatsAppLink
              message={whatsappMessages.general}
              className="header-cta"
            >
              Falar sobre o projeto
            </WhatsAppLink>
          </div>
        </div>
      </header>

      <section className="hero" id="proposta">
        <div className="hero-copy">
          <p className="eyebrow">Proposta comercial · 2026</p>
          <h1>
            Sua presença profissional também precisa transmitir a qualidade do
            seu trabalho.
          </h1>
          <p className="hero-description">
            Desenvolvemos duas soluções para posicionar sua marca no digital,
            apresentar seus serviços com clareza e transformar visitas em novas
            oportunidades.
          </p>

          <div className="hero-actions">
            <MagneticLink href="#solucoes">Conhecer as opções</MagneticLink>
            <WhatsAppLink
              message={whatsappMessages.general}
              className="button button-text"
            >
              Falar sobre o projeto
            </WhatsAppLink>
          </div>
        </div>

        <div className="hero-visual">
          <Image
            className="hero-image"
            src="/hero-architecture.png"
            alt="Composição arquitetônica com projeto técnico, materiais e elementos naturais"
            fill
            sizes="(max-width: 820px) 100vw, 66vw"
            priority
          />
        </div>
      </section>

      <section className="section context-section" aria-labelledby="context-title">
        <div className="section-index" aria-hidden="true">
          01
        </div>
        <div className="section-intro context-intro">
          <p className="eyebrow">O ponto de partida</p>
          <h2 id="context-title">
            Uma presença digital construída para gerar confiança.
          </h2>
        </div>
        <div className="context-body">
          <p>
            O projeto será desenvolvido de forma personalizada, alinhando
            estratégia, design e tecnologia para apresentar seus serviços com
            profissionalismo e facilitar o contato de potenciais clientes.
          </p>
          <div className="context-pillars" aria-label="Objetivos do projeto">
            {["Autoridade", "Credibilidade", "Apresentação", "Conversão"].map(
              (pillar, index) => (
                <div className="pillar" key={pillar}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{pillar}</strong>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section solutions-section" id="solucoes" aria-labelledby="solutions-title">
        <div className="section-index" aria-hidden="true">
          02
        </div>
        <div className="section-heading">
          <div>
            <p className="eyebrow">Soluções</p>
            <h2 id="solutions-title">Duas possibilidades. Um mesmo objetivo.</h2>
          </div>
          <p>
            Escolha a estrutura que melhor acompanha o momento atual da sua
            presença digital.
          </p>
        </div>

        <div className="solution-grid">
          <article className="solution-card">
            <div className="solution-topline">
              <span>Opção 01</span>
              <span>Presença objetiva</span>
            </div>
            <div className="solution-title-block">
              <h3>Landing Page Profissional</h3>
              <p className="price">
                <span>R$</span> 1.000<span>,00</span>
              </p>
            </div>
            <p className="solution-description">
              Ideal para quem precisa de uma presença digital objetiva,
              apresentando os principais serviços, diferenciais e projetos em
              uma única experiência.
            </p>

            <div className="included-block">
              <p className="list-label">O projeto inclui</p>
              <ul className="feature-list">
                {landingItems.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>

            <div className="solution-footer">
              <div>
                <span>Prazo estimado</span>
                <strong>7 a 10 dias úteis</strong>
              </div>
              <WhatsAppLink
                message={whatsappMessages.landing}
                className="aura-button"
                hoverText="Iniciar pelo WhatsApp"
              >
                Escolher Landing Page
              </WhatsAppLink>
            </div>
          </article>

          <article className="solution-card solution-card-featured">
            <div className="solution-topline">
              <span>Opção 02</span>
              <span className="featured-label">Mais completo</span>
            </div>
            <div className="solution-title-block">
              <h3>Site Institucional + Link Bio</h3>
              <p className="price">
                <span>R$</span> 2.000<span>,00</span>
              </p>
            </div>
            <p className="solution-description">
              Uma presença digital mais completa, com páginas individuais para
              aprofundar seus serviços, apresentar sua trajetória, destacar
              projetos e centralizar seus principais canais.
            </p>

            <div className="included-block">
              <p className="list-label">Site institucional</p>
              <ul className="feature-list">
                {institutionalItems.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>

            <div className="included-block link-bio-block">
              <p className="list-label">Link Bio personalizado</p>
              <ul className="feature-list">
                {linkBioItems.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>

            <div className="solution-footer">
              <div>
                <span>Prazo estimado</span>
                <strong>10 a 15 dias úteis</strong>
              </div>
              <WhatsAppLink
                message={whatsappMessages.institutional}
                className="aura-button"
                hoverText="Iniciar pelo WhatsApp"
              >
                Escolher projeto completo
              </WhatsAppLink>
            </div>
          </article>
        </div>
      </section>

      <section className="section comparison-section" id="comparativo" aria-labelledby="comparison-title">
        <div className="section-index" aria-hidden="true">
          03
        </div>
        <div className="section-heading comparison-heading">
          <div>
            <p className="eyebrow">Comparativo</p>
            <h2 id="comparison-title">Compare cada entrega com clareza.</h2>
          </div>
          <p>
            As duas opções oferecem uma base profissional. A diferença está na
            profundidade da estrutura.
          </p>
        </div>

        <div className="comparison" role="table" aria-label="Comparativo das soluções">
          <div className="comparison-header" role="row">
            <span role="columnheader">Entrega</span>
            <span role="columnheader">Landing Page</span>
            <span role="columnheader">Site + Link Bio</span>
          </div>
          {comparisonItems.map(([label, landing, institutional]) => (
            <div className="comparison-row" role="row" key={label}>
              <span role="cell">{label}</span>
              <span role="cell" data-plan="Landing Page">
                <i
                  className={`bi ${landing ? "bi-check-lg status-yes" : "bi-dash status-no"}`}
                  aria-hidden="true"
                />
                <span className="sr-only">{landing ? "Sim" : "Não"}</span>
              </span>
              <span role="cell" data-plan="Site + Link Bio">
                <i
                  className={`bi ${institutional ? "bi-check-lg status-yes" : "bi-dash status-no"}`}
                  aria-hidden="true"
                />
                <span className="sr-only">{institutional ? "Sim" : "Não"}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section payment-section" id="investimento" aria-labelledby="payment-title">
        <div className="section-index" aria-hidden="true">
          04
        </div>
        <div className="payment-heading">
          <p className="eyebrow">Investimento</p>
          <h2 id="payment-title">Condições de pagamento</h2>
        </div>
        <div className="payment-options">
          <article className="payment-option">
            <div className="payment-label">
              <span>01</span>
              <h3>PIX</h3>
            </div>
            <p className="payment-primary">50% no início do projeto</p>
            <p className="payment-primary">50% na entrega</p>
          </article>
          <article className="payment-option">
            <div className="payment-label">
              <span>02</span>
              <h3>Cartão</h3>
            </div>
            <p className="payment-primary">Até 3x sem juros.</p>
            <p className="payment-note">
              A partir de 4x, parcelamento disponível com acréscimo de juros.
            </p>
          </article>
        </div>
      </section>

      <section className="section process-section" id="processo" aria-labelledby="process-title">
        <div className="section-index" aria-hidden="true">
          05
        </div>
        <div className="process-intro">
          <p className="eyebrow">Como funciona</p>
          <h2 id="process-title">Do primeiro alinhamento à publicação.</h2>
          <p>
            Um processo claro, colaborativo e conduzido com atenção em cada
            etapa.
          </p>
        </div>

        <ol className="timeline">
          {processSteps.map((step) => (
            <li key={step.number}>
              <span className="timeline-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section materials-section" aria-labelledby="materials-title">
        <div className="section-index" aria-hidden="true">
          06
        </div>
        <div className="materials-heading">
          <p className="eyebrow">Materiais necessários</p>
          <h2 id="materials-title">O que precisamos para começar</h2>
        </div>
        <div className="materials-grid">
          {materials.map((group, index) => (
            <article key={group.title}>
              <div className="material-title">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-title">
        <div className="final-cta-copy">
          <p className="eyebrow">Próximo passo</p>
          <h2 id="final-title">Qual solução faz mais sentido para o seu momento?</h2>
          <p>
            As duas opções serão desenvolvidas de forma personalizada, com foco
            em apresentar seu trabalho com profissionalismo, autoridade e
            clareza.
          </p>
        </div>

        <div className="final-options">
          <a href={whatsappUrl(whatsappMessages.landing)} target="_blank" rel="noreferrer">
            <span>Landing Page</span>
            <strong>R$ 1.000</strong>
            <ArrowIcon />
          </a>
          <a
            href={whatsappUrl(whatsappMessages.institutional)}
            target="_blank"
            rel="noreferrer"
          >
            <span>Site Institucional + Link Bio</span>
            <strong>R$ 2.000</strong>
            <ArrowIcon />
          </a>
        </div>

        <div className="final-actions">
          <WhatsAppLink
            message={whatsappMessages.general}
            className="button button-light"
          >
            Quero iniciar meu projeto
          </WhatsAppLink>
          <WhatsAppLink
            message={whatsappMessages.general}
            className="button button-dark-text"
          >
            Falar pelo WhatsApp
          </WhatsAppLink>
        </div>

        <div className="final-meta">
          <span>Proposta comercial · 2026</span>
          <span>Design · Desenvolvimento · Estratégia</span>
        </div>
      </section>
    </main>
  );
}
