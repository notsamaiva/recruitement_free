import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Menu, MenuItem, Typography, Grid, Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import images from '../images/portrait.jfif';
import Logo from '../images/felan-logo-1.svg';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentMenu, setCurrentMenu] = useState(null);
    const [user, setUser] = useState(null); // État pour stocker les informations de l'utilisateur
    const token = localStorage.getItem('token');

    const handleMenuOpen = (event, menu) => {
        setAnchorEl(event.currentTarget);
        setCurrentMenu(menu);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setCurrentMenu(null);
    };

    // Fonction pour récupérer les données de l'utilisateur connecté
    const fetchUserData = async () => {
        const token = localStorage.getItem('token'); // Récupérer le token depuis le stockage local
    
        try {
            const response = await fetch('http://127.0.0.1:8000/api/user/', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Inclure le token dans l'en-tête
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
    
            const data = await response.json();
            console.log(data); // Traitez les données de l'utilisateur ici
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <AppBar position="fixed" style={{ backgroundColor: 'white', zIndex: 999 }}>
            <Toolbar style={{ padding: '0 20px' }}>
                <img src={Logo} alt="Logo" style={{ height: '20px', marginRight: '20px' }} />

                <Button
                    onClick={(e) => handleMenuOpen(e, 'categories')}
                    style={{ color: 'black', fontFamily: 'Poppins', textTransform: 'none' }}
                >
                    Cats <ArrowDropDownIcon />
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={currentMenu === 'categories'}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    PaperProps={{
                        style: { padding: '20px', maxHeight: '400px' },
                    }}
                >
                    <Box>
                        <Typography variant="h6" style={{ paddingLeft: '16px', fontFamily: 'Poppins' }}>
                            Browse services
                        </Typography>
                        <Grid container spacing={2} style={{ padding: '10px 20px' }}>
                            <Grid item xs={6} sm={3}>
                                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                                    Graphic & Design
                                </Typography>
                                <MenuItem>App Design</MenuItem>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                                    Programming & Tech
                                </Typography>
                                <MenuItem>Business Websites</MenuItem>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                                    Photography & Editor
                                </Typography>
                                <MenuItem>Audiobook Production</MenuItem>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                                    Marketing & Sales
                                </Typography>
                                <MenuItem>E-Commerce Marketing</MenuItem>
                            </Grid>
                        </Grid>
                    </Box>
                </Menu>

                <Button
                    onClick={(e) => handleMenuOpen(e, 'listings')}
                    style={{ color: 'black', fontFamily: 'Poppins', textTransform: 'none' }}
                >
                    Listings <ArrowDropDownIcon />
                </Button>

                <Menu
                    anchorEl={anchorEl}
                    open={currentMenu === 'listings'}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    PaperProps={{
                        style: { padding: '10px' },
                    }}
                >
                    <MenuItem
                        onMouseOver={(e) => handleMenuOpen(e, 'services')}
                        onClick={handleMenuClose}
                        style={{ paddingRight: '50px' }}
                    >
                        Services <ArrowDropDownIcon />
                    </MenuItem>
                    <Menu
                        anchorEl={anchorEl}
                        open={currentMenu === 'services'}
                        onClose={handleMenuClose}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    >
                        <MenuItem onClick={handleMenuClose}>Popup Detail</MenuItem>
                    </Menu>

                    <MenuItem
                        onMouseOver={(e) => handleMenuOpen(e, 'projects')}
                        onClick={handleMenuClose}
                        style={{ paddingRight: '50px' }}
                    >
                        Projects <ArrowDropDownIcon />
                    </MenuItem>
                </Menu>

                <Button
                    onClick={(e) => handleMenuOpen(e, 'users')}
                    style={{ color: 'black', fontFamily: 'Poppins', textTransform: 'none' }}
                >
                    Users <ArrowDropDownIcon />
                </Button>
                <Button
                    onClick={(e) => handleMenuOpen(e, 'pages')}
                    style={{ color: 'black', fontFamily: 'Poppins', textTransform: 'none' }}
                >
                    Pages <ArrowDropDownIcon />
                </Button>
                <Button
                    onClick={(e) => handleMenuOpen(e, 'blogs')}
                    style={{ color: 'black', fontFamily: 'Poppins', textTransform: 'none' }}
                >
                    Blogs <ArrowDropDownIcon />
                </Button>

                <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                    {/* Afficher les informations de l'utilisateur si connecté */}
                    {user ? (
                        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                            <img
                                src={images} // Remplacez par votre image de profil
                                alt="Profil"
                                style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
                            />
                            <div style={{ textAlign: 'right' }}>
                                <Typography variant="h6" style={{ fontSize: '18px', marginBottom: '2px', color: 'black' }}>
                                    {user.username}
                                </Typography>
                                <Typography variant="body2" style={{ fontSize: '14px', color: 'gray' }}>
                                    {user.role}
                                </Typography>
                            </div>
                        </div>
                    ) : null}
                    {/* Bouton de connexion */}
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button
                            color="primary"
                            variant="contained"
                            style={{
                                backgroundColor: '#0a65fc',
                                color: 'white',
                                fontFamily: 'Poppins',
                                textTransform: 'none',
                            }}
                        >
                            se connecter
                        </Button>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
