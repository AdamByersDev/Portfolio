import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { getMetadata } from '@/lib/metadata';
import { lato } from '@/lib/fonts';
import Dashboard from './Dashboard';
import { dashboardTheme } from '@/lib/theme';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={dashboardTheme}>
            <CssBaseline />
            <Dashboard theme={dashboardTheme}>{children}</Dashboard>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

export const generateMetadata = getMetadata('Dashboard Demo');
