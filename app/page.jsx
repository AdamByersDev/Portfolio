import { Box } from '@mui/material';
import About from './sections/About';
import Header from '@/components/sharedSections/Header';
import Contact from './sections/Contact';
import SkillsHistory from './sections/SkillsHistory';

export default function Home() {
  return (
    <Box
      sx={{
        marginX: 'auto',
      }}
      maxWidth="lg"
    >
      <Box
        sx={{
          margin: { sm: 2 },
          borderRadius: { sm: 4 },
          overflow: 'hidden',
        }}
      >
        <Header />
        <Box component="main">
          <About />
          <Contact />
          <SkillsHistory />
        </Box>
      </Box>
    </Box>
  );
}
