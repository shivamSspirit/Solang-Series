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

  // console.log(searchedWordData);

  return (
    <Layout showFooter={false}>
      <div className=''>
      <NextSeo
            title="Search page"
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
