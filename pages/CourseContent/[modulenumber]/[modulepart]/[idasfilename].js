import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { allDocuments } from "../../../../.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import changePartFunction from "../../../../shared/changePartFunction";
import NewSideBar from "../../../../components/NewSideBar";
import { NextSeo } from "next-seo";
import ColorModuleParts from "../../../../components/ColorModuleParts";
import Prism from "prismjs";

require("prismjs/components/prism-solidity");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-bash");

import Layout from "../../../../components/Layout";
import {
  MdxH1,
  MdxH2,
  MdxH3,
  MdxH4,
  MdxH5,
  MdxH6,
} from "../../../../components/Mdxheadings";

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
  const filteredParts = allDocuments.filter((lession) => {
    return (
      lession.moduleNumber === `${context.params.modulenumber}` &&
      lession.modulePart === `${context.params.modulepart}`
    );
  });

  // Extracting total files to get its length
  const totallessions = allDocuments.filter((lession) => {
    return lession?.moduleNumber === `${context?.params?.modulenumber}`;
  });

  const totalLessionsortedbymoduleparts = totallessions
    ?.sort((a, b) => a.moduleParts - b.moduleParts)
    .map((item, index) => {
      // Use 'item' as the current object with orderNumber
      // 'index' is the current position from 0 to n
      // Add your logic here
      return item; // or transform 'item' if needed
    });

  const lastPart =
    totalLessionsortedbymoduleparts[totalLessionsortedbymoduleparts.length - 1]
      .modulePart;

  // getting the last letter of the last file of each module
  const lastLetter = lastPart[lastPart?.length - 1];

  // using Ascii, getting the max parts in each module
  const totalParts =
    lastLetter.charCodeAt(0) === "a".charCodeAt(0)
      ? lastLetter.charCodeAt(0) - "a".charCodeAt(0) + 2
      : lastLetter.charCodeAt(0) - "a".charCodeAt(0) + 1;

  // console.log("titalpartsss", totalParts);

  // console.log(totalParts, " Total Parts");

  const lession = allDocuments?.find(
    (lession) =>
      lession?._raw?.flattenedPath ===
      `${context?.params?.modulenumber}/${context.params.modulepart}/${context.params.idasfilename}`
  );

  if (!lession) return { notFound: true };

  // Return the post as page props.
  return {
    props: { lession, totalParts, filteredParts, totallessions, lastLetter },
  };
}

