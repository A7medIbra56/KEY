'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  useScrollTrigger,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const pages = [
  { name: 'About Us', id: '#about' },
  { name: 'Services', id: '#services' },
  { name: 'Testimonials', id: '#testimonials' },
  { name: 'Contact Us', id: '#contact' }
];

interface Props {
  window?: () => Window;
}

function ElevationScroll(props: { children: React.ReactElement; window?: () => Window }) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      backgroundColor: 'white',
      borderBottom: trigger ? 'none' : '1px solid #E5E7EB',
      transition: 'all 0.3s ease-in-out'
    }
  });
}

function Navbar(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const activeColor = '#3D52D5';

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%', pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 2 }}>
        <IconButton aria-label="close drawer" color="inherit">
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontFamily: 'var(--font-montserrat)',
          fontWeight: 700,
          color: '#1A1A2E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1
        }}
      >
        KEYS
        <VpnKeyIcon sx={{ transform: 'rotate(-45deg)', fontSize: 'inherit' }} /> EXPERTS
      </Typography>
      <List>
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component="a" href={page.id} aria-label={`Navigate to ${page.name}`}>
              <ListItemText
                primary={page.name}
                primaryTypographyProps={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 500
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="sticky" color="inherit">
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ minHeight: '80px' }}>

              {/* Desktop Logo */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                aria-label="Modern Key Home"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'var(--font-montserrat)',
                  fontWeight: 800,
                  letterSpacing: '.1rem',
                  color: '#1A1A2E',
                  textDecoration: 'none',
                  flexGrow: 1,
                  alignItems: 'center',
                  gap: 1
                }}
              >
                KEYS <VpnKeyIcon sx={{ transform: 'rotate(-45deg)', fontSize: 'inherit' }} />  EXPERTS
              </Typography>

              {/* Mobile Menu Icon */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="open navigation menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleDrawerToggle}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              {/* Mobile Logo */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                aria-label="Modern Key Home"
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'var(--font-montserrat)',
                  fontWeight: 800,
                  letterSpacing: '.1rem',
                  color: '#1A1A2E',
                  textDecoration: 'none',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                MODERN <VpnKeyIcon sx={{ transform: 'rotate(-45deg)', fontSize: 'inherit' }} /> KEY
              </Typography>

              {/* Desktop Menu Links */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    href={page.id}
                    aria-label={`Navigate to ${page.name}`}
                    sx={{
                      my: 2,
                      color: '#1A1A2E',
                      display: 'block',
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 500,
                      textTransform: 'none',
                      fontSize: '1rem',
                      position: 'relative',
                      '&:hover': {
                        color: activeColor,
                        backgroundColor: 'transparent',
                        '&::after': {
                          width: '100%'
                        }
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '0',
                        height: '2px',
                        bottom: '4px',
                        left: '0',
                        backgroundColor: activeColor,
                        transition: 'width 0.3s ease-in-out'
                      }
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

export default Navbar;


