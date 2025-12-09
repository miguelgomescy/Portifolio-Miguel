// src/components/TechStrip.jsx
import "./TechStrip.css";

const techItems = [
  { name: "JavaScript", icon: "/icons/1.png" },
  { name: "React", icon: "/icons/4.png" },
  { name: "React Native", icon: "/icons/5.png" },
  { name: "Node.js", icon: "/icons/10.png" },
  { name: "MongoDB", icon: "/icons/6.png" },
  { name: "MySQL", icon: "/icons/15.png" },
  { name: "Python", icon: "/icons/3.png" },
  { name: "Google Ads", icon: "/icons/7.png" },
  { name: "Meta Ads", icon: "/icons/11.png" },
  { name: "Shopify", icon: "/icons/9.png" },
  { name: "Linux", icon: "/icons/14.png" },
  { name: "Google Meu Negócio", icon: "/icons/2.png" },
  { name: "Figma", icon: "/icons/8.png" },
  { name: "C++", icon: "/icons/12.png" },
  { name: "PowerBi", icon: "/icons/13.png" },
];

// duplicamos o array para fazer o loop infinito
const loopItems = [...techItems, ...techItems];

function TechStrip() {
  return (
    <section className="tech-strip" aria-label="Principais tecnologias">
      <div className="tech-strip-mask">
        <div className="tech-strip-track">
          {loopItems.map((tech, index) => (
            <div className="tech-card" key={`${tech.name}-${index}`}>
              {tech.icon && (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="tech-card-icon"
                  loading="lazy"
                />
              )}
              <span className="tech-card-label">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStrip;
