'use client';

import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { FaWhatsapp } from 'react-icons/fa';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeIcon from '@mui/icons-material/Home';

export default function HeroSection() {
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: '#F8F9FF',
        minHeight: '90vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 0 },
        pb: { xs: 8, md: 0 }
      }}
    >
      {/* Background Decorative patterns */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          opacity: 0.1,
          backgroundImage: 'radial-gradient(#3D52D5 2px, transparent 2px)',
          backgroundSize: '24px 24px',
          zIndex: 0,
        }}
      />

      <Box
        component="svg"
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 80,
          height: 20,
          opacity: 0.2,
          color: '#3D52D5'
        }}
        viewBox="0 0 100 20"
      >
        <path d="M0,10 C20,20 30,0 50,10 C70,20 80,0 100,10" fill="none" stroke="currentColor" strokeWidth="4" />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
          
          {/* Left Text Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                '@keyframes slideUpFade': {
                  from: { opacity: 0, transform: 'translateY(30px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
                animation: 'slideUpFade 0.8s ease-out forwards',
              }}
            >
              <Typography 
                variant="h1" 
                component="h1"
                sx={{ 
                  color: '#1A1A2E', 
                  mb: 3,
                  lineHeight: 1.2
                }}
              >
                <Box component="span" sx={{ color: '#3D52D5' }}>Unlock</Box> Homes, Offices or Cars
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#6B7280', 
                  mb: 5,
                  fontSize: '1.2rem',
                  maxWidth: '500px'
                }}
              >
                We provide budget friendly services that are high in quality and security.
              </Typography>

              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="tel:8006557"
                  aria-label="Call Modern Key locksmith on 800 6557"
                  startIcon={<PhoneIcon />}
                  sx={{
                    borderRadius: 3,
                    py: 1.5,
                    px: 3,
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    boxShadow: '0 8px 20px rgba(61, 82, 213, 0.25)',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.02)'
                    }
                  }}
                >
                  Call us now / 800 6557
                </Button>
                
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  href="https://wa.me/971547773330"
                  aria-label="Message on WhatsApp +971 54 777 3330"
                  startIcon={<FaWhatsapp size={22} />}
                  sx={{
                    borderRadius: 3,
                    py: 1.5,
                    px: 3,
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: '#fff',
                    boxShadow: '0 8px 20px rgba(34, 197, 94, 0.25)',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      backgroundColor: '#1EAC52'
                    }
                  }}
                >
                  +971 54 777 3330
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* Right Placeholder Visual */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
            <Box
              sx={{
                width: { xs: 300, md: 400 },
                height: { xs: 300, md: 400 },
                backgroundColor: '#E8F4F8',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3D52D5',
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                '@keyframes floatItem': {
                  '0%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-15px)' },
                  '100%': { transform: 'translateY(0px)' },
                },
                animation: 'floatItem 6s ease-in-out infinite',
                position: 'relative'
              }}
            >
              <Box sx={{ display: 'flex', gap: 2 }}>
                <VpnKeyIcon sx={{ fontSize: { xs: '3rem', md: '4rem' }, transform: 'rotate(-45deg)' }} />
                <DirectionsCarIcon sx={{ fontSize: { xs: '3rem', md: '4rem' } }} />
                <HomeIcon sx={{ fontSize: { xs: '3rem', md: '4rem' } }} />
              </Box>

              {/* Decorative Spinner */}
              <Box
                component="svg"
                sx={{
                  position: 'absolute',
                  top: -20,
                  right: 20,
                  width: 40,
                  height: 40,
                  color: '#22C55E',
                  '@keyframes spin': {
                    '100%': { transform: 'rotate(360deg)' }
                  },
                  animation: 'spin 12s linear infinite'
                }}
                viewBox="0 0 24 24"
              >
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" />
              </Box>

              <Box
                component="svg"
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  left: -10,
                  width: 30,
                  height: 30,
                  color: '#3D52D5',
                  '@keyframes spinSlow': {
                    '100%': { transform: 'rotate(-360deg)' }
                  },
                  animation: 'spinSlow 15s linear infinite'
                }}
                viewBox="0 0 24 24"
              >
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" />
              </Box>

            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}


