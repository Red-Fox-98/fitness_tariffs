import { FC } from "react";
import { AppProps } from "next/app";
import "./index.css";
import I18nProvider from "src/appFsd/i18n/i18nProvider";
import StoreProvider from "src/shared/store/StoreProvider";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <I18nProvider>
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  </I18nProvider>
);

export default WrappedApp;
