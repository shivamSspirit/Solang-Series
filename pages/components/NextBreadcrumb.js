import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NextBreadcrumb = ({
  homeElement,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}) => {
  const paths = usePathname();

  console.log("pathssss",paths)

  const trimmedPath = paths.split("/").slice(2);
  trimmedPath.unshift("Module 1");
  const pathNames = trimmedPath.filter((path) => path);

 console.log(pathNames, " BreadCrumb");

  return (
    <div>
      <ul id='breadcrumbs-one' className='hidden md:flex'>
        {pathNames.map((link, index) => {
          let href =
            link === "Module 1"
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
