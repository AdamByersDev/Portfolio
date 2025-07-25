import { Button, Typography } from '@mui/material';
import Link from 'next/link';

export default function NavButton({ icon, label = '', href = '', ...props }) {
  const Icon = icon || false;
  return (
    <Button
      component={Link}
      href={href}
      sx={{
        color: 'primary.light',
        gap: 0.5,
        textTransform: 'none',
        borderRadius: 0,
      }}
      {...props}
    >
      {Icon && <Icon />}
      <Typography
        sx={{
          color: 'white',
        }}
      >
        {label}
      </Typography>
    </Button>
  );
}
