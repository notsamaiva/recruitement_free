import React, { useState } from 'react';
import {
  TextField,
  Button,
  Link,
  Typography,
  Box,
  Grid,
  Paper,
  Checkbox,
} from '@mui/material';
import connectImage from '../../images/connect.jpg';
import logoImage from '../../images/felan-logo-1.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Register = () => {
  const [formData, setFormData] = useState({
    role: '',
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Invalid email format.');
      return;
    }

    // Validate password length
    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    // Validate required fields
    if (!formData.role || !formData.first_name || !formData.last_name || !formData.username || !formData.email || !formData.password) {
      alert('Please fill all fields.');
      return;
    }

    // Check terms acceptance
    if (!termsAccepted) {
      alert('You must accept the terms.');
      return;
    }

    // Prepare data to send
    const dataToSend = {
      role: formData.role.trim(),
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
      username: formData.username.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password.trim(),
    };

    console.log('Data to send:', dataToSend); // Debugging line

    // Send data to the server
    try {
      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert('Registration successful!');
      } else {
        const result = await response.json();
        const errorMessage = result.errors ? result.errors.join(', ') : 'Error during registration.';
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Server connection error.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(`Updating ${name} with value: ${value}`); // Debugging line
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Grid container component="main" sx={{ height: '100vh', fontFamily: 'Poppins, sans-serif' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${connectImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          fontFamily: 'Poppins, sans-serif',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <img src={logoImage} alt="Logo" style={{ width: '100px', fontFamily: 'Poppins, sans-serif', height: 'auto', marginBottom: '16px' }} />
          <Typography component="h1" variant="h5" sx={{ marginBottom: '8px' }}>
            Sign Up
          </Typography>
          <Typography component="p" variant="body2" sx={{ marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
            Already have an account? <Link href="/login" variant="body2">Sign in</Link>
          </Typography>

          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Button
                onClick={() => setFormData({ ...formData, role: 'Freelancer' })}
                variant="contained"
                sx={{
                  bgcolor: formData.role === 'Freelancer' ? '#1f72f2' : '#e0e0e0',
                  borderRadius: '32px',
                  width: '150px',
                  mx: 1,
                  height: '48px',
                  '&:hover': { bgcolor: '#333333' },
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                Freelancer
              </Button>
              <Button
                onClick={() => setFormData({ ...formData, role: 'Employer' })}
                variant="contained"
                sx={{
                  bgcolor: formData.role === 'Employer' ? '#1f72f2' : '#e0e0e0',
                  borderRadius: '32px',
                  width: '150px',
                  mx: 1,
                  height: '48px',
                  '&:hover': { bgcolor: '#333333' },
                }}
              >
                Employer
              </Button>
            </Box>
            <Box sx={{ display: 'flex',fontFamily: 'Poppins, sans-serif', justifyContent: 'space-between', mb: 2 }}>
  <Box sx={{ textAlign: 'left', fontFamily: 'Poppins, sans-serif', width: '48%' }}>
    <Typography variant="body2" sx={{ mb: 1, fontFamily: 'Poppins, sans-serif' }}>Nom</Typography>
    <TextField
      margin="normal"
      required
      fullWidth
      id="first_name"
      placeholder="Entrer le Nom"
      name="first_name"
      autoComplete="family-name" // Changed to family-name for last name
      InputLabelProps={{ shrink: true }} // Shrink label when focused
      sx={{ mb: 2 }}
      onChange={handleChange}
    />
  </Box>
  <Box sx={{ textAlign: 'left', width: '48%' }}>
    <Typography variant="body2" sx={{ mb: 1, fontFamily: 'Poppins, sans-serif' }}>Prénom</Typography>
    <TextField
      margin="normal"
      required
      fullWidth
      id="last_name"
      placeholder="Entrer le Prénom"
      name="last_name"
      autoComplete="given-name" // Changed to given-name for first name
      InputLabelProps={{ shrink: true }} // Shrink label when focused
      sx={{ mb: 2 }}
      onChange={handleChange}
    />
  </Box>
</Box>

            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="body2" sx={{ mb: 1, fontFamily: 'Poppins, sans-serif' }}>Nom d'utilisateur</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                placeholder="Entrer le Nom d'utilisateur"
                name="username"
                autoComplete="username"
                InputLabelProps={{ shrink: false }}
                sx={{ mb: 2 }}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="body2" sx={{ mb: 1, fontFamily: 'Poppins, sans-serif' }}>Email</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Entrer l'Email"
                name="email"
                autoComplete="email"
                InputLabelProps={{ shrink: false }}
                sx={{ mb: 2 }}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="body2" sx={{ mb: 1, fontFamily: 'Poppins, sans-serif' }}>Mot de passe</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="Entrer le Mot de passe"
                type="password"
                id="password"
                autoComplete="new-password"
                InputLabelProps={{ shrink: false }}
                sx={{ mb: 2 }}
                onChange={handleChange}
              />
            </Box>

            <Box sx={{ display: 'flex', fontFamily: 'Poppins, sans-serif', alignItems: 'center', my: 2 }}>
              <Checkbox
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />
              <Typography variant="body2">I accept the terms and conditions</Typography>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                mt: 3,
                mb: 2,
                bgcolor: '#111111',
                borderRadius: '32px',
                '&:hover': { bgcolor: '#111111' },
              }}
            >
              Sign Up
            </Button>
            {/* Centrer l'élément "Or Continue with" */}
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Or Continue with
            </Typography>

            {/* Centrer et entourer les icônes des réseaux sociaux dans des ronds */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Box
                sx={{
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#3b5998',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 1,
                }}
              >
                <FacebookIcon sx={{ color: '#ffffff', fontSize: '24px' }} />
              </Box>
              <Box
                sx={{
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#DB4437',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 1,
                }}
              >
                <GoogleIcon sx={{ color: '#ffffff', fontSize: '24px' }} />
              </Box>
              <Box
                sx={{
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#0077b5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 1,
                }}
              >
                <LinkedInIcon sx={{ color: '#ffffff', fontSize: '24px' }} />
              </Box>
            </Box>

            {/* Bouton WhatsApp aligné à droite et réduit en largeur */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Button
                href="#"
                variant="contained"
                sx={{
                  bgcolor: '#25D366',
                  borderRadius: '32px',
                  width: '120px', // Réduire la largeur du bouton
                }}
                startIcon={<WhatsAppIcon />}
              >
                Ask Us
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
