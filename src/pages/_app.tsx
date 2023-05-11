import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { RecoilRoot } from 'recoil';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#ffffffff',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Qiita Sample App</title>
        <meta
          name="description"
          content="Sample project using Qiita's API created with Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}
