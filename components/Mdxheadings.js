import Link from "next/link";
import styles from "./MdxHeadings.module.css";
import { useState, useEffect } from "react";
import GithubSlugger from "github-slugger";

const MdxHeading = ({ h, id, ...rest }) => {
  // ensure the page has fully loaded before running
  const [hasMounted, setHasMounted] = useState(false);
  const VariableHeader = h;
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  // if our heading "H" tag has a class of "id"
  // if it has an ID return this correct heading with the class associated
  if (id) {
      const slugger = new GithubSlugger();
    return (
      <VariableHeader
        id={`${slugger.slug(id)}`}
        className={styles.mdx_heading}
        {...rest}
      />
    );
  }
  // if not return a regular unlinked header
  return <h1 {...rest} />;
};

// cycle through and make H1 - H6 heading tags to use
export const MdxH1 = (props) => <MdxHeading h='h1' id={`${props.children}`} {...props} />
export const MdxH2 = (props) => <MdxHeading h='h2' id={`${props.children}`} {...props} />;
export const MdxH3 = (props) => <MdxHeading h='h3' id={`${props.children}`} {...props} />;
export const MdxH4 = (props) => <MdxHeading h='h4' id={`${props.children}`} {...props} />;
export const MdxH5 = (props) => <MdxHeading h='h5' id={`${props.children}`} {...props} />;
export const MdxH6 = (props) => <MdxHeading h='h6' id={`${props.children}`} {...props} />;
