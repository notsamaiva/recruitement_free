import { AppBar, Toolbar, Typography, IconButton, Avatar, Box, TextField, Badge, Select, MenuItem, FormControl } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications'; // Icône de notification
import MessageIcon from '@mui/icons-material/Message'; // Icône de message
import SearchIcon from '@mui/icons-material/Search'; // Icône de recherche
import PaletteIcon from '@mui/icons-material/Palette'; // Icône de thème

const TopBar = () => {
  const notificationCount = 3; // Exemple de nombre de notifications
  const messageCount = 2; // Exemple de nombre de messages

  // État pour la connexion de l'utilisateur
  const isConnected = true; // Mettez cela à true ou false selon l'état de connexion de l'utilisateur

  return (
    <AppBar
      position="relative"
      sx={{
        width: '100%',
        backgroundColor: '#fff',
        color: '#000',
        boxShadow: 'none',
        borderBottom: '1px solid #ccc',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" noWrap component="div" sx={{ fontFamily: 'Poppins' }}>
          Dashboard
        </Typography>

        {/* Barre de recherche réduite */}
        <Box sx={{ flexGrow: 1, mx: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Rechercher..."
            size="small"
            fullWidth
            sx={{ maxWidth: 300 }}
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: '#000' }} />,
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Sélecteur de langue avec drapeaux */}
          <FormControl variant="standard" sx={{ minWidth: 100, marginRight: 2 }}>
            <Select
              labelId="language-select-label"
              defaultValue="fr" // Mettre "fr" comme valeur par défaut
              label="Langue"
              sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Poppins' }}
              renderValue={(value) => {
                switch (value) {
                  case 'fr':
                    return <span><img src="https://flagcdn.com/fr.svg" alt="Français" style={{ width: 20, marginRight: 5, fontFamily: 'Poppins' }} /> Français</span>;
                  case 'en':
                    return <span><img src="https://flagcdn.com/gb.svg" alt="English" style={{ width: 20, marginRight: 5, fontFamily: 'Poppins' }} /> Anglais</span>;
                  case 'es':
                    return <span><img src="https://flagcdn.com/es.svg" alt="Espagnol" style={{ width: 20, marginRight: 5, fontFamily: 'Poppins' }} /> Espagnol</span>;
                  default:
                    return 'fr'; // Renvoie le français par défaut
                }
              }}
            >
              <MenuItem value="fr">
                <span>
                  <img src="https://flagcdn.com/fr.svg" alt="Français" style={{ width: 20, marginRight: 5, fontFamily: 'Poppins' }} />
                  Français
                </span>
              </MenuItem>
              <MenuItem value="en">
                <span>
                  <img src="https://flagcdn.com/gb.svg" alt="English" style={{ width: 20, marginRight: 5, fontFamily: 'Poppins' }} />
                  Anglais
                </span>
              </MenuItem>
              <MenuItem value="es">
                <span>
                  <img src="https://flagcdn.com/es.svg" alt="Espagnol" style={{ width: 20, marginRight: 5, fontFamily: 'Poppins' }} />
                  Espagnol
                </span>
              </MenuItem>
            </Select>
          </FormControl>

          {/* Sélecteur de thème */}
          <IconButton color="inherit">
            <PaletteIcon sx={{ color: '#212121' }} />
          </IconButton>

          {/* Badge pour les notifications */}
          <IconButton color="inherit">
            <Badge badgeContent={notificationCount} color="error">
              <NotificationsIcon sx={{ color: '#212121' }} />
            </Badge>
          </IconButton>

          {/* Badge pour les messages */}
          <IconButton color="inherit">
            <Badge badgeContent={messageCount} color="error">
              <MessageIcon sx={{ color: '#212121' }} />
            </Badge>
          </IconButton>

          {/* Avatar de l'utilisateur et son nom */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 2, position: 'relative' }}>
            <Avatar alt="Hounang Loic" src="/path-to-avatar-image" />
            {/* Indicateur de connexion */}
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: isConnected ? 'green' : 'red', // Vert si connecté, rouge si déconnecté
                position: 'absolute',
                bottom: 0,
                right: 114,
                border: '2px solid #fff', // Optionnel : bordure blanche pour plus de contraste
              }}
            />
            <Typography variant="body1" sx={{ marginLeft: 1, fontFamily: 'Poppins' }}>
              Hounang Loic
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
