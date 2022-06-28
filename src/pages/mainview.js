import React from 'react'
import './style.css'
// import home from '../assets/home.svg'

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
      <div className='absolute bottom-0 md:bottom-[5%] w-[100%] md:w-[40%] lg:w-[35%] xl:w-[25%] md:rounded-b-xl text-white w-full bg-red-100 flex justify-center'>
        <div onClick={()=>{}}>
          <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"/></svg>
        </div>
      </div>
    </div>
  )
}
