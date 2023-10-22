import React from "react";
import { Navbar } from "flowbite-react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import Link from "next/link";

function AppBar() {
    const router = useRouter();
    const currentRoute = router.pathname;

    console.log(currentRoute + " Path");

  return (
    <Navbar
      className='rounded-lg text-white bg-[#201F1F] shadow-lg shadow-black p-4 '
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
      <Navbar.Collapse className="text-[gray]">
        <Link href='/' className={`hover:text-gray-300 text-lg ${currentRoute === "/" ? "text-white" : ""}`}>
          Home
        </Link>
        <Link href='/About' className={`hover:text-gray-300 text-lg ${currentRoute === "/About" ? "text-white" : ""}`}>
          About
        </Link>
        <Link href='/CourseContent' className={`hover:text-gray-300 text-lg ${currentRoute === "/CourseContent" ? "text-white" : ""}`}>
          Course content
        </Link>
        <Link
          href='/comingSoon/ComingSoon'
          className={`hover:text-gray-300 text-lg ${currentRoute === "/FAQs" ? "text-white" : ""}`}
        >
          FAQs
        </Link>
        <SearchIcon className='h-8' />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppBar;
