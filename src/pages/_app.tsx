import { Provider } from "react-redux";
import { Store } from "@/redux/store";
import { AppProps } from "next/app";
import "terminal.css";
import "../../public/assets/css/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Provider store={Store}>
      <pre>
        <Component {...pageProps} />
      </pre>
    </Provider>
  </>
);
export default MyApp;
