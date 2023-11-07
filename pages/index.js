import Head from "next/head";
import AppBar from "../shared/AppBar";
import LandingSection from "./components/LandingSection";
import {allDocuments} from '../.contentlayer/generated'

export default function Home() {

  return (
    <>
      <Head>
        <title>Soldity On Solana</title>
        <meta name='description' content='Solidity On Solana' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        {/* <link href="/dist/output.css" rel="stylesheet"/> */}
      </Head>
      <div className='w-full'>
        <LandingSection />
      </div>
    </>
  );
}
