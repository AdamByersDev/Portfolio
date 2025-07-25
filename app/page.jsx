import { Box } from '@mui/material';
import About from './sections/About';
import Header from '@/components/sharedSections/Header';
import Contact from './sections/Contact';

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: 'background.main',
        marginX: 'auto',
      }}
      maxWidth="lg"
    >
      <Header />
      <Box
        component='main'
      >
        <About />
        <Contact />
      </Box>
    </Box>
  );
}
