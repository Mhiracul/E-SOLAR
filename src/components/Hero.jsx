import React from 'react'
import Typed from 'react-typed';



function Hero() {
    
    return (
       
     <div className='text-white '>
      <div className='max-w[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div class="relative h-32 w-32 ...">
</div>
        <p className='text-[#dc2626] font-bold p-2'>ENERGIZE YOUR FUTURE</p>
        <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold md:py-6'>Solar Energy Solutions</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-3xl text-sm  font-bold py-4'>Green Energy</p>
          <Typed className='md:text-3xl text-sm font-bold pl-2'
                    strings={['is Free Energy']}
                    typeSpeed={40} backSpeed={60} loop
                />
        </div>
          <p className='md:text-sm text-sm font-bold text-gray-500'>Go solar and save 30% on your electricity bill</p>
          <button className='bg-[#dc2626] w-[200px] rounded-md fnt-medium my-6 mx-auto py-3 text-white'>Get Started</button>
      </div>
     
     </div>
   
    )
}

export default Hero;