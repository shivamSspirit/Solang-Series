import { Button } from "flowbite-react";
import { React, useState } from "react";
import ActiveLeftArrow from "../../assets/activelefticon.svg";
import InActiveLeftArrow from "../../assets/inactiveLeftIcon.svg";
import illustration from "../../assets/illustration.png";
import landingPg1 from "../../assets/landingPg1.png";
import landingPg2 from "../../assets/landingPg2.png";
import Ufo from "../../assets/Ufo.svg";
import Image from "next/image";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FooterComp from "../../shared/Footer";
// import Markdown from "react-markdown";
// import CourseMap from "./CourseMap";

const LandingSection = () => {
  // const [curBtn, setCurBtn] = useState(0);
  const [svgHoverColor, setSvgHoverColor] = useState("white");

  // const startBtnOnClick = () => {
  //   setCurBtn(1);
  // };
  // const resumeBtnOnClick = () => {
  //   setCurBtn(2);
  // };

  const announcementData = [
    {
      img: landingPg1,
      head: "Module Name ",
      desc: "In this part, we will familiarize ourselves with the practicalities of taking the course.",
    },
    {
      img: landingPg2,
      head: "Module Name",
      desc: "In this part, we will familiarize ourselves with the practicalities of taking the course.",
    },
    {
      img: landingPg1,
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

  // const moduleCard = (
  //   <div className='flex justify-evenly rounded-full mx-8 '>
  //     {announcementData.map((announcement, index) => (
  //       <div
  //         className='bg-[rgba(0, 0, 0, 0.16)] border border-[rgba(255, 255, 255, 0.36)] rounded-2xl w-[30%] flex-wrap ease-in-out my-5 mx-2 duration-200'
  //         key={index}
  //       >
  //         <div className='m-1'>
  //           <Image src={announcement.img} alt='med' />
  //           <div className='px-3 rounded-b-2xl'>
  //             <div className='text-2xl pt-6 pb-1'>{announcement.head}</div>
  //             <div className='text-[#CECECE] pb-6'>{announcement.desc}</div>
  //           </div>
  //           <div className='mb-2'>
  //             <Button className='w-full bg-white'>
  //               <div className='text-center text-black text-xl'>
  //                 Start Module
  //               </div>
  //             </Button>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );

  const timelineData = [
    {
      heading: "2017",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
    },
    {
      heading: "2016",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
    },
    {
      heading: "2015",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
    },
    {
      heading: "2011",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
    },
    {
      heading: "2012",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
    },
    {
      heading: "2007",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
    },
  ];

  const timeLine = (
    <div className='timeline'>
      {timelineData.map((data, key) => (
        <div key={key} className='wrap left'>
          <div className='content bg-primaryDark text-white'>
            <h2>{data.heading}</h2>
            <p className='text-[#CECECE]'>{data.content}</p>
          </div>
        </div>
      ))}
    </div>
  );

  // const whySoliditySection = (
  //   <div className='bg-[#0000005C] text-white py-6 px-4 rounded-2xl'>
  //     <div className='text-center text-4xl mb-10'>Why Solidity for Solana?</div>
  //     <div className='flex justify-between'>
  //       {whySolidityData.map((data, idx) => (
  //         <div className='w-[30%]' key={idx}>
  //           <div className='mb-5'>
  //             <Ufo />
  //           </div>
  //           <div className='mb-4'>{data.head}</div>
  //           <div className='text-gray-400'>
  //             Whether you want to develop as a professional or discover a new
  //             hobby, there's an online course for that. You can even take your
  //             learning further with online micro credentials and degrees.
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className='mt-20 sm:px-12'>
      <div>
        <div className='flex lg:flex-row flex-col-reverse justify-between'>
          <div className='lg:w-1/2 text-white'>
            <div className='text-2xl md:text-5xl'>
              Unlocking the Power of Solana with Solidity Smart Contracts
            </div>
            <div className='mt-10 text-gray-400 text-sm md:text-base'>
              Dive into the world of blockchain development with our Solidity
              for Solana courses. Master the art of creating smart contracts on
              the Solana network, opening the door to high-speed, secure, and
              scalable decentralized applications. Join us on a journey of
              learning that empowers you to shape the future of blockchain
              technology
            </div>
            <div className='mt-10'>
              <div className='flex pr-6'>
                <button
                  color='transparent'
                  onMouseEnter={() => setSvgHoverColor("black")}
                  onMouseLeave={() => setSvgHoverColor("white")}
                  // onClick={startBtnOnClick}
                  className={`border border-white flex justify-center items-center py-4 px-4 rounded-sm hover:bg-white hover:text-black`}
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
              {/* <div className='bg-blue-500 h-2 z-1 top-[-2] relative right-1'></div> */}
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

      {/*  */}
      <div className='mt-20'>{module}</div>
      <div className='text-white text-center mt-20'>
        <h1 className='text-4xl'>Course Map</h1>
        <h5 className='text-base md:text-xl py-4 text-[#CECECE]'>
          The course map lets you gets all <br /> the information for a better
          learning
        </h5>
      </div>
      <div className='mt-20 mb-20'>{timeLine}</div>
      {/* <div className='mt-20'>{<CourseMap />}</div> */}
      {/* <div className='mt-20'>{whySoliditySection}</div> */}
    </div>
  );
};

export default LandingSection;
