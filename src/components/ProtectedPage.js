// components/ProtectedPage.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const ProtectedPage = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4">Protected Page</Typography>
      <Typography variant="body1">
        This page is protected and only visible to authenticated users.
      </Typography>
    </Container>
  );
};

export default ProtectedPage;
