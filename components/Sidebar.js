import { Sidebar } from "flowbite-react";
import Link from "next/link";
import { useState,useEffect } from "react";
export default function SideBar({ headings }) {

  const [active, setActive] = useState(
    headings.length > 0 ? headings[0].slug : ''
  )
  function addEllipsisIfTooLong(text) {
    if (text.length > 45) {
      return text.slice(0, 45) + "...";
    }
    return text;
  }


  // console.log("headings",headings)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const headingElements = headings.map(({ slug }) =>
  //       document.getElementById(slug)
  //     )
  //     const visibleHeadings = headingElements.filter((el) =>
  //       isElementInViewport(el)
  //     )
  //     if (visibleHeadings.length > 0) {
  //       setActive(visibleHeadings[0].id)
  //     }
  //   }

  //   document.addEventListener('scroll', handleScroll)
  //   return () => {
  //     document.removeEventListener('scroll', handleScroll)
  //   }
  // }, [headings])

  // const isElementInViewport = (el) => {
  //   const rect = el?.getBoundingClientRect()
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <=
  //       (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   )
  // }

  return (
    <div className='w-72 h-[800px] sticky top-10 overflow-y-auto'>
    
    <Sidebar>
        <Sidebar.Items>
          <Sidebar.ItemGroup className='text-white'>
            {headings?.map((heading, id) => (
              <Sidebar.Item
                key={id}
                className='whitespace-normal hover:bg-transparentBg'
                // href=''
                // onClick={() => setActive(heading.slug)}
                // style={{
                //       color: active === heading.slug ? '#fff' : '',
                //     }}
              >
                <Link
                  data-level={heading.level}
                  className='whitespace-normal flex-wrap text-white hover:bg-gray-700 text-left w-full'
                  href={`#${heading.slug}`}
                >
                  {addEllipsisIfTooLong(heading.text)}
                </Link>
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
     
     
    </div>
  );
}

