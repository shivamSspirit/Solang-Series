import { React } from "react";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import Link from "next/link";

import illustration from "../assets/illustration.png";

const About = () => {
  return (
    <Layout>
      <div className='mt-5 sm:px-12'>
        <NextSeo
            title="About It"
            titleTemplate="Soldity On Solana"
            defaultTitle="Soldity On Solana"
            description="Deep dive into solana development using solidity"
            canonical="https://solidityonsolana.one/"
            openGraph={{
              url: "https://solidityonsolana.one/",
              title: "Soldity For Solana",
              description: "An Ultimate Crash Course on how to build on solana using solidity",
              images: [
                {
                  url: "https://i.postimg.cc/hvvz3KqW/landpage.jpg",
                  width: 600,
                  height: 420,
                  alt: "Soldity For Solana",
                },
              ],
            }}
            twitter={{
              handle: "@shivamSspirit",
              site: "shivamSspirit",
              cardType: "summary_large_image",
            }}
          /> 
        <div>
          <div className='flex flex-col-reverse justify-between'>
            <div className='text-white my-5 sm:mb-10'>
              <div className='text-5xl'>About</div>
              <div className='mt-10 text-secondaryGrey font-bodyFamily text-sm sm:text-base'>
                <p>
                  We welcome you to Solidity for Solana. Here, we provide
                  educational resources and content for budding developers and
                  enthusiasts to learn blockchain technology, focusing mainly on
                  Solana development using <Link className="underline decoration-[#3f6212] decoration-wavy hover:bg-blue-300 hover:text-black" href={'https://solang.readthedocs.io/en/v0.3.3/language/introduction.html'}>Solidity</Link>, and focusing on those
                  wanting to transition from Eth to <Link className="underline decoration-[#3f6212] decoration-wavy hover:bg-blue-300 hover:text-black" href={'https://solana.com/'}>Solana</Link>. We aim to equip
                  users with the knowledge of developing dApps on Solana with
                  ease while focusing on simplicity, security and scalability.
                </p>
                <br />
                <p>
                  we are bringing wealth of knowledge and resources for budding enthusiasts
                  willing to gain deep knowledge about the ins and outs of
                  Solana. We are dedicated to providing resources, education,
                  and tools to help users succeed in Solana development.
                </p>
                <br />
                <p>
                  Our goal is to be the hub for users who want to learn about
                  blockchain. We aim to be the premier hub for educational
                  content on Solana and EVM development. Our courses provide
                  ample knowledge of the deep technical concepts to know for
                  development on Solana. By utilising Solidity, we also provide
                  a familiar framework whose knowledge can be applied to other
                  blockchains too. Join us to learn more about blockchain and
                  start your journey of Solana development.
                </p>
                <br />
                <p>
                  We're excited to have you along on this exciting journey.
                  Whether you're a seasoned developer, a blockchain enthusiast,
                  or someone new to the space, we're here to support your
                  exploration of Solidity on Solana. Together, we can unlock new
                  possibilities, create innovative solutions, and shape the
                  future of blockchain technology. Join us, and let's build the
                  future of decentralization together.
                </p>
                <br />
              </div>
            </div>
            <div className='mb-16 lg:m-0'>
              <div className='flex justify-center'>
                <Image
                  src={illustration}
                  alt='illustration'
                  className='fill-white'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
