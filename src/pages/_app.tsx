import { AppProps } from "next/app";
import "terminal.css";
import "../../public/assets/css/globals.css";
const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);
export default MyApp;
