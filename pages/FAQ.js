import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import expandIcon from "../assets/expandIcon.png";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const FAQ = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const accData = [
    {
      title: "What are the prerequisites of the course?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget.",
    },
    {
      title: "What does this course cost?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget.",
    },
    {
      title: "What are the prerequisites of the course?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget.",
    },
    {
      title: "What are the prerequisites of the course?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget.",
    },
  ];

  return (
    <div>
      <div className='text-5xl my-20'>Frequently asked questions</div>
      <div>
        {accData.map((data, idx) => (
          <Accordion
            key={idx}
            className='bg-transparent border border-white my-2 text-white'
          >
            <AccordionSummary
              onClick={toggleAccordion}
              expandIcon={
                isExpanded ? (
                  <RemoveIcon style={{ color: "white" }} />
                ) : (
                  <AddIcon style={{ color: "white" }} />
                )
              }
            >
              <Typography>{data.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {data.ans}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
