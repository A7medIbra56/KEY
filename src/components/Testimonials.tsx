'use client';

import React, { useState } from 'react';
import { Box, Typography, Container, Avatar, IconButton, Rating, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const reviews = [
  {
    name: 'Jayesh Jain',
    date: '1 week ago',
    rating: 5,
    text: 'Excellent service provider with complete solutions, the guys came in 10 mins after informing them and the door was unlocked within minutes... Very helpful and completely safe as they verify the documents before starting the procedure.... Thanks to team ....',
    initial: 'J',
    color: '#E57373'
  },
  {
    name: 'Zishan Ahmad',
    date: '3 weeks ago',
    rating: 5,
    text: 'Really helpful and good service. My car door locked and I left my key inside. I called this company withing a minute they opened for me. Really professional work done. Thanks',
    initial: 'Z',
    color: '#81C784'
  },
  {
    name: 'Saad Tanweer',
    date: '2 weeks ago',
    rating: 5,
    text: 'Called Modern Key as I had locked my keys in the car. Farhan showed up within 20 minutes. He explained the process in detail and unlocked my car within 15 minutes. Would recommend it to anyone looking for professional car unlocking services',
    initial: 'S',
    color: '#BA68C8'
  },
  {
    name: 'Ali Raza',
    date: '1 month ago',
    rating: 5,
    text: 'Best locksmith in Dubai! Fast, affordable, and highly professional. Saved me when I was locked out of my apartment.',
    initial: 'A',
    color: '#64B5F6'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  const itemsPerView = isMd ? 3 : isSm ? 2 : 1;
  const itemWidth = 100 / itemsPerView;
  const maxIndex = Math.max(0, reviews.length - itemsPerView);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <Box component="section" id="testimonials" sx={{ py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden', backgroundColor: '#F8F9FF' }}>
      
      {/* Decorative Triangles */}
      <Box
        component="svg"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 200,
          height: 200,
          opacity: 0.05,
          color: '#3D52D5'
        }}
        viewBox="0 0 100 100"
      >
        <polygon points="0,0 100,0 0,100" fill="currentColor" />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* Top Header Row */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
          mb: 6,
          gap: 3
        }}>
          {/* Left: Google rating info */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{ color: '#6B7280', fontWeight: 600 }}>Review us on</Typography>
              <Rating value={5} readOnly size="small" sx={{ color: '#FFB400' }} />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: 'var(--font-montserrat)', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <span style={{ color: '#4285F4' }}>G</span>
              <span style={{ color: '#EA4335' }}>o</span>
              <span style={{ color: '#FBBC05' }}>o</span>
              <span style={{ color: '#4285F4' }}>g</span>
              <span style={{ color: '#34A853' }}>l</span>
              <span style={{ color: '#EA4335' }}>e</span>
            </Typography>
          </Box>

          {/* Center: Rating count */}
          <Typography variant="h4" sx={{ fontWeight: 700, fontFamily: 'var(--font-montserrat)', color: '#1A1A2E' }}>
            Rated 5.0 | 482 reviews
          </Typography>

          {/* Right: Navigation */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton 
              onClick={handlePrev}
              sx={{ border: '1px solid #E5E7EB', borderRadius: 1 }}
              aria-label="Previous testimonial"
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <IconButton 
              onClick={handleNext}
              sx={{ backgroundColor: '#1A237E', color: '#fff', borderRadius: 1, '&:hover': { backgroundColor: '#3D52D5' } }}
              aria-label="Next testimonial"
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Carousel inner track */}
        <Box sx={{ overflow: 'hidden', mt: 4 }}>
          <Box
            style={{ transform: `translateX(-${currentIndex * itemWidth}%)` }}
            sx={{
              display: 'flex',
              transition: 'transform 0.4s ease-in-out',
            }}
          >
            {reviews.map((review, idx) => (
              <Box 
                key={idx} 
                sx={{ 
                  flex: { xs: '0 0 100%', sm: '0 0 50%', md: '0 0 33.333%' }, 
                  px: 2 
                }}
              >
                <Box
                  sx={{
                    bgcolor: '#fff',
                    borderRadius: '12px',
                    p: 4,
                    height: '100%',
                    border: '1px solid #E5E7EB',
                    position: 'relative',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar sx={{ bgcolor: review.color, mr: 2, width: 48, height: 48, fontWeight: 'bold' }}>
                      {review.initial}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1A1A2E' }}>
                        {review.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#9CA3AF', fontSize: '0.8rem' }}>
                        {review.date}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#4B5563',
                      lineHeight: 1.6,
                      mb: 4,
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {review.text}
                  </Typography>
                  
                  <Box sx={{ position: 'absolute', bottom: 24, left: 32, right: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Rating value={review.rating} readOnly size="small" />
                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'var(--font-montserrat)' }}>
                      <span style={{ color: '#4285F4' }}>G</span>
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


