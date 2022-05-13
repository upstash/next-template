import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "components/Header";
import Footer from "components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen flex-col text-zinc-800">
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
