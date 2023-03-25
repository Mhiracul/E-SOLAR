import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#212121]'>
    <div className=' bg-[#212121] w-full max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#dc2626]'>E_SOLAR.</h1>
        <p className='py-4'>We Offer a Wide Range of Quality Solar Panel Installation Services.
</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-xl text-gray-400'>Solutions</h6>
        <ul className='py-4'>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-xl text-gray-400'>Support</h6>
        <ul className='py-4'>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Leadership Team</li>
            <li className='py-2 text-sm'>Our Services</li>
            <li className='py-2 text-sm'>Recent Projects</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-xl text-gray-400'>Services</h6>
        <ul className='py-4'>
            <li className='py-2 text-sm'>Solar Installation</li>
            <li className='py-2 text-sm'>Solar Maintenance</li>
            <li className='py-2 text-sm'>Tubular Batteries</li>
            <li className='py-2 text-sm'>Solar Inverter</li>
            <li className='py-2 text-sm'>Charge Controllers</li>
        </ul>
    </div>
    
      </div>
    </div>
    </div>
  );
};

export default Footer;