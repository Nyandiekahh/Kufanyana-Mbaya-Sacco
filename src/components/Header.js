import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Kufanyana Mbaya Sacco
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ mt: 1 }}
            >
              <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/membership">Membership</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/savings">Savings</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/loans">Loans</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/contact">Contact Us</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/about">About Us</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/terms">Terms and Conditions</MenuItem>
            </Menu>
          </>
        ) : (
          <div style={{ flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/membership">Membership</Button>
            <Button color="inherit" component={Link} to="/savings">Savings</Button>
            <Button color="inherit" component={Link} to="/loans">Loans</Button>
            <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
            <Button color="inherit" component={Link} to="/about">About Us</Button>
            <Button color="inherit" component={Link} to="/terms">Terms and Conditions</Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
