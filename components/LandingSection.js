import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";

import { React, useState } from "react";
import illustration from "../assets/illustration.png";
import landingPg1 from "../assets/landingPg1.png";
import landingPg2 from "../assets/landingPg2.png";
import Layout from "./Layout";

import Link from "next/link";

const announcementData = [
  {
    img: landingPg1,
    head: "Mint spl Tokens",
    desc: "In this module, we will develop a Solana program that will mint fungible spl tokens. The program should be able to set up and execute the token-minting process.",
  },
  {
    img: landingPg2,
    head: "Transfer spl tokens",
    desc: "In this module, we will develop a program on Solana that allows for the transfer of spl-tokens that minted in Module 2 to other accounts.",
  },
  {
    img: landingPg1,
    head: "Mint and Transfer NFT",
    desc: "In this module, we will develop a program on Solana that allows for the mint and transfer nft",
  },
];

const timelineData = [
  {
    navlink:"https://solidityonsolana.one/CourseContent/module-0/module-0-a",
    heading: "Module 0: Introduction",
    content:
      "Here, you will learn the aims and objectives of Solidity for Solana. you, also learn about the structure of the course and the prerequisites required.",
    
  },
  {
    navlink:"https://solidityonsolana.one/CourseContent/module-1/module-1-a",
    heading: "Module 1: Overview of Building Solana Programs using Solidity",
    content:
      "In this module of Solana with Solidity, you will learn the differences between Solana and EVM and explore brief overview of solidity on solana.",
  },
  {
    navlink:"https://solidityonsolana.one/CourseContent/module-2/module-2-a",
    heading: "Module 2: Mint fungible(spl) Tokens",
    content:
      "In this module, we will develop a Solana program that will mint fungible tokens (spl tokens). The program should be able to set up and execute the token-minting process.",
  },
  {
    navlink:"https://solidityonsolana.one/CourseContent/module-3/module-3-a",
    heading:
      "Module 3: Building a CPI-Enabled Flip Program with Solidity on Solana",
    content:
      "In this module, we dive you into the concepts of composability and CPI in Solana. We will also develop a hands-on solidity contract: a CPI Enabled Flip program on solana.",
  },
  {
    navlink:"https://solidityonsolana.one/CourseContent/module-4/module-4-a",
    heading: "Module 4: How to Transfer Solana Tokens with Solidity",
    content:
      "In this module, we will develop a program on Solana that allows for the transfer of spl-tokens(minted in Module 2) to other accounts.",
  },
  {
    navlink:"https://solidityonsolana.one/CourseContent/module-5/module-5-a",
    heading: "Module 5: How to Mint and transfer NFT",
    content:
     "In this module, we will develop a program on Solana that allows for the Mint(Mint-Authority is PDA) and transfer NFT to other accounts.",
  },
  {
    navlink:"https://solidityonsolana.one/CourseContent/module-6/module-6-a",
    heading: "Module 6: Full-stack Dapp(fungible-token)",
    content:
     "In this module, we will develop a full-stack Solana DApp using solana-labs dapp-scaffold (Next.js) and combine SPL Fungible Token mint and transfer Solidity programs.",
  },
  {
    navlink:"https://solidityonsolana.one/CourseContent/module-7/module-7-a",
    heading: "Module 7: Full-stack Dapp(Non-fungible-token)",
    content:
     "In this module, we will develop a full-stack Solana DApp using solana-labs dapp-scaffold (Next.js) and combine NFT Mint and transfer Solidity programs.",
  },
  {
    navlink:"#",
    heading: "Module 8: Full-stack Dapp(Final Project)",
    content:
     "Coming-sooon",
  },
];

