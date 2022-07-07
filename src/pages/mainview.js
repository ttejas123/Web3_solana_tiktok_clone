import React, {useRef, useState } from 'react'
import './style.css'
import baseicon1 from '../assets/baseIcon(1).png'
import baseicon2 from '../assets/baseIcon(2).png'
import baseicon3 from '../assets/baseIcon(3).png'
import baseicon4 from '../assets/baseIcon(4).png'
import CreateVideo from './createVideo'
import Playvideo from './playV.js'


export default function Mainview(props) {
  const[visible, setVisible] = useState(false)
  return (
    <div className="flex justify-center items-center h-[100vh] bg-stone-900 relative">
      {visible && (<div className="absolute  bg-transparent h-[100%] w-[100%] md:w-[40%] lg:w-[35%] xl:w-[25%] z-20"><CreateVideo setVisible={setVisible} visible={visible} description={props.description} setDescription={props.setDescription} videoUrl={props.videoUrl} setVideoUrl={props.setVideoUrl} newVideo={props.newVideo} /></div>)}
      <div className="h-[100%] md:h-[90%] bg-black w-[100%] md:w-[40%] lg:w-[35%] xl:w-[25%] md:rounded-xl overflow-auto snap-mandatory snap-y scroll-mandatory-here">
        {props.tiktoks ? (<>
          { props.tiktoks.map((val, index) => {
              return (<div key={index} className='w-[100%] h-[100%] snap-center bg-transparent flex justify-center items-center'>
                        <Playvideo videoUrl={val.account.videoUrl} description={val.account.description} name={val.account.creatorName} likes={val.account.likes}
                          LikeVideo={props.LikeVideo}
                          getComments={props.getComments}
                          index={val.account.index.toNumber()}
                          createComment={props.createComment}
                          shares={val.account.remove.toNumber()}
                          address={val.publicKey.toBase58()}
                          commentsCount={val.account.commentCount.toNumber()}
                          likesAddress={val.account.peopleWhoLiked} />
                      </div>)
          })}
                          </>) : (<>No TikToks</>)}    
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
