import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Avatar, Button, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import serviceImage from '../images/services.jfif'; // Importation de l'image

// Les données des services
const services = [
  {
    id: 1,
    image: serviceImage,
    name: 'Thomas Shelby',
    title: 'eBook Writer for Professionally Written...',
    rating: 4.5,
    reviews: 1,
    price: 12,
  },
  {
    id: 2,
    image: serviceImage,
    name: 'Kianna Ble',
    title: 'I will ghostwrite ebooks on personal finance and...',
    rating: 0,
    reviews: 0,
    price: 40,
  },
  {
    id: 3,
    image: serviceImage,
    name: 'Lucy Haley',
    title: 'I will optimize your website with expert ecommerce...',
    rating: 0,
    reviews: 0,
    price: 275,
  },
  {
    id: 4,
    image: serviceImage,
    name: 'Kianna Ble',
    title: 'I will do accounting and bookkeeping in quickbooks...',
    rating: 0,
    reviews: 0,
    price: 40,
  },
];

// Le composant de la carte d'un service
const ServiceCard = ({ service }) => {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 4, marginBottom: 2, fontFamily: 'Poppins, sans-serif' }}>
      <Box sx={{ position: 'relative' }}>
        <img src={service.image} alt={service.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
        <IconButton
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            backgroundColor: 'white',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          <FavoriteBorderIcon />
        </IconButton>
      </Box>
      <CardContent>
        <Box display="flex" alignItems="center" mb={1}>
          <Avatar alt={service.name} src={`/images/${service.name}.jpg`} sx={{ width: 30, height: 30 }} />
          <Typography variant="body2" color="text.secondary" ml={1} sx={{ fontFamily: 'Poppins, sans-serif' }}>
            by {service.name}
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ fontSize: '1rem', fontFamily: 'Poppins, sans-serif' }} gutterBottom>
          {service.title}
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <StarIcon sx={{ color: 'gold', fontSize: '16px' }} />
          <Typography variant="body2" ml={0.5} sx={{ fontFamily: 'Poppins, sans-serif' }}>
            {service.rating} ({service.reviews})
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Poppins, sans-serif' }}>
          From ${service.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Le composant de la section Trending Services
const TrendingServices = () => {
  return (
    <Box sx={{ padding: '20px 40px', fontFamily: 'Poppins, sans-serif' }}>
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.id}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrendingServices;
