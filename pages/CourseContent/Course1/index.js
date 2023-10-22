import React from "react";
import illustration from "../../../assets/illustration.png";
import Image from "next/image";
import { Button } from "flowbite-react";
import NextBreadcrumb from "../../components/NextBreadcrumb";
import Link from "next/link";
import { useRouter } from "next/router";

const Course1 = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const nextPg = Number(currentRoute[currentRoute.length - 1]) + 1;

  return (
    <div className='my-20'>
      <div className='flex justify-between '>
        <div className='w-1/2 text-white'>
          <NextBreadcrumb
            homeElement={"Home"}
            separator={<span> | </span>}
            activeClasses='text-amber-500'
            containerClasses='flex py-5 bg-gradient-to-r from-purple-600 to-blue-600'
            listClasses='hover:underline mx-2 font-bold'
            capitalizeLinks
          />
          <div className='mt-10 text-gray-400'>
            Dive into the world of blockchain development with our Solidity for
            Solana courses. Master the art of creating smart contracts on the
            Solana network, opening the door to high-speed, secure, and scalable
            decentralized applications. Join us on a journey of learning that
            empowers you to shape the future of blockchain technology
          </div>
          <div className='mt-10'>
            <div>
              <div id='breadcrumbs-one' className='mb-3'>
                <li>
                  <a>
                    <div
                    className="cursor-pointer"
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
              </div>
              <div id='breadcrumbs-one'>
                <li>
                  <Link href=''>b. Fundamentals fo Solidity</Link>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/2 '>
          <div className='flex justify-end'>
            <Image
              src={illustration}
              alt='illustration'
              className='fill-white'
            />
          </div>
        </div>
      </div>
      <div className='mt-20 flex justify-center text-white'>
        <div className='flex flex-col'>
          <span>Part {nextPg}</span>
          <span>Next Part</span>
        </div>
      </div>
    </div>
  );
};

export default Course1;
