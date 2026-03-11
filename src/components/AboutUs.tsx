'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Grid } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export default function AboutUs() {
  return (
    <Box component="section" id="about-us" sx={{ py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden', backgroundColor: '#fff' }}>
      
      {/* Decorative background shape */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -50,
          left: -50,
          width: 200,
          height: 200,
          backgroundColor: '#E8F4F8',
          transform: 'rotate(45deg)',
          zIndex: 0,
          borderRadius: 4
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          
          {/* Left Text */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ pr: { md: 6 } }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  color: '#1A1A2E',
                  mb: 4,
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                About Us
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '40px',
                    height: '4px',
                    backgroundColor: '#3D52D5',
                    borderRadius: 2
                  }}
                />
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: '#6B7280',
                  lineHeight: 1.8,
                  fontSize: '1.1rem'
                }}
              >
                Modern Key Locks Repairing is a locksmith company located in the center of Dubai. With many years of experience we are devoted to providing effective locksmith services in Dubai. We cover all sorts of lock and key problems for your home, office or car. Our certified technicians use the best tools to ensure that there is no damage to your property when performing services.
              </Typography>
            </Box>
          </Grid>

          {/* Right Image Placeholder */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                width: '100%',
                height: 320,
                background: 'linear-gradient(135deg, #1A237E, #3D52D5)',
                borderRadius: '16px',
                mr: { md: -6 }, // Negative margin trick
                position: 'relative',
                boxShadow: '0 20px 40px rgba(26, 35, 126, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
            >
              {/* Overlay reflection effect */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)',
                }}
              />
              <VpnKeyIcon sx={{ fontSize: '8rem', color: 'rgba(255,255,255,0.4)', transform: 'rotate(-45deg)', position: 'relative', zIndex: 1 }} />
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}


