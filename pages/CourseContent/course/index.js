import React from "react";
import illustration from "../../../assets/illustration.png";
import Image from "next/image";
import { Button } from "flowbite-react";
import NextBreadcrumb from "../../components/NextBreadcrumb";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  getSortedPostsData,
} from "../../../utils/module-lession";
import curPageNumber from "../../../shared/pageNumber";

import { useEffect } from "react";

 export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
 // console.log("app", allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}




const Course1 = ({allPostsData}) => {






  const router = useRouter();
  let currentRoute = router.pathname;
  // Splitting the url to convert in array.
  currentRoute = currentRoute.split("/");

  const { course } = router.query;

 // console.log("course", course);
  const [prevPg, nextPg] = curPageNumber({ pathname: router.pathname });

 // console.log(currentRoute[2], " Course1 index.js");
 // console.log(nextPg);

  return (
    <div className='my-20'>
      <div className='flex sm:flex-row flex-col-reverse justify-between'>
        <div className='sm:w-1/2 text-white'>
          <NextBreadcrumb
            homeElement={"Home"}
            separator={<span> | </span>}
            activeClasses='text-amber-500'
            listClasses='hover:underline mx-2 font-bold'
            capitalizeLinks
          />
          <div className='sm:mt-10 text-gray-400'>
            Dive into the world of blockchain development with our Solidity for
            Solana courses. Master the art of creating smart contracts on the
            Solana network, opening the door to high-speed, secure, and scalable
            decentralized applications. Join us on a journey of learning that
            empowers you to shape the future of blockchain technology
          </div>
          <div className='mt-10'>
            <div>
              {allPostsData?.map((lesson, idx) => (
                <div key={lesson.id} id='breadcrumbs-one' className='mb-1'>
                  <li>
                    <Link href={`/CourseContent/course/${lesson.id}`}>
                      {lesson.id}
                    </Link>
                  </li>
                </div>
              ))}
              {/* <div id='breadcrumbs-one' className='mb-3'>
                <li>
                  <a>
                    <div
                      className='cursor-pointer'
                      onClick={() => {
                        router.push({
                          pathname: `Course1/GeneralInfo`,
                        });
                      }}
                    >
                      a. General info
                    </div>
                  </a>
                </li>
              </div> */}

              {/* <div id='breadcrumbs-one'>
                <li>
                  <Link href=''>b. Fundamentals fo Solidity</Link>
                </li>
              </div> */}
            </div>
          </div>
        </div>
        <div className='mb-16 sm:w-1/2 lg:m-0'>
          <div className='flex justify-center lg:justify-end'>
            <Image
              src={illustration}
              alt='illustration'
              className='fill-white'
            />
          </div>
        </div>
      </div>
      <div className='mt-20 flex justify-center text-white'>
        {prevPg > 0 && (
          <div className='flex flex-col'>
            <span>Part {prevPg}</span>
            <span>Previous Part</span>
          </div>
        )}
        {nextPg < 9 && (
          <div className='flex flex-col'>
            <span>Part {nextPg}</span>
            <span>Next Part</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Course1;
