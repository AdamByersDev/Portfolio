import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import Time from './cards/Time';

export default function Page() {
  return (
    <Grid container columns={{ xs: 4, md: 8, xl: 12 }}>
      <Time size={4} />
    </Grid>
  );
}
