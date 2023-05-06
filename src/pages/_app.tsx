import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress options={{ showSpinner: false }} color="#0051ff" />
      <Component {...pageProps} />
    </>
  );
}
