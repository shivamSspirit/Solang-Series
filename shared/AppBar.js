import React from "react";
import { Navbar } from "flowbite-react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import Link from "next/link";

function AppBar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Navbar
      className='rounded-lg text-white bg-[#201F1F] shadow-lg shadow-black p-4 '
      style={{ border: ".1px solid grey" }}
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href='/'>
        <span className='self-center whitespace-nowrap text-sm md:text-xl pl-4 font-semibold dark:text-white'>
          Solidity for Solana
        </span>
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
