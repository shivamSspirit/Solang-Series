import React from "react";
import Markdown from "react-markdown";

const Test = () => {
  const markdown = "# Hi, *Pluto*!";

  return (
    <div>
      <Markdown>{markdown}</Markdown>
    </div>
  );
};

export default Test;
