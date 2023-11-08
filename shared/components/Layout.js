import React from "react";
import NavBar from "../Navbar";
import { NextSeo } from "next-seo";

const Layout = ({ children, showNavbar = true, showFooter = true }) => {
  return (
    <div className='mt-12 mx-4 md:mx-10 lg:mx-20'>
      <NextSeo titleTemplate='%s | Solidity On Solana' />
      <>
        {showNavbar && <NavBar />}
        {children}
        {showFooter && <Footer />}
      </>
    </div>
  );
};

export default Layout;
