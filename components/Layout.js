import React from "react";
import FooterComp from "../shared/Footer";
import NavBar from "../shared/Navbar";
import { NextSeo } from "next-seo";

const Layout = ({ children }) => {
  return (
    <>
      <div className='mt-12 mx-4 md:mx-10 lg:mx-20'>
        <NextSeo titleTemplate='%s | Solidity On Solana' />
        <>
          <NavBar />
          {children}
          <FooterComp />
        </>
      </div>
    </>
  );
};

export default Layout;
