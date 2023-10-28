import React from "react";
import illustration from "../../../assets/illustration.png";
import Image from "next/image";
import NextBreadcrumb from "../../components/NextBreadcrumb";
import { useRouter } from "next/router";
import SideBar from "../../components/Sidebar";
import curPageNumber from "../../../shared/pageNumber";

const GeneralInfo = () => {
  const router = useRouter();
  console.log(router.pathname, " Pathname");
  const [prevPg, nextPg] = curPageNumber({pathname: router.pathname});

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
          <div className='flex justify-content items-center text-2xl mb-6'>
            <div className='bg-white px-2 py-2 rounded-[2.5rem] mr-6 w-[3rem]'>
              <div className='text-black text-center font-bold'>a</div>
            </div>
            <div>General Info</div>
          </div>
          <p>
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
            <h1 className='my-3 text-2xl'>Prerequisites</h1>
            <p>
              Participants are expected to have good programming skills, basic
              knowledge of web programming and databases, and know the basics of
              the Git version control system. You are also expected to have
              perseverance and a capacity for solving problems and seeking
              information independently. Previous knowledge of JavaScript or
              other course topics is not required. How much programming
              experience is needed? It is hard to say, but you should be pretty
              fluent with your language. This level of fluency takes usually at
              least 100-200 hours of practice to develop.
            </p>
            <h1 className='my-3 text-2xl'>Start small</h1>
            <p>
              Okay, so you want to build a bacon-making app. The thing is,
              before even thinking about payments, you’re first going to need: A
              build system Form handling Some sort of styles Routing
              Authentication A backend And *then* payments If you try and tackle
              all this in one go, you’re gonna get pummeled. So instead, we’re
              going to start small — and have some fun in the process! In fact,
              I have a nice little project to start you off:
            </p>
          </p>
        </div>
      </div>
      <div className={`mt-20 flex ${prevPg > 0 ? 'justify-between' : 'justify-end'} text-white`}>
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

export default GeneralInfo;
