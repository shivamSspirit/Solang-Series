import React from "react";
import FooterComp from "../shared/Footer";
import NavBar from "../shared/Navbar";
import { NextSeo } from "next-seo";

let coursePage = "";
let fileName = "";

const Layout = ({ children }) => {
  const typeString = children.type.name;
  if (typeString !== "Error") fileName = typeString;

  // console.log(fileName);

  return (
    <>
      <div className='mt-12 mx-4 md:mx-10 lg:mx-20'>
        {fileName === "Home" ? (
          <NextSeo
            title="Soldity On Solana"
            titleTemplate="Soldity On Solana"
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

        ) : (
          <NextSeo titleTemplate='%s | Solidity On Solana' defaultTitle="Soldity On Solana"
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
            }} />
        )}
        {fileName === "ComingSoon" ? (
          children
        ) : (
          <>
            <NavBar />
            {children}
            {fileName !== "Search" &&
              fileName !== "FAQ" &&
              !coursePage?.includes("Course") && <FooterComp />}
          </>
        )}
      </div>
    </>
  );
};

export default Layout;

