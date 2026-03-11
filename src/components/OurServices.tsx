'use client';

import React, { useState } from 'react';
import { Box, Typography, Container, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import LockIcon from '@mui/icons-material/Lock';
import HomeIcon from '@mui/icons-material/Home';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const services = [
  {
    title: 'Car Key Duplication',
    gradient: 'linear-gradient(180deg, #2d3748, #4a5568)',
    icon: (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <DirectionsCarIcon sx={{ fontSize: '4rem' }} />
        <VpnKeyIcon sx={{ fontSize: '2.5rem', ml: -1, border: '2px solid transparent' }} />
      </Box>
    )
  },
  {
    title: 'Key Cutting Services',
    gradient: 'linear-gradient(180deg, #00796B, #004D40)',
    icon: (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <SettingsIcon sx={{ fontSize: '3.5rem' }} />
        <VpnKeyIcon sx={{ fontSize: '3rem', ml: -1 }} />
      </Box>
    )
  },
  {
    title: 'Lock Repairs',
    gradient: 'linear-gradient(180deg, #78909c, #455a64)',
    icon: (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <BuildIcon sx={{ fontSize: '3.5rem' }} />
        <LockIcon sx={{ fontSize: '3rem', ml: -0.5 }} />
      </Box>
    )
  },
  {
    title: 'Home & Office Unlocking',
    gradient: 'linear-gradient(180deg, #5c6bc0, #283593)',
    icon: (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <HomeIcon sx={{ fontSize: '4rem' }} />
        <LockOpenIcon sx={{ fontSize: '3rem', ml: -1 }} />
      </Box>
    )
  }
];

export default function OurServices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  const itemsPerView = isMd ? 3 : isSm ? 2 : 1;
  const itemWidth = 100 / itemsPerView;
  const maxIndex = Math.max(0, services.length - itemsPerView);
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <Box component="section" id="services" sx={{ backgroundColor: '#F0F0F8', py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
      {/* Decorative large circle */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          backgroundColor: 'rgba(61, 82, 213, 0.05)',
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{ textAlign: 'center', mb: 2, color: '#1A1A2E' }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', mb: 6, color: '#6B7280', maxWidth: '700px', mx: 'auto' }}
        >
          Modern Key is a competitive security and locksmith company in Dubai, setting high standards. 
          We claim to be a reliable company and guarantee that you will be satisfied with our services.
        </Typography>

        {/* Carousel Navigation */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mb: 4 }}>
          <IconButton 
            onClick={handlePrev} 
            sx={{ 
              border: '1px solid #3D52D5', 
              color: '#3D52D5',
              borderRadius: 2,
              '&:hover': { backgroundColor: '#3D52D5', color: '#fff' }
            }}
            aria-label="Previous service"
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton 
            onClick={handleNext} 
            sx={{ 
              border: '1px solid #3D52D5', 
              color: '#3D52D5',
              borderRadius: 2,
              '&:hover': { backgroundColor: '#3D52D5', color: '#fff' }
            }}
            aria-label="Next service"
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Carousel Container */}
        <Box sx={{ overflow: 'hidden', width: '100%' }}>
          <Box
            style={{ transform: `translateX(-${currentIndex * itemWidth}%)` }}
            sx={{
              display: 'flex',
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {services.map((service, index) => (
              <Box 
                key={index} 
                sx={{ 
                  flex: { xs: '0 0 100%', sm: '0 0 50%', md: '0 0 33.333%' }, 
                  px: 2 
                }}
              >
                <Box
                  sx={{
                    background: '#fff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'translateY(-8px)' }
                  }}
                >
                  {/* Image Placeholder */}
                  <Box
                    sx={{
                      height: 240,
                      background: service.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(255,255,255,0.7)'
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Box sx={{ p: 4, textAlign: 'center' }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontFamily: 'var(--font-montserrat)',
                        fontWeight: 700,
                        color: '#1A1A2E'
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}


