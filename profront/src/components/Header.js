// Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="bg-body-emphasis sticky-top" data-navbar-shadow-on-scroll="data-navbar-shadow-on-scroll">
      <nav className="navbar navbar-expand-lg container-small px-3 px-lg-7 px-xxl-3">
        <a className="navbar-brand flex-1 flex-lg-grow-0" href="../../index.html">
          <div className="d-flex align-items-center">
            <img src="../../assets/img/icons/logo.png" alt="getprolink" width="120" />
          </div>
        </a>
        <div className="d-lg-none">
          <div className="theme-control-toggle fa-icon-wait px-2">
            <input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control="phoenixTheme" value="dark" id="themeControlToggleSm" />
            <label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggleSm" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Switch theme" style={{ height: '32px', width: '32px' }}>
              <span className="icon" data-feather="moon"></span>
            </label>
            <label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggleSm" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Switch theme" style={{ height: '32px', width: '32px' }}>
              <span className="icon" data-feather="sun"></span>
            </label>
          </div>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="border-bottom border-translucent border-bottom-lg-0 mb-2">
            <div className="search-box d-inline d-lg-none">
              <form className="position-relative">
                <input className="form-control search-input search rounded-pill my-4" type="search" placeholder="Search" aria-label="Search" />
                <span className="fas fa-search search-box-icon"></span>
              </form>
            </div>
          </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item border-bottom border-translucent border-bottom-lg-0"><a className="nav-link lh-1 py-0 fs-9 fw-bold py-3" aria-current="page" href="#">Accueil</a></li>
            <li className="nav-item border-bottom border-translucent border-bottom-lg-0"><a className="nav-link lh-1 py-0 fs-9 fw-bold py-3" href="#feature">Features</a></li>
            <li className="nav-item border-bottom border-translucent border-bottom-lg-0"><a className="nav-link lh-1 py-0 fs-9 fw-bold py-3" href="#blog">Blog</a></li>
            <li className="nav-item"><a className="nav-link lh-1 py-0 fs-9 fw-bold py-3" href="#team">Team</a></li>
          </ul>
          <div className="d-grid d-lg-flex align-items-center">
            <div className="nav-item d-flex align-items-center d-none d-lg-block pe-2">
              <div className="theme-control-toggle fa-icon-wait px-2">
                <input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control="phoenixTheme" value="dark" id="themeControlToggle" />
                <label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Switch theme" style={{ height: '32px', width: '32px' }}>
                  <span className="icon" data-feather="moon"></span>
                </label>
                <label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Switch theme" style={{ height: '32px', width: '32px' }}>
                  <span className="icon" data-feather="sun"></span>
                </label>
              </div>
            </div>
            <a className="text-body-quaternary text-body-tertiary-hover px-2 d-none d-lg-inline lh-sm" href="#" data-bs-toggle="modal" data-bs-target="#searchBoxModal">
              <span data-feather="search" style={{ height: '20px', width: '20px' }}></span>
            </a>
            <a className="btn btn-link text-body order-1 order-lg-0 ps-4 me-lg-2" href="../../pages/authentication/simple/sign-in.html">Sign in</a>
            <a className="btn btn-phoenix-primary order-0" href="../../pages/authentication/simple/sign-up.html">
              <span className="fw-bold">S'inscrire</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
