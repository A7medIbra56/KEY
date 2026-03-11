'use client';

import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#1A237E', 
        color: '#fff', 
        position: 'relative', 
        overflow: 'hidden',
        py: { xs: 8, md: 10 }
      }}
    >
      {/* Pattern Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            #ffffff 10px,
            #ffffff 20px
          )`
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        
        <Typography 
          variant="h4" 
          component="div"
          sx={{ 
            fontFamily: 'var(--font-montserrat)', 
            fontWeight: 800, 
            letterSpacing: '.1rem',
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1
          }}
        >
          MODERN <VpnKeyIcon sx={{ transform: 'rotate(-45deg)', fontSize: 'inherit' }} /> KEY
        </Typography>

        <Typography variant="body2" sx={{ mb: 6, opacity: 0.8 }}>
          Al Jafilliya, Satwa, Dubai, UAE
        </Typography>

        <Button
          variant="outlined"
          size="large"
          href="tel:8006557"
          startIcon={<PhoneIcon />}
          sx={{
            color: '#fff',
            borderColor: 'rgba(255,255,255,0.5)',
            borderWidth: 2,
            borderRadius: 8,
            px: 4,
            py: 1.5,
            fontWeight: 600,
            fontSize: '1.1rem',
            textTransform: 'none',
            mb: 8,
            '&:hover': {
              backgroundColor: '#fff',
              color: '#1A237E',
              borderColor: '#fff',
            },
            transition: 'all 0.3s'
          }}
        >
          Call us now / 800 6557 &nbsp;<span style={{ fontSize: '0.8rem', opacity: 0.8, fontWeight: 400 }}>(24/7)</span>
        </Button>

        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 4 }}>
          <Typography variant="body2" sx={{ opacity: 0.7, mb: 1, fontSize: '0.85rem' }}>
            © Copyright {new Date().getFullYear()} Modern Key. All Rights Reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.5, fontSize: '0.75rem' }}>
            Designed by ARENA Capital
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}