const LandingSection = ({ allModules }) => {
  // console.log("all modes in land", allModules);
  const [svgHoverColor, setSvgHoverColor] = useState("white");
  const [disable, setDisable] = useState(false);
  const router = useRouter();
  const startBtnOnClick = () => {
    router.push("/CourseContent");
  };

  let trendingModules = ["module-2", "module-4", "module-5"];

  const mergedArray = trendingModules.map((moduleName, index) => ({
    module: moduleName,
    ...announcementData[index],
  }));

  const returnModulePath = (announcement) => {
      router.push({
        pathname: `/CourseContent/${announcement}/${announcement}-a`,
      });
  };

  // console.log("disable", disable);

  const module = (
    <Box sx={{ flexGrow: 1, color: "white" }}>
      <Grid
        container
        className='flex justify-evenly items-start'
        columns={{ xs: 4, sm: 10, md: 14, lg: 14 }}
      >
        {mergedArray.map((announcement, index) => (
          <Grid
            className='bg-[rgba(0, 0, 0, 0.16)] my-2 rounded-2xl'
            item
            xs={3}
            sm={4}
            md={4}
            lg={4}
            key={index}
          >
            <div className='m-1'>
              <Image
                onClick={() => {
                  returnModulePath(announcement.module);
                }}
                src={announcement?.img}
                alt='med'
                className={`cursor-pointer`}
              />
              <div className='px-3 rounded-b-2xl max-w-[416px] ml-2'>
                <div
                  className={`text-2xl font-semibold pt-6 pb-1 cursor-pointer`}
                  onClick={() => {
                    returnModulePath(announcement.module);
                  }}
                >
                  {announcement.head}
                </div>
                <div
                  className={`text-secondaryGrey pb-6 font-bodyFamily`}
                >
                  {announcement.desc}
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const timeLine = (
    <div className='timeline'>
      {timelineData.map((data, key) => (
        <div
          key={key}
          className={`wrap left ${
            data.content === "Coming Soon" ? "bg:blue" : ""
          }`}
        >
          <div className='content bg-primaryDark text-white'>
           <Link className="hover:text-[#ba8b02]" style={{textDecoration:"underline"}} href={data.navlink}><h2 className='font-semibold text-xl'>{data.heading}</h2></Link>
            <p className={`text-[#CECECE]  font-bodyFamily`}>{data.content}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Layout>
      <div className='mt-20 sm:px-12'>
        <div>
          <div className='flex lg:flex-row flex-col-reverse justify-between'>
            <div className='lg:w-1/2 text-white'>
              <div className='text-2xl font-bold sm:text-3xl md:text-4xl'>
                {"Building On Solana: A Deep Dive"
                  .split("")
                  .map((letter, index) => {
                    return (
                      <span
                        key={index}
                        className='hover:text-funPinkDark hover:mb-3 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim text-3xl md:text-5xl mb-2 leading-loose subpixel-antialiased'
                      >
                        {letter}
                      </span>
                    );
                  })}
              </div>
              <div className='text-xl md:text-2xl mt-3 font-bold uppercase text-[#ba8b02] leading-loose'>
                Solidity on solana
              </div>
              <div className='mt-10 font-bodyFamily text-secondaryGrey text-sm md:text-base'>
                Dive into the world of blockchain development with our Solidity
                on Solana course. Master the art of creating smart contracts on
                the Solana network using Solidity, opening the door to
                high-speed, secure, and scalable decentralized applications.
                Join us on a journey of learning that empowers you to shape the
                future of blockchain technology
              </div>
              <div className='mt-10'>
                <div className='flex pr-6'>
                  <button
                    color='transparent'
                    onMouseEnter={() => setSvgHoverColor("black")}
                    onMouseLeave={() => setSvgHoverColor("white")}
                    onClick={startBtnOnClick}
                    className="border border-white flex justify-center items-center py-4 px-4 rounded-sm hover:bg-white hover:text-black"
                    style={{ boxShadow: "-5px 5px 2px white" }}
                  >
                    <svg
                      width='16'
                      height='17'
                      viewBox='0 0 16 17'
                      className='mr-3'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g id='.left-icon'>
                        <path
                          id='Vector'
                          d='M5.06187 12.9259L0 8.5L5.06187 4.07406L5.92594 5.06187L2 8.5L5.92594 11.9381L5.06187 12.9259ZM10.9381 12.9259L10.0741 11.9381L14 8.5L10.0741 5.06187L10.9381 4.07406L16 8.5L10.9381 12.9259ZM6.94219 14.3125L5.6875 13.94L9.05781 2.6875L10.3125 3.06L6.94219 14.3125Z'
                          fill={svgHoverColor}
                        />
                      </g>
                    </svg>
                    <span className='md:text-xl'>Start Course</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='mb-16 lg:w-1/2 lg:m-0'>
              <div className='flex justify-center lg:justify-end'>
                <Image
                  src={illustration}
                  alt='illustration'
                  className='fill-white'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-20'>{module}</div>

        <div className='text-white text-center mt-20'>
          <h1 className='text-4xl'>Course Map</h1>
          <h5 className='text-base md:text-xl py-4 text-[#CECECE]'>
            The course map lets you gets all <br /> the information for a better
            learning
          </h5>
        </div>
        <div className='mt-20 mb-20'>{timeLine}</div>
      </div>
    </Layout>
  );
};

export default LandingSection;
