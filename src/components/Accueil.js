import React from 'react';
import './Accueil.css'; // Assuming you create a separate CSS file for styles
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Import WhatsAppIcon

const Accueil = () => {
  return (
    <div className="accueil-container">
      <div className="overlay">
        <div className="accueil-content">
          <h1>Book a <span className="highlight">Freelancer</span><br />for any assignment</h1>
          <p>Over 1200+ expert freelancers are waiting for you</p>
          <div className="search-bar">
            <input type="text" placeholder="Service title..." />
            <button>Search</button>
          </div>
          <div className="popular-searches">
            Popular Searches: Technical Support, Business Plans
          </div>
          <Button
            href="#"
            variant="contained"
            sx={{
              bgcolor: '#25D366',
              borderRadius: '32px',
              width: '120px', // Réduire la largeur du bouton
              position: 'fixed', // Positionner le bouton de manière fixe
              bottom: '40px', // Ajustez cette valeur pour le déplacer vers le haut ou vers le bas
              left: '1000px', // Espace de la gauche
              zIndex: 1000, // S'assurer que le bouton est au-dessus des autres éléments
            }}
            startIcon={<WhatsAppIcon />}
          >
            Ask Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
