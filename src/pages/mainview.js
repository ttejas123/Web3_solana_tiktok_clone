import React, { useState } from 'react'
import './style.css'
import baseicon1 from '../assets/baseIcon(1).png'
import baseicon2 from '../assets/baseIcon(2).png'
import baseicon3 from '../assets/baseIcon(3).png'
import baseicon4 from '../assets/baseIcon(4).png'
import CreateVideo from './createVideo'


export default function Mainview() {
  const[visible, setVisible] = useState(false)
  return (
    <div className="flex justify-center items-center h-[100vh] bg-stone-900 relative">
      {visible && (<div className="absolute  bg-transparent h-[100%] w-[100%] md:w-[40%] lg:w-[35%] xl:w-[25%]"><CreateVideo setVisible={setVisible} visible={visible} /></div>)}
      <div className="h-[100%] md:h-[90%] bg-white w-[100%] md:w-[40%] lg:w-[35%] xl:w-[25%] md:rounded-xl overflow-auto snap-mandatory snap-y scroll-mandatory-here">
        <div className='w-[100%] h-[100%] snap-center bg-red-500 flex justify-center items-center'>TikTok</div>
        <div className='w-[100%] h-[100%] snap-center bg-green-500 flex justify-center items-center'>TikTok</div>
        <div className='w-[100%] h-[100%] snap-center bg-yellow-500 flex justify-center items-center'>TikTok</div>
        <div className='w-[100%] h-[100%] snap-center bg-stone-500 flex justify-center items-center'>TikTok</div>
        <div className='w-[100%] h-[100%] snap-center bg-purple-500 flex justify-center items-center'>TikTok</div>
        
      </div>
      <div className='absolute bottom-0 md:bottom-[5%] w-[100%] h-[8%] md:w-[40%] lg:w-[35%] xl:w-[25%] md:rounded-b-xl text-white w-full bg-black flex justify-between py-2 px-7 items-center'>
        <img className="w-[9%] cursor-pointer" src={baseicon4} />
        <img className="w-[9%] cursor-pointer" src={baseicon1} />
        <div onClick={() => setVisible(!visible)} className="bg-white cursor-pointer w-[11%] h-6 rounded-md text-black flex justify-center items-center text-2xl">+</div>
        <img className="w-[9%] cursor-pointer" src={baseicon2} />
        <img className="w-[9%] cursor-pointer" src={baseicon3} />
      </div>
    </div>
  )
}
