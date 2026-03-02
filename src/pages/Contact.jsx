import React from "react";
import "../styles/globalstyle.css";

export default function Contact() {
  return (
    <>
      <section className="contact-page">
        <div className="container">
          {/* Titre */}
          <h1 className="contact-title">Contact</h1>
          <p className="contact-subtitle">
            Pour me contacter en vue d&apos;un entretien ou d&apos;une future
            collaboration, merci de remplir le formulaire de contact.
          </p>
          <div className="contact-line"></div>

          {/* Card 2 colonnes */}
          <div className="contact-card">
            {/* Colonne gauche : formulaire */}
            <div className="contact-left">
              <h2>Formulaire de contact</h2>
              <div className="blue-line"></div>

              <form className="contact-form">
                <input type="text" placeholder="Votre nom" />
                <input type="email" placeholder="Votre adresse email" />
                <input type="tel" placeholder="Votre numéro de téléphone" />
                <input type="text" placeholder="Sujet" />
                <textarea placeholder="Votre message" rows="10"></textarea>

                <button type="submit" className="contact-btn">
                  Envoyer
                </button>
              </form>
            </div>

            {/* Colonne droite : coordonnées + map */}
            <div className="contact-right">
              <h2>Mes coordonnées</h2>
              <div className="blue-line"></div>

              <div className="contact-info">
                <strong>John Doe</strong>
                <p>40 rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p>10 20 30 40 50</p>
                <p>john.doe@gmail.com</p>
              </div>

              <div className="map-wrapper">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=40%20Rue%20Laure%20Diebold%2069009%20Lyon&output=embed"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
