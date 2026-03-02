import React from "react";
import "../styles/globalstyle.css";

export default function Services() {
  return (
    <>
      <section className="services-hero"></section>

      <section className="services-section">
        <div className="container">
          <h1 className="services-title">Mon offre de services</h1>
          <p className="services-subtitle">
            Voici les prestations sur lesquelles je peux intervenir
          </p>
          <div className="services-line"></div>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-icon">✎</div>
                <h3>UX Design</h3>
                <p>
                  L’UX Design consiste à concevoir des produits en plaçant
                  l’utilisateur au centre des préoccupations.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-icon">&lt;/&gt;</div>
                <h3>Développement web</h3>
                <p>
                  Création de sites internet avec HTML, CSS, JavaScript, PHP et
                  frameworks comme React ou Bootstrap.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-icon">🔍</div>
                <h3>Référencement</h3>
                <p>
                  Optimisation SEO pour améliorer le positionnement sur Google
                  et attirer plus de visiteurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
