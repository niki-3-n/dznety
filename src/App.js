import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendsList from './components/FriendsList';
import TransactionHistory from './components/TransactionHistory';
import Navigation from './components/Navigation';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/friends" element={<FriendsList />} />
            <Route path="/transactions" element={<TransactionHistory />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 