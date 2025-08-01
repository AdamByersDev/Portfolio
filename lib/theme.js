'use client';
import { createTheme } from '@mui/material/styles';

// Main theme
const mainThemeDef = {
  palette: {
    mode: 'light',
    primary: {
      light: '#b78bf4',
      main: '#5311ae',
      dark: '#341072',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#b78bf4',
      main: '#5311ae',
      dark: '#341072',
      contrastText: '#FFFFFF',
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

let dashboardThemeDef = {
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  typography: mainThemeDef.typography,
  colorSchemes: {
    light: {
      palette: {
        primary: { main: mainThemeDef.palette.primary.main },
        secondary: { main: mainThemeDef.palette.secondary.main },
        background: {
          default: mainThemeDef.palette.background.lightDefault,
          paper: mainThemeDef.palette.background.lightDefault,
          darkDefault: mainThemeDef.palette.background.default,
        },
      },
    },
    dark: {
      palette: {
        primary: { main: mainThemeDef.palette.primary.light },
        secondary: { main: mainThemeDef.palette.secondary.light },
        background: {
          default: mainThemeDef.palette.background.default,
          paper: mainThemeDef.palette.background.default,
          darkDefault: mainThemeDef.palette.background.default,
        },
      },
    },
  },
};
export const dashboardTheme = createTheme(dashboardThemeDef);
