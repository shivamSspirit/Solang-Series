import { NextSeo } from "next-seo";
import React from "react";
import Layout from "../shared/components/Layout";

const Search = () => {
  
   function handleFocus() {
     searchInput.current.blur(); // removing focus
   }

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
          name=''
          id=''
        />
      </div>
    </div>
    </Layout>
    
  );
};

export default Search;
