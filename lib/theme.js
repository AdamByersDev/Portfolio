'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      light: '#b78bf4',
      main: '#5311ae',
      dark: '#341072',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#df52ff',
      contrastText: '#000',
    },
    background: {
      default: '#0b0317',
      main: '#fff',
    },
  },
  typography: {
    fontFamily: 'var(--font-lato), sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 900,
    h1: {
      fontWeight: 900,
    },
    h2: {
      fontWeight: 900,
    },
    h3: {
      fontWeight: 900,
    },
    h4: {
      fontWeight: 900,
    },
    h5: {
      fontWeight: 900,
    },
    h6: {
      fontWeight: 900,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 300,
    },
  },
});

export default theme;
