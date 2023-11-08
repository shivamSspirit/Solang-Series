import { Button } from "flowbite-react";
import { React, useState } from "react";
import ActiveLeftArrow from "../assets/activelefticon.svg";
import InActiveLeftArrow from "../assets/inactiveLeftIcon.svg";
import illustration from "../assets/illustration.png";
import cardImg from "../assets/CardImg.png";
import landingPg1 from "../assets/landingPg1.png";
import landingPg2 from "../assets/landingPg2.png";
import Ufo from "../assets/Ufo.svg";
import Image from "next/image";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";

const About = () => {
  const [svgHoverColor, setSvgHoverColor] = useState("white");

  const announcementData = [
    {
      img: cardImg,
      head: "Module Name ",
      desc: "In this part, we will familiarize ourselves with the practicalities of taking the course.",
    },
    {
      img: cardImg,
      head: "Module Name",
      desc: "In this part, we will familiarize ourselves with the practicalities of taking the course.",
    },
    {
      img: cardImg,
      head: "Module Name",
      desc: "In this part, we will familiarize ourselves with the practicalities of taking the course.",
    },
  ];

  const module = (
    <Box sx={{ flexGrow: 1, color: "white" }}>
      <Grid
        container
        className='flex justify-evenly items-center'
        columns={{ xs: 4, sm: 10, md: 14, lg: 14 }}
      >
        {announcementData.map((announcement, index) => (
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
              <Image src={announcement.img} alt='med' />
              <div className='px-3 rounded-b-2xl'>
                <div className='text-2xl pt-6 pb-1'>{announcement.head}</div>
                <div className='text-[#CECECE] pb-6'>{announcement.desc}</div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Layout>
      <div className='mt-5 sm:px-12'>
        <NextSeo title='About it' />
        <div>
          <div className='flex flex-col-reverse justify-between'>
            <div className='text-white my-5 sm:mb-10'>
              <div className='text-5xl'>About</div>
              <div className='mt-10 text-secondaryGrey font-bodyFamily text-sm sm:text-base'>
              <p>
                We welcome you to Solidity for Solana. Here, we provide
                educational resources and content for budding developers and
                enthusiasts to learn blockchain technology, focusing mainly on
                Solana development using Solidity, and focusing on those wanting
                to transition from EVM to Solana. We aim to equip users with the
                knowledge of developing dApps on Solana with ease while focusing
                on simplicity, security and scalability.
              </p>
              <br />
              <p>
                we are bring here wealth of knowledge and resources for budding enthusiasts
                willing to gain deep knowledge about the ins and outs of solidity on Solana.
                We are dedicated to providing resources, education, and demos to
                help users succeed in Solana development.
              </p>
              <br />
              <p>
                Our goal is to be the hub for users who want to learn about
                blockchain. We aim to be the premier hub for educational content
                on Solana and blockchain development. Our courses provide ample
                knowledge of the deep technical concepts to know for development
                on Solana. By utilising Solidity, we also provide a familiar
                framework whose knowledge can be applied to other blockchains
                too. Join us to learn more about blockchain and start your
                journey of Solana development.
              </p>
              <br />
              <p>
                We're excited to have you along on this exciting journey.
                Whether you're a seasoned developer, a blockchain enthusiast, or
                someone new to the space, we're here to support your exploration
                of Solidity on Solana. Together, we can unlock new
                possibilities, create innovative solutions, and shape the future
                of blockchain technology. Join us, and let's build the future of
                decentralization together.
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
