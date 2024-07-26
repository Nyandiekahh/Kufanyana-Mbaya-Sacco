// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function Sidebar({ open, onClose }) {
  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '250px',
          backgroundColor: '#282c34',
          color: 'white',
          height: '100%',
          paddingTop: '64px',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      <IconButton onClick={onClose} sx={{ position: 'absolute', top: '10px', right: '10px', color: 'white' }}>
        <CloseIcon />
      </IconButton>
      <Box sx={{ paddingTop: '64px' }}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about">
            <ListItemText primary="About Us" />
          </ListItem>
          {/* Add more list items here */}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
