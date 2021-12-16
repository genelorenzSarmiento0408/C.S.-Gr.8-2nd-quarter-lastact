import "./styles.scss";
import NavBar from "../components/NavBar";
import SSRProvider from "react-bootstrap/SSRProvider";
import Head from "next/head";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import Footer from "../components/Footer";

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Head>
        <title>Computer 8 Final Output</title>
        <style>{dom.css()}</style>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </SSRProvider>
  );
}
