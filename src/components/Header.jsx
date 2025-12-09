import { useEffect, useRef, useState } from "react";
import "./Header.css";

function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!langRef.current) return;
      if (!langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    }

    if (langOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langOpen]);

  // fecha o menu mobile ao clicar em algum link
  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <a href="#hero">
        <div className="header-logo">MIGUEL GOMES</div>
      </a>

      {/* NAV DESKTOP */}
      <nav className="header-nav">
        <a href="#projects">Projetos</a>
        <a href="#skills">Skills</a>
        <a href="#about">Sobre</a>
        <a href="#contact">Contato</a>
      </nav>

      {/* AÇÕES DESKTOP (idioma) */}
      <div className="header-actions">
        <div
          ref={langRef}
          className={`lang-switch ${langOpen ? "is-open" : ""}`}
          onClick={() => setLangOpen((prev) => !prev)}
        >
          <img
            src="/flags/Brasil-bw.svg"
            alt="Português"
            className="lang-flag"
          />
          <span className="lang-code">BR</span>
          <span className="lang-arrow">▾</span>

          {langOpen && (
            <div className="lang-dropdown">
              <button className="lang-option">
                <img
                  src="/flags/USA-bw.svg"
                  alt="English"
                  className="lang-flag"
                />
                <span>EN</span>
              </button>
              <button className="lang-option">
                <img
                  src="/flags/Brasil-bw.svg"
                  alt="Português"
                  className="lang-flag"
                />
                <span>PT-BR</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* BOTÃO MENU MOBILE – fica visível só no mobile */}
      <button
        className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Abrir menu de navegação"
      >
        <span />
        <span />
        <span />
      </button>

      {/* MENU MOBILE */}
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <nav className="mobile-nav">
          <a href="#projects" onClick={handleNavClick}>
            Projetos
          </a>
          <a href="#skills" onClick={handleNavClick}>
            Skills
          </a>
          <a href="#about" onClick={handleNavClick}>
            Sobre
          </a>
          <a href="#contact" onClick={handleNavClick}>
            Contato
          </a>
        </nav>

        <div className="mobile-lang">
          <button className="mobile-lang-btn">
            <img
              src="/flags/Brasil-bw.svg"
              alt="Português"
              className="lang-flag"
            />
            <span>BR / EN</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
