import React from "react";
import { Link } from "react-router-dom";
import photo from "./images/photo.webp";

function NAvbsr() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg border-body navbar-fixed"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a
            class="navbar-brand"
            href="https://www.linkedin.com/in/pritam-muli-92985a204/"
            target="_blank"
            title="Know more"
          >
            <img src={photo} className="logo-image" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-disabled="true" to="/resume">
                  Resume
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-disabled="true" to="/certification">
                  Certification
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NAvbsr;
