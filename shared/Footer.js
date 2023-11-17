import { Footer } from "flowbite-react";
import Github from "../assets/Github.svg";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";
import Discord from "../assets/Discord.svg";
import TwitterX from "../assets/twitterX.svg";
import SiteLogo from "../assets/site-logo.svg";
import CCFooter from "../assets/CCFooter.svg";
import Image from "next/image";
import Link from 'next/link';

const FooterComp = () => {
  return (
    <Footer
      container
      className='bg-[#0000005C] border border-[rgba(255, 255, 255, 0.36)] mb-5 rounded-2xl text-white'
    >
      <div className='md:w-1/3'>
        <div>
          <div className='mb-4'>
            <SiteLogo />
          </div>
        </div>
        <div className='mb-10 text-gray-400'>
          Dive into the world of blockchain development with our Solidity On
          Solana course.
        </div>
        <div className='text-gray-400'> <Link className="ml-3 mr-3 underline" href={'https://solidityonsolana.one/'}>
          solidityOnsolana.one
        </Link>   </div>
      </div>
      <div className='md:w-1/3 flex flex-col items-start text-gray-400'>
        <div className='flex mb-10 mt-10 md:mt-0'>

          <Link href={'https://discordapp.com/users/936599617267695628'} >
            <Discord className='mr-3' />
          </Link>

          <Link href={'https://github.com/shivamsoni00'} >
            <Github className='mr-3' />
          </Link>

          <Link href={'https://twitter.com/ShivamSspirit'} >
            <TwitterX className='mr-3' />
          </Link>

        </div>
        <div className='mb-4'>
          <CCFooter />
        </div>
        <div className='text-gray-400'>
          <span>The material is powered by</span>
          <Link className="ml-3 mr-3 underline" href={'https://solidityonsolana.one/'}>
            solidityonsolana.one
          </Link>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;