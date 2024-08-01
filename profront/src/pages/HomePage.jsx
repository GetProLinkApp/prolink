import React from 'react';
import Header from '../components/Header';       // Import du composant Header
import HeroSection from '../components/HeroSection'; // Import du composant HeroSection
import '../assets/css/theme-rtl.min.css';
import '../assets/css/theme.min.css';
import '../assets/css/user-rtl.min.css';
import '../assets/css/user.min.css';
import '../assets/vendors/simplebar/simplebar.min.css';
import '../assets/vendors/leaflet/leaflet.css';
import '../assets/vendors/leaflet.markercluster/MarkerCluster.css';
import '../assets/vendors/leaflet.markercluster/MarkerCluster.Default.css';

const HomePage = () => {
    return (
      <div className="home-page">
        <Header />
        <HeroSection />
      </div>
    );
  }
  
  export default HomePage;