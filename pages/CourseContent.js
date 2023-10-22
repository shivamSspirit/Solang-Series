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

const CourseContent = () => {
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
  ];

  const router = useRouter();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const moduleCard = (
    <div className='text-white'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {announcementData.map((announcement, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <div className='m-1'>
                <Image src={announcement.img} alt='med' />
                <div className='px-3 rounded-b-2xl'>
                  <div className='text-2xl pt-6 pb-1'>{announcement.head}</div>
                  <div className='text-[#CECECE] pb-6'>{announcement.desc}</div>
                </div>
                <div className='mb-2'>
                  <Button
                   className='w-full bg-white'>
                    <div
                      onClick={() => {
                        router.push({
                          pathname: `/CourseContent/Course${index + 1}`,
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
      <div>
        <div className='text-5xl mb-2'>Title of course content</div>
        <div className='mb-10'>
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
