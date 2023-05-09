import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import { store, persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextNProgress options={{ showSpinner: false }} color="#0051ff" />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
