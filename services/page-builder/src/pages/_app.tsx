import "@/src/styles/globals.css";
import type { AppProps } from 'next/app';
import { ToastProvider } from "@headless-web-builder/react-components-toast";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default App;
