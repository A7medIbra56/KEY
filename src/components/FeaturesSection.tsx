'use client';

import React from 'react';
import { Box, Typography, Container, Paper, Avatar } from '@mui/material';
import { Grid } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function FeaturesSection() {
  return (
    <Box component="section" sx={{ backgroundColor: '#F8F9FF', py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative large circle */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -150,
          right: -150,
          width: 400,
          height: 400,
          borderRadius: '50%',
          backgroundColor: '#E8EAF6',
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="stretch">
          
          {/* Card 1 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'scale(1.02) translateY(-5px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.12)'
                }
              }}
            >
              {/* Top Image Placeholder */}
              <Box 
                sx={{ 
                  height: 200, 
                  background: 'linear-gradient(180deg, #b0bec5, #78909c)',
                  position: 'relative'
                }}
              >
                {/* Overlay Badge */}
                <Avatar
                  sx={{
                    width: 64,
                    height: 64,
                    backgroundColor: '#fff',
                    color: '#3D52D5',
                    position: 'absolute',
                    bottom: -32,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                >
                  <SecurityIcon fontSize="large" />
                </Avatar>
              </Box>

              <Box sx={{ p: { xs: 4, md: 6 }, pt: { xs: 6, md: 8 }, flexGrow: 1, textAlign: 'center' }}>
                <Typography variant="h5" component="h3" sx={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, color: '#1A1A2E', mb: 2 }}>
                  High Security Services
                </Typography>
                <Typography variant="body1" sx={{ color: '#6B7280', lineHeight: 1.7 }}>
                  We are a customer-oriented company. We provide budget friendly services that are high in quality and security. We make sure that we use latest, quality equipment to prevent any damage.
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Card 2 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'scale(1.02) translateY(-5px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.12)'
                }
              }}
            >
              {/* Top Image Placeholder */}
              <Box 
                sx={{ 
                  height: 200, 
                  background: 'linear-gradient(180deg, #4fc3f7, #0288d1)',
                  position: 'relative'
                }}
              >
                {/* Overlay Badge */}
                <Avatar
                  sx={{
                    width: 64,
                    height: 64,
                    backgroundColor: '#fff',
                    color: '#0288d1',
                    position: 'absolute',
                    bottom: -32,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                >
                  <LocalShippingIcon fontSize="large" />
                </Avatar>
              </Box>

              <Box sx={{ p: { xs: 4, md: 6 }, pt: { xs: 6, md: 8 }, flexGrow: 1, textAlign: 'center' }}>
                <Typography variant="h5" component="h3" sx={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, color: '#1A1A2E', mb: 2 }}>
                  Fastest Response Time Guaranteed
                </Typography>
                <Typography variant="body1" sx={{ color: '#6B7280', lineHeight: 1.7 }}>
                  We are the fastest company as we can reach you at any destination in Dubai in less than 30 minutes. We provide 24/7 emergency services all year around, including holidays.
                </Typography>
              </Box>
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}


