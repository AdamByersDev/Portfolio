import DashboardThemeProviderWrapper from '@/components/wrappers/DashboardThemeProviderWrapper';
import { Box, Typography } from '@mui/material';

export default function Page() {
  return (
    <Box
      sx={{
        backgroundColor: 'theme.palette.background.default',
      }}
    >
      <Typography>Hello</Typography>
    </Box>
  );
}
