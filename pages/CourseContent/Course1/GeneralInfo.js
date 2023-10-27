import React from "react";
import illustration from "../../../assets/illustration.png";
import Image from "next/image";
import NextBreadcrumb from "../../components/NextBreadcrumb";
import { useRouter } from "next/router";
import SideBar from "../../components/Sidebar";

const GeneralInfo = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const nextPg = Number(currentRoute[0]);

  console.log(currentRoute, " na");

  return (
    <div className='my-12'>
      <div className='flex justify-between p-8 rounded-3xl bg-[#201F1F]'>
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
      <div className='mt-20 flex'>
        <div className='mr-10'>
          <SideBar />
        </div>
        <div className='flex flex-col text-white'>
          <div className='flex'>
            <div>a</div>
            <div>General Info</div>
          </div>
          <div>
            This course is an introduction to modern web development with
            JavaScript. The main focus is on single-page applications
            implemented with React and supporting them with RESTful and GraphQL
            web services implemented with Node.js. The course also has parts on
            TypeScript, React Native, and Continuous integration. Other topics
            include debugging applications, container technology, configuration,
            managing runtime environments, and databases. The course is totally
            free of charge. You can get a certificate and even the University of
            Helsinki ECTS (European Credit Transfer and Accumulation System)
            credits for free. Participants are expected to have good programming
            skills, basic knowledge of web programming and databases, and know
            the basics of the Git version control system. You are also expected
            to have perseverance and a capacity for solving problems and seeking
            information independently. Previous knowledge of JavaScript or other
            course topics is not required. How much programming experience is
            needed? It is hard to say, but you should be pretty fluent with your
            language. This level of fluency takes usually at least 100-200 hours
            of practice to develop.
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

export default GeneralInfo;
