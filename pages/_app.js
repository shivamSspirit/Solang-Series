import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/Layout";
// import "../dist/output.css";
import { NextSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <NextSeo
        title="Solidity On Solana"
        description="An Ultimate Dapp development Crash course"
      /> */}
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
