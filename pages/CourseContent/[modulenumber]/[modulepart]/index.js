import React from "react";
import illustration from "../../../../assets/illustration.png";
import Image from "next/image";
import { Button } from "flowbite-react";
import NextBreadcrumb from "../../../components/NextBreadcrumb";
import Link from "next/link";
import { useRouter } from "next/router";
import curPageNumber from "../../../../shared/pageNumber";
import { allDocuments } from "../../../../.contentlayer/generated";
import { usePathname } from "next/navigation";
import { NextSeo } from "next-seo";

export async function getStaticProps(context) {
 // console.log("Running static props");

  const filteredParts = allDocuments.filter((lession) => {
    return (
      lession.moduleNumber === `${context.params.modulenumber}` &&
      lession.modulePart === `${context.params.modulepart}`
    );
  });


 // console.log(filteredParts);
  // console.log("lessions for a part", lession);
  // Return notFound if the post does not exist.
  // if (!lession) return { notFound: true }

  // console.log(lession, " Lession from static props");

  // Return the post as page props.
  return { props: { filteredParts } };
}

export async function getStaticPaths() {
  console.log("Static paths runnning");
  // Get a list of valid post paths.
  const paths = allDocuments.map((lession) => {
    // console.log("lessions", lession);
    return {
      params: {
        modulenumber: lession?.moduleNumber,
        modulepart: lession?.modulePart,
      },
    };
  });

  return { paths, fallback: true };
}

const Course1 = ({ filteredParts }) => {
  const router = useRouter();
  const { modulenumber, modulepart } = router.query;
  const currentpath = `/CourseContent/${modulenumber}/${modulepart}`;
  // console.log(" all docs",router.query);

  const modNum = modulenumber.split('-')[1];

 // console.log("modNum",modNum)
  
  const [prevPg, nextPg, prevPgNumber, nextPgNumber] = curPageNumber({
    modulenumber,
  });
  // nextPg = nextPg;

  return (
    <div className='my-20'>
      <NextSeo title={`Module ${modNum}`} />
      <div className='flex sm:flex-col justify-between'>
        <div>
          <NextBreadcrumb
            homeElement={"Home"}
            separator={<span> | </span>}
            activeClasses='text-amber-500'
            containerClasses='flex py-5 bg-gradient-to-r from-purple-600 to-blue-600'
            listClasses='hover:underline mx-2 font-bold'
            capitalizeLinks
            currentpath={currentpath}
          />
        </div>
        <div className='flex flex-col-reverse md:flex-row'>
          <div className='md:w-1/2 text-white'>
            <div className='sm:mt-10 text-gray-400'>
              Dive into the world of blockchain development with our Solidity
              for Solana courses. Master the art of creating smart contracts on
              the Solana network, opening the door to high-speed, secure, and
              scalable decentralized applications. Join us on a journey of
              learning that empowers you to shape the future of blockchain
              technology
            </div>
            <div className='mt-10'>
              <div>
                {filteredParts?.map((lession, idx) => (
                  <div key={idx} id='breadcrumbs-one' className='mb-1'>
                    <li>
                    {/* {console.log("filename",lession)} */}
                      <Link href={`/CourseContent${lession.slug}`}>
                        {lession._raw.sourceFileName.replace(/\.mdx$/, "")}
                      </Link>
                    </li>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='md:mb-16 md:w-1/2 lg:m-0'>
            <div className='flex justify-center lg:justify-end'>
              <Image
                src={illustration}
                alt='illustration'
                className='fill-white'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20 w-full flex justify-between text-white'>
        <div className='justify-start'>
          {prevPg && (
            <a href={prevPg} className='flex flex-col'>
              <span>Part {prevPgNumber}</span>
              <span>Previous Part</span>
            </a>
          )}
        </div>
        <div className='justify-end'>
          {nextPg && (
            <a href={nextPg} className='flex flex-col justify-end'>
              <span>Part {nextPgNumber}</span>
              <span>Next Part</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Course1;
