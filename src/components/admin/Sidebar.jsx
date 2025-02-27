import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Work as WorkIcon,
  ShoppingBag as ShoppingBagIcon,
  Home as HomeIcon,
  People as PeopleIcon,
  AccountBalanceWallet as AccountBalanceWalletIcon,
  Message as MessageIcon,
  Videocam as VideocamIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import Logo from '../../images/felan-logo.svg'; // Importing the logo
import { Link, Route, Routes } from 'react-router-dom';

// Import other components here...

const initialDrawerWidth = 240;

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const drawerWidth = initialDrawerWidth;

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard-employer' },
    { text: 'Manage Projects', icon: <WorkIcon />, path: '/manage-projects' },
    { text: 'Manage Jobs', icon: <WorkIcon />, path: '/manage-jobs' },
    { text: 'Bought Services', icon: <ShoppingBagIcon />, path: '/bought-services' },
    { text: 'My Company', icon: <HomeIcon />, path: '/my-company' },
    { text: 'Follow', icon: <PeopleIcon />, path: '/follow' },
    { text: 'My Package', icon: <AccountBalanceWalletIcon />, path: '/my-package' },
    { text: 'Messages', icon: <MessageIcon />, path: '/messages' },
    { text: 'Meetings', icon: <VideocamIcon />, path: '/meetings' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    { text: 'Logout', icon: <LogoutIcon />, path: '/logout' },
  ];

  const handleMenuItemClick = (text) => {
    setActiveItem(text);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#000',
            color: '#fff',
          },
        }}
      >
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <img
            src={Logo}
            alt="Felan Logo"
            style={{
              maxWidth: '100px',
              height: 'auto',
            }}
          />
        </div>
        <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleMenuItemClick(item.text)}
              component={Link} // Use Link for navigation
              to={item.path}
              sx={{
                backgroundColor: activeItem === item.text ? '#fff' : 'transparent',
                color: activeItem === item.text ? '#000' : '#fff',
                padding: '5px 5px',
                borderRadius: '6px',
                marginBottom: '1px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.3s', // Add transition for smooth effect
                '&:hover': {
                  backgroundColor: '#fff',
                  color: '#000',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: activeItem === item.text ? '#0a65fc' : '#fff',
                  '&:hover': {
                    color: '#0a65fc',
                  },
                  minWidth: '30px',
                  marginRight: '5px',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontFamily: 'Poppins',
                      fontWeight: activeItem === item.text ? 'bold' : 'normal',
                      color: activeItem === item.text ? '#000' : 'inherit',
                    }}
                  >
                    {item.text}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1, padding: 3 }}>
          <Routes>
            <Route path="/dashboard-employer" />
            <Route path="/manage-projects" />
            <Route path="/manage-jobs" />
            <Route path="/bought-services" />
            {/* Add other routes here */}
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
