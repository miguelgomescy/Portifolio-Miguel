// src/App.jsx
import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStrip from "./components/TechStrip";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loader rápido, 1.6s
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loader-inner">
          <p className="loader-text">CARREGANDO PORTFÓLIO...</p>
          <div className="loader-bar">
            <div className="loader-bar-fill" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="site">
      <Header />
      <main className="site-main">
        <Hero />
        <TechStrip />
        <Projects />
        <TechStrip />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
