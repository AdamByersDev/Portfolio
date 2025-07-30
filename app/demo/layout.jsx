import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import theme from '@/lib/theme';
import { getMetadata } from '@/lib/metadata';
import { lato } from '@/lib/fonts';
import DashboardThemeProviderWrapper from '@/components/wrappers/DashboardThemeProviderWrapper';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.variable}>
      <body>
        <AppRouterCacheProvider>
          <DashboardThemeProviderWrapper>
            <CssBaseline />
            {children}
          </DashboardThemeProviderWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

export const generateMetadata = getMetadata('Dashboard Demo');
