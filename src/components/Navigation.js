import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Social Network
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Profile
          </Button>
          <Button color="inherit" component={RouterLink} to="/statistics">
            Statistics
          </Button>
          <Button color="inherit" component={RouterLink} to="/friends">
            Friends
          </Button>
          <Button color="inherit" component={RouterLink} to="/transactions">
            Transactions
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation; 