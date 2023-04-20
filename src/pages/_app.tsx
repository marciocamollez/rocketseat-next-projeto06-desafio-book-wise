import { globalStyles } from '../../styles/global';
import type { AppProps } from 'next/app';
import { Nunito } from 'next/font/google';

export const nunito = Nunito({ subsets: ['latin'] });

globalStyles();

function MyApp({ Component, pageProps }) {
  return (
    <div className={nunito.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
