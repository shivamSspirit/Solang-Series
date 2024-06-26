import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { allDocuments } from "../../../../.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import NewSideBar from "../../../../components/NewSideBar";
import { NextSeo } from "next-seo";
import ColorModuleParts from "../../../../components/ColorModuleParts";
import Prism from "prismjs";
import { findNavs } from "../../../../shared/navtoroute";

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
import Link from "next/link";

export async function getStaticPaths() {
  // Get a list of valid post paths.
  const paths = allDocuments.map((lession) => {
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
    .map((item) => {
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

  const lession = allDocuments?.find(
    (lession) =>
      lession?._raw?.flattenedPath ===
      `${context?.params?.modulenumber}/${context.params.modulepart}/${context.params.idasfilename}`
  );

  if (!lession) return { notFound: true };

  return {
    props: { lession, totalParts, filteredParts, totallessions, lastLetter },
  };
}

const returnModuleBGColor = (moduleNumber) => {
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
    return "bg-[#e5acb6]";
  } else if (moduleNumber === "module-6") {
    return "bg-[#efc070]";
  } else if (moduleNumber === "module-7") {
    return "bg-[#F8C794]";
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
  } else if (lessionNumber === "module-5") {
    return {
      blockquote: "prose-blockquote:text-[#e5acb6]",
      codeColor: "prose-code:text-[#e5acb6]",
      text_color: "text-[#e5acb6]",
      link_hover: "hover:prose-a:decoration-[#e5acb6]",
      headingsColor: "prose-strong:text-[#e5acb6]",
      border_color: "border-[#e5acb6]",
      imgBorderColor: "prose-img:border-[#e5acb6]",
      link_color: "prose-a:text-[#e5acb6]",
    };
  } else if (lessionNumber === "module-6") {
    return {
      blockquote: "prose-blockquote:text-[#efc070]",
      codeColor: "prose-code:text-[#efc070]",
      text_color: "text-[#efc070]",
      link_hover: "hover:prose-a:decoration-[#efc070]",
      headingsColor: "prose-strong:text-[#efc070]",
      border_color: "border-[#efc070]",
      imgBorderColor: "prose-img:border-[#efc070]",
      link_color: "prose-a:text-[#efc070]",
    };
  } else if (lessionNumber === "module-7") {
    return {
      blockquote: "prose-blockquote:text-[#F8C794]",
      codeColor: "prose-code:text-[#F8C794]",
      text_color: "text-[#F8C794]",
      link_hover: "hover:prose-a:decoration-[#F8C794]",
      headingsColor: "prose-strong:text-[#F8C794]",
      border_color: "border-[#F8C794]",
      imgBorderColor: "prose-img:border-[#F8C794]",
      link_color: "prose-a:text-[#F8C794]",
    };
  }
};

const GeneralInfo = ({ lession, totalParts, filteredParts }) => {
  const MDXContent = useMDXComponent(lession.body.code);
  const router = useRouter();
  const [showScroll, setShowScroll] = useState();

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

  useEffect(() => {
    const handleScrollVisible = () => {
     window.scrollY > 450 ? setShowScroll(true) : setShowScroll(false);
    };

    window.addEventListener("scroll", handleScrollVisible);

    return () => {
      window.addEventListener("scroll", handleScrollVisible);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const orderedLessions = filteredParts
    ?.sort((a, b) => a.orderNumber - b.orderNumber)
    .map((item) => {
      return item;
    });

  const { modulenumber, modulepart, idasfilename } = router.query;

  const currentpath = `/CourseContent/${modulenumber}/${modulepart}/${idasfilename}`;

  /** new routes start  */
  const {
    prevPG,
    nextPG,
    currentModuleNumber,
    currentModuleNumberforPrev,
    moduleChar,
    NextFile,
    prevFile,
    moduleCharNext,
  } = findNavs(
    allDocuments,
    modulenumber,
    modulepart,
    totalParts,
    idasfilename,
    lession
  );

  return (
    <Layout>
      {/* <ScrollToTop smooth /> */}
      <div className="my-12">
        <NextSeo
          title="Soldity On Solana"
          titleTemplate="Soldity On Solana"
          defaultTitle="Soldity On Solana"
          description="Deep dive into solana development using solidity"
          canonical="https://solidityonsolana.one/"
          openGraph={{
            url: "https://solidityonsolana.one/",
            title: "Soldity For Solana",
            description:
              "An Ultimate Crash Course on how to build on solana using solidity",
            images: [
              {
                url: "https://i.postimg.cc/hvvz3KqW/landpage.jpg",
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

        <div className="flex sm:flex-col justify-between">
          <ColorModuleParts
            moduleColor={returnModuleBGColor(lession?.moduleNumber)}
            currentpath={currentpath}
            orderedLessions={orderedLessions}
            activeFileName={idasfilename}
          />
        </div>

        <div className="mt-20 sm:flex w-full gap-12">
          <div className="hidden md:flex w-1/4">
            <NewSideBar headings={lession.headings} />
          </div>

          <div className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4">
            {showScroll && (
              <div className="flex justify-end">
                <button
                  className="fixed top-[47%] right-0 md:right-2 lg:right-8 z-50 cursor-pointer p-3 bg-gray-700 rounded-full hover:bg-gray-800 transition duration-300"
                  onClick={handleScrollToTop}
                >
                  <img
                    src="/moduleimages/arrowup.png"
                    alt="scroll"
                    className="w-4 h-4 md:w-4 md:h-4 lg:w-4 lg:h-4"
                  />
                </button>
              </div>
            )}

            <div className="flex flex-col text-white">
              <div className="flex justify-content items-center text-2xl mb-6">
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
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl sm:ml-5 md:ml-0 lg:ml-0 xl:ml-0">
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

        <div className="mt-20 w-full flex justify-between text-white">
          <div className="">
            {prevPG !== null ? (
              <Link
                href={`/${prevPG}`}
                className="flex flex-col hover:underline"
              >
                <span>{`module-${currentModuleNumberforPrev}-${moduleChar}`}</span>
                <span>{`${prevFile}...`}</span>
              </Link>
            ) : (
              ""
            )}
          </div>

          <div className="">
            {nextPG !== null ? (
              <Link
                href={`/${nextPG}`}
                className="flex flex-col justify-end hover:underline"
              >
                <span>{`module-${currentModuleNumber}-${moduleCharNext}`}</span>
                <span>{`${NextFile}...`}</span>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GeneralInfo;
