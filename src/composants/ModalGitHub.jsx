import React, { useEffect, useState } from "react";

export default function ModalGitHub() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github-johndoe")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <>
      <button
        className="hero-btn"
        data-bs-toggle="modal"
        data-bs-target="#githubModal"
      >
        En savoir plus
      </button>

      <div className="modal fade" id="githubModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-center p-4">
            {user && (
              <>
                <img
                  src={user.avatar_url}
                  alt="avatar"
                  className="rounded-circle mb-3"
                  width="120"
                />
                <h5>{user.name}</h5>
                <p>{user.bio}</p>
                <p>Followers : {user.followers}</p>

                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  Voir le profil
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
