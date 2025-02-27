import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import FolderIcon from '@mui/icons-material/Folder';
import PackageIcon from '@mui/icons-material/LocalAtm';
import ReviewIcon from '@mui/icons-material/RateReview';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import VideocamIcon from '@mui/icons-material/Videocam';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#212121',
          color: '#fff',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
        <h3 style={{ margin: 0 }}>felan</h3>
        <IconButton style={{ color: '#fff' }}>
          <ArrowBackIosIcon />
        </IconButton>
      </Box>
      <List>
        {/* Dashboard */}
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        {/* Profile */}
        <ListItem button>
          <ListItemIcon>
            <PersonIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        {/* My Services */}
        <ListItem button>
          <ListItemIcon>
            <WorkIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="My Services" />
        </ListItem>
        {/* My Jobs */}
        <ListItem button>
          <ListItemIcon>
            <FolderIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="My Jobs" />
        </ListItem>
        {/* Projects */}
        <ListItem button>
          <ListItemIcon>
            <FolderIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        {/* My Package */}
        <ListItem button>
          <ListItemIcon>
            <PackageIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="My Package" />
        </ListItem>
        {/* My Reviews */}
        <ListItem button>
          <ListItemIcon>
            <ReviewIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="My Reviews" />
        </ListItem>
        {/* My Following */}
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="My Following" />
        </ListItem>
        {/* Messages */}
        <ListItem button>
          <ListItemIcon>
            <MessageIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        {/* Meetings */}
        <ListItem button>
          <ListItemIcon>
            <VideocamIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Meetings" />
        </ListItem>
        {/* Wallet */}
        <ListItem button>
          <ListItemIcon>
            <WalletIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Wallet" />
        </ListItem>
        {/* Settings */}
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
