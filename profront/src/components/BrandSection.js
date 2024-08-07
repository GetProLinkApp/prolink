import React from 'react';

const BrandSection = () => {
  const brands = [
    { src: '../assets/img/brand2/netflix-n.png', alt: 'Netflix' },
    { src: '../assets/img/brand2/blender.png', alt: 'Blender' },
    { src: '../assets/img/brand2/upwork.png', alt: 'Upwork' },
    { src: '../assets/img/brand2/facebook-f.png', alt: 'Facebook' },
    { src: '../assets/img/brand2/pocket.png', alt: 'Pocket' },
    { src: '../assets/img/brand2/mail-bluster-1.png', alt: 'Mail Bluster' },
    { src: '../assets/img/brand2/discord.png', alt: 'Discord' },
    { src: '../assets/img/brand2/google-g.png', alt: 'Google' }
  ];

  return (
    <section className="py-5 pt-xl-13 bg-body-emphasis">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="row g-0">
          {brands.map((brand, index) => (
            <div key={index} className="col-6 col-md-3">
              <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-bottom border-translucent border-end">
                <img className="w-100" src={brand.src} alt={brand.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
