import { Box } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import NavButton from '@/components/inputs/NavButton';

export default function Contact() {
  return (
    <Box
      component="nav"
      sx={{
        backgroundColor: 'grey.900',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        position: { sm: 'sticky' },
        top: { sm: '100px' },
        zIndex: 99,
        justifyContent: { sm: 'space-around' },
      }}
    >
      <NavButton icon={LocalPhoneIcon} label="Call Me" href="tel:5194940939" />
      <NavButton
        icon={GitHubIcon}
        label="GitHub"
        href="https://github.com/AdamByersDev"
      />
      <NavButton
        icon={AlternateEmailIcon}
        label="Email me"
        href="mailto:adam@abyers.ca"
      />
    </Box>
  );
}
