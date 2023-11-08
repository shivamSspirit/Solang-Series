import Head from "next/head";
import AppBar from "../shared/AppBar";
import LandingSection from "./components/LandingSection";
import {allDocuments} from '../.contentlayer/generated'
// import { getModules } from "./utils/module-lession";
import { useEffect } from "react";
import {getModules} from '../utils/module-lession'

export async function getStaticProps() {
  const allModuleNumbers = await getModules();
  console.log("allModuleNumbers", allModuleNumbers);
  const allModules = allModuleNumbers.map((post) =>
    post.substring("modules/".length)
  );
  return {
    props: {
      allModules,
    },
  };
}

export default function Home({allModules}) {
console.log("allModules",allModules)


// useEffect(()=>{
//   console.log("allllmidmsd",allModules)
// },[])
  

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
        <LandingSection allModules={allModules} />
      </div>
    </>
  );
}
