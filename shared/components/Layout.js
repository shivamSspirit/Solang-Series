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
              description: "A full stack web developer, who loves to design and develop beautiful websites. I have been coding for over a year now. One of my hobbies is writing, I love to document my journey by writing blog posts and also teach others through them.",
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
