import React, { useEffect } from 'react';
import '../assets/css/theme-rtl.min.css';
import '../assets/css/theme.min.css';
import '../assets/css/user-rtl.min.css';
import '../assets/css/user.min.css';
import '../assets/vendors/simplebar/simplebar.min.css';
import '../assets/vendors/leaflet/leaflet.css';
import '../assets/vendors/leaflet.markercluster/MarkerCluster.css';
import '../assets/vendors/leaflet.markercluster/MarkerCluster.Default.css';

const HomePage = () => {
  useEffect(() => {
    
   // Ajouter les styles externes
   const linkUnicons = document.createElement('link');
   linkUnicons.rel = 'stylesheet';
   linkUnicons.href = 'https://unicons.iconscout.com/release/v4.0.8/css/line.css';
   document.head.appendChild(linkUnicons);

   // Appliquer la logique conditionnelle
   const phoenixIsRTL = window.config?.config?.phoenixIsRTL;
   if (phoenixIsRTL) {
     const linkDefault = document.getElementById('style-default');
     const userLinkDefault = document.getElementById('user-style-default');
     if (linkDefault) linkDefault.setAttribute('disabled', true);
     if (userLinkDefault) userLinkDefault.setAttribute('disabled', true);
     document.querySelector('html').setAttribute('dir', 'rtl');
   } else {
     const linkRTL = document.getElementById('style-rtl');
     const userLinkRTL = document.getElementById('user-style-rtl');
     if (linkRTL) linkRTL.setAttribute('disabled', true);
     if (userLinkRTL) userLinkRTL.setAttribute('disabled', true);
   }

   // Nettoyage lors du démontage du composant
   return () => {
     document.head.removeChild(linkUnicons);
     // Nettoyer d'autres liens si nécessaire
   };
 }, []);

  return (
    <div>
      <nav className="navbar navbar-vertical navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
          <div className="navbar-vertical-content">
            <ul className="navbar-nav flex-column" id="navbarVerticalNav">
              <li className="nav-item">
                <div className="nav-item-wrapper">
                  <a
                    className="nav-link dropdown-indicator label-1"
                    href="#nv-home"
                    role="button"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="nv-home"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown-indicator-icon-wrapper">
                        <span className="fas fa-caret-right dropdown-indicator-icon"></span>
                      </div>
                      <span className="nav-link-icon">
                        <span data-feather="pie-chart"></span>
                      </span>
                      <span className="nav-link-text">Home</span>
                      <span
                        className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                        style={{ fontSize: '6px' }}
                      ></span>
                    </div>
                  </a>
                  <div className="parent-wrapper label-1">
                    <ul
                      className="nav collapse parent show"
                      data-bs-parent="#navbarVerticalCollapse"
                      id="nv-home"
                    >
                      <li className="collapsed-nav-item-title d-none">Home</li>
                      <li className="nav-item">
                        <a className="nav-link active" href="index.html">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">E-commerce</span>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="dashboard/project-management.html">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Project management</span>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="dashboard/crm.html">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">CRM</span>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="dashboard/travel-agency.html">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Travel agency</span>
                            <span className="badge ms-2 badge-phoenix badge-phoenix-warning">
                              New
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="apps/social/feed.html">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">Social feed</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* Continue with other nav items here */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;
