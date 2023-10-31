import React, { PropsWithChildren } from "react";
import Navbar from "../../shared/AppBar";
import FooterComp from "../../shared/Footer";
import ComingSoon from "../comingSoon/ComingSoon";
import curPageNumber from "../../shared/pageNumber";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

let coursePage = "";

const Layout = ({ children }) => {
  console.log(children?.type?.name, "Layout");
  const paths = usePathname();

  console.log("pathssssssss",paths)
  const pathNames = paths?.split("/");
  if (pathNames?.[1] !== "404") {
    coursePage = pathNames?.[2];
  }

  return (
    <>
      <div className='mt-12 mx-4 md:mx-10 lg:mx-20'>
        {/* <Navbar/>
      {children} */}
        {children?.type?.name === "ComingSoon" ? (
          children
        ) : (
          <>
            <Navbar />
            {children}
            {children?.type?.name !== "Search" &&
              !coursePage?.includes("Course") && <FooterComp />}
          </>
        )}
      </div>
    </>
  );
};
export default Layout;
