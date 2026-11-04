"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Camera, Instagram, Menu, X } from "lucide-react";

const navigation = [
  ["Sobre", "#sobre"],
  ["Encontros", "#encontros"],
  ["Galeria", "#arquivo"],
  ["História", "#historia"]
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector(".site-header");
    let lastScrolled = false;
    const onScroll = () => {
      const nextScrolled = window.scrollY > 32;
      if (nextScrolled !== lastScrolled) {
        header?.classList.toggle("is-scrolled", nextScrolled);
        lastScrolled = nextScrolled;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      revealItems.forEach((element) => observer.observe(element));
      return () => {
        window.removeEventListener("scroll", onScroll);
        observer.disconnect();
      };
    }

    revealItems.forEach((element) => element.classList.add("is-visible"));
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Antigos de Pouso — início">
          <span className="brand-mark">AP<span>·</span></span>
          <span className="brand-name">ANTIGOS <b>DE POUSO</b></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href="https://www.instagram.com/antigosdepouso/" target="_blank" rel="noreferrer">
          <span>Instagram</span><ArrowUpRight size={15} />
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        {navigation.map(([label, href], index) => <a key={href} href={href} onClick={closeMenu}><small>0{index + 1}</small>{label}<ArrowUpRight /></a>)}
        <a className="mobile-instagram" href="https://www.instagram.com/antigosdepouso/" target="_blank" rel="noreferrer">Instagram <Instagram /></a>
      </div>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-backdrop" />
        <div className="hero-grid" />
        <div className="hero-grain" />
        <div className="hero-content">
          <p className="eyebrow hero-kicker"><span className="eyebrow-line" /> POUSO REDONDO · SANTA CATARINA · BRASIL</p>
          <h1 id="hero-title">
            <span className="title-mask"><span className="hero-title-line">ALGUMAS HISTÓRIAS</span></span>
            <span className="title-mask"><span className="hero-title-line title-italic">NUNCA ENVELHECEM.</span></span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-description hero-foot">Uma paixão que atravessa gerações.<br />Um encontro que reúne histórias sobre rodas.</p>
            <a className="round-link hero-foot" href="#arquivo" aria-label="Explorar o acervo"><ArrowDown /></a>
            <div className="hero-index hero-foot"><span>01</span><i /> <span>04</span></div>
          </div>
        </div>
        <div className="hero-side-label">CULTURA AUTOMOTIVA</div>
        <div className="hero-location">POUSO REDONDO · SANTA CATARINA</div>
      </section>

      <section className="intro section-pad" id="sobre">
        <div className="section-index" data-reveal><span>01 / MANIFESTO</span><span>UMA PAIXÃO COMPARTILHADA</span></div>
        <div className="intro-layout">
          <div className="intro-heading" data-reveal>
            <p className="eyebrow dark-eyebrow">O TEMPO NÃO APAGA O QUE É ESPECIAL</p>
            <h2>MAIS QUE<br />AUTOMÓVEIS.<br /><em>Uma história</em><br />compartilhada.</h2>
          </div>
          <div className="intro-copy" data-reveal>
            <span className="large-quote">“</span>
            <p>Há máquinas que carregam mais do que motores e metal. Carregam lembranças, encontros, descobertas e histórias que passam de uma geração para outra.</p>
            <p>Antigos de Pouso é sobre preservar essa paixão — e reunir quem acredita que algumas coisas merecem continuar rodando.</p>
            <a className="text-link" href="https://www.instagram.com/antigosdepouso/" target="_blank" rel="noreferrer">CONHEÇA NOSSA COMUNIDADE <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="intro-rule"><span>POUSO REDONDO / SC</span><span>DESDE 2017</span></div>
      </section>

      <section className="archive section-pad" id="arquivo">
        <div className="archive-top" data-reveal>
          <div><p className="eyebrow"><span className="eyebrow-line" /> MEMÓRIAS SOBRE RODAS</p><h2>O <em>ACERVO</em></h2></div>
          <p className="archive-note">Cada encontro é um capítulo.<br />Cada fotografia, uma memória preservada.</p>
        </div>
        <div className="archive-empty" data-reveal>
          <div className="archive-empty-mark"><Camera size={28} strokeWidth={1} /></div>
          <div><span className="empty-kicker">O ACERVO ESTÁ SENDO PREPARADO</span><h3>Histórias que merecem<br /><em>ser revisitadas.</em></h3><p>Em breve, fotografias e registros dos encontros estarão reunidos aqui.</p></div>
          <span className="empty-number">001—∞</span>
        </div>
        <div className="archive-bottom"><span>REGISTROS DA COMUNIDADE</span><a href="https://www.instagram.com/antigosdepouso/" target="_blank" rel="noreferrer">ACOMPANHE NO INSTAGRAM <ArrowUpRight size={14} /></a></div>
      </section>

      <section className="events section-pad" id="encontros">
        <div className="section-index" data-reveal><span>02 / AGENDA</span><span>ENCONTROS & EXPERIÊNCIAS</span></div>
        <div className="events-layout">
          <div data-reveal><p className="eyebrow dark-eyebrow">O PRÓXIMO CAPÍTULO</p><h2>O prazer de<br /><em>estar junto.</em></h2></div>
          <div className="event-empty" data-reveal><CalendarDays size={22} /><div><b>NOVOS ENCONTROS EM BREVE</b><p>As próximas datas serão anunciadas pelos canais oficiais.</p><a href="https://www.instagram.com/antigosdepouso/" target="_blank" rel="noreferrer">Fique por dentro <ArrowRight size={14} /></a></div></div>
        </div>
      </section>

      <section className="history section-pad" id="historia">
        <div className="history-copy" data-reveal><p className="eyebrow"><span className="eyebrow-line" /> UMA HISTÓRIA EM MOVIMENTO</p><h2>O passado<br />continua <em>presente.</em></h2><p>Desde 2017, uma comunidade se reúne em torno de uma paixão em comum: manter viva a história dos veículos que marcaram gerações.</p></div>
        <div className="history-stamp" data-reveal><span>ANTIGOS</span><b>DE<br />POUSO</b><small>POUSO REDONDO · SC</small><i>EST. 2017</i></div>
      </section>

      <footer className="footer">
        <div className="footer-main"><a className="footer-brand" href="#">ANTIGOS<br /><em>DE POUSO.</em></a><div className="footer-right"><p>HISTÓRIAS QUE ATRAVESSAM GERAÇÕES.</p><a href="https://www.instagram.com/antigosdepouso/" target="_blank" rel="noreferrer"><Instagram size={17} /> INSTAGRAM <ArrowUpRight size={14} /></a></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} ANTIGOS DE POUSO</span><span>POUSO REDONDO · SANTA CATARINA</span><a href="#">VOLTAR AO TOPO ↑</a></div>
      </footer>
    </main>
  );
}
