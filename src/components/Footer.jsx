import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p className="footer-copy">
          © {year} Miguel Gomes. Todos os direitos reservados.
        </p>

        <div className="footer-links">
          <a href="#" className="footer-link">
            Voltar ao topo
          </a>
          <span className="footer-separator">•</span>
          <a
            href="mailto:miguelcy.dev@gmail.com"
            className="footer-link"
          >
            miguelcy.dev@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
