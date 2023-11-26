import Link from "next/link";
import { useRouter } from "next/router";

export default function NewSideBar({ headings }) {
  const router = useRouter();
  // console.log("headings",headings)

  // const menuItems = [
  //   {
  //     href: "/",
  //     title: "Homepage",
  //   },
  //   {
  //     href: "/about",
  //     title: "About",
  //   },
  //   {
  //     href: "/contact",
  //     title: "Contact",
  //   },
  // ];

  return (
    <div className='w-ful  px-4 h-[99vh] sticky top-10 overflow-y-auto rounded-lg'>
      <div className='flex flex-col mt-4 md:flex-row flex-1'>
        <nav>
          <ul>
            {headings?.map((heading, idx) => (
              <Link key={idx} href={`#${heading.slug}`}>
                <li
                  className='text-white list-outside leading-normal tracking-normal md:text-gray-400 text-[14px] capitalize cursor-pointer whitespace-normal my-4 flex-wrap  hover:bg-gray-700 w-full text-left'
                  key={idx}
                >
                  -{heading.slug}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
