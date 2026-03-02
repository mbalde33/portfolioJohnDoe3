import React, { useEffect } from "react";

export default function MentionsLegales() {
  // Empêche l’indexation par les moteurs de recherche
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="text-center fw-bold mb-5">Mentions légales</h1>

        <div className="accordion" id="accordionLegal">
          {/* Éditeur du site */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                Éditeur du site
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionLegal"
            >
              <div className="accordion-body">
                <strong>John Doe</strong>
                <br />
                40 rue Laure Diebold
                <br />
                69009 Lyon, France
                <br />
                Téléphone : 10 20 30 40 50
                <br />
                Email : johndoe@gmail.com
              </div>
            </div>
          </div>

          {/* Hébergeur */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                Hébergeur du site
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionLegal"
            >
              <div className="accordion-body">
                <strong>OVHcloud</strong>
                <br />
                2 rue Kellermann
                <br />
                59100 Roubaix, France
                <br />
                Téléphone : 1007
                <br />
                Site : https://www.ovhcloud.com
              </div>
            </div>
          </div>

          {/* Crédits */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionLegal"
            >
              <div className="accordion-body">
                Les images utilisées sur ce site proviennent de{" "}
                <a
                  href="https://pixabay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pixabay
                </a>
                .
                <br />
                <br />
                Le favicon a été réalisé à partir de ressources disponibles sur{" "}
                <a
                  href="https://www.flaticon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Flaticon
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
