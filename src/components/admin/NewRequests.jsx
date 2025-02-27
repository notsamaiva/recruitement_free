import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Box, Button } from '@mui/material';

const NewRequests = () => {
  const requests = [
    { name: 'Independent Worker', role: 'Commercial Development', date: 'July 15, 2024' },
    { name: 'Independent Worker', role: 'Marketing Group Manager', date: 'July 15, 2024' },
  ];

  return (
    <Box>
      <Typography variant="h6" sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>
        New Requests
      </Typography>
      <List>
        {requests.map((request, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar alt={request.name} src="/path-to-image" />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography sx={{ fontFamily: 'Poppins' }}>{request.role}</Typography>
              }
              secondary={
                <Typography sx={{ fontFamily: 'Poppins' }}>
                  {`${request.name} - Applied on ${request.date}`}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
      {/* Bouton "Tous les candidats" au centre */}
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Button variant="contained" sx={{ fontFamily: 'Poppins' }}>
          Tous les candidats
        </Button>
      </Box>
    </Box>
  );
};

export default NewRequests;
