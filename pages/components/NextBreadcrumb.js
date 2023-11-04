import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NextBreadcrumb = ({
  homeElement,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
  currentpath,
}) => {
 // console.log("pathssss", currentpath);

  const trimmedPath = currentpath.split("/");


 // console.log('trimmedPath',trimmedPath)
  const pathNames = trimmedPath.filter((path) => {
    return path;
  });

  // console.log(trimmedPath, " trimmedPath names");
//   console.log(" Path names",pathNames);

  return (
    <div>
      <ul id='breadcrumbs-one' className='hidden md:flex'>
        {pathNames.map((link, index) => {
          let href =
            index <= 1
              ? `/CourseContent`
              : `/CourseContent/${trimmedPath.slice(2, index + 2).join("/")}`;
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
