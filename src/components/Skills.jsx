// src/components/Skills.jsx
import React from "react";
import "./Skills.css";


const skillsList = [
  "ReactJS",
  "React Native",
  "CLP & Ladder",
  "Google & Meta ADS",
  "Python",
  "MySQL",
  "Sistemas Embarcados",
  "Shopify & Ecommerce",
  "HTML & CSS",
  "MongoDB",
  "C++",
  "Google My Business",
  "Figma & UX/UI",
  "PowerBI",
  "Linux",
  "Automação",
  "Pacotte Office",
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <h2 className="skills-title">Minhas Skills:</h2>

     
  

        {/* chips igual Figma */}
        <div className="skills-chips-grid">
          {skillsList.map((skill) => (
            <span key={skill} className="skills-chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
