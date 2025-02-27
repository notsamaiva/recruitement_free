import { Typography, Box } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ py: 2, textAlign: 'center', backgroundColor: '#fff', marginTop: 'auto' }}>
      <Typography variant="body1" sx={{fontFamily:'Poppins', color:'#333'}}>
        © 2024 Felan. Tous droits réservés.
      </Typography>
    </Box>
  );
}

export default Footer;
