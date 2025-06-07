import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import {
  People as PeopleIcon,
  Favorite as FavoriteIcon,
  Comment as CommentIcon,
  Share as ShareIcon,
} from '@mui/icons-material';

function Statistics() {
  const stats = [
    { title: 'Friends', value: '1,234', icon: <PeopleIcon /> },
    { title: 'Likes', value: '5,678', icon: <FavoriteIcon /> },
    { title: 'Comments', value: '890', icon: <CommentIcon /> },
    { title: 'Shares', value: '432', icon: <ShareIcon /> },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Activity Statistics
      </Typography>
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box sx={{ color: 'primary.main', mb: 1 }}>{stat.icon}</Box>
              <Typography variant="h4" component="div">
                {stat.value}
              </Typography>
              <Typography color="text.secondary">{stat.title}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Statistics; 