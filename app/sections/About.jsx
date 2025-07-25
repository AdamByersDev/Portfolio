import { Box, Divider, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import NavButton from '@/components/inputs/NavButton';

export default function About() {
  return (
    <Box component="section" id='about-me'>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: 'grey.300',
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
            paddingTop: 0,
          }}
        >
          <Typography component="h2" variant="h5">
            ABOUT ME
          </Typography>
          <Divider
            sx={{
              borderColor: 'primary.main',
              borderBottomWidth: 3,
              backgroundColor: 'primary.main',
            }}
          />
          <Typography component="p" variant="body1" color="grey.800">
            Resourceful and detail-oriented Full Stack Web Developer with a
            strong foundation in modern JavaScript frameworks including React,
            Next.js, and Node.js. Since 2018, I have built full-scale web
            applications, starting with PHP and SQL as a self-taught developer
            before advancing through formal education. Passionate about
            developing accessible, high-performance, and scalable web
            solutions, with a focus on integrating APIs, cloud services, and
            CI/CD pipelines. Committed to clean code, agile methodologies, and
            continuous learning—currently deepening expertise in cloud
            platforms like AWS and GCP, as well as GraphQL, to further enhance
            full-stack proficiency and deliver seamless digital experiences.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
