import React from 'react'
import illustration from "../../assets/illustration.png";
import NextBreadcrumb from '../NextBreadcrumb';
import Link from 'next/link';
import Image from 'next/image'
function ColorModuleParts({moduleColor,currentpath, orderedLessions,activeFileName}) {
  // console.log("currentpath",currentpath)
  return (
    <div className={`${moduleColor} p-10 rounded-[0.99rem]`}>
    <div>
      <NextBreadcrumb
        homeElement={"Home"}
        separator={<span> | </span>}
        activeClasses='text-amber-500'
        containerClasses='flex py-5 bg-gradient-to-r from-purple-600 to-blue-600'
        listClasses='hover:underline mx-2 font-bold'
        capitalizeLinks
        currentpath={currentpath}
      />
    </div>
    <div className='flex flex-col-reverse md:flex-row'>
      <div className='md:w-1/2 text-white'>
        <div className='sm:mt-10 text-gray-500'>
         {orderedLessions?.[1]?.modulePartDescription}
        </div>
        <div className='mt-10'>
          <div>
            {orderedLessions?.map((lession, idx) => (
              <div key={idx} id='breadcrumbs-one' className='mb-1'>
              {/* {console.log("lession",lession)} */}
                <li>
                  {/* {console.log("filename",lession)} */}
                  <Link className={`${activeFileName===lession.thisFileName?"active":""}`}  href={`/CourseContent${lession.slug}`}>
                    {lession?._raw?.sourceFileName?.replace(/\.mdx$/, "")}
                  </Link>
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='md:mb-16 md:w-1/2 lg:m-0'>
        <div className='flex justify-center lg:justify-end'>
          <Image
            src={illustration}
            alt='illustration'
            className='fill-[#705549]'
          />
        </div>
      </div>
    </div>
  
  </div>
  )
}

export default ColorModuleParts
