import React from "react";
import { useRouter } from "next/router";
import curPageNumber from "../../../../shared/pageNumber";
import { allDocuments } from "../../../../.contentlayer/generated";
import { NextSeo } from "next-seo";
import ColorModuleParts from "../../../components/ColorModuleParts";

export async function getStaticProps(context) {
  //  console.log("Running static props",context);

  const filteredParts = allDocuments.filter((lession) => {
    // console.log("lessiosnsss",lession)
    return (
      lession?.moduleNumber === `${context?.params?.modulenumber}` &&
      lession?.modulePart === `${context?.params?.modulepart}`
    );
  });

  //  console.log("FilteredParts",filteredParts);
  // console.log("lessions for a part", lession);
  // Return notFound if the post does not exist.
  // if (!lession) return { notFound: true }

  // console.log(lession, " Lession from static props");

  // Return the post as page props.
  return { props: { filteredParts } };
}

export async function getStaticPaths() {
  // console.log("Static paths runnning");
  // Get a list of valid post paths.
  const paths = allDocuments?.map((lession) => {
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
    // console.log("allDocuments",allDocuments)
  // console.log("Filtered parts",filteredParts)

  const orderedLessions  = filteredParts?.sort((a, b) => a.orderNumber - b.orderNumber)
  .map((item, index) => {
    return item; // or transform 'item' if needed
  });

  // console.log("fockiiii",orderedLessions)
  const router = useRouter();
  const { modulenumber, modulepart } = router.query;

  if (modulenumber === undefined || modulenumber === null) {
    // Return a loading state or handle the case when modulenumber is undefined.
    return <div>Loading...</div>;
  }

  const currentpath = `/CourseContent/${modulenumber}/${modulepart}`;
  // console.log(" all docs",router.query);

  const modNum = modulenumber?.split("-")[1];


  const [prevPg, nextPg, prevPgNumber, nextPgNumber] = curPageNumber({modulenumber});

  const returnModuleColor=(moduleNumber)=>{
    if(moduleNumber==="module-0"){
      return "bg-[#bfbfff]";
    } else if(moduleNumber==="module-1"){
      return "bg-[#A3B86C]";
    } else if(moduleNumber==="module-2"){
      return "bg-[#CFB53B]";
    } else if(moduleNumber==="module-3"){
      return "bg-[#CD853F]";
    } else if(moduleNumber==="module-4"){
      return "bg-[#63a4da]";
    }
  }
  


  return (
    <div className='my-20'>
      <NextSeo title={`Module ${modNum}`} />
     
       <div className='flex sm:flex-col justify-between'>
      <ColorModuleParts 
      moduleColor= {returnModuleColor(modulenumber)}
      currentpath= {currentpath}
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
  );
};

export default Course1;
