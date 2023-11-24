import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

const NextBreadcrumb = ({ capitalizeLinks, currentpath }) => {
  const router = useRouter();
  // console.log("router",router)
  const trimmedPath = currentpath?.split("/");

  const pathNames = trimmedPath?.filter((path) => {
    return path;
  });

  // console.log("pathNames from bread:")

  return (
    <div>
      <ul id='breadcrumbs-one' className='hidden lg:flex'>
        {pathNames?.map((link, index) => {
          //  console.log("trimmedPat",trimmedPath?.slice(2, index + 2)?.join("/"))
          let href =
            index <= 1
              ? `/CourseContent`
              : `/CourseContent/${trimmedPath?.slice(2, index + 2)?.join("/")}`;

          let itemLink = capitalizeLinks
            ? link[0]?.toUpperCase() + link?.slice(1, link.length)
            : link;
          {
            /* {console.log("router.query.idasfilename==itemLink",router.query.idasfilename[0].toUpperCase() + router.query.idasfilename?.slice(1, router.query.idasfilename.length)===itemLink)} */
          }
          return (
            <React.Fragment key={index}>
              <li>
                <Link
                  className={`${
                    router?.query?.idasfilename?.[0]?.toUpperCase() +
                      router?.query?.idasfilename?.slice(1, link.length) ===
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
