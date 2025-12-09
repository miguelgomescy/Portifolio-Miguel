// src/components/About.jsx
import { useEffect, useRef } from "react";
import "./About.css";

const timelineItems = [
  {
    title: "Desenvolvedor de Software Multi.",
    period: "2023 - Presente",
    icon: "/svg/5.svg", // TROCA pelo caminho do seu SVG
  },
  {
    title: "Fatec ZL - Des. Software Multiplataforma",
    period: "2023 - 2026",
    icon: "/svg/4.svg",
  },
  {
    title: "Abertura da Agência",
    period: "2023",
    icon: "/svg/3.svg",
  },
  {
    title: "Primeiro Ecommerce",
    period: "2022",
    icon: "/svg/2.svg",
  },
  {
    title: "Formação: Téc. em Automação industrial",
    period: "2021",
    icon: "/svg/1.svg",
  },
];

function About() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-item--visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      itemRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <h2 className="about-title">Sobre mim</h2>

      <div className="about-content">
        {/* FOTO */}
        <div className="about-photo-wrapper">
          {/* troca esse src pela foto final que você quiser */}
          <img
            src="/migueltxt.png"
            alt="Miguel Gomes"
            className="about-photo"
          />
        </div>

        {/* LINHA DO TEMPO */}
        <div className="about-timeline">
          {/* linha atrás dos ícones */}
          <div className="timeline-line" />

          {timelineItems.map((item, index) => (
            <div
              key={item.title}
              className="timeline-item"
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
            >
              <div className="timeline-icon-wrapper">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="timeline-icon"
                />
              </div>

              <div className="timeline-text">
                <p className="timeline-title">{item.title}</p>
                <p className="timeline-sub">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TEXTO EMBAIXO */}
      <div className="about-description">
        <p>
          Sou Miguel Gomes, desenvolvedor full-stack com formação em Automação
          Industrial e experiência em marketing digital.
        </p>
        <p>
          Estudo Desenvolvimento de Software Multiplataforma na Fatec ZL e atuo
          criando soluções em front-end, back-end e integração de sistemas.
        </p>
        <p>
          Minha trajetória une tecnologia, automação e produto — sempre buscando
          desenvolver soluções eficientes, criativas e com impacto real.
        </p>
      </div>
    </section>
  );
}

export default About;
