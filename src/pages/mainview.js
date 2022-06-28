import React from 'react'
import './style.css'
import baseicon1 from '../assets/baseIcon(1).png'
import baseicon2 from '../assets/baseIcon(2).png'
import baseicon3 from '../assets/baseIcon(3).png'
import baseicon4 from '../assets/baseIcon(4).png'


export default function Mainview() {
  
  return (
    <div className="flex justify-center items-center h-[100vh] bg-stone-900 ">
      <div className="h-[100%] md:h-[90%] bg-white w-[100%] md:w-[40%] lg:w-[35%] xl:w-[25%] md:rounded-xl overflow-auto snap-mandatory snap-y scroll-mandatory-here relative">
        <div className='w-[100%] h-[100%] snap-center bg-red-500 flex justify-center items-center'>TikTok</div>
        <div className='w-[100%] h-[100%] snap-center bg-green-500 flex justify-center items-center'>TikTok</div>
        <div className='w-[100%] h-[100%] snap-center bg-yellow-500 flex justify-center items-center'>TikTok</div>
        <div className='w-[100%] h-[100%] snap-center bg-stone-500 flex justify-center items-center'>TikTok</div>
        <div className='w-[100%] h-[100%] snap-center bg-purple-500 flex justify-center items-center'>TikTok</div>
        
      </div>
      <div className='absolute bottom-0 md:bottom-[5%] w-[100%] md:w-[40%] lg:w-[35%] xl:w-[25%] md:rounded-b-xl text-white w-full bg-black flex justify-between py-2 px-7 items-center'>
        <img className="w-[9%]" src={baseicon4} />
        <img className="w-[9%]" src={baseicon1} />
        <div className="bg-white w-[11%] h-6 rounded-md text-black flex justify-center items-center text-2xl pb-1">+</div>
        <img className="w-[9%]" src={baseicon2} />
        <img className="w-[9%]" src={baseicon3} />
      </div>
    </div>
  )
}
