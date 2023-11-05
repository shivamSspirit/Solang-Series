import Link from "next/link";
import { useRouter } from "next/router";

export default function NewSideBar({ headings }) {
  const router = useRouter();

  const menuItems = [
    {
      href: "/",
      title: "Homepage",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/contact",
      title: "Contact",
    },
  ];

  return (
    <div className='w-72 bg-primaryDark  px-4 h-[700px] sticky top-10 overflow-y-auto'>
      <div className='flex flex-col mt-4 md:flex-row flex-1'>
        <nav>
          <ul>
            {headings?.map((heading, id) => (
              <li
                className='capitalize cursor-pointer whitespace-normal my-4 flex-wrap text-white hover:bg-gray-700 text-left w-full'
                href={`#${heading.slug}`}
                key={id}
              >
                {heading.slug}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
