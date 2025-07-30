'use client';
import { createTheme } from '@mui/material/styles';

// Main theme
const mainThemeDef = {
  cssVariables: false,
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
      main: '#ffffff',
      lightDefault: '#efe6fc',
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
      textTransform: 'uppercase',
    },
    h2: {
      fontWeight: 900,
      textTransform: 'uppercase',
    },
    h3: {
      fontWeight: 900,
      textTransform: 'uppercase',
    },
    h4: {
      fontWeight: 900,
      textTransform: 'uppercase',
    },
    h5: {
      fontWeight: 900,
      textTransform: 'uppercase',
    },
    h6: {
      fontWeight: 900,
      textTransform: 'uppercase',
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 300,
    },
  },
};

const theme = createTheme(mainThemeDef);
export default theme;

// Dashboard theme
export function getDashboardTheme(mode = 'dark') {
  const dashboardThemeDef = structuredClone(mainThemeDef);
  dashboardThemeDef.palette.mode = mode;

  // Use light background if light mode, otherwise keep dark background
  dashboardThemeDef.palette.background.default =
    mode === 'dark'
      ? dashboardThemeDef.palette.background.default
      : dashboardThemeDef.palette.background.lightDefault;
  
  // Use light paper if light mode, otherwise keep dark background
  dashboardThemeDef.palette.background.paper =
  mode === 'dark'
    ? dashboardThemeDef.palette.background.default
    : dashboardThemeDef.palette.background.lightDefault;

  console.log(dashboardThemeDef);

  return createTheme(dashboardThemeDef);
}
