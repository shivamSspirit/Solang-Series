"use client";

import { Sidebar } from "flowbite-react";
import Link from "next/link";

export default function SideBar({headings}) {
  return (
    <Sidebar className="w-full" aria-label='Sidebar with multi-level dropdown example'>
      <Sidebar.Items>
        <Sidebar.ItemGroup className='text-white'>
        <Sidebar.Collapse className='text-white hover:bg-gray-700' label='SideBar'>
        {headings?.map((heading,id)=>(
          <Sidebar.Item key={id} className='text-white hover:bg-gray-700 text-left' href='#'>
              <Link href={`#${heading.slug}}`}>
              {heading.slug}
              </Link>
            </Sidebar.Item>
        ))}
           
            {/* <Sidebar.Item className='text-white hover:bg-gray-700' href='#'>Sales</Sidebar.Item>
            <Sidebar.Item className='text-white hover:bg-gray-700' href='#'>Refunds</Sidebar.Item>
            <Sidebar.Item className='text-white hover:bg-gray-700' href='#'>Shipping</Sidebar.Item> */}
          </Sidebar.Collapse>
          {/* <Sidebar.Collapse className='text-white hover:bg-gray-700' label='E-commerce'>
            <Sidebar.Item className='text-white hover:bg-gray-700' href='#'>Products</Sidebar.Item>
            <Sidebar.Item className='text-white hover:bg-gray-700' href='#'>Sales</Sidebar.Item>
            <Sidebar.Item className='text-white hover:bg-gray-700' href='#'>Refunds</Sidebar.Item>
            <Sidebar.Item className='text-white hover:bg-gray-700' href='#'>Shipping</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse className='text-white hover:bg-gray-700' label='E-commerce'>
            <Sidebar.Item className='text-white hover:bg-gray-700' href='#'>Products</Sidebar.Item>
            <Sidebar.Item className='text-white hover:bg-gray-700' href='#'>Sales</Sidebar.Item>
            <Sidebar.Item className='text-white hover:bg-gray-700' href='#'>Refunds</Sidebar.Item>
            <Sidebar.Item className='text-white hover:bg-gray-700' href='#'>Shipping</Sidebar.Item>
          </Sidebar.Collapse> */}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
