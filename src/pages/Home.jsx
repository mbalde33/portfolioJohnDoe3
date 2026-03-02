import React from "react";
import "../styles/globalstyle.css";
import ModaleGitHub from "../composants/ModalGitHub.jsx";
import About from "../composants/About";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="hero d-flex flex-column justify-content-center align-items-center text-center text-white"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="container">
          <h1 className="fw-bold">Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>

          {/* Bouton + modale GitHub */}
          <div className="mt-4">
            <ModaleGitHub />
          </div>
        </div>
      </section>
      <About />
    </>
  );
}
