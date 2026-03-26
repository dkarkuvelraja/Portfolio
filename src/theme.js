import { createTheme } from '@mui/material/styles';

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            primary: { main: '#6C63FF', light: '#9D97FF', dark: '#4A42CC' },
            secondary: { main: '#00D9FF', light: '#66E8FF', dark: '#00A3BF' },
            background: {
              default: '#0A0A1A',
              paper: '#12122A',
            },
            text: {
              primary: '#E8E8F0',
              secondary: '#A0A0C0',
            },
            divider: 'rgba(108, 99, 255, 0.15)',
          }
        : {
            primary: { main: '#5A52E0', light: '#7B74FF', dark: '#3D36B0' },
            secondary: { main: '#00B8D4', light: '#4DD0E1', dark: '#008C9E' },
            background: {
              default: '#F5F5FA',
              paper: '#FFFFFF',
            },
            text: {
              primary: '#1A1A2E',
              secondary: '#4A4A6A',
            },
            divider: 'rgba(90, 82, 224, 0.12)',
          }),
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '3.5rem',
        fontWeight: 800,
        letterSpacing: '-0.02em',
        lineHeight: 1.15,
        '@media (max-width:900px)': { fontSize: '2.5rem' },
        '@media (max-width:600px)': { fontSize: '2rem' },
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 700,
        letterSpacing: '-0.01em',
        lineHeight: 1.2,
        '@media (max-width:600px)': { fontSize: '1.8rem' },
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h4: {
        fontSize: '1.25rem',
        fontWeight: 600,
      },
      h5: {
        fontSize: '1.1rem',
        fontWeight: 500,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: '1.05rem',
        lineHeight: 1.7,
      },
      body2: {
        fontSize: '0.95rem',
        lineHeight: 1.6,
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            padding: '10px 24px',
            fontSize: '0.95rem',
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 20px rgba(108, 99, 255, 0.35)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundImage: 'none',
            border: `1px solid ${theme.palette.divider}`,
            transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          }),
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 500,
            borderRadius: 8,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });

export default getTheme;
