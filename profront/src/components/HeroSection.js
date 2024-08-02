// HeroSection.js
import React from 'react';
import '../assets/vendors/mapbox-gl/mapbox-gl.css';

const HeroSection = () => {
  return (
    <section className="bg-body-emphasis pb-8" id="home">
      <div className="container-small hero-header-container px-lg-7 px-xxl-3">
        <div className="row align-items-center">
          <div className="col-12 col-lg-auto order-0 order-md-1 text-end order-1">
            <div className="position-relative p-5 p-md-7 d-lg-none">
              <div className="bg-holder" style={{ backgroundImage: 'url(../../assets/img/bg/bg-23.png)', backgroundSize: 'contain' }}></div>
              <div className="position-relative">
                <img className="w-100 shadow-lg d-dark-none rounded-2" src="../../assets/img/bg/bg-31.png" alt="hero-header" />
                <img className="w-100 shadow-lg d-light-none rounded-2" src="../../assets/img/bg/bg-30.png" alt="hero-header" />
              </div>
            </div>
            <div className="hero-image-container position-absolute top-0 bottom-0 end-0 d-none d-lg-block">
              <div className="position-relative h-100 w-100">
                <div className="position-absolute h-100 top-0 d-flex align-items-center end-0 hero-image-container-bg">
                  <img className="pt-7 pt-md-0 w-100" src="../../assets/img/bg/bg-1-2.png" alt="hero-header" />
                </div>
                <div className="position-absolute h-100 top-0 d-flex align-items-center end-0">
                  <img className="pt-7 pt-md-0 w-100 shadow-lg d-dark-none rounded-2" src="../../assets/img/bg/bg-28.png" alt="hero-header" />
                  <img className="pt-7 pt-md-0 w-100 shadow-lg d-light-none rounded-2" src="../../assets/img/bg/bg-29.png" alt="hero-header" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 text-lg-start text-center pt-8 pb-6 order-0 position-relative">
            <h1 className="fs-3 fs-lg-2 fs-md-1 fs-lg-2 fs-xl-1 fs fw-black mb-4">
              <span className="text-primary me-3">Elegance</span>for<br />your web app
            </h1>
            <p className="mb-5">Standard, modern and Elegant solution for your next web app so you don’t have to look further. Sign up or check the demo below.</p>
            <a className="btn btn-lg btn-primary rounded-pill me-3" href="#!" role="button">Sign up</a>
            <a className="btn btn-link me-2 fs-8 p-0" href="#!" role="button">Check Demo<span className="fa-solid fa-angle-right ms-2 fs-9"></span></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
