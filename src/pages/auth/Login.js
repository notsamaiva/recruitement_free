import React, { useState } from 'react';
import { TextField, Button, Link, Typography, Box, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import connectImage from '../../images/connect.jpg';
import logoImage from '../../images/felan-logo-1.svg';
import '@fontsource/poppins'; // Import the Poppins font
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    if (!email || !password) {
      setError('Email and password are required.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username_or_email: email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('authToken', data.token); // Store token
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        setError(
          errorData.non_field_errors 
            ? errorData.non_field_errors[0] 
            : 'Invalid email or password. Please try again.'
        );
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
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
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', fontFamily: 'Poppins, sans-serif' }}>
          <img src={logoImage} alt="Logo" style={{ width: '100px', height: 'auto', marginBottom: '16px' }} />
          <Typography component="h1" variant="h5" sx={{ marginBottom: '8px', fontFamily: 'Poppins, sans-serif' }}>
            Sign in
          </Typography>
          <Typography component="p" variant="body2" sx={{ marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
            or don't have an account?{' '}
            <Link href="/register" variant="body2">Sign up</Link>
          </Typography>

          {error && <Typography color="error" variant="body2" sx={{ mb: 2 }}>{error}</Typography>}

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="body2" sx={{ mb: 1, fontFamily: 'Poppins, sans-serif' }}>Account or Email</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Enter Account or Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                autoFocus
                InputLabelProps={{ shrink: false }}
                sx={{ mb: 2 }}
              />
            </Box>

            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="body2" sx={{ mb: 1, fontFamily: 'Poppins, sans-serif' }}>Password</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="Enter Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                InputLabelProps={{ shrink: false }}
                sx={{ mb: 2 }}
              />
            </Box>

            <Link href="#" variant="body2" sx={{ textAlign: 'left', display: 'block', width: '100%', mb: 2 }}>
              Forgot your password? Reset password.
            </Link>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: '#111111',
                border: '2px solid #111111',
                borderRadius: '32px',
                fontFamily: 'Poppins, sans-serif',
                '&:hover': { bgcolor: '#111111', },
              }}
            >
              {loading ? 'Signing in...' : 'Sign in'}
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

export default Login;
