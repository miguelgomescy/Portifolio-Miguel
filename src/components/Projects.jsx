// src/components/Projects.jsx
import { useState } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Site institucional",
    description:
      "Landing page moderna focada em conversão, layout responsivo e integrações básicas.",
    techs: ["ReactJS", "NodeJS", "MongoDB"],
    codeUrl: "#",
    liveUrl: "#",
    preview: "/Footer.svg", // troca depois
    status: "wip",
  },
  {
    id: 2,
    title: "Cozinha AI",
    description:
      "Painel administrativo com gráficos e KPIs para acompanhar desempenho comercial.",
    techs: ["ReactNative", "Firestore", "API Google Gemini", "ReactJS"],
    codeUrl: "https://github.com/miguelgomescy/CozinhaAI-LP",
    liveUrl: "https://cozinha-ai-lp.vercel.app/",
    preview: "/projects/COZINHA.svg",
    status: "online",
  },
  {
    id: 3,
    title: "E-commerce simples",
    description:
      "Loja virtual enxuta com carrinho, checkout básico e integração com pagamentos.",
    techs: ["ReactJS", "NodeJS", "MongoDB"],
    codeUrl: "#",
    liveUrl: "#",
    preview: "/Footer.svg", // troca depois
    status: "wip",
  },
  {
    id: 4,
    title: "Landing Page: Academia",
    description:
      "Página otimizada para tráfego pago, focada em copy, provas sociais e captação de leads.",
    techs: ["ReactJS", "CSS", "Vite"],
    codeUrl: "https://github.com/miguelgomescy/AcademiaLP",
    liveUrl: "https://academia-lp-zeta.vercel.app/",
    preview: "/projects/academia.svg",
    status: "online",
  },
  {
    id: 5,
    title: "Landing Page: Hamburgeria",
    description:
      "Aplicação interna para organização de processos e acompanhamento de tarefas.",
    techs: ["ReactJS", "CSS", "Vite"],
    codeUrl: "https://github.com/miguelgomescy/Hamburgeria",
    liveUrl: "https://hamburgeria-brown.vercel.app/",
    preview: "/projects/hamburgeria.svg",
    status: "Online",
  },
  {
    id: 6,
    title: "Landing Page: Transportadora",
    description:
      "Interface para monitorar dados industriais e controlar processos de forma simples.",
    techs: ["ReactJS", "CSS", "Vite"],
    codeUrl: "https://github.com/miguelgomescy/Transportadora",
    liveUrl: "https://transportadora-gilt.vercel.app/",
    preview: "/projects/transportadora.svg",
    status: "Online",
  },
  {
    id: 7,
    title: "Landing para infoproduto",
    description:
      "Página otimizada para tráfego pago, focada em copy, provas sociais e captação de leads.",
    techs: ["ReactJS", "Google Ads", "Meta Ads"],
    codeUrl: "#",
    liveUrl: "#",
    preview: "/Footer.svg", // troca depois
    status: "online",
  },
  {
    id: 8,
    title: "Sistema interno",
    description:
      "Aplicação interna para organização de processos e acompanhamento de tarefas.",
    techs: ["ReactJS", "NodeJS", "MySQL"],
    codeUrl: "#",
    liveUrl: "#",
    preview: "/Footer.svg", // troca depois
    status: "wip",
  },
  {
    id: 9,
    title: "Painel de automação",
    description:
      "Interface para monitorar dados industriais e controlar processos de forma simples.",
    techs: ["ReactJS", "API", "Automação"],
    codeUrl: "#",
    liveUrl: "#",
    preview: "/Footer.svg", // troca depois
    status: "wip",
  },
];

const ITEMS_PER_PAGE = 6;

export default function Projects() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = page * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <header className="projects-header">
          <div>
            <p className="projects-eyebrow">Portfólio</p>
            <h2 className="projects-title">Conheça alguns Projetos</h2>
          </div>

          {/* Filtro preparado, mas escondido por enquanto */}
          {/*
          <div className="projects-filter">
            <span className="projects-filter-label">Filtrar:</span>
            <select className="projects-filter-select" defaultValue="Todos">
              <option>Todos</option>
              <option>Front-end</option>
              <option>Full-stack</option>
              <option>Dashboards</option>
              <option>Landing Pages</option>
            </select>
          </div>
          */}
        </header>

        <div className="projects-grid">
          {currentProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-thumbnail">
                {project.preview ? (
                  <>
                    <img
                      src={project.preview}
                      alt={project.title}
                      className="project-thumbnail-img"
                    />
                    {project.status === "wip" && (
                      <span className="project-badge">Em desenvolvimento</span>
                    )}
                  </>
                ) : (
                  <span className="project-placeholder-text">
                    Preview do projeto
                  </span>
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-techs">
                  {project.techs.map((tech) => (
                    <span key={tech} className="project-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn project-btn-outline"
                  >
                    <FiGithub className="project-btn-icon" />
                    <span>Código Fonte</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn project-btn-primary"
                  >
                    <FiExternalLink className="project-btn-icon" />
                    <span>Ver Projeto</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="projects-pagination">
            <button
              type="button"
              className="projects-arrow"
              onClick={handlePrev}
            >
              <FiChevronLeft />
            </button>

            <div className="projects-dots">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setPage(index)}
                  className={`projects-dot ${
                    index === page ? "is-active" : ""
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              className="projects-arrow"
              onClick={handleNext}
            >
              <FiChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
