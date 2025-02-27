import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import backgroundImage from '../images/bonome.avif'; // Importer l'image locale

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh', // Hauteur de la section
        width: '100vw', // Largeur de la section
        backgroundImage: `url(${backgroundImage})`, // Utiliser l'image importée en fond
        backgroundSize: 'cover', // Faire en sorte que l'image couvre toute la section
        backgroundPosition: 'center', // Centrer l'image
        backgroundRepeat: 'no-repeat', // Ne pas répéter l'image
        marginTop: '50px', // Décalage vers le bas
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: 'left', // Aligner le texte à gauche
          color: '#0a65fc', // Couleur du texte
          padding: 4,
          fontFamily: 'Poppins', // Appliquer la police Poppins
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontFamily: 'Poppins' }}>
          Start as a Freelancer.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Poppins' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Poppins' }}>
          Praesent quis tincidunt metus.
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: 3,
            backgroundColor: '#000',
            color: '#fff',
            fontFamily: 'Poppins', // Appliquer la police au bouton également
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          Become Freelancer Now
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
