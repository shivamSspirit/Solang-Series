import React from "react";
import NavBar from "../Navbar";
import { NextSeo } from "next-seo";

const Layout = ({ children, showNavbar = true, showFooter = true }) => {
  return (
    <div className='mt-12 mx-4 md:mx-10 lg:mx-20'>

      <NextSeo
            titleTemplate='%s | Solidity On Solana' 
            defaultTitle="Soldity On Solana"
            description="Deep dive into solana development using solidity"
            canonical="https://solidityonsolana.one/"
            openGraph={{
              url: "https://solidityonsolana.one/",
              title: "Soldity For Solana",
              description: "An Ultimate Crash Course on how to build on solana using solidity",
              images: [
                {
                  url: "/moduleimages/site-log.svg",
                  width: 600,
                  height: 420,
                  alt: "Soldity For Solana",
                },
              ],
            }}
            twitter={{
              handle: "@shivamSspirit",
              site: "shivamSspirit",
              cardType: "summary_large_image",
            }}
          />
      
      <>
        {showNavbar && <NavBar />}
        {children}
        {showFooter && <Footer />}
      </>
    </div>
  );
};

export default Layout;
