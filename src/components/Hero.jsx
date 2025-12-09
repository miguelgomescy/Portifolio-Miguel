// src/components/Hero.jsx


import { useEffect, useRef } from "react";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("hero-visible");
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-photo">
          {/* por enquanto o pixel, depois trocamos pela foto “séria” */}
          <img src="/Miguel-Site.svg" alt="Miguel Gomes" />
        </div>

        <h1>Miguel Gomes</h1>

        <p className="hero-subtitle">
          Desenvolvedor Multiplataforma &amp; Gestor de Tráfego
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Projetos
          </a>
          <a href="#contact" className="btn-secondary">
            Entrar Contato
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
