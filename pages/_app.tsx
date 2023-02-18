import "@/styles/globals.css";
import "@/styles/sideNavigation.css";
import "@/styles/profile.css";
import { FC } from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { wrapper } from "../reduxStore/store";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <div className="root">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
};

export default MyApp;
