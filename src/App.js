// src/App.js

import React from 'react';
import { Box, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Terms from './components/Terms';
import Login from './components/Login'; 
import Transactions from './components/Transactions'; // Import Transactions component

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Router>
      <CssBaseline />
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          marginTop: isMobile ? '64px' : '64px',
          backgroundColor: '#d3d3d3',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/transactions" element={<Transactions />} /> {/* Add route for Transactions */}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
