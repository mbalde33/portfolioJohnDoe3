import React, { useEffect, useRef } from "react";
import "../styles/globalstyle.css"; // adapte le chemin selon ton projet

export default function About() {
  const skillsRef = useRef([]);

  // Animation des barres de compétences
  useEffect(() => {
    const handleScroll = () => {
      skillsRef.current.forEach((skill) => {
        if (!skill) return;
        const rect = skill.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          skill.style.width = skill.dataset.percent;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // déclenche l’animation si visible dès le départ
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "HTML5", percent: "90%", color: "#dc3545" },
    { name: "CSS3", percent: "80%", color: "#0dcaf0" },
    { name: "JavaScript", percent: "70%", color: "#ffc107" },
    { name: "PHP", percent: "60%", color: "#198754" },
    { name: "React", percent: "50%", color: "#0d6efd" },
  ];

  return (
    <section className="about-section">
      <div className="about-card">
        {/* À PROPOS - Colonne gauche */}
        <div className="about-left">
          <h2>A propos</h2>
          <div className="blue-line"></div>
          <img src="/images/john-doe-about.jpg" alt="John Doe" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            necessitatibus consectetur tempore perferendis nostrum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            necessitatibus consectetur tempore perferendis nostrum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            necessitatibus consectetur tempore perferendis nostrum.
          </p>
        </div>

        {/* MES COMPETENCES - Colonne droite */}
        <div className="about-right">
          <h2>Mes compétences</h2>
          <div className="blue-line"></div>

          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.percent}</span>
              </div>
              <div className="progress-bar">
                <div
                  ref={(el) => (skillsRef.current[index] = el)}
                  data-percent={skill.percent}
                  className="progress-fill"
                  style={{ width: "0%", backgroundColor: skill.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
