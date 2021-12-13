import "./styles.scss";
import NavBar from "../components/navbar/NavBar";
import SSRProvider from "react-bootstrap/SSRProvider";
import Head from "next/head";
export default function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Head>
        <title>Computer 8 Final Output</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </SSRProvider>
  );
}
