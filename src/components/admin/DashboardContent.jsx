import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { Work, ShoppingCart, MonetizationOn, LocalOffer } from '@mui/icons-material'; // Import des icônes
import Chart from './Chart';
import NewRequests from './NewRequests';

const DashboardContent = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 2,
        marginLeft: { xs: '2000px', sm: '1px' }, // Ajustement de la marge à gauche pour la sidebar
        padding: 3,
        transition: 'margin 0.3s ease',
        backgroundColor: '#F3F3F3',
        minHeight: '100vh',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Titre Bienvenue centré */}
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
          marginBottom: 4,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Bienvenue ! Notsa Maiva
      </Typography>

      <Grid container spacing={4}> {/* Espacement entre les Grid items */}
        {/* Statistiques avec icônes */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Work fontSize="large" color="primary" />
            <Typography variant="body1" fontFamily="'Poppins', sans-serif">Projects Posted</Typography>
            <Typography variant="h4" fontFamily="'Poppins', sans-serif">13</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <ShoppingCart fontSize="large" color="secondary" />
            <Typography variant="body1" fontFamily="'Poppins', sans-serif">Orders</Typography>
            <Typography variant="h4" fontFamily="'Poppins', sans-serif">28</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <MonetizationOn fontSize="large" color="success" />
            <Typography variant="body1" fontFamily="'Poppins', sans-serif">Expenses</Typography>
            <Typography variant="h4" fontFamily="'Poppins', sans-serif">$538</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <LocalOffer fontSize="large" color="error" />
            <Typography variant="body1" fontFamily="'Poppins', sans-serif">Published Offers</Typography>
            <Typography variant="h4" fontFamily="'Poppins', sans-serif">20</Typography>
          </Paper>
        </Grid>

        {/* Section Chart et NewRequests */}
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3 }}>
            <Chart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3 }}>
            <NewRequests />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardContent;
