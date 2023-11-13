import { NextSeo } from "next-seo";
import React, { useState } from "react";
import Layout from "../shared/components/Layout";
import { allDocuments } from "../.contentlayer/generated";
import Link from "next/link";

const Search = () => {
  const [inputText, setInputText] = useState(null);

  const searchedWordData = allDocuments.filter((doc) => {
    if (inputText === "") setInputText(null);
    const findText = doc.body.raw.includes(inputText);
    return findText;
  });

  console.log(searchedWordData);

  return (
    <Layout showFooter={false}>
      <div className=''>
        <NextSeo title={`Search Page`} />
        <div className='text-3xl my-20 font-semibold'>
          Search from the material
        </div>
        <div>
          <input
            className='text-white focus:ring-0 focus:border-white bg-transparent w-full border-0 border-b-2 border-b-white'
            type='text'
            placeholder='Enter query word'
            onChange={(event) => {
              setInputText(event.target.value);
            }}
          />
        </div>
        <div className='mt-8'>
          <div>
            <ul>
              {searchedWordData.map((data, idx) => (
                <Link href={`CourseContent/${data.slug}`}>
                  <li key={idx} className='ml-10 list-decimal'>
                    {data.modulePart} {data.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
