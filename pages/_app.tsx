import "styles/globals.css";

import type {AppProps} from "next/app";
import Header from "components/Header";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Header/>
      <div className="mx-auto w-full max-w-3xl py-14 px-6">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
