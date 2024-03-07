import '@/styles/globals.css';

import { ModalProvider } from '@ma9pie/use-modal';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps}></Component>
    </ModalProvider>
  );
}
