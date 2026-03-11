'use client';

import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export default function SafetyBanner() {
  return (
    <Box 
      component="section" 
      sx={{ 
        width: '100%', 
        minHeight: { xs: 'auto', md: '350px' },
        position: 'relative',
        display: 'flex'
      }}
    >
      {/* Background split logic via absolute positioning */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: { xs: '100%', md: '50%' }, height: '100%', bgcolor: '#fff', zIndex: 0 }} />
      <Box sx={{ position: 'absolute', top: 0, right: 0, width: { xs: '100%', md: '50%' }, height: '100%', background: 'linear-gradient(135deg, #E8F4FF 0%, #F0F8FF 100%)', zIndex: 0 }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', py: { xs: 8, md: 0 } }}>
        <Grid container spacing={6} sx={{ width: '100%' }} alignItems="center">
          
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ pr: { md: 4 } }}>
              <Typography 
                variant="h2" 
                component="h2" 
                sx={{ 
                  color: '#1A1A2E', 
                  mb: 2 
                }}
              >
                Making Your Life Safer
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#6B7280', 
                  mb: 4,
                  fontSize: '1.1rem'
                }}
              >
                We provide effective locksmith services to help and protect your family & property.
              </Typography>

              <Button
                variant="contained"
                size="large"
                href="tel:8006557"
                startIcon={<PhoneIcon />}
                aria-label="Call Modern Key Locksmith"
                sx={{
                  backgroundColor: '#3D52D5',
                  color: '#fff',
                  borderRadius: 3,
                  py: 1.5,
                  px: 4,
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  boxShadow: '0 8px 20px rgba(61, 82, 213, 0.3)',
                  '&:hover': {
                    backgroundColor: '#1A237E',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s'
                }}
              >
                Call us now / 800 6557
              </Button>
            </Box>
          </Grid>

          {/* Right Visual Placeholder */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box 
              sx={{ 
                width: '100%', 
                maxWidth: 400, 
                height: 250, 
                position: 'relative' 
              }}
            >
              {/* Abstract Family / Car Scene */}
              <Box sx={{ position: 'absolute', bottom: 20, width: '100%', height: 4, bgcolor: '#90CAF9', borderRadius: 2 }} />
              
              {/* 'House' geometric shape */}
              <Box sx={{ position: 'absolute', bottom: 24, left: 40, width: 80, height: 80, bgcolor: '#BBDEFB', borderRadius: 1 }} />
              <Box sx={{ position: 'absolute', bottom: 104, left: 30, width: 0, height: 0, borderLeft: '50px solid transparent', borderRight: '50px solid transparent', borderBottom: '60px solid #64B5F6' }} />

              {/* 'Car' geometric shape */}
              <Box sx={{ position: 'absolute', bottom: 24, right: 30, width: 140, height: 50, bgcolor: '#90CAF9', borderRadius: '10px 30px 10px 10px' }} />
              <Box sx={{ position: 'absolute', bottom: 74, right: 50, width: 80, height: 40, bgcolor: '#64B5F6', borderRadius: '20px 20px 0 0' }} />

              <Box sx={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 2, color: '#1A237E' }}>
                <FamilyRestroomIcon sx={{ fontSize: '4rem' }} />
                <DirectionsCarIcon sx={{ fontSize: '4rem' }} />
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}


