import { BenefitCard } from './components/BenefitCard';
import { Button } from './components/Button';
import { HeroIllustration } from './components/HeroIllustration';
import { SectionHeader } from './components/SectionHeader';
import { ServiceCard } from './components/ServiceCard';
import { TestimonialCard } from './components/TestimonialCard';
import { siteContent } from './data/siteContent';

function App() {
  const whatsappUrl = `https://wa.me/${siteContent.contact.whatsapp}?text=Olá!%20Quero%20solicitar%20um%20orçamento.`;

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container topbar__content">
          <a href="#inicio" className="brand-mark">
            <span className="brand-mark__dot" />
            {siteContent.brand}
          </a>
          <nav className="topbar__nav">
            <a href="#beneficios">Benefícios</a>
            <a href="#servicos">Serviços</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#contato">Contato</a>
          </nav>
          <Button href={whatsappUrl} target="_blank" rel="noreferrer" className="topbar__cta">
            WhatsApp
          </Button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero__grid">
            <div className="hero__content">
              <span className="badge">{siteContent.hero.badge}</span>
              <h1>
                {siteContent.hero.title} <span>{siteContent.hero.highlight}</span>
              </h1>
              <p>{siteContent.hero.description}</p>
              <div className="hero__actions">
                <Button href="#contato" icon>
                  {siteContent.hero.primaryCta}
                </Button>
                <Button href={whatsappUrl} target="_blank" rel="noreferrer" variant="secondary">
                  {siteContent.hero.secondaryCta}
                </Button>
              </div>
              <div className="hero__trustbar">
                <div>
                  <strong>+250 projetos</strong>
                  <span>implantados com padrão profissional</span>
                </div>
                <div>
                  <strong>Atendimento consultivo</strong>
                  <span>para residência e empresa</span>
                </div>
              </div>
            </div>

            <div className="hero__visual">
              <HeroIllustration />
              <div className="hero__info-card card">
                <strong>{siteContent.hero.imageCardTitle}</strong>
                <p>{siteContent.hero.imageCardText}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="beneficios">
          <div className="container">
            <SectionHeader
              eyebrow="Benefícios"
              title="Uma oferta clara, valiosa e fácil de entender"
              description="Mostre rapidamente por que seu serviço vale a atenção do visitante e como ele resolve um problema real."
              centered
            />
            <div className="grid grid--four">
              {siteContent.benefits.map((item) => (
                <BenefitCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--muted" id="sobre">
          <div className="container about">
            <div className="about__content">
              <SectionHeader
                eyebrow="Sobre a empresa"
                title={siteContent.about.title}
                description={siteContent.about.description}
              />
            </div>
            <div className="about__stats">
              {siteContent.about.stats.map((stat) => (
                <article className="card stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="servicos">
          <div className="container">
            <SectionHeader
              eyebrow="Oferta principal"
              title="Serviços organizados para gerar confiança e conversão"
              description="A estrutura abaixo facilita adaptar este projeto para outros nichos, mantendo uma apresentação comercial forte."
              centered
            />
            <div className="grid grid--three">
              {siteContent.services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--accent" id="diferenciais">
          <div className="container">
            <SectionHeader
              eyebrow="Diferenciais"
              title="Por que escolher a Solar Prime"
              description="Use esta seção para reforçar autoridade, segurança, rapidez e atenção ao cliente."
              centered
            />
            <div className="grid grid--four">
              {siteContent.differentiators.map((item) => (
                <BenefitCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="depoimentos">
          <div className="container">
            <SectionHeader
              eyebrow="Prova social"
              title="Depoimentos que reforçam credibilidade"
              description="Textos curtos, humanos e objetivos ajudam a quebrar objeções e aumentam a confiança na decisão."
              centered
            />
            <div className="grid grid--three">
              {siteContent.testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-banner">
              <div>
                <span className="section-header__eyebrow">Chamada final</span>
                <h2>{siteContent.finalCta.title}</h2>
                <p>{siteContent.finalCta.description}</p>
              </div>
              <Button href="#contato" icon>
                {siteContent.finalCta.button}
              </Button>
            </div>
          </div>
        </section>

        <section className="section section--muted" id="contato">
          <div className="container contact">
            <div className="contact__info">
              <SectionHeader
                eyebrow="Contato"
                title="Facilite o próximo passo do visitante"
                description="Deixe canais visíveis e uma alternativa de formulário para aumentar a taxa de conversão."
              />
              <div className="contact__cards">
                <a className="card contact-card" href={whatsappUrl} target="_blank" rel="noreferrer">
                  <span>WhatsApp</span>
                  <strong>{siteContent.contact.phone}</strong>
                </a>
                <a className="card contact-card" href={`tel:${siteContent.contact.phone.replace(/\D/g, '')}`}>
                  <span>Telefone</span>
                  <strong>{siteContent.contact.phone}</strong>
                </a>
                <a className="card contact-card" href={`mailto:${siteContent.contact.email}`}>
                  <span>E-mail</span>
                  <strong>{siteContent.contact.email}</strong>
                </a>
                <div className="card contact-card">
                  <span>Atendimento</span>
                  <strong>{siteContent.contact.address}</strong>
                </div>
              </div>
            </div>

            <form className="card contact-form">
              <h3>Solicite seu orçamento</h3>
              <p>Preencha os dados e sua equipe pode entrar em contato rapidamente.</p>
              <div className="contact-form__grid">
                <label>
                  Nome
                  <input type="text" placeholder="Seu nome" />
                </label>
                <label>
                  Telefone
                  <input type="tel" placeholder="(00) 00000-0000" />
                </label>
                <label className="contact-form__full">
                  E-mail
                  <input type="email" placeholder="voce@empresa.com" />
                </label>
                <label className="contact-form__full">
                  Como podemos ajudar?
                  <textarea rows={5} placeholder="Conte rapidamente o que você precisa" />
                </label>
              </div>
              <Button href={whatsappUrl} target="_blank" rel="noreferrer" icon>
                Enviar e falar no WhatsApp
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__content">
          <div>
            <strong>{siteContent.brand}</strong>
            <p>{siteContent.niche}</p>
          </div>
          <span>Landing page em React + TypeScript, pronta para portfólio e adaptação para outros nichos.</span>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  );
}

export default App;
