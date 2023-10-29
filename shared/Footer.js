import { Footer } from "flowbite-react";
import Github from "../assets/Github.svg";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";
import Discord from "../assets/Discord.svg";
import TwitterX from "../assets/twitterX.svg";
import CCFooter from "../assets/CCFooter.svg";
import Image from "next/image";

const FooterComp = () => {
  return (
    <Footer
      container
      className='bg-[#0000005C] border border-[rgba(255, 255, 255, 0.36)] mb-5 rounded-2xl text-white'
    >
      <div className='md:w-1/3'>
        <div className='mb-4 text-2xl'>Solidity for Solana</div>
        <div className='mb-10 text-gray-400'>
          Dive into the world of blockchain development with our Solidity for
          Solana courses.
        </div>
        <div className='text-gray-400'>solidityforsolana@email.com</div>
      </div>
      <div className='md:w-1/3 flex flex-col items-start text-gray-400'>
        <div className='flex mb-10 mt-10 md:mt-0'>
          <Discord className='mr-3' />
          <Github className='mr-3' />
          <TwitterX className='mr-3' />
          <Facebook className='mr-3' />
          <Instagram className='mr-3' />
        </div>
        <div className='mb-4'>
          <CCFooter />
        </div>
        <div className='text-gray-400'>
          The material is licensed under the Creative Commons BY-NC-SA 3.0
          License.
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;