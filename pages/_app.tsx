import { AppProps } from 'next/dist/shared/lib/router/router';

import '../styles/fontfaces.scss';
import '../styles/reset.scss';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
