import { useEffect, useState } from "react";
import React from 'react'

const AboutHero = () => {
    const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [textList] = useState(['IN GREEN TECHNOLOGY']);

  useEffect(() => {
    const timer = setInterval(() => {
      setTypedText(textList[index].slice(0, typedText.length + 1));
      if (textList.length > 0 && typedText.length === textList[index].length) {
        setTimeout(() => {
          setTypedText('');
          setIndex((index + 1) % textList.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [index, typedText, textList]);
  return (
    <div className='text-white h-auto'>
        <div className='bg-black' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url("https://149707435.v2.pressablecdn.com/wp-content/uploads/elementor/thumbs/working-tools-for-installing-solar-panels-2021-09-01-15-21-08-utc-piz0e95mdo2y7qcbcyzkdvpsx2leqang2sc2vj1nd4.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <div className='max-w[800px] mt-[-96px] w-full h-96 mx-auto text-center flex flex-col justify-center' style={{height: '580px'}}>
      <div class="relative h-32 w-32 ..."></div>
      <h1 className='md:text-3xl sm:text-5xl text-3xl font-bold md:py-3 text-[#dc2626]'>ABOUT US</h1>
      <div className='flex justify-center items-center'>
        <p className='md:text-1xl text-sm font-bold py-4'>SPECIALIZED</p>
        <p className='md:text-1xl text-sm font-bold pl-2'>{typedText}</p>

      </div>
      <p className='md:text-sm text-sm font-bold text-gray-500'>Go solar and save 30% on your electricity bill</p>
    </div>
  </div>
  </div>
  )
}

export default AboutHero

    