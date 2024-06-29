import React from "react";
import { useRouter } from "next/router";
import curPageNumber from "../../../../shared/pageNumber";
import { allDocuments } from "../../../../.contentlayer/generated";
import { NextSeo } from "next-seo";
import ColorModuleParts from "../../../../components/ColorModuleParts";
import Layout from "../../../../components/Layout";

export async function getStaticProps(context) {
  const filteredParts = allDocuments.filter((lession) => {
    return (
      lession?.moduleNumber === `${context?.params?.modulenumber}` &&
      lession?.modulePart === `${context?.params?.modulepart}`
    );
  });
  return { props: { filteredParts } };
}

export async function getStaticPaths() {
  const paths = allDocuments?.map((lession) => {
    return {
      params: {
        modulenumber: lession?.moduleNumber,
        modulepart: lession?.modulePart,
      },
    };
  });
  return { paths, fallback: true };
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

const Course1 = ({ filteredParts }) => {
  const orderedLessions = filteredParts?.sort((a, b) => a.orderNumber - b.orderNumber)
    .map((item) => {
      return item; // or transform 'item' if needed
    });

  const router = useRouter();
  const { modulenumber, modulepart } = router.query;

  if (modulenumber === undefined || modulenumber === null) {
    // Return a loading state or handle the case when modulenumber is undefined.
    return <div>Loading...</div>;
  }

  const currentpath = `/CourseContent/${modulenumber}/${modulepart}`;
  const modNum = modulenumber?.split("-")[1];

  const [prevPg, nextPg, prevPgNumber, nextPgNumber] = curPageNumber({ modulenumber });
  
  return (
    <Layout>
      <div className='my-20'>
        <NextSeo
            title={`Module ${modNum}`}
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
            moduleColor={returnModuleBGColor(modulenumber)}
            currentpath={currentpath}
            orderedLessions={orderedLessions}
          />
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
    </Layout>
  );
};

export default Course1;




