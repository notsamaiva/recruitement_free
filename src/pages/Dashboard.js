import React from 'react';
import '../App.css';
import Sidebar from '../components/admin/Sidebar';
import { Box, CssBaseline } from '@mui/material';
import DashboardContent from '../components/admin/DashboardContent';
import TopBar from '../components/admin/TopBar';
import Footer from '../components/admin/Footer';

const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
    
          {/* Sidebar fixe avec une largeur définie */}
          <Sidebar />
    
          {/* Contenu principal qui prend en compte la largeur de la sidebar */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
             
            }}
          >
            <TopBar />
            <DashboardContent />
            <Footer />
          </Box>
        </Box>
      );
};

export default Dashboard;
