import React from 'react';
import { Box, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header'; // Import the updated Header
import Terms from './components/Terms'; // Import the Terms component

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Router>
      <CssBaseline />
      <Header /> {/* Place the Header component here */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          marginTop: isMobile ? '64px' : '64px', // adjust margin-top for fixed header
          backgroundColor: '#d3d3d3', // Light grey background
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} /> {/* Add route for Terms */}
          {/* Add more routes here */}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
