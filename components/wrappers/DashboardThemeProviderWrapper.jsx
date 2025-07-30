'use client';

import { getDashboardTheme } from '@/lib/theme';
import { ThemeProvider, useMediaQuery } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';

export default function DashboardThemeProviderWrapper({ children }) {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState('dark');

  // Load saved preference or system default
  useEffect(() => {
    const saved = localStorage.getItem('theme-mode');
    if (saved === 'light' || saved === 'dark') {
      setMode(saved);
    } else {
      setMode(prefersDark ? 'dark' : 'light');
    }
  }, [prefersDark]);

  // Update storage when the mode is changed
  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  // Set up theme based on mode selection
  const theme = useMemo(() => getDashboardTheme(mode), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
