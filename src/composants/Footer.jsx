import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Colonne 1 */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">John Doe</h5>
            <p>40 rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>10 20 30 40 50</p>

            <div className="d-flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="social-icon"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="social-icon"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="social-icon"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Navigation</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="footer-link">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Réalisations</h5>
            <ul className="list-unstyled">
              <ul className="list-unstyled">
                <li>
                  <Link to="/portfolio">Fresh Food</Link>
                </li>
                <li>
                  <Link to="/portfolio">Restaurant Akira</Link>
                </li>
                <li>
                  <Link to="/portfolio">Espace bien-être</Link>
                </li>
                <li>
                  <Link to="/portfolio">SEO</Link>
                </li>
                <li>
                  <Link to="/portfolio">Création d'une API</Link>
                </li>
                <li>
                  <Link to="/portfolio">Maquette d'un site</Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>

        <hr />

        <p className="text-center small mb-0">
          © 2024 John Doe – Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
