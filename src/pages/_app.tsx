import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#4caf50',
//     },
//     secondary: {
//       main: '#f06292',
//     },
//     background: {
//       default: '#e0f2f1',
//     },
//   },
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Qiita Sample</title>
        <meta
          name="description"
          content="Sample project using Qiita's API created with Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Component {...pageProps} />
    </>
  );
}
