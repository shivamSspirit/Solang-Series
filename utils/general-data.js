// for course content page

import Course1 from "../assets/Course1.png";
import Course2 from "../assets/Course2.png";
import Course3 from "../assets/Course3.png";
import Course4 from "../assets/Course4.png";
import Course5 from "../assets/Course5.png";

// for landing page 

import landingPg1 from "../assets/landingPg1.png";
import landingPg2 from "../assets/landingPg2.png";


export const announcementData = [
    {
      img: Course1,
      head: "Module Name ",
      desc: "Introduction",
      module_color: "#bfbfff",
    },
    {
      img: Course2,
      head: "Module Name",
      desc: "Building Solana Programs with Solidity",
      module_color: "#A3B86C",
    },
    {
      img: Course3,
      head: "Module Name",
      desc: "Minting Fungible Tokens",
      module_color: "#CFB53B",
    },
    {
      img: Course4,
      head: "Module Name ",
      desc: "Building a CPI-Enabled Flip Program",
      module_color: "#CD853F",
    },
    {
      img: Course5,
      head: "Module Name",
      desc: "How to Transfer Spl Tokens with Solidity",
      module_color: "#63a4da",
    },
    {
      img: Course3,
      head: "Module Name",
      desc: "Mint And Transfer NFT",
      module_color: "#e5acb6",
    },
  {
      img: Course2,
      head: "Module Name",
      desc: "Full-stack-dapp (fungible-token)",
      module_color: "#efc070",
    },
    {
      img: Course3,
      head: "Module Name",
      desc: "Full-stack-dapp (NFT)",
      module_color: "#F8C794",
    }
  ];

  export const announcementLandingData = [
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

  export const timelineData = [
    {
      navlink:"https://https://solang-series.vercel.app/CourseContent/module-0/module-0-a",
      heading: "Module 0: Introduction",
      content:
        "Here, you will learn the aims and objectives of Solidity for Solana. you, also learn about the structure of the course and the prerequisites required.",
      
    },
    {
      navlink:"https://https://solang-series.vercel.app/CourseContent/module-1/module-1-a",
      heading: "Module 1: Overview of Building Solana Programs using Solidity",
      content:
        "In this module of Solana with Solidity, you will learn the differences between Solana and EVM and explore brief overview of solidity on solana.",
    },
    {
      navlink:"https://https://solang-series.vercel.app/CourseContent/module-2/module-2-a",
      heading: "Module 2: Mint fungible(spl) Tokens",
      content:
        "In this module, we will develop a Solana program that will mint fungible tokens (spl tokens). The program should be able to set up and execute the token-minting process.",
    },
    {
      navlink:"https://https://solang-series.vercel.app/CourseContent/module-3/module-3-a",
      heading:
        "Module 3: Building a CPI-Enabled Flip Program with Solidity on Solana",
      content:
        "In this module, we dive you into the concepts of composability and CPI in Solana. We will also develop a hands-on solidity contract: a CPI Enabled Flip program on solana.",
    },
    {
      navlink:"https://https://solang-series.vercel.app/CourseContent/module-4/module-4-a",
      heading: "Module 4: How to Transfer Solana Tokens with Solidity",
      content:
        "In this module, we will develop a program on Solana that allows for the transfer of spl-tokens(minted in Module 2) to other accounts.",
    },
    {
      navlink:"https://https://solang-series.vercel.app/CourseContent/module-5/module-5-a",
      heading: "Module 5: How to Mint and transfer NFT",
      content:
       "In this module, we will develop a program on Solana that allows for the Mint(Mint-Authority is PDA) and transfer NFT to other accounts.",
    },
    {
      navlink:"https://https://solang-series.vercel.app/CourseContent/module-6/module-6-a",
      heading: "Module 6: Full-stack Dapp(fungible-token)",
      content:
       "In this module, we will develop a full-stack Solana DApp using solana-labs dapp-scaffold (Next.js) and combine SPL Fungible Token mint and transfer Solidity programs.",
    },
    {
      navlink:"https://https://solang-series.vercel.app/CourseContent/module-7/module-7-a",
      heading: "Module 7: Full-stack Dapp(Non-fungible-token)",
      content:
       "In this module, we will develop a full-stack Solana DApp using solana-labs dapp-scaffold (Next.js) and combine NFT Mint and transfer Solidity programs.",
    }
  ];