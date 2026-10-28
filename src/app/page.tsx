import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, CalendarDays, Check, Clock3, MapPin, MessageCircle, Scissors, ShieldCheck, Sparkles, Star } from "lucide-react";
import { barbers, services } from "@/lib/services";
import { siteConfig, whatsappLink } from "@/lib/site";

const gallery = [
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1100&q=85", alt: "Barbeiro realizando acabamento em corte masculino" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85", alt: "Detalhes de corte e estilo masculino" },
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=85", alt: "Ferramentas profissionais de barbearia" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85", alt: "Ambiente de barbearia contemporânea" },
  { src: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=900&q=85", alt: "Cadeira e ambiente de barbearia" }
];

export default function HomePage() {
  return (
    <main>
      <header className="header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label={`${siteConfig.name} - início`}>
            <span className="brand-mark"><Scissors size={20} /></span>
            <span>{siteConfig.name}<small style={{display:"block", color:"var(--gold)", fontSize:".58rem", letterSpacing:".28em", marginTop:3}}>BARBER EXPERIENCE</small></span>
          </Link>
          <nav className="nav" aria-label="Navegação principal">
            <a href="#servicos">Serviços</a><a href="#sobre">A barbearia</a><a href="#profissionais">Profissionais</a><a href="#galeria">Galeria</a><a href="#contato">Contato</a>
            <Link className="btn btn-primary" href="/agendar">Agendar agora <ArrowRight size={16}/></Link>
          </nav>
          <Link className="btn btn-primary mobile-menu" href="/agendar">Agendar <ArrowRight size={15}/></Link>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow">Mais que um corte. Uma experiência.</span>
            <h1>Seu estilo.<br/><span>Sua assinatura.</span></h1>
            <p>Precisão nos detalhes, ambiente de respeito e um atendimento feito para você sair daqui com outra presença.</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/agendar"><CalendarDays size={18}/> Agendar meu horário <ArrowRight size={17}/></Link>
              <a className="btn btn-outline" href="#servicos">Conhecer serviços <ArrowDown size={16}/></a>
            </div>
            <div className="hero-note"><span>Profissionais especializados</span><span>Atendimento com hora marcada</span><span>Seu estilo em primeiro lugar</span></div>
          </div>
        </div>
      </section>

      <div className="trust-strip">
        <div className="container trust-grid">
          <div className="trust-item"><strong>Precisão em cada detalhe</strong><span>Acabamento que faz a diferença</span></div>
          <div className="trust-item"><strong>Seu tempo importa</strong><span>Agende de forma simples e rápida</span></div>
          <div className="trust-item"><strong>Experiência premium</strong><span>Do atendimento ao resultado</span></div>
        </div>
      </div>

      <section className="section" id="servicos">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Serviços & valores</span>
            <h2>O cuidado que combina com você.</h2>
            <p>Do clássico ao moderno, escolha o serviço ideal e reserve seu próximo horário. Os valores abaixo são demonstrativos e devem ser confirmados com a barbearia antes da publicação.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.id}>
                <div className="service-top"><span className="service-icon"><Scissors size={21}/></span>{service.tag && <span className="pill">{service.tag}</span>}</div>
                <h3>{service.name}</h3><p>{service.description}</p>
                <div className="service-bottom">
                  <div className="price">R$ {service.price.toFixed(2).replace(".", ",")} <small>/ {service.duration} min</small></div>
                  <Link className="text-link" href={`/agendar?servico=${service.id}`}>Agendar ↗</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="sobre" style={{background:"#151513"}}>
        <div className="container about-grid">
          <div className="about-photo" role="img" aria-label="Interior e atendimento de uma barbearia moderna"/>
          <div className="about-copy">
            <span className="eyebrow">Nossa essência</span>
            <h2>Tradição no cuidado. Atitude no estilo.</h2>
            <p>A BARBER CLUB nasce da ideia de que uma barbearia é mais do que um lugar para cortar o cabelo: é um espaço para desacelerar, cuidar de si e sair com a confiança renovada.</p>
            <p>Nosso compromisso é unir técnica, atenção aos detalhes e uma experiência acolhedora em cada visita.</p>
            <ul className="check-list"><li>Atendimento atencioso e personalizado</li><li>Ambiente confortável e bem cuidado</li><li>Serviços pensados para o seu estilo</li><li>Agendamento prático e organizado</li></ul>
            <Link className="btn btn-outline" href="/agendar">Venha conhecer <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      <section className="section" id="profissionais">
        <div className="container">
          <div className="section-heading"><span className="eyebrow">Quem cuida do seu estilo</span><h2>Mãos experientes. Resultado de respeito.</h2><p>Conheça a equipe e escolha quem vai cuidar do seu próximo visual. Os nomes e as fotos são demonstrativos e devem ser substituídos pelos profissionais reais.</p></div>
          <div className="team-grid">
            {barbers.map((barber) => <article className="team-card" key={barber.name}>
              <Image className="team-image" src={barber.image} alt={`Foto demonstrativa de ${barber.name}`} width={700} height={850}/>
              <div className="team-info"><h3>{barber.name}</h3><p>{barber.role}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section" id="galeria" style={{paddingTop:25}}>
        <div className="container">
          <div className="section-heading"><span className="eyebrow">Inspiração & detalhes</span><h2>Estilo que fala por si.</h2><p>Um olhar sobre o universo da barbearia. Troque estas imagens pelas fotos autorais do seu espaço e dos cortes realizados.</p></div>
          <div className="gallery-grid">{gallery.map((item) => <div className="gallery-item" key={item.src}><Image src={item.src} alt={item.alt} width={1000} height={900}/></div>)}</div>
        </div>
      </section>

      <section className="section" style={{background:"#151513"}}>
        <div className="container">
          <div className="section-heading"><span className="eyebrow">Nosso compromisso</span><h2>Uma boa experiência começa no atendimento.</h2><p>Use esta área para publicar avaliações verdadeiras de clientes, com autorização para divulgação.</p></div>
          <div className="review-grid">
            {[["Atendimento de qualidade","A equipe foi atenciosa e explicou as opções de corte antes de começar."],["Ambiente bem cuidado","Espaço confortável, organizado e com atenção aos detalhes."],["Agendamento prático","Consegui consultar as opções e entrar em contato de forma simples."]].map(([title, quote]) => <article className="review" key={title}><div className="stars" aria-label="Avaliação ilustrativa"><Star size={15} fill="currentColor" style={{display:"inline"}}/><Star size={15} fill="currentColor" style={{display:"inline"}}/><Star size={15} fill="currentColor" style={{display:"inline"}}/><Star size={15} fill="currentColor" style={{display:"inline"}}/><Star size={15} fill="currentColor" style={{display:"inline"}}/></div><blockquote>“{quote}”</blockquote><strong>{title}</strong><small>Texto demonstrativo — substituir por avaliação real</small></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container booking-band">
          <div><span className="eyebrow">Seu próximo visual começa aqui</span><h2>Pronto para renovar o estilo?</h2><p>Escolha o serviço e entre em contato para confirmar seu horário.</p></div>
          <Link className="btn btn-primary" href="/agendar">Agendar agora <ArrowRight size={17}/></Link>
        </div>
      </section>

      <section className="section" id="contato" style={{paddingTop:10}}>
        <div className="container">
          <div className="section-heading"><span className="eyebrow">Estamos por aqui</span><h2>Faça uma visita.</h2><p>Consulte os horários e fale com a equipe para combinar seu próximo atendimento.</p></div>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-row"><span className="contact-symbol"><MapPin size={20}/></span><div><small>Endereço</small><strong>{siteConfig.address}</strong><p style={{color:"var(--muted)",margin:"5px 0 0"}}>{siteConfig.city}</p></div></div>
              <div className="contact-row"><span className="contact-symbol"><MessageCircle size={20}/></span><div><small>WhatsApp</small><strong>{siteConfig.phoneDisplay}</strong><p style={{color:"var(--muted)",margin:"5px 0 0"}}>Confirme seu horário com a equipe.</p></div></div>
              <div className="contact-row"><span className="contact-symbol"><Clock3 size={20}/></span><div style={{width:"100%"}}><small>Funcionamento</small>{siteConfig.openingHours.map((item) => <div className="hours-row" key={item.day}><span>{item.day}</span><span>{item.hours}</span></div>)}</div></div>
              <a className="btn btn-primary" style={{width:"100%",marginTop:20}} href={whatsappLink("Olá! Gostaria de saber mais sobre os serviços e horários da barbearia.")} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Falar pelo WhatsApp</a>
            </div>
            <div className="contact-card" style={{display:"flex",flexDirection:"column",justifyContent:"center",minHeight:300,background:"linear-gradient(135deg,rgba(214,173,104,.12),transparent),var(--panel)"}}>
              <span className="service-icon"><ShieldCheck size={24}/></span><h3 style={{fontSize:"1.5rem",marginBottom:8}}>Atendimento sem complicação.</h3><p style={{color:"var(--muted)",lineHeight:1.8}}>Ficou com alguma dúvida sobre um serviço? Chame a equipe pelo WhatsApp para consultar disponibilidade, valores e detalhes antes de reservar.</p><a className="text-link" href={siteConfig.instagram} target="_blank" rel="noreferrer">Acompanhar no Instagram ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer"><div className="container footer-inner"><Link className="brand" href="/"><span className="brand-mark"><Scissors size={18}/></span>{siteConfig.name}</Link><span>© {new Date().getFullYear()} {siteConfig.name}. Feito com cuidado.</span><a href="#top" className="text-link">Voltar ao topo ↑</a></div></footer>
      <a className="whatsapp-float" href={whatsappLink("Olá! Gostaria de agendar um horário na barbearia.")} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp"><MessageCircle size={18} style={{display:"inline",marginRight:7,verticalAlign:"middle"}}/>WhatsApp</a>
    </main>
  );
}
