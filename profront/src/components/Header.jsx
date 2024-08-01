import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg container-small px-3 px-lg-7 px-xxl-3">
        <a className="navbar-brand flex-1 flex-lg-grow-0" href="../../index.html">
          <div className="d-flex align-items-center">
            <img src="../../assets/img/icons/logo.png" alt="getprolink" width="120" />
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item border-bottom border-translucent border-bottom-lg-0">
              <a className="nav-link lh-1 py-0 fs-9 fw-bold py-3" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item border-bottom border-translucent border-bottom-lg-0">
              <a className="nav-link lh-1 py-0 fs-9 fw-bold py-3" href="#feature">Features</a>
            </li>
            <li className="nav-item border-bottom border-translucent border-bottom-lg-0">
              <a className="nav-link lh-1 py-0 fs-9 fw-bold py-3" href="#blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link lh-1 py-0 fs-9 fw-bold py-3" href="#team">Team</a>
            </li>
          </ul>
          <div className="d-grid d-lg-flex align-items-center">
            <a className="btn btn-link text-body order-1 order-lg-0 ps-4 me-lg-2" href="../../pages/authentication/simple/sign-in.html">Se Connecter</a>
            <a className="btn btn-phoenix-primary order-0" href="../../pages/authentication/simple/sign-up.html">
              <span className="fw-bold">S'inscrire</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
