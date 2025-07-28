import { Box, Typography } from '@mui/material';

export default function () {
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
            width: { xs: '50px', sm: '75px', md: '100px', lg: '125px' },
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
            Adam Byers
          </Typography>
          <Typography
            component="p"
            fontSize={{ xs: 18, sm: 27 }}
            color="grey.800"
            sx={{
              textTransform: 'uppercase',
            }}
          >
            Full Stack Web Developer
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
