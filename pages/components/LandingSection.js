import { Button } from "flowbite-react";
import { React, useState } from "react";
import ActiveLeftArrow from "../../assets/activelefticon.svg";
import InActiveLeftArrow from "../../assets/inactivelefticon.svg";
import illustration from "../../assets/illustration.png";
import cardImg from "../../assets/CardImg.png";
import Ufo from "../../assets/Ufo.svg";
import Image from "next/image";
import FooterComp from "../../shared/Footer";
// import CourseMap from "./CourseMap";

const LandingSection = () => {
  const [curBtn, setCurBtn] = useState(0);

  const startBtnOnClick = () => {
    setCurBtn(1);
  };
  const resumeBtnOnClick = () => {
    setCurBtn(2);
  };

  const whySolidityData = [
    {
      img: Ufo,
      head: "Learn anything ",
      desc: "Whether you want to develop as a professional or discover a new hobby, there's an online course for that. You can even take your learning further with online micro credentials and degrees.",
    },
    {
      img: Ufo,
      head: "Learn anything",
      desc: "Whether you want to develop as a professional or discover a new hobby, there's an online course for that. You can even take your learning further with online micro credentials and degrees.",
    },
    {
      img: Ufo,
      head: "Learn anything",
      desc: "Whether you want to develop as a professional or discover a new hobby, there's an online course for that. You can even take your learning further with online micro credentials and degrees.",
    },
  ];

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

  const moduleCard = (
    <div className='flex justify-evenly rounded-full mx-8 text-white'>
      {announcementData.map((announcement, index) => (
        <div
          className='bg-[rgba(0, 0, 0, 0.16)] border border-[rgba(255, 255, 255, 0.36)] rounded-2xl w-[30%] ease-in-out my-5 mx-2 duration-200'
          key={index}
        >
          <div className='m-1'>
            <Image src={announcement.img} alt='med' />
            <div className='px-3 rounded-b-2xl'>
              <div className='text-2xl pt-6 pb-1'>{announcement.head}</div>
              <div className='text-[#CECECE] pb-6'>{announcement.desc}</div>
            </div>
            <div className='mb-2'>
              <Button className='w-full bg-white'>
                <div className='text-center text-black text-xl'>
                  Start Module
                </div>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const whySoliditySection = (
    <div className='bg-[#0000005C] text-white py-6 px-4 rounded-2xl'>
      <div className='text-center text-4xl mb-10'>Why Solidity for Solana?</div>
      <div className='flex justify-between'>
        {whySolidityData.map((data, idx) => (
          <div className='w-[30%]' key={idx}>
            <div className='mb-5'>
              <Ufo />
            </div>
            <div className='mb-4'>{data.head}</div>
            <div className='text-gray-400'>
              Whether you want to develop as a professional or discover a new
              hobby, there's an online course for that. You can even take your
              learning further with online micro credentials and degrees.
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className='mt-10'>
      <div>
        <div className='flex justify-between '>
          <div className='w-1/2 text-white'>
            <div className='text-5xl '>
              Unlocking the Power of Solana with Solidity Smart Contracts
            </div>
            <div className='mt-10 text-gray-400'>
              Dive into the world of blockchain development with our Solidity
              for Solana courses. Master the art of creating smart contracts on
              the Solana network, opening the door to high-speed, secure, and
              scalable decentralized applications. Join us on a journey of
              learning that empowers you to shape the future of blockchain
              technology
            </div>
            <div className='mt-10'>
              <div className='flex'>
                <div className='pr-6'>
                  <Button
                    color='transparent'
                    onClick={startBtnOnClick}
                    className={`border border-white ${
                      curBtn === 1 && "bg-white text-black"
                    }`}
                  >
                    {curBtn == 1 ? (
                      <ActiveLeftArrow className='mr-3' />
                    ) : (
                      <InActiveLeftArrow className='mr-3' />
                    )}

                    <span>Start Course</span>
                  </Button>
                </div>
                <div>
                  <Button
                    color='transparent'
                    onClick={resumeBtnOnClick}
                    className={`border border-white ${
                      curBtn === 2 && "bg-white text-black"
                    }`}
                  >
                    Resume Course
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2 '>
            <div className='flex justify-end'>
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
      <div className='mt-20'>{moduleCard}</div>
      {/* <div className='mt-20'>{<CourseMap />}</div> */}
      <div className='mt-20'>{whySoliditySection}</div>
    </div>
  );
};

export default LandingSection;
