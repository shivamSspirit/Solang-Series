import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NextBreadcrumb = ({
  homeElement,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
  currentpath
}) => {

 console.log("pathssss", currentpath)

  const trimmedPath = currentpath.split("/").slice(2);
  const pathNames = trimmedPath.filter((path) => path);


  return (
    <div>
      <ul id='breadcrumbs-one' className='hidden md:flex'>
        {pathNames.map((link, index) => {
          let href =
            link === "module-0"
              ? `/CourseContent`
              : `/CourseContent/${trimmedPath[index]}`;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;

          return (
            <React.Fragment key={index}>
              <li>
                <Link href={href}>{itemLink}</Link>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default NextBreadcrumb;
