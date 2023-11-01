import React from "react";
import illustration from "../../../assets/illustration.png";
import Image from "next/image";
import NextBreadcrumb from "../../components/NextBreadcrumb";
import { useRouter } from "next/router";
import SideBar from "../../components/Sidebar";
import curPageNumber from "../../../shared/pageNumber";

import { getAllPostIds, getPostData } from "../../../utils/module-lession";

export async function getStaticProps({ params }) {
 // console.log("params", params);
  const postData = await getPostData(params.Id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
 // console.log("paths", paths);
  return {
    paths,
    fallback: false,
  };
}

const GeneralInfo = ({ postData }) => {
 // console.log("postData:", postData);

  const router = useRouter();
  console.log(router.pathname, " Pathname");
  const [prevPg, nextPg] = curPageNumber({ pathname: router.pathname });

  return (
    <div className='my-12'>
      <div className='flex md:flex-row flex-col-reverse justify-between p-8 rounded-3xl bg-[#201F1F]'>
        <div className='md:w-1/2 text-white'>
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
        <div className='md:w-1/2 '>
          <div className='flex justify-end'>
            <Image
              src={illustration}
              alt='illustration'
              className='fill-white'
            />
          </div>
        </div>
      </div>
      <div className='mt-20 sm:flex'>
        <div className='mr-10 hidden md:flex'>
          <SideBar />
        </div>

       
        <div className='flex flex-col text-white'>
        
        <div className='flex justify-content items-center text-2xl mb-6'>
          <div className='bg-white px-2 py-2 rounded-[2.5rem] mr-6 w-[3rem]'>
            <div className='text-black text-center font-bold'>a</div>
          </div>
          <div>General Info</div>
        </div>
        <article class="prose prose-stone">
        <div>
          {postData.title}
          <br />
          {postData.id}
          <br />
          {postData.author}
          <br />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        </article>
      </div>

      
        

      </div>

      <div
        className={`mt-20 flex ${
          prevPg > 0 ? "justify-between" : "justify-end"
        } text-white`}
      >
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