const GeneralInfo = ({
  lession,
  totalParts,
  filteredParts,
}) => {
  const MDXContent = useMDXComponent(lession.body.code);
  const router = useRouter();

  // console.log(lession.body.raw, " RAW DATA");

  // console.log("filtered Parts:",filteredParts)
  const mdxComponents = {
    h1: MdxH1,
    h2: MdxH2,
    h3: MdxH3,
    h4: MdxH4,
    h5: MdxH5,
    h6: MdxH6,
  };
  
  useEffect(() => {
    Prism.highlightAll();
  }, [lession]);

  const orderedLessions = filteredParts
    ?.sort((a, b) => a.orderNumber - b.orderNumber)
    .map((item) => {
      return item;
    });

  const { modulenumber, modulepart, idasfilename } = router.query;
  const currentpath = `/CourseContent/${modulenumber}/${modulepart}/${idasfilename}`;

  const [prevPg, nextPg, prevPgText, nextPgText] = changePartFunction({
    modulenumber,
    modulepart,
    totalParts,
  });

  const returnModuleColor = (moduleNumber) => {
    if (moduleNumber === "module-0") {
      return "bg-[#bfbfff]";
    } else if (moduleNumber === "module-1") {
      return "bg-[#A3B86C]";
    } else if (moduleNumber === "module-2") {
      return "bg-[#CFB53B]";
    } else if (moduleNumber === "module-3") {
      return "bg-[#CD853F]";
    } else if (moduleNumber === "module-4") {
      return "bg-[#63a4da]";
    } else if (moduleNumber === "module-5") {
      return "bg-[#63a4da]";
    }
  };

  const returnLessionColors = (lessionNumber) => {
    if (lessionNumber === "module-0") {
      return {
        blockquote: "prose-blockquote:text-[#bfbfff]",
        codeColor: "prose-code:text-[#bfbfff]",
        text_color: "text-[#bfbfff]",
        link_hover: "hover:prose-a:decoration-[#bfbfff]",
        headingsColor: "prose-strong:text-[#bfbfff]",
        border_color: "border-[#bfbfff]",
        imgBorderColor: "prose-img:border-[#bfbfff]",
        link_color: "prose-a:text-[#bfbfff]",
      };
    } else if (lessionNumber === "module-1") {
      return {
        blockquote: "prose-blockquote:text-[#A3B86C]",
        codeColor: "prose-code:text-[#A3B86C]",
        text_color: "text-[#A3B86C]",
        link_hover: "hover:prose-a:decoration-[#A3B86C]",
        headingsColor: "prose-strong:text-[#A3B86C]",
        border_color: "border-[#A3B86C]",
        imgBorderColor: "prose-img:border-[#A3B86C]",
        link_color: "prose-a:text-[#A3B86C]",
      };
    } else if (lessionNumber === "module-2") {
      return {
        blockquote: "prose-blockquote:text-[#CFB53B]",
        codeColor: "prose-code:text-[#CFB53B]",
        text_color: "text-[#CFB53B]",
        link_hover: "hover:prose-a:decoration-[#CFB53B]",
        headingsColor: "prose-strong:text-[#CFB53B]",
        border_color: "border-[#CFB53B]",
        imgBorderColor: "prose-img:border-[#CFB53B]",
        link_color: "prose-a:text-[#CFB53B]",
      };
    } else if (lessionNumber === "module-3") {
      return {
        blockquote: "prose-blockquote:text-[#CD853F]",
        codeColor: "prose-code:text-[#CD853F]",
        text_color: "text-[#CD853F]",
        link_hover: "hover:prose-a:decoration-[#CD853F]",
        headingsColor: "prose-strong:text-[#CD853F]",
        border_color: "border-[#CD853F]",
        imgBorderColor: "prose-img:border-[#CD853F]",
        link_color: "prose-a:text-[#CD853F]",
      };
    } else if (lessionNumber === "module-4") {
      return {
        blockquote: "prose-blockquote:text-[#63a4da]",
        codeColor: "prose-code:text-[#63a4da]",
        text_color: "text-[#63a4da]",
        link_hover: "hover:prose-a:decoration-[#63a4da]",
        headingsColor: "prose-strong:text-[#63a4da]",
        border_color: "border-[#63a4da]",
        imgBorderColor: "prose-img:border-[#63a4da]",
        link_color: "prose-a:text-[#63a4da]",
      };
    } else if (lessionNumber === "module-4") {
      return {
        blockquote: "prose-blockquote:text-[#63a4da]",
        codeColor: "prose-code:text-[#63a4da]",
        text_color: "text-[#63a4da]",
        link_hover: "hover:prose-a:decoration-[#63a4da]",
        headingsColor: "prose-strong:text-[#63a4da]",
        border_color: "border-[#63a4da]",
        imgBorderColor: "prose-img:border-[#63a4da]",
        link_color: "prose-a:text-[#63a4da]",
      };
    }
  };

  return (
    <Layout>
      <div className='my-12'>
      <NextSeo
            title="Soldity On Solana"
            titleTemplate="Soldity On Solana"
            defaultTitle="Soldity On Solana"
            description="Deep dive into solana development using solidity"
            canonical="https://solidityonsolana.one/"
            openGraph={{
              url: "https://solidityonsolana.one/",
              title: "Soldity For Solana",
              description: "An Ultimate Crash Course on how to build on solana using solidity",
              images: [
                {
                  url: "https://res.cloudinary.com/ddwkxn8ak/image/upload/v1699181695/solangsol/land_fjuvyw.jpg",
                  width: 600,
                  height: 420,
                  alt: "Soldity For Solana",
                },
              ],
            }}
            twitter={{
              handle: "@shivamSspirit",
              site: "shivamSspirit",
              cardType: "summary_large_image",
            }}
          />

        <div className='flex sm:flex-col justify-between'>
          <ColorModuleParts
            moduleColor={returnModuleColor(lession?.moduleNumber)}
            currentpath={currentpath}
            orderedLessions={orderedLessions}
            activeFileName={idasfilename}
          />
        </div>

        <div className='mt-20 sm:flex w-full gap-12'>
          <div className='hidden md:flex w-1/4'>
            <NewSideBar headings={lession.headings} />
          </div>

          <div className='w-full md:w-3/4 lg:w-3/4 xl:w-3/4'>
            <div className='flex flex-col text-white'>
              <div className='flex justify-content items-center text-2xl mb-6'>
                <div
                  className={`bg-transparentBg border-[5px] ${
                    returnLessionColors(lession?.moduleNumber).border_color
                  } px-3 py-2 rounded-[2.5rem] mr-2 md:mr-6 lg:mr-6 xld:mr-6 h-[64px] w-[64px]`}
                >
                  <div
                    className={`${
                      returnLessionColors(lession?.moduleNumber).text_color
                    } text-3xl relative left-[8px] font-bold h-[64px] w-[64px]`}
                  >
                    {lession?.modulePart[lession?.modulePart.length - 1] ?? "a"}
                  </div>
                </div>
                <div className='text-2xl md:text-3xl lg:text-4xl xl:text-4xl sm:ml-5 md:ml-0 lg:ml-0 xl:ml-0'>
                  {lession?.title}
                </div>
              </div>
            </div>

            <div
              className={`border-collapse w-full ${
                returnLessionColors(lession?.moduleNumber).textcolor
              } aspect-[4/3] p-4 font-[Inter,sans-serif] subpixel-antialiased tracking-wide font-medium leading-relaxed list-outside text-left`}
            >
              <div
                className={`prose-table:border-collapse prose-a:decoration-wavy ${
                  returnLessionColors(lession?.moduleNumber).imgBorderColor
                } ${
                  returnLessionColors(lession?.moduleNumber).link_hover
                } prose-p:text-left prose-p:leading-relaxed prose-p:subpixel-antialiased prose-p:w-full text-white prose max-w-none prose-p:text-base/7 md:ml-12 lg:ml-12 xl:ml-12 prose-headings:text-white prose-img:border-8  ${
                  returnLessionColors(lession?.moduleNumber).link_color
                } hover:prose-a:bg-white hover:prose-a:text-black prose-a:cursor-pointer  ${
                  returnLessionColors(lession?.moduleNumber).headingsColor
                }  ${
                  returnLessionColors(lession?.moduleNumber).codeColor
                } prose-code:text-center ${
                  returnLessionColors(lession?.moduleNumber).blockquote
                } `}
              >
                <MDXContent components={mdxComponents} />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-20 w-full flex justify-between text-white'>
          <div className=''>
            {prevPg && (
              <a href={prevPg} className='flex flex-col'>
                <span>Part {prevPgText}</span>
                <span>Previous Part</span>
              </a>
            )}
          </div>

          <div className=''>
            {nextPg && (
              <a href={nextPg} className='flex flex-col justify-end'>
                <span>Part {nextPgText}</span>
                <span>Next Part</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GeneralInfo;
