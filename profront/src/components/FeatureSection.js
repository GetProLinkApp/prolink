import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      title: 'Lightning Speed',
      description: 'Present everything you need in one place within minutes! Grow with Phoenix!',
      icon: 'path/to/bolt.png'
    },
    {
      title: 'All-in-one solution',
      description: 'Show your production and growth graph in one place with Phoenix!',
      icon: 'path/to/pie.png'
    }
  ];

  return (
    <section className="pt-15 pb-0" id="feature">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="position-relative z-2">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-start pe-xxl-3">
              <h4 className="text-primary fw-bolder mb-4">Features</h4>
              <h2 className="mb-3 text-body-emphasis lh-base">
                Seamless Payments: A Fully <br className="d-md-none" />Integrated Suite
              </h2>
              <p className="mb-5">
                With the power of Phoenix, you can now focus only on functionaries for your digital products, while leaving the UI design on us!
              </p>
              <a className="btn btn-lg btn-outline-primary rounded-pill me-2" href="#!" role="button">
                Find out more<i className="fa-solid fa-angle-right ms-2"></i>
              </a>
            </div>
            {features.map((feature, index) => (
              <div key={index} className="col-sm-6 col-lg-3 mt-7 text-center text-lg-start">
                <div className="h-100 d-flex flex-column justify-content-between">
                  <div className="border-start-lg border-translucent border-dashed ps-4">
                    <img className="mb-4" src={feature.icon} width="48" height="48" alt="" />
                    <div>
                      <h5 className="fw-bolder mb-2">{feature.title}</h5>
                      <p className="fw-semibold lh-sm">{feature.description}</p>
                    </div>
                    <div>
                      <a className="btn btn-link me-2 p-0 fs-9" href="#!" role="button">
                        Check Demo<span className="fa-solid fa-angle-right ms-2"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row mt-12 align-items-center justify-content-between text-center text-lg-start mb-6 mb-lg-0">
            <div className="col-lg-5">
              <img className="feature-image img-fluid mb-9 mb-lg-0 d-dark-none" src="path/to/22_2.png" alt="" />
              <img className="feature-image img-fluid mb-9 mb-lg-0 d-light-none" src="path/to/dark_22.png" alt="" />
            </div>
            <div className="col-lg-6">
              <h6 className="text-primary mb-2 ls-2">SIGNAL</h6>
              <h3 className="fw-bolder mb-3">Recieve the signals instantly</h3>
              <p className="mb-4 px-md-7 px-lg-0">Phoenix makes it possible for you to quickly and effectively receive every signal. No need for drawn-out waiting.</p>
              <a className="btn btn-link me-2 p-0 fs-9" href="#!" role="button">Check Demo<i className="fa-solid fa-angle-right ms-2"></i></a>
            </div>
          </div>
          <div className="row mt-2 align-items-center justify-content-between text-center text-lg-start mb-6 mb-lg-0">
            <div className="col-lg-5 order-0 order-lg-1">
              <img className="feature-image img-fluid mb-9 mb-lg-0 d-dark-none" src="path/to/23_2.png" height="394" alt="" />
              <img className="feature-image img-fluid mb-9 mb-lg-0 d-light-none" src="path/to/dark_23.png" height="394" alt="" />
            </div>
            <div className="col-lg-6">
              <h6 className="text-primary mb-2 ls-2">REVENUE</h6>
              <h3 className="fw-bolder mb-3">See Your Revenue Grow</h3>
              <p className="mb-4 px-md-7 px-lg-0">Grow with Phoenix. We help you with everything you might need., We make it easy and keep it simple.</p>
              <a className="btn btn-link me-2 p-0 fs-9" href="#!" role="button">Check Demo<i className="fa-solid fa-angle-right ms-2"></i></a>
            </div>
          </div>
          <div className="row mt-2 align-items-center justify-content-between text-center text-lg-start mb-6 mb-lg-0">
            <div className="col-lg-5">
              <img className="feature-image img-fluid mb-9 mb-lg-0 d-dark-none" src="path/to/24_2.png" height="394" alt="" />
              <img className="feature-image img-fluid mb-9 mb-lg-0 d-light-none" src="path/to/dark_24.png" height="394" alt="" />
            </div>
            <div className="col-lg-6 text-center text-lg-start">
              <h6 className="text-primary mb-2 ls-2">REPORTS</h6>
              <h3 className="fw-bolder mb-3">Get Reports Ready</h3>
              <p className="mb-4 px-md-7 px-lg-0">With Phoenix, you can get ready reports on your growth analysis anytime. This dashboard also has all filters accessible according to your needs.</p>
              <a className="btn btn-link me-2 p-0 fs-9" href="#!" role="button">Check Demo<i className="fa-solid fa-angle-right ms-2"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;