import { Box, Typography } from '@mui/material';

export default function() {
  return (
    <Box
      component="header"
      sx={{ position: 'sticky', top: 0, height: { sm: '100px' }, zIndex: 100 }}
    >
      <Box
        sx={{
          display: 'flex',
          backgroundColor: 'grey.300',
          height: '100%',
        }}
      >
        <Box
          component="span"
          sx={{
            width: '50px',
            backgroundColor: 'primary.main',
            flexShrink: '0',
          }}
        />
        <Box
          sx={{
            padding: 1,
          }}
        >
          <Typography component="h1" variant="h4">
            ADAM BYERS
          </Typography>
          <Typography
            component="p"
            variant="body1"
            fontSize={{ xs: 18, sm: 27 }}
            color="grey.800"
          >
            FULL STACK WEB DEVELOPER
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}