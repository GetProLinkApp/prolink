// SignUp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    // Ajoutez les autres champs si nécessaire
  });

  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    if (token) {
      setCsrfToken(token);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'X-CSRF-TOKEN': csrfToken,
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post('http://localhost:8000/register', formData, config);
      console.log('Success:', response.data);
      // Gérer la réponse réussie, par exemple, rediriger vers une autre page
    } catch (error) {
      console.error('Error:', error.response?.data);
      // Gérer les erreurs, par exemple, afficher les erreurs de validation
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom et prénom</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="phone">Numéro de téléphone</label>
        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="email">Adresse Mail</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="password">Mot de passe</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      {/* Ajoutez d'autres champs si nécessaire */}
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default SignUp;
