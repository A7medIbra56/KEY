'use client';

import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const features = [
  {
    icon: <LockOutlinedIcon sx={{ fontSize: 40, color: '#3D52D5', mb: 2 }} />,
    title: '24/7 Unlocking Service',
  },
  {
    icon: <TimerOutlinedIcon sx={{ fontSize: 40, color: '#3D52D5', mb: 2 }} />,
    title: 'Fastest Turnaround Time',
  },
  {
    icon: <ThumbUpOutlinedIcon sx={{ fontSize: 40, color: '#3D52D5', mb: 2 }} />,
    title: '100% Customer Satisfaction',
  },
  {
    icon: <CreditCardOutlinedIcon sx={{ fontSize: 40, color: '#3D52D5', mb: 2 }} />,
    title: '100% Money Back Guaranteed',
  },
];

export default function WhyChooseUs() {
  return (
    <Box component="section" id="about" sx={{ width: '100%', backgroundColor: '#fff' }}>
      <Grid container>
        {/* Left Image Area (Hidden on mobile) */}
        <Grid 
          size={{ xs: 12, md: 4 }}
          sx={{
            display: { xs: 'none', md: 'block' },
            background: 'linear-gradient(135deg, #1a237e 0%, #3d52d5 100%)',
            position: 'relative',
            minHeight: '600px'
          }}
        >
          {/* Subtle texture pattern */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '20px 20px',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'rgba(255,255,255,0.2)'
            }}
          >
             <VpnKeyIcon sx={{ fontSize: '10rem', transform: 'rotate(-45deg)' }} />
          </Box>
        </Grid>

        {/* Right Content Area */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Box sx={{ py: { xs: 8, md: 10 }, px: { xs: 3, md: 8 } }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: '#1A1A2E',
                mb: 2,
                textAlign: 'center'
              }}
            >
              Why Choose Us
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: '#6B7280',
                mb: 6,
                textAlign: 'center',
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              We bring years of expertise and a commitment to security, ensuring every job is done swiftly and professionally, giving you complete peace of mind.
            </Typography>

            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      border: '1px solid #E5E7EB',
                      borderRadius: '12px',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.06)',
                        borderColor: '#3D52D5'
                      }
                    }}
                  >
                    {feature.icon}
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontFamily: 'var(--font-montserrat)',
                        fontWeight: 600,
                        color: '#1A1A2E',
                        fontSize: '1.1rem'
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}


