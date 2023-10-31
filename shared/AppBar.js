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
      className='rounded-lg text-white bg-[#201F1F] shadow-lg shadow-black p-6'
      style={{ border: ".1px solid grey" }}
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href='/'>
        <div>
          <div className='w-16 sm:hidden'>
            <Image src={MobileSiteLogo} alt="logo" />
          </div>
          <div className='hidden sm:flex'>
            <SiteLogo />
          </div>
        </div>
      </Navbar.Brand>
      <div className='flex justify-center items-center'>
        <Navbar.Collapse className='text-[gray]'>
          <a
            onClick={() => router.push(`/`)}
            className={`cursor-pointer hover:text-gray-300 text-lg ${
              currentRoute === "/" ? "text-white" : ""
            }`}
          >
            Home
          </a>
          <a
            onClick={() => router.push(`/About`)}
            className={`cursor-pointer hover:text-gray-300 text-lg ${
              currentRoute === "/About" ? "text-white" : ""
            }`}
          >
            About
          </a>
          <a
            onClick={() => router.push(`/CourseContent`)}
            className={`cursor-pointer hover:text-gray-300 text-lg ${
              currentRoute === "/CourseContent" ? "text-white" : ""
            }`}
          >
            Course content
          </a>
          <a
            onClick={() => router.push(`/About`)}
            className={`cursor-pointer hover:text-gray-300 text-lg ${
              currentRoute === "/FAQs" ? "text-white" : ""
            }`}
          >
            FAQs
          </a>
        </Navbar.Collapse>
        <Navbar.Toggle />
        <SearchIcon className='h-8 md:ml-8' />
      </div>
    </Navbar>
  );
}

export default AppBar;
