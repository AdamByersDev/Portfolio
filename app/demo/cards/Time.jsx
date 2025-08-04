'use client';

import { Card, Typography } from '@mui/material';
import { Grid } from '@mui/system';
import { useEffect, useState } from 'react';

export default function Time({ size }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Grid
      size={size}
    >
      <Card
        sx={{
          padding: 1,
          width: '100%',
          height: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Card
          elevation={2}
          sx={{
            padding: 2,
            textAlign: 'center'
          }}
        >
          <Typography variant='h5' component='p'>
            {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: '2-digit' })}
          </Typography>
        </Card>
        <Typography variant='subtitle1' component='p'>
          {time.toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Typography>
      </Card>
    </Grid>
  )
}