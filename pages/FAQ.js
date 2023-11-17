import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import expandIcon from "../assets/expandIcon.png";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { NextSeo } from "next-seo";
import Layout from "../shared/components/Layout";

const accData = [
  {
    title: "What are the prerequisites of this course?",
    ans: " Basic programming knowledge in any general language like Python, C++ is required. Knowledge of basic Solidity and JavaScript will be very beneficial and will make the course easier.",
  },
  {
    title: "Is this course paid?",
    ans: "The Solidity On Solana course is free of cost.",
  },
  {
    title: "How long does the course take to complete?",
    ans: "The course contains nine parts, the first of which is numbered 0 for consistency with past iterations. One part corresponds loosely half to one week (averaging 9-12 hours) of studying, but the speed of completing the course is flexible.",
  },
  {
    title: "What software/tools do I need for this course?",
    ans: "You will need a code editor like Visual Studio Code, along with Solana Devtools and Anchor framework for development. Detailed steps for the setup of the requirements is given in the Setting up Development Workspace lession",
  },
];

const FAQ = () => {

  const [expanded, setExpanded] = useState(
    new Array(accData.length).fill(false)
  );

  const toggleAccordion = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <Layout showFooter={false}>
  <div className="flex mb-16 flex-col justify-evenly">
  <NextSeo
            title="FAQ"
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
      <div className='text-5xl my-20'>Frequently asked questions</div>

      <div>
        {accData.map((data, idx) => (
          <Accordion
            key={idx}
            className='bg-primaryDark border border-white my-2 text-white'
            expanded={expanded[idx]}
            style={{backgroundColor:"#201F1F", color:"whiteSmoke"}}
          >
            <AccordionSummary
              onClick={() => toggleAccordion(idx)}
              expandIcon={
                expanded[idx] ? (
                  <RemoveIcon style={{ color: "white" }} />
                ) : (
                  <AddIcon style={{ color: "white" }} />
                )
              }
            >
              <Typography>{data.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{data.ans}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

      </div>


    </div>
    </Layout>
  
  );
};

export default FAQ;
