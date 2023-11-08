import { Sidebar } from "flowbite-react";
import Link from "next/link";

export default function SideBar({ headings }) {
  function addEllipsisIfTooLong(text) {
    if (text.length > 45) {
      return text.slice(0, 45) + "...";
    }
    return text;
  }

  return (
    <div className='w-72 h-[800px] sticky top-10 overflow-y-auto'>
      <Sidebar>
        <Sidebar.Items>
          <Sidebar.ItemGroup className='text-white'>
            {headings?.map((heading, id) => (
              <Sidebar.Item
                key={id}
                className='whitespace-normal hover:bg-transparentBg'
                href='#'
              >
                <Link
                  className='whitespace-normal flex-wrap text-white hover:bg-gray-700 text-left w-full'
                  href={`#${heading.slug}`}
                >
                  {addEllipsisIfTooLong(heading.slug)}
                </Link>
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
