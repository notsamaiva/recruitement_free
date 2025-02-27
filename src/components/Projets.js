import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Avatar, IconButton, Divider } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import serviceImage from '../images/services.jfif'; // Assurez-vous que l'image est accessible

// Les données des projets
const projects = [
  {
    id: 1,
    image: serviceImage,
    category: 'Resume Writing',
    title: 'Write professional resume, cover letter, and LinkedIn...',
    minPrice: 10,
    user: 'Nagarro',
    userAvatar: serviceImage,
    timeAgo: '1 month ago',
    sentProposals: 2,
  },
  {
    id: 2,
    image: serviceImage,
    category: '3D Product Animation',
    title: 'Edit travel and vacation footage to an amazing...',
    minPrice: 15,
    user: 'Uplace',
    userAvatar: serviceImage,
    timeAgo: '1 month ago',
    sentProposals: 2,
  },
  {
    id: 3,
    image: serviceImage,
    category: 'Articles & Blog Posts',
    title: 'Write the best Dutch SEO blog, website content...',
    minPrice: 20,
    maxPrice: 40,
    user: 'Grafana Labs',
    userAvatar: serviceImage,
    timeAgo: '1 month ago',
    sentProposals: 0,
  },
  {
    id: 4,
    image: serviceImage,
    category: 'Landing Pages',
    title: 'Build WordPress Website Design, Elementor...',
    maxPrice: 800,
    user: 'Kong Hub',
    userAvatar: serviceImage,
    timeAgo: '3 months ago',
    sentProposals: 3,
  },
];

// Le composant de la carte d'un projet
const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ borderRadius: 1, marginBottom: 2 }}>
      <Grid container>
        <Grid item xs={4}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {project.category}
            </Typography>
            <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: 1 }}>
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.minPrice ? `Min $${project.minPrice}/hour` : `Max $${project.maxPrice}/month`}
            </Typography>

            <Box display="flex" alignItems="center" mt={1}>
              <Avatar alt={project.user} src={project.userAvatar} sx={{ width: 24, height: 24, marginRight: 1 }} />
              <Typography variant="body2" color="text.secondary">
                by {project.user}
              </Typography>
            </Box>

            {/* Ligne de séparation */}
            <Divider sx={{ marginY: 1 }} />

            <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
              <Box display="flex" alignItems="center">
                <AccessTimeIcon sx={{ fontSize: 16, marginRight: 0.5 }} />
                <Typography variant="body2" color="text.secondary">
                  {project.timeAgo}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <PersonIcon sx={{ fontSize: 16, marginRight: 0.5 }} />
                <Typography variant="body2" color="text.secondary">
                  {project.sentProposals} sent proposal{project.sentProposals > 1 ? 's' : ''}
                </Typography>
              </Box>
              <IconButton size="small">
                <FavoriteBorderIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

// Le composant pour la section des projets
const Projets = () => {
  return (
    <Box sx={{ padding: '20px 40px', fontFamily: 'Poppins, sans-serif' }}>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projets;
