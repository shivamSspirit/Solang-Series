import Head from "next/head";
import AppBar from "../shared/AppBar";
import LandingSection from "./components/LandingSection";
// import ComingSoon from "./comingSoon/ComingSoon";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link href="/dist/output.css" rel="stylesheet"/>
      </Head>
      <div className='px-16 py-10'>
        <LandingSection />
        {/* <ComingSoon/> */}
      </div>
    </>
  );
}
