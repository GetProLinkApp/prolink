// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './components/SignUp';
// Importez d'autres pages si nécessaire

const App = () => {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

    </Router>
  );
};

export default App;

     