import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import expandIcon from "../assets/expandIcon.png";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const FAQ = () => {
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

  const [expanded, setExpanded] = useState(
    new Array(accData.length).fill(false)
  );

  const toggleAccordion = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div>
      <div className='text-5xl my-20'>Frequently asked questions</div>
      <div>
        {accData.map((data, idx) => (
          <Accordion
            key={idx}
            className='bg-transparent border border-white my-2 text-white'
            expanded={expanded[idx]}
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
  );
};

export default FAQ;
