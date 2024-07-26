// src/components/NavBar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const navItems = (
    <Box>
      <Button color="inherit" href="#home">Home</Button>
      <Button color="inherit" href="#about-us">About Us</Button>
      <Button color="inherit" href="#services">Services</Button>
      <Button color="inherit" href="#contact">Contact</Button>
    </Box>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kufanyana Mbaya Sacco
          </Typography>
          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={open}
                onClose={handleDrawerToggle}
                sx={{
                  width: 240,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                  },
                }}
              >
                <List>
                  <ListItem button onClick={handleDrawerToggle} component="a" href="#home">Home</ListItem>
                  <ListItem button onClick={handleDrawerToggle} component="a" href="#about-us">About Us</ListItem>
                  <ListItem button onClick={handleDrawerToggle} component="a" href="#services">Services</ListItem>
                  <ListItem button onClick={handleDrawerToggle} component="a" href="#contact">Contact</ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            navItems
          )}
        </Toolbar>
      </AppBar>
      {!isMobile && (
        <Drawer
          anchor="left"
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
            },
          }}
        >
          <List>
            <ListItem button component="a" href="#home">Home</ListItem>
            <ListItem button component="a" href="#about-us">About Us</ListItem>
            <ListItem button component="a" href="#services">Services</ListItem>
            <ListItem button component="a" href="#contact">Contact</ListItem>
          </List>
        </Drawer>
      )}
      <Box component="main" sx={{ marginLeft: isMobile ? 0 : 240, transition: 'margin-left 0.3s' }}>
        {/* Content here */}
      </Box>
    </div>
  );
}

export default NavBar;
