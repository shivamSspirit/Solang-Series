import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NextBreadcrumb = ({ capitalizeLinks, currentpath }) => {
  const router = useRouter();
  const trimmedPath = currentpath?.split("/");

  const pathNames = trimmedPath?.filter((path) => {
    return path;
  });

  return (
    <div>
      <ul id='breadcrumbs-one' className='hidden lg:flex'>
        {pathNames?.map((link, index) => {
          let href =
            index <= 1
              ? `/CourseContent`
              : `/CourseContent/${trimmedPath?.slice(2, index + 2)?.join("/")}`;

          let itemLink = capitalizeLinks
            ? link[0]?.toUpperCase() + link?.slice(1, link.length)
            : link;
          
          return (
            <React.Fragment key={index}>
              <li>
                <Link
                  className={`${
                    router?.query?.idasfilename?.[0]?.toUpperCase() + router?.query?.idasfilename?.slice(1, link.length) ===
                    itemLink
                      ? "active"
                      : ""
                  }`}
                  href={href}
                >
                  {itemLink}
                </Link>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default NextBreadcrumb;
