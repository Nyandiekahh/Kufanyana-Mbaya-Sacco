// src/components/Footer.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#3f51b5', color: 'white', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" component="p" align="center">
          Kufanyana Mbaya Sacco Limited
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Email: <a href="mailto:kufanyanambayasacco@gmail.com" style={{ color: 'white' }}>kufanyanambayasacco@gmail.com</a>
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Phone: +254 796 611599
        </Typography>
        <Typography variant="body2" component="p" align="center">
          © 2024 Kufanyana Mbaya Sacco. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
