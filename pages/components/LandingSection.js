import { Button } from "flowbite-react";
import { React, useState } from "react";
import leftArrow from "../../assets/lefticon.png";
import illustration from "../../assets/illustration.png";
import Image from "next/image";

const LandingSection = () => {
  const [curBtn, setCurBtn] = useState(0);

  const startBtnOnClick = () => {
    setCurBtn(1);
  };
  const resumeBtnOnClick = () => {
    setCurBtn(2);
  };

  return (
    <div className='mt-20'>
      <div>
        <div className="flex justify-between ">
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
                    <Image
                      alt='img'
                      src={leftArrow}
                      width={25}
                      height={25}
                      className='pr-2'
                    />
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
          <div className='w-1/2'>
            <Image src={illustration} alt="illustration"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
