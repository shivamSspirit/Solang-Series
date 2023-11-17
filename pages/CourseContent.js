import React from "react";
import Course1 from "../assets/Course1.png";
import Course2 from "../assets/Course2.png";
import Course3 from "../assets/Course3.png";
import Course4 from "../assets/Course4.png";
import Course5 from "../assets/Course5.png";
import Course6 from "../assets/Course6.png";
import { Button } from "flowbite-react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { getModules } from "utils/module-lession";
import { NextSeo } from "next-seo";
import { allDocuments } from "../.contentlayer/generated";
import Layout from "../components/Layout";

// export async function getStaticProps(context) {
//   console.log("Running static props",context);

//  return { props: { filteredParts } };
// }

export async function getStaticProps() {
  const allModuleNumbers = await getModules();
  //console.log("allModuleNumbers", allModuleNumbers);
  const allModules = allModuleNumbers.map((post) =>
    post.substring("modules/".length)
  );
  return {
    props: {
      allModules,
    },
  };
}

export const announcementData = [
  {
    img: Course1,
    head: "Module Name ",
    desc: "Introduction",
    module_color:"#bfbfff"
  },
  {
    img: Course2,
    head: "Module Name",
    desc: "Building Solana Programs with Solidity",
    module_color:"#A3B86C"
  },
  {
    img: Course3,
    head: "Module Name",
    desc: "Minting Fungible Tokens",
    module_color:"#CFB53B"
  },
  {
    img: Course4,
    head: "Module Name ",
    desc: "Building a CPI-Enabled Flip Program",
    module_color:"#CD853F"
  },
  {
    img: Course5,
    head: "Module Name",
    desc: "How to Transfer Solana Tokens with Solidity",
    module_color:"#63a4da"
  },
  // {
  //   img: Course6,
  //   head: "Module Name",
  //   desc: "In this part, we will familiarize ourselves with the practicalities of taking the course.",
  // },
  {
    img: Course6,
    head: "Module Name",
    desc: "In this part, we will familiarize ourselves with the practicalities of taking the course.",
    module_color:"#E6BE8A"
  },
  {
    img: Course6,
    head: "Module Name",
    desc: "In this part, we will familiarize ourselves with the practicalities of taking the course.",
    module_color:"#E6BE8A"
  },
];

const CourseContent = ({ allModules }) => {
 // console.log("allDocsfdfssd", allDocuments);
  const mergedArray = allModules.map((moduleName, index) => ({
    module: moduleName,
    ...announcementData[index],
  }));
  const router = useRouter();


//   const moduleColors={
//     "module-0":"#FAFAD2",
//     "module-1":"#EEE8AA",
//     "module-2":"#C5B358",
//     "module-3":"#CD853F",
//     "module-4":"#E6BE8A"
// }


const returnModuleColor=(moduleNumber)=>{
  const findmodule = mergedArray?.find(module=>module?.module===moduleNumber);
  // console.log("findmodule,",findmodule)
  const colors = findmodule?.module_color;
  if(colors==="#bfbfff"){
    return "hover:bg-[#bfbfff]";
  } else if(colors==="#A3B86C"){
    return "hover:bg-[#A3B86C]";
  } else if(colors==="#CFB53B"){
    return "hover:bg-[#CFB53B]";
  } else if(colors==="#CD853F"){
    return "hover:bg-[#CD853F]";
  }
  else if(colors==="#63a4da"){
    return "hover:bg-[#63a4da]";
  }

}
 // console.log(mergedArray);

  const moduleCard = (
    <div className='text-white'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 8, xl: 14 }}
          className='flex justify-center md:justify-start items-center'
          columns={{ xs: 3, sm: 8, md: 12 }}
        >
          {mergedArray.map((announcement, index) => (
            <Grid item xs={3} sm={4} md={4} key={index}>
              <div
                className={`m-1 p-2 cursor-pointer bg-[#858383] rounded-2xl border border-white ${returnModuleColor(
                  announcement.module
                )}`}
              >
                <div>
                  <Image
                    src={announcement.img.src}
                    alt='med'
                    width={400}
                    height={220}
                    className='w-full'
                  />
                </div>
                <div className='px-3 rounded-b-2xl'>
                  <div
                    onClick={() => {
                      router.push({
                        pathname: `/CourseContent/${announcement.module}/${announcement.module}-a`,
                      });
                    }}
                    className='text-2xl capitalize pt-2 pb-1 cursor-pointer'
                  >
                    {announcement.module}
                  </div>
                  <div
                    onClick={() => {
                      router.push({
                        pathname: `/CourseContent/${announcement.module}/${announcement.module}-a`,
                      });
                    }}
                    className='text-white pb-2 cursor-pointer min-h-[52px] flex justify-start items-center'
                  >
                    {announcement.desc}
                  </div>
                </div>
                {/* <div className="mb-[1px]">
                  <Button
                    className="w-full bg-white"
                    onClick={() => {
                      router.push({
                        pathname: `/CourseContent/${announcement.module}/${announcement.module}-a`,
                      });
                    }}
                  >
                    <div className="text-center font-bold text-black text-xl">
                      Start Module
                    </div>
                  </Button>
                </div> */}
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );

  return (
    <Layout>
      <div className='my-16 text-white'>
      <NextSeo
            title="Course Content"
            titleTemplate="Soldity On Solana"
            defaultTitle="Soldity On Solana"
            description="Deep dive into solana development using solidity"
            canonical="https://solidityonsolana.one/"
            openGraph={{
              url: "https://solidityonsolana.one/",
              title: "Soldity For Solana",
              description: "A full stack web developer, who loves to design and develop beautiful websites. I have been coding for over a year now. One of my hobbies is writing, I love to document my journey by writing blog posts and also teach others through them.",
              images: [
                {
                  url: "/moduleimages/site-log.svg",
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
        <div className='mb-3'>
          {"Solidity On Solana".split("").map((letter, index) => {
            return (
              <span
                key={index}
                className='hover:text-funPinkDark hover:mb-3 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim text-3xl md:text-5xl mb-2 leading-relaxed '
              >
                {letter}
              </span>
            );
          })}
        </div>
        {/* <div className='text-3xl md:text-5xl mb-2'>Solidity On Solana</div> */}
        <div className='mb-10 text-sm md:text-base'>
          The course is divided into nine modules, labeled from{" "}
          <strong>Module-0</strong> to <strong>Module-8</strong>. Each module is
          further divided into two parts for clear understanding, and these are
          referred to as 'Module Number Part. Additionally, each module part
          contains easily digestible lessions, so you can explore each concept
          thoroughly. Immerse yourself in the world of Solidity on Solana and
          become proficient in creating smart contracts through this
          well-organized and informative modules
        </div>
        <div>{moduleCard}</div>
      </div>
    </Layout>
  );
};

export default CourseContent;
