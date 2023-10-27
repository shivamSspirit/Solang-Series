import React, { PropsWithChildren } from "react";
import Navbar from "../../shared/AppBar";
import FooterComp from "../../shared/Footer";
import ComingSoon from "../comingSoon/ComingSoon";

const Layout = ({ children }) => {
  console.log(children?.type?.name, " Layout");
  
  return (
    <>
      <div className='mt-12 mx-20'>
        {children?.type?.name === "ComingSoon" ? children : 
        <>
        <Navbar />
        {children}
        <FooterComp />
        </>
      }
      </div>
    </>
  );
};
export default Layout;
