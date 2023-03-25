import React from 'react'
import { solarPanel1 } from '../images/Aimages'
import { solarImage2 } from '../images/Aimages'
import { solarEquip } from '../images/Aimages'
const OurServices = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white shadow-lg shadow-white'>
        <div>
        <h1 className='font-bold text-center p-4 text-2xl py-8 md:text-4xl sm:text-4xl '>OUR SERVICES</h1>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 py-8'>
        
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-50 mx-auto mt-[-3rem] bg-white' src={solarPanel1} alt="/" />
           
            <div className='text-center font-medium'>
                <h1 className='font-bold text-[#dc2626] md:text-2xl sm:text-4xl text-2xl py-6'>Solar Installation</h1>
              <p className='text-gray-400 font-normal text-sm text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, voluptatem. </p>
            </div>
            <button className=' w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'></button>
        </div>
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            <img className='w-50 mx-auto mt-[-3rem] bg-transparent' src={solarImage2} alt="/" />
            
            <div className='text-center font-medium'>
                <h1 className='font-bold text-[#dc2626] md:text-2xl sm:text-4xl text-2xl py-6'>Maintenance</h1>
                <p className='text-gray-400 font-normal text-sm text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, suscipit!</p>
            </div>
            <button className=' text-[#dc2626] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'></button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-50 mx-auto mt-[-3rem] bg-white' src={solarEquip} alt="/" />
            
            <div className='text-center font-medium'>
                <h1 className='font-bold text-[#dc2626] md:text-2xl sm:text-4xl text-2xl py-6'>Sales of Solar Products</h1>
               <p className='text-gray-400 font-normal text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, labore.</p>
            </div>
            <button className=' w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'></button>
        </div>
    </div>
  </div>
  </div>
  )
}

export default OurServices