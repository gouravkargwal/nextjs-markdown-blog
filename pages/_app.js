import "../styles/globals.css";
import Layout from "../layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head></Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
