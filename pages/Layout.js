import React, { PropsWithChildren } from "react";
import FooterComp from "../shared/Footer";
import ComingSoon from "./comingSoon/ComingSoon";
import curPageNumber from "../shared/pageNumber";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import NavBar from "../shared/Navbar";
import { NextSeo } from "next-seo";
// import { useRouter } from "next/router";

let coursePage = "";

const Layout = ({ children }) => {
  //  console.log(children?.type?.name, "Layout");
  const paths = usePathname(); // this is path
  const router = useRouter(); // this is router
  console.log("router", router.pathname);
  console.log("Layout", children?.type?.name);
  console.log("paths", paths);
  const pathNames = paths?.split("/");
  if (pathNames?.[1] !== "404") {
    coursePage = pathNames?.[2];
  }

  console.log("pathnmaes", pathNames);
  console.log("coursepage", coursePage);

  const addFooterORNot = () => {
    const childtype = children?.type?.name;
    if (
      !(
        childtype === "Search" ||
        childtype === "FAQ" ||
        coursePage?.includes("Course")
      )
    ) {
      return <FooterComp />;
    }
  };

  return (
    <>
      <div className="mt-12 mx-4 md:mx-10 lg:mx-20">
        {children?.type?.name === "Home" ? (
          <NextSeo title="Solidity On Solana" description="An Ultimate Dapp development Crash course build for Solana"  openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url: 'https://www.solidityonsolana.one/',
                    siteName: 'Solidity On Solana',
                }}/>
        ) : (
          <NextSeo titleTemplate="%s | Solidity On Solana" description="An Ultimate Dapp development Crash course build for Solana" openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url: 'https://www.solidityonsolana.one/',
                    siteName: 'Solidity On Solana',
                }}  />
        )}

        {/* <DefaultSeo
                title="Next SEO Example"
                description="Next SEO is a plug in that makes managing your SEO easier in Next.js projects."
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url: 'https://www.url.ie/',
                    siteName: 'SiteName',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            /> */}

        <>
          <NavBar />
          {children}
          {addFooterORNot()}
        </>
      </div>
    </>
  );
};

export default Layout;
