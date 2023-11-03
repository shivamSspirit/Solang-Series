import React from "react";
import illustration from "../../../assets/illustration.png";
import Image from "next/image";
import { Button } from "flowbite-react";
import NextBreadcrumb from "../../components/NextBreadcrumb";
import Link from "next/link";
import { useRouter } from "next/router";
// import {
//   getSortedPostsData,getAllfilesIds,generateDynamicModules
// } from "../../../utils/module-lession";
import curPageNumber from "../../../shared/pageNumber";

import { allDocument } from "../../../.contentlayer/generated";

import { usePathname } from "next/navigation";

// export async function getStaticProps({params}) {
//     console.log("params",params)
//   const getAllFilesForSingleModule = await getSortedPostsData();
//   console.log("getAllFilesForSingleModule", getAllFilesForSingleModule);

//   return {
//     props: {
//         getAllFilesForSingleModule
//     },
//   };
// }

// export async function getStaticProps({ params }) {
//   console.log("params", params);
//    const moduleInfo = await getSingleModuleInfo(params.modulenumber);
//    return {
//      props: {
//        moduleInfo,
//      },
//    };
//  }

// export async function generateStaticParams({params}){
// console.log("paramsa",params)
// }

// export async function getStaticPaths() {
//   const paths = await generateDynamicModules();
//   console.log("paths",paths)
//   return {
//     paths,
//     fallback: false,
//   };
// }

const Course1 = () => {
  //console.log("moduleInfo",getAllFilesForSingleModule)

  console.log("allDocument", allDocument);
  const paths = usePathname();

  const router = useRouter();
  let currentRoute = router.pathname;

  console.log("pathss", router);

  // Splitting the url to convert in array.
  currentRoute = currentRoute.split("/");

  const { modulenumber } = router.query;

  const [prevPg, nextPg] = curPageNumber({ pathname: router.pathname });

  // console.log(allPostsData, " Data");
  // console.log(allPostIds, " ids");

  return (
    <div className="my-20">
      <div className="flex sm:flex-col justify-between">
        <div>
          <NextBreadcrumb
            homeElement={"Home"}
            separator={<span> | </span>}
            activeClasses="text-amber-500"
            containerClasses="flex py-5 bg-gradient-to-r from-purple-600 to-blue-600"
            listClasses="hover:underline mx-2 font-bold"
            capitalizeLinks
          />
        </div>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:w-1/2 text-white">
            <div className="sm:mt-10 text-gray-400">
              Dive into the world of blockchain development with our Solidity
              for Solana courses. Master the art of creating smart contracts on
              the Solana network, opening the door to high-speed, secure, and
              scalable decentralized applications. Join us on a journey of
              learning that empowers you to shape the future of blockchain
              technology
            </div>
            <div className="mt-10">
              {/* <div>
                {getAllFilesForSingleModule?.map((lesson, idx) => (
                  <div key={lesson.id} id='breadcrumbs-one' className='mb-1'>
                    <li>
                      <Link
                        href={`/CourseContent/${modulenumber}/${allPostIds[1].params.Id}/${lesson.id}`}
                      >
                        {lesson.id}
                      </Link>
                    </li>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
          <div className="md:mb-16 md:w-1/2 lg:m-0">
            <div className="flex justify-center lg:justify-end">
              <Image
                src={illustration}
                alt="illustration"
                className="fill-white"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-center text-white">
        {prevPg > 0 && (
          <div className="flex flex-col">
            <span>Part {prevPg}</span>
            <span>Previous Part</span>
          </div>
        )}
        {nextPg < 9 && (
          <div className="flex flex-col">
            <span>Part {nextPg}</span>
            <span>Next Part</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Course1;
