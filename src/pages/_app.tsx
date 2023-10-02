import { Provider } from "react-redux";
import { Store } from "@/redux/store";
import { AppProps } from "next/app";
import '../../public/assets/css/style.css';
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
