import React from "react";
import { Navbar } from "flowbite-react";
import SearchIcon from "@mui/icons-material/Search";

function AppBar() {
  return (
    <Navbar
      className='rounded-lg text-white bg-[#201F1F] shadow-lg shadow-black p-4'
      style={{ border: ".1px solid grey" }}
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href='https://flowbite.com/'>
        <span className='self-center whitespace-nowrap text-xl pl-4 font-semibold dark:text-white'>
          Solidity for Solana
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <a href='/' className='hover:text-gray-300 text-lg'>
          Home
        </a>
        <a href='/' className='hover:text-gray-300 text-lg'>
          About
        </a>
        <a href='/' className='hover:text-gray-300 text-lg'>
          Course content
        </a>
        <a href='/' className='hover:text-gray-300 text-lg'>
          FAQs
        </a>
        <SearchIcon className="h-8"/>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppBar;
