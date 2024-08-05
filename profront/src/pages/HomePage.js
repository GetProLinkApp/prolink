import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SearchModal from '../components/SearchModal';
import BrandSection from '../components/BrandSection';
import FeatureSection from '../components/FeatureSection';

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
    <div>
      <Header />
      <HeroSection />
      <SearchModal />
      <BrandSection />
      <FeatureSection />
      {/* Ajoutez ici d'autres composants ou routes */}
    </div>
  );
};

export default HomePage;
