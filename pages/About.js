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
    <div className='mt-20 sm:px-12'>
      <div>
        <div className='flex flex-col-reverse justify-between'>
          <div className='text-white my-20 sm:my-28'>
            <div className='text-5xl'>About</div>
            <div className='mt-10 text-sm sm:text-base'>
              <p>
                Welcome to Solidity for Solana, where innovation meets
                blockchain. Our mission is to be at the forefront of the
                ever-evolving world of decentralized applications and smart
                contracts. We are passionate about the potential of blockchain
                technology to transform industries and empower individuals. With
                a focus on the Solana ecosystem and the Solidity programming
                language, we're bridging the gap between security, scalability,
                and simplicity.
              </p>
              <br />
              <p>
                At Solidity for Solana, we envision a future where blockchain is
                accessible to all. We believe in democratizing the technology
                and making it easy for developers and entrepreneurs to harness
                the power of Solana's high-performance blockchain. Our vision is
                to be the catalyst that enables the creation of innovative,
                efficient, and secure decentralized solutions.
              </p>
              <br />
              <p>
                Our team is composed of passionate blockchain enthusiasts and
                experienced developers who are committed to driving innovation.
                We bring a wealth of knowledge in Solidity, Solana, and
                blockchain technology to the table. With a shared vision of
                transforming the digital landscape, we're dedicated to providing
                the resources, education, and tools you need to succeed in the
                world of Solana development.
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

      {/*  */}
      <div className='mb-20'>{module}</div>
    </div>
  );
};

export default About;
