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

export async function getStaticProps() {
  const allModuleNumbers = await getModules();
  //console.log("allModuleNumbers", allModuleNumbers);
  const allModules = allModuleNumbers.map((post) => post.substring("modules/".length));
  return {
    props: {
      allModules,
    },
  };
}

const announcementData = [
  {
    img: Course1,
    head: "Module Name ",
    desc: "In this part, we will familiarize ourselves with the practicalities of taking the course.",
  },
  {
    img: Course2,
    head: "Module Name",
    desc: "In this part, we will familiarize ourselves with the practicalities of taking the course.",
  },
  {
    img: Course3,
    head: "Module Name",
    desc: "In this part, we will familiarize ourselves with the practicalities of taking the course.",
  },
  {
    img: Course4,
    head: "Module Name ",
    desc: "In this part, we will familiarize ourselves with the practicalities of taking the course.",
  },
  {
    img: Course5,
    head: "Module Name",
    desc: "In this part, we will familiarize ourselves with the practicalities of taking the course.",
  },
  {
    img: Course6,
    head: "Module Name",
    desc: "In this part, we will familiarize ourselves with the practicalities of taking the course.",
  },
  {
    img: Course6,
    head: "Module Name",
    desc: "In this part, we will familiarize ourselves with the practicalities of taking the course.",
  },
  {
    img: Course6,
    head: "Module Name",
    desc: "In this part, we will familiarize ourselves with the practicalities of taking the course.",
  },
];

const CourseContent = ({ allModules }) => {
  const mergedArray = allModules.map((moduleName, index) => ({
    module: moduleName,
    ...announcementData[index],
  }));
  const router = useRouter();

  console.log(mergedArray);

  const moduleCard = (
    <div className='text-white'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 8, xl: 14 }}
          className='flex justify-evenly items-center'
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {mergedArray.map((announcement, index) => (
            <Grid item xs={3} sm={4} md={4} key={index}>
              <div className='m-1 p-2 bg-primaryDark rounded-2xl border border-white'>
                <div>
                  <Image
                    src={announcement.img.src}
                    alt='med'
                    width={400}
                    height={220}
                  />
                </div>
                <div className='px-3 rounded-b-2xl'>
                  <div className='text-2xl capitalize pt-6 pb-1'>
                    {announcement.module}
                  </div>
                  <div className='text-secondaryGrey pb-6'>
                    {announcement.desc}
                  </div>
                </div>
                <div className='mb-[1px]'>
                  <Button className='w-full bg-white'>
                    <div
                      onClick={() => {
                        router.push({
                          pathname: `/CourseContent/${announcement.module}/${announcement.module}-a`,
                        });
                      }}
                      className='text-center font-bold text-black text-xl'
                    >
                      Start Module
                    </div>
                  </Button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );

  return (
    <div className='my-20 text-white'>
      <NextSeo title='Course Content' />
      <div>
        <div className='text-3xl md:text-5xl mb-2'>Solidity On Solana</div>
        <div className='mb-10 text-sm md:text-base'>
          Description of course content, If you make changes to the material and
          want to distribute the modified version, it must be licensed under the
          same license. Using the material for commercial purposes is forbidden
          without permission.
        </div>
        <div>{moduleCard}</div>
      </div>
    </div>
  );
};

export default CourseContent;
