import "src/styles/main.css";

import type { AppProps } from "next/app";

const MyApp = (props: AppProps) => {
  const Component = props.Component;
  const pageProps = props.pageProps;
  return <Component {...pageProps} />;
};

// eslint-disable-next-line import/no-default-export
export default MyApp;
