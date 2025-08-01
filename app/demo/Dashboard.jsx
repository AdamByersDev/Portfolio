'use client';

import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DashboardLayout } from '@toolpad/core';
import { NextAppProvider } from '@toolpad/core/nextjs';
import { useEffect, useState } from 'react';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import ArticleIcon from '@mui/icons-material/Article';

export default function Dashboard({ children, theme }) {
  const [loading, setLoading] = useState(true);
  const [overlay, setOverlay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setOverlay(false);
      }, 1000);
    }, 500);
  }, []);

  return (
    <>
      {overlay && (
        <Box
          sx={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#0b0317',
            zIndex: 1500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: loading ? 1 : 0,
            transition: 'opacity 0.45s ease-in-out 0.25s',
            flexDirection: 'column',
            cursor: loading && 'none',
          }}
        >
          <Box
            component="img"
            src="/assets/images/abd.svg"
            alt="ABD Logo"
            sx={{
              height: '150px',
              aspectRatio: '24/25',
            }}
          />
          <Typography
            variant="h6"
            component="p"
            sx={{
              height: loading ? '32px' : '0',
              opacity: loading ? 1 : 0,
              transition: 'height 0.2s linear, opacity 0.2s ease-in-out',
              color: '#ffffff',
              overflow: 'hidden',
            }}
          >
            Loading...
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              height: !loading ? '32px' : '0',
              opacity: !loading ? 1 : 0,
              transition: 'height 0.2s linear, opacity 0.2s ease-in-out',
              color: '#ffffff',
              overflow: 'hidden',
            }}
          >
            Welcome!
          </Typography>
        </Box>
      )}
      {!loading && (
        <NextAppProvider
          theme={theme}
          navigation={navigation}
          branding={{
            title: 'Demo',
            homeUrl: '/demo',
            logo: <img src="/assets/images/abd.svg" alt="ABD Logo" />,
          }}
        >
          <DashboardLayout>
            <Box
              sx={{
                padding: 1,
              }}
            >
              {children}
            </Box>
          </DashboardLayout>
        </NextAppProvider>
      )}
    </>
  );
}

const navigation = [
  {
    segment: 'demo',
    title: 'Home',
    icon: <HomeFilledIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: '',
    title: 'Resume',
    icon: <ArticleIcon />,
  },
];
