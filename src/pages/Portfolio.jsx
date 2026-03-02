import React from "react";
import "../styles/globalstyle.css";

export default function Portfolio() {
  const projets = [
    {
      title: "Fresh Food",
      desc: "Site de vente de produits frais en ligne",
      tech: "PHP & MySQL",
      img: "/images/fresh-food.jpg",
      link: "#",
    },
    {
      title: "Restaurant Akira",
      desc: "Site vitrine d’un restaurant japonais",
      tech: "WordPress",
      img: "/images/restaurant-japonais.jpg",
      link: "#",
    },
    {
      title: "Espace bien-être",
      desc: "Site vitrine pour un centre de bien-être",
      tech: "Laravel",
      img: "/images/espace-bien-etre.jpg",
      link: "#",
    },
    {
      title: "Optimisation SEO",
      desc: "Amélioration du référencement naturel",
      tech: "SEO",
      img: "/images/seo.jpg",
      link: "#",
    },
    {
      title: "API REST",
      desc: "Création d’une API publique",
      tech: "Symfony",
      img: "/images/coder.jpg",
      link: "#",
    },
    {
      title: "Maquette UI",
      desc: "Prototype d’un site moderne",
      tech: "Figma",
      img: "/images/screens.jpg",
      link: "#",
    },
  ];

  return (
    <>
      <section className="page-banner"></section>

      <section className="portfolio-section py-5 text-center">
        <div className="container">
          <h1 className="fw-bold mb-2">Portfolio</h1>
          <p className="text-muted">Voici quelques-unes de mes réalisations</p>

          <div
            style={{
              width: "300px",
              height: "4px",
              background: "#0d6efd",
              margin: "20px auto 50px auto",
            }}
          ></div>

          <div className="row g-4">
            {projets.map((projet, index) => (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div className="card portfolio-card h-100">
                  <img
                    src={projet.img}
                    className="card-img-top"
                    alt={projet.title}
                    style={{ height: "180px", objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <h5 className="card-title fw-bold">{projet.title}</h5>

                    <p className="card-text text-muted">{projet.desc}</p>

                    <a
                      href={projet.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn portfolio-btn mt-2"
                    >
                      Voir le site
                    </a>
                  </div>

                  <div className="card-footer text-muted small">
                    {projet.tech}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
