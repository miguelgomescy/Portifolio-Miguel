import "./Contact.css";

import { FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-container">
        <header className="contact-header">
          <h2 className="contact-title">Contato</h2>
          <p className="contact-subtitle">Vamos tomar um café?</p>
        </header>

        <div className="contact-content">
          {/* coluna texto */}
          <div className="contact-text">
            <h3 className="contact-question">
              Que desenvolvermos algo incrível?
            </h3>
            <p className="contact-intro">
              Estou disponível para conversas sobre novos projetos,
              novas parcerias, trabalhos freelancers, etc.
            </p>

            <p className="contact-list-title">Se você procura por:</p>
            <ul className="contact-list">
              <li>Uma loja virtual completa</li>
              <li>
                Um site impecável para sua empresa ser bem
                representada e posicionada
              </li>
              <li>Página de vendas completa</li>
              <li>Gestão de tráfego pago e orgânico</li>
              <li>Posicionamento da sua empresa no Google</li>
              <li>Automações</li>
              <li>Dashboards informativos profissionais</li>
            </ul>

            <p className="contact-highlight">
              Você acaba de encontrar a{" "}
              <span className="contact-highlight-strong">
                pessoa certa!
              </span>
            </p>

            <p className="contact-coffee">Vamos tomar um café?</p>

            <div className="contact-actions">
              <a
                href="mailto:miguelcy.dev@gmail.com"
                className="contact-btn contact-btn-primary"
              >
                miguelcy.dev@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/miguelgomescy"
                target="_blank"
                rel="noreferrer"
                className="contact-btn contact-btn-secondary"
              >
                 <FaLinkedinIn />  Miguel Gomes
              </a>
            </div>
          </div>

          {/* coluna imagem */}
          <div className="contact-avatar-wrapper">
            <div className="contact-avatar-card">
              <img
                src="/miguel_icon.png"
                alt="Miguel Gomes em pixel art, tomando café"
                className="contact-avatar-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
