import { Button } from 'flowbite-react';
import React from "react";

const ComingSoon = () => {
  return (
    <div>
      <div className='flex justify-center items-center absolute top-[35%]'>
        <div className='w-[80%] flex flex-col text-center justify-center items-center h-full text-white'>
          <div className='text-6xl w-[60%] mb-4'>
            Our website is under construction
          </div>
          <div className='mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </div>
          <div className=''>
            <Button color='blue'>support@sloganseries.com</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon
