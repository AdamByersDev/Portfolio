import { Lato } from 'next/font/google';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import theme from '@/lib/theme';

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

export async function generateMetadata() {
  const openGraphAlt = 'Adam Byers Development Logo';
  const openGraphImage = '/meta/opengraph-image.jpg';
  const openGraphWidth = 1200;
  const openGraphHeight = 630;
  return {
    metadataBase: new URL('https://abyers.ca/'),
    title: {
      default: 'Template',
      template: '%s - ABD',
    },
    description: 'Template for Next.js with Prettier and MUI',
    keywords: ['Template', 'Next.js', 'Prettier', 'MUI', 'ABD'],
    icons: {
      icon: [
        { url: '/meta/icon.svg', type: 'image/svg+xml' },
        { url: '/meta/favicon.ico', type: 'image/x-icon' },
      ],
      apple: 'meta/apple-icon.png',
    },
    openGraph: {
      images: [
        {
          url: openGraphImage,
          width: openGraphWidth,
          height: openGraphHeight,
          alt: openGraphAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: [
        {
          url: openGraphImage,
          width: openGraphWidth,
          height: openGraphHeight,
          alt: openGraphAlt,
        },
      ],
    },
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Little Big Sound Entertainment',
        url: 'https://abyers.ca',
        logo: 'https://abyers.ca/meta/apple-icon.png',
        sameAs: [
          // Put related socials here
          /* 'https://www.facebook.com/people/Little-Big-Sound-Entertainment/100067206510756/',
          'https://www.instagram.com/littlebigsoundentertainment/', */
        ],
      }),
    },
  };
}
