import React from "react";
import { Navbar } from "flowbite-react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import SiteLogo from "../assets/site-logo.svg";
import MobileSiteLogo from "../assets/mob-nav-logo.png";
import Image from "next/image";

function AppBar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Navbar
      className='rounded-lg text-white bg-[#201F1F] shadow-lg shadow-black p-4'
      style={{ border: ".1px solid grey" }}
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href='/'>
        <div>
          <div className='w-14 sm:hidden'>
            <Image src={MobileSiteLogo} alt='logo' />
          </div>
          <div className='hidden sm:flex'>
            <SiteLogo />
          </div>
        </div>
      </Navbar.Brand>
      <div className='flex justify-center items-start md:items-center lg:items-center xl:items-center'>
        <Navbar.Collapse className='text-[#e4e3e3] absolute right-20 top-28 bg-[#201F1F] p-2 md:bg-transparent lg:bg-transparent xl:bg-transparent md:static lg:static xl:static w-[190px] rounded'>
          <a
            onClick={() => router.push(`/`)}
            className={`cursor-pointer mb-2 md:mb-0 text-start hover:text-gray-300 text-lg mx-3 ${
              currentRoute === "/" ? "text-white" : ""
            }`}
          >
            Home
          </a>
          <a
            onClick={() => router.push(`/About`)}
            className={`cursor-pointer mb-2 md:mb-0 text-start hover:text-gray-300 text-lg mx-3 ${
              currentRoute === "/About" ? "text-white" : ""
            }`}
          >
            About
          </a>
          <a
            onClick={() => router.push(`/CourseContent`)}
            className={`cursor-pointer mb-2 md:mb-0 text-start hover:text-gray-300 text-lg mx-3 ${
              currentRoute === "/CourseContent" ? "text-white" : ""
            }`}
          >
            Course content
          </a>
          <a
            onClick={() => router.push(`/About`)}
            className={`cursor-pointer mb-2 md:mb-0 text-start hover:text-gray-300 text-lg mx-3 ${
              currentRoute === "/FAQs" ? "text-white" : ""
            }`}
          >
            FAQs
          </a>
        </Navbar.Collapse>
        <Navbar.Toggle />
        <SearchIcon onClick={() => router.push('/Search')} className='h-8 md:ml-8 ml-4 mt-1 cursor-pointer' />
      </div>
    </Navbar>
  );
}

export default AppBar;
