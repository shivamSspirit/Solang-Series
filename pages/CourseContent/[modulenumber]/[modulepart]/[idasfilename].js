import React from "react";
import illustration from "../../../../assets/illustration.png";
import Image from "next/image";
import NextBreadcrumb from "../../../components/NextBreadcrumb";
import { useRouter } from "next/router";
import SideBar from "../../../components/Sidebar";
import curPageNumber from "../../../../shared/pageNumber";
import { allDocuments } from "../../../../.contentlayer/generated";
// import { getAllPostIds, getPostData } from "../../../../utils/module-lession";
//import { allDocuments, type Post } from 'contentlayer/generated'
import { useMDXComponent } from "next-contentlayer/hooks";
import changePartFunction from "../../../../shared/changePartFunction";
import Link from "next/link";

export async function getStaticPaths() {
  // Get a list of valid post paths.
  const paths = allDocuments.map((lession) => {
    // console.log("lessions",lession)
    return {
      params: {
        modulenumber: lession?.moduleNumber,
        modulepart: lession?.modulePart,
        idasfilename: lession?._raw?.sourceFileName?.replace(/\.mdx$/, ""),
      },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  // console.log("context",context)

  //  console.log("vvvvv",`${context.params.modulenumber}/${context.params.modulepart}/${context.params.idasfilename}`)
  // Find the post for the current page.

  const filteredParts = allDocuments.filter((lession) => {
    return (
      lession.moduleNumber === `${context.params.modulenumber}` &&
      lession.modulePart === `${context.params.modulepart}`
    );
  });

  // Extracting total files to get its length
  const totalLessons = allDocuments.filter((lession) => {
    return lession.moduleNumber === `${context.params.modulenumber}`;
  });

  // Using modulePart of last file
  const lastPart = totalLessons[totalLessons.length - 1].modulePart;

  // getting the last letter of the last file of each module
  const lastLetter = lastPart[lastPart.length - 1];

  // using Ascii, getting the max parts in each module
  const totalParts = lastLetter.charCodeAt(0) - "a".charCodeAt(0) + 1;

  // console.log(totalParts, " Total Parts");

  const lession = allDocuments.find(
    (lession) =>
      lession?._raw?.flattenedPath ===
      `${context.params.modulenumber}/${context.params.modulepart}/${context.params.idasfilename}`
  );

  //console.log("lession",lession)
  // Return notFound if the post does not exist.
  if (!lession) return { notFound: true };

  // Return the post as page props.
  return { props: { lession, totalParts, filteredParts } };
}

// const ifSlugEqual=(currentroute,allDocuments)=>{
//   const currentPathmodules = currentroute.replace(/^\/CourseContent/, '');
//   //console.log("currentPathmodules",currentPathmodules)
//   const findFile = allDocuments.find(lession=>lession.slug===currentPathmodules)
//   //console.log("findFile",findFile)
//   if(findFile){
//     return true;
//   }
//   return false;
// }

const GeneralInfo = ({ lession, totalParts, filteredParts }) => {
  // console.log("postData:", lession);

  const MDXContent = useMDXComponent(lession.body.code);
  const router = useRouter();
  // console.log(router.asPath, " Pathname");
  // /CourseContent/module-0/module-0-a/course-guide
  //const ifSlugequates = ifSlugEqual(router.asPath,allDocuments)
  ///console.log("ifSlugequates",ifSlugequates)

  const { modulenumber, modulepart, idasfilename } = router.query;
  const currentpath = `/CourseContent/${modulenumber}/${modulepart}/${idasfilename}`;

  const [prevPg, nextPg, prevPgText, nextPgText] = changePartFunction({
    modulenumber,
    modulepart,
    totalParts,
  });

  return (
    <div className='my-12'>
      <div className='flex sm:flex-col justify-between p-8 rounded-3xl bg-primaryDark'>
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
            <div className='mt-10 text-gray-400'>
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
                      <Link href={`/CourseContent${lession.slug}`}>
                        {lession._id}
                      </Link>
                    </li>
                  </div>
                ))}
              </div>
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
      </div>
      <div className='mt-20 sm:flex'>
        <div className='mr-10 hidden md:flex'>
          <SideBar />
        </div>

        <div className='flex flex-col text-white'>
          <div className='flex justify-content items-center text-2xl mb-6'>
            <div className='bg-transparentBg border-[5px] border-mod1Color px-3 py-2 rounded-[2.5rem] mr-6 h-16 w-16'>
              <div className='text-white text-3xl text-center font-bold'>a</div>
            </div>
            <div className='text-4xl'>General Info</div>
          </div>

          <article className='text-white prose ml-12 prose-headings:text-white prose-img:border-8 prose-img:border-mod1Color prose-a:text-white hover:prose-a:bg-mod1Color hover:prose-a:text-black prose-a:cursor-pointer'>
            {/* <div>
              {postData.title}
              <br />
              {postData.id}
              <br />
              {postData.author}
              <br />
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div> */}

            <MDXContent />
          </article>
        </div>
      </div>
      <div className='mt-20 w-full flex justify-between text-white'>
        <div className='justify-start'>
          {prevPg && (
            <a href={prevPg} className='flex flex-col'>
              <span>Part {prevPgText}</span>
              <span>Previous Part</span>
            </a>
          )}
        </div>
        <div className='justify-end'>
          {nextPg && (
            <a href={nextPg} className='flex flex-col justify-end'>
              <span>Part {nextPgText}</span>
              <span>Next Part</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
