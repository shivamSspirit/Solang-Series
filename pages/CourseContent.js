import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";

import { getModules } from "utils/module-lession";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";

import {announcementData} from "../utils/general-data"
// import { returnModuleHoverColor } from "../utils/modulelvl-color";

export async function getStaticProps() {
  const allModuleNumbers = await getModules();
  const allModules = allModuleNumbers.map((post) =>
    post.substring("modules/".length)
  );
  return {
    props: {
      allModules,
    },
  };
}

const returnModuleHoverColor = (colors) => {
  if (colors === "#bfbfff") {
    return "hover:bg-[#bfbfff]";
  } else if (colors === "#A3B86C") {
    return "hover:bg-[#A3B86C]";
  } else if (colors === "#CFB53B") {
    return "hover:bg-[#CFB53B]";
  } else if (colors === "#CD853F") {
    return "hover:bg-[#CD853F]";
  } else if (colors === "#63a4da") {
    return "hover:bg-[#63a4da]";
  } else if (colors === "#e5acb6") {
    console.log("colors", colors);
    return "hover:bg-[#e5acb6]";
  } else if (colors === "#efc070") {
    console.log("colors", colors);
    return "hover:bg-[#efc070]";
  } else if (colors === "#F8C794") {
    console.log("colors", colors);
    return "hover:bg-[#F8C794]";
  }
};

const CourseContent = ({ allModules }) => {
  const mergedArray = allModules.map((moduleName, index) => ({
    module: moduleName,
    ...announcementData[index],
  }));

  const router = useRouter();

  const returnModuleColor = (moduleNumber) => {
    const findmodule = mergedArray?.find(
      (module) => module?.module === moduleNumber
    );
    const colors = findmodule?.module_color;
    const realbgColor = returnModuleHoverColor(colors);
    return realbgColor;
  };


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
            {console.log("announcement", returnModuleColor(announcement.module))}
              <div
                className={`m-1 p-2 cursor-pointer bg-[#858383] ${returnModuleColor(announcement.module)} rounded-2xl border border-white`}
              >
                <div
                 onClick={() => {
                      router.push({
                        pathname: `/CourseContent/${announcement.module}/${announcement.module}-a`,
                      });
                    }}
                >
                  <Image
                    src={announcement?.img?.src}
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
