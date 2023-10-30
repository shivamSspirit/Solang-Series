"use client";

import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export default function SideBar() {
  return (
    <Sidebar aria-label='Sidebar with multi-level dropdown example'>
      <Sidebar.Items>
        <Sidebar.ItemGroup className='text-white'>
        <Sidebar.Collapse className='text-white hover:bg-gray-700' label='E-commerce'>
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
          </Sidebar.Collapse>
          <Sidebar.Collapse className='text-white hover:bg-gray-700' label='E-commerce'>
            <Sidebar.Item className='text-white hover:bg-gray-700' href='#'>Products</Sidebar.Item>
            <Sidebar.Item className='text-white hover:bg-gray-700' href='#'>Sales</Sidebar.Item>
            <Sidebar.Item className='text-white hover:bg-gray-700' href='#'>Refunds</Sidebar.Item>
            <Sidebar.Item className='text-white hover:bg-gray-700' href='#'>Shipping</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
