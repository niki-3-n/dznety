import React from 'react';
import { Container, Paper, Avatar, Typography, Grid, Box } from '@mui/material';

function Profile() {
  const user = {
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/150',
    bio: 'Software Developer | React Enthusiast',
    location: 'New York, USA',
    joinDate: 'January 2023',
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Avatar
              src={user.avatar}
              alt={user.name}
              sx={{ width: 150, height: 150, mx: 'auto', mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {user.bio}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                <strong>Location:</strong> {user.location}
              </Typography>
              <Typography variant="body1">
                <strong>Member since:</strong> {user.joinDate}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Profile; 