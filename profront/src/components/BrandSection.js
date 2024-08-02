import React from 'react';

const BrandSection = () => {
  const brands = [
    { src: 'path/to/netflix-n.png', alt: 'Netflix' },
    { src: 'path/to/blender.png', alt: 'Blender' },
    { src: 'path/to/upwork.png', alt: 'Upwork' },
    { src: 'path/to/facebook-f.png', alt: 'Facebook' },
    { src: 'path/to/pocket.png', alt: 'Pocket' },
    { src: 'path/to/mail-bluster-1.png', alt: 'Mail Bluster' },
    { src: 'path/to/discord.png', alt: 'Discord' },
    { src: 'path/to/google-g.png', alt: 'Google' }
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
