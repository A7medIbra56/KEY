'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3D52D5',
    },
    secondary: {
      main: '#22C55E',
    },
    background: {
      default: '#F8F9FF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A2E',
      secondary: '#6B7280',
    },
  },
  typography: {
    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
    h1: {
      fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '2rem',
    },
    h2: {
      fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    body1: {
      fontFamily: 'var(--font-poppins), Poppins, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: ({ theme }) => ({
          [theme.breakpoints.up('md')]: {
            fontSize: '3rem',
          },
        }),
        h2: ({ theme }) => ({
          [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem',
          },
        }),
      },
    },
  },
});

export default theme;
