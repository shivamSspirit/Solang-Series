"use client";

import Image from "next/image";
import Link from "next/link";
import SiteLogo from "../assets/site-logo.svg";
import MobileSiteLogo from "../assets/mob-nav-logo.png";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";

function NavBar() {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  //const [removesearchfrommobile, setremovesearchfrommobile] = useState(false);
 // const [windows,setWindowWidth] = useState('');
  const currentRoute = router.pathname;

   if (typeof window !== "undefined") {
  //   // detect window screen width function
  // setWindowWidth(window)
  //   console.log("hdfhfdhjdfs", window.innerWidth);
 }

  // useEffect(() => {
    
  //     if (windows.innerWidth === 752) {
  //       setremovesearchfrommobile(!removesearchfrommobile);
  //     }
    
  // }, [windows.innerwi]);

  // const size = useWindowSize();

  return (
    <div>
      <nav className="rounded-lg py-2 text-white bg-primaryDark shadow-lg shadow-black">
        <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <div>
                <div className="w-14 sm:hidden">
                  <Link href={"/"}>
                    <Image src={MobileSiteLogo} alt="logo" />
                  </Link>
                </div>
                <div className="hidden sm:flex">
                  <Link href={"/"}>
                    <SiteLogo />
                  </Link>
                </div>
              </div>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none mr-3"
                  onClick={() => setNavbar(!navbar)}
                >
                  <span
                    className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm bg-white ${
                      navbar ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
                  ></span>
                  <span
                    className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm bg-white my-0.5 ${
                      navbar ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm bg-white ${
                      navbar ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
                  ></span>
                </button>
                <SearchIcon
                  onClick={() => router.push("/Search")}
                  className="h-5 hidden md:block lg:block lg:mt-1 xl:mt-1 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div>
            <div
              className={`z-10 bg-primaryDark right-10 rounded-lg top-28 absolute md:static justify-self-center md:block md:pb-0 md:mt-0 ${
                navbar ? "p-3 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="z-10 md:h-auto items-center justify-center md:flex ">
                <li
                  className={`cursor-pointer mb-2 md:mb-0 text-start hover:text-gray-300 text-lg mx-3 ${
                    currentRoute === "/" ? "text-white" : ""
                  }`}
                >
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li
                  className={`cursor-pointer mb-2 md:mb-0 text-start hover:text-gray-300 text-lg mx-3 ${
                    currentRoute === "/About" ? "text-white" : ""
                  }`}
                >
                  <Link href="/About" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li
                  className={`cursor-pointer mb-2 md:mb-0 text-start hover:text-gray-300 text-lg mx-3 ${
                    currentRoute === "/CourseContent" ? "text-white" : ""
                  }`}
                >
                  <Link
                    href="/CourseContent"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Course content
                  </Link>
                </li>
                <li
                  className={`cursor-pointer mb-2 md:mb-0 text-start hover:text-gray-300 text-lg mx-3 ${
                    currentRoute === "/FAQs" ? "text-white" : ""
                  }`}
                >
                  <Link href="/FAQ" onClick={() => setNavbar(!navbar)}>
                    FAQs
                  </Link>
                </li>
                <li>
                  <SearchIcon
                    // style={
                    //   setremovesearchfrommobile
                    //     ? { display: "none" }
                    //     : { display: "block" }
                    // }
                    onClick={() => router.push("/Search")}
                    className={`md:flex h-8 ml-4 mt-1 lg:mt-1 xl:mt-1 cursor-pointer`}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
