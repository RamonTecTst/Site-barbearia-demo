import React from "react";
import { ArrowUpRight, Scissors, Clock3, MapPin, MessageCircle } from "lucide-react";

const demoPhone = "5571999999999"; // Trocar pelo WhatsApp autorizado do cliente.
const whatsapp = `https://wa.me/${demoPhone}?text=${encodeURIComponent("Olá! Gostaria de consultar os horários disponíveis.")}`;

const services = [
  { name: "Corte clássico", detail: "Acabamento preciso e personalizado", price: "R$ 35", tag: "Mais pedido" },
  { name: "Barba", detail: "Cuidado e alinhamento", price: "R$ 25" },
  { name: "Corte + barba", detail: "O combo completo", price: "R$ 50", tag: "Combo" }
];

export default function App() {
  return <main>
    <div className="demo-bar">PROJETO DEMONSTRATIVO · BARBEARIA FICTÍCIA</div>
    <header className="nav wrap">
      <a className="brand" href="#inicio"><span className="brand-mark"><Scissors size={21}/></span><span>BARBEARIA <b>CENTRAL</b><small>ESTILO COM IDENTIDADE</small></span></a>
      <nav><a href="#sobre">A barbearia</a><a href="#servicos">Serviços</a><a href="#visite">Localização</a></nav>
      <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Agendar horário <ArrowUpRight size={16}/></a>
    </header>
    <section className="hero" id="inicio">
      <div className="hero-image"/><div className="hero-shade"/>
      <div className="hero-content wrap">
        <p className="eyebrow"><span/> BARBEARIA · ESTILO · CUIDADO</p>
        <h1>Seu estilo.<br/><em>Suas regras.</em></h1>
        <p className="hero-copy">Um bom corte não muda quem você é. Ele revela sua melhor versão.</p>
        <div className="hero-actions"><a className="button button-gold" href={whatsapp} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <ArrowUpRight size={17}/></a><a className="text-link" href="#servicos">Conhecer serviços <span>↓</span></a></div>
        <div className="hero-note"><span className="note-line"/> ATENDIMENTO COM HORA MARCADA</div>
      </div>
      <div className="hero-index">01 <span>/</span> 03</div>
    </section>
    <section className="intro wrap" id="sobre">
      <div className="section-kicker">01 — NOSSA ESSÊNCIA</div>
      <div className="intro-copy"><h2>Mais que um corte.<br/><em>Um momento seu.</em></h2><p>Um espaço pensado para quem valoriza os detalhes. Aqui, tradição e estilo caminham juntos para entregar uma experiência de cuidado do início ao fim.</p><a className="under-link" href="#visite">Conheça nosso espaço <ArrowUpRight size={15}/></a></div>
      <div className="intro-image"><img src="https://images.unsplash.com/photo-1503932393161-9b7c3b1f6b3a?auto=format&fit=crop&w=1000&q=85" alt="Interior de barbearia, imagem ilustrativa"/><span>AMBIENTE · EXPERIÊNCIA · IDENTIDADE</span></div>
    </section>
    <section className="services" id="servicos"><div className="wrap">
      <div className="services-head"><div><div className="section-kicker">02 — MENU DE SERVIÇOS</div><h2>O cuidado está<br/><em>nos detalhes.</em></h2></div><p>Escolha seu serviço e fale com nossa equipe para consultar os horários disponíveis.</p></div>
      <div className="service-list">{services.map((service, index) => <article className="service-row" key={service.name}><span className="service-number">0{index + 1}</span><div className="service-name"><h3>{service.name}</h3><p>{service.detail}</p></div>{service.tag && <span className="service-tag">{service.tag}</span>}<strong>{service.price}</strong><a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Consultar ${service.name}`}><ArrowUpRight/></a></article>)}</div>
      <p className="price-note">Preços fictícios para demonstração. Valores reais serão definidos pelo estabelecimento.</p>
    </div></section>
    <section className="quote wrap"><div className="quote-mark">“</div><p>Seu próximo visual começa com uma boa conversa.</p><span>BARBEARIA CENTRAL · DEMONSTRAÇÃO</span></section>
    <section className="visit" id="visite"><div className="visit-photo"/><div className="visit-content"><div className="section-kicker">03 — VENHA NOS VISITAR</div><h2>Seu horário.<br/><em>Seu momento.</em></h2><div className="visit-detail"><MapPin/><span><b>Endereço demonstrativo</b><br/>Rua Exemplo, 100 · Salvador, BA</span></div><div className="visit-detail"><Clock3/><span><b>Horário ilustrativo</b><br/>Segunda a sábado · 9h às 19h</span></div><a className="button button-gold" href={whatsapp} target="_blank" rel="noreferrer">Consultar disponibilidade <ArrowUpRight size={17}/></a><small>Endereço e horários fictícios. Substituir antes de publicar para um cliente.</small></div></section>
    <footer className="footer"><div className="wrap footer-inner"><a className="brand" href="#inicio"><span className="brand-mark"><Scissors size={20}/></span><span>BARBEARIA <b>CENTRAL</b><small>ESTILO COM IDENTIDADE</small></span></a><p>Uma demonstração criada para o Kit Digital Express.</p><a className="social" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a></div><div className="wrap copyright">© 2026 · PROJETO DEMONSTRATIVO · NÃO REPRESENTA UM ESTABELECIMENTO REAL</div></footer>
    <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp"><MessageCircle/></a>
  </main>;
}