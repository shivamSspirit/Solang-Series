import React, { PropsWithChildren, useMemo, useState } from "react";
import FooterComp from "../Footer";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import NavBar from "../Navbar";
import { NextSeo } from "next-seo";

let coursePage = "";
let fileName = "";

const Layout = ({ children }) => {
  const paths = usePathname();
  const pathNames = paths?.split("/");
  if (pathNames?.[1] !== "404") {
    coursePage = pathNames?.[2];
  }

  const typeString = children.type.name;
  if (typeString !== "Error") fileName = typeString;

  console.log(fileName);

  return (
    <>
      <div className='mt-12 mx-4 md:mx-10 lg:mx-20'>
        {fileName === "Home" ? (
          <NextSeo title='Solidity On Solana' />
        ) : (
          <NextSeo titleTemplate='%s | Solidity On Solana' />
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
