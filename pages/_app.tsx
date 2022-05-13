import "../styles/globals.css";
import type {AppProps} from "next/app";
import Header from "components/Header";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Header/>
      <div className="mx-auto w-full max-w-3xl py-14 px-6">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
