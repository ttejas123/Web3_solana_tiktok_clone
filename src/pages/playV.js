import React, {useRef, useState, useEffect } from 'react'
import message from '../assets/message.png'
import whiteheart from '../assets/white-heart.png'
import redheart from '../assets/red-heart.png'
import close from '../assets/close.png'
// import cd from '../assets/cd.gif'
import share from '../assets/share.png'
import { useWallet } from '@solana/wallet-adapter-react'
import './style.css'

export default function Playv(props) {

    const [liked, setLiked] = useState(false)
    const [comment, setcomment] = useState([]);
    const [newComment, setNewComment] = useState('');
    const wallet = useWallet()

    useEffect(() => {
      if (wallet.connected) {
        props.likesAddress.forEach(address => {
          if (wallet.publicKey.toBase58() === address.toBase58()) {
            setLiked(true)
          }
        })
      }
    }, [wallet, props.likesAddress])

    useEffect(() => {
      gettingComments()
    }, [props.index, props.commentsCount])

    const gettingComments = async () => {
       let comments = await props.getComments(props.address, props.commentsCount);
       comments.sort((a, b) => b.videoTime.toNumber() - a.videoTime.toNumber())
       setcomment(comments);
      //  console.log(comments);
    }

    const replay = async () => {
       console.log("Replay Model")
       const create = await props.createComment(props.address, props.commentsCount, newComment);
       setNewComment('');
    }

    const [playing, setPlaying] = useState(false)
    const [showCommentsModal, setShowCommentsModal] = useState(false)
    const videoRef = useRef(null)
  
    const onVideoPress = () => {
      if (playing) {
        videoRef.current.pause()
        setPlaying(false)
      } else {
        videoRef.current.play()
        setPlaying(true)
      }
    }
  return (
    <div className='w-[100%] h-[100%] relative'>
        <div className="absolute text-white bottom-[15%] left-[7%]">
          <div className='text-[80%] font-semibold'>@{props.name}</div>
          <div className='text-[60%]'>{props.description}...</div>
        </div>
        <div className="absolute text-white bottom-[10%] right-[7%]">
          <div className='mb-7 flex flex-col justify-center items-center'>
            {liked ? (<img className='w-6' src={redheart} />) : (<div className='z-40' onClick={()=> props.LikeVideo(props.address)}><img className='w-6' src={whiteheart} /></div>)}
            <div className='text-sm'>{props.likes}</div>
          </div>

          <div className='mb-7 flex flex-col justify-center items-center'>
            <img className='w-6 z-40' src={message} onClick={()=> setShowCommentsModal(true)} />
            <div className='text-sm'>{props.commentsCount}</div>
          </div>
          <img className='mb-7 w-6' src={share} />
        </div>

        {
          showCommentsModal ? (
            <div className='absolute bottom-0 z-[300] w-full h-[60%] '>
            <div className='opacity-90 h-[90%] bg-black rounded-t-xl'>
              <div className='flex justify-between items-center h-[15%] px-3 bg-red'><div className='text-sm text-white'>{props.commentsCount} Comments</div> <><img onClick={()=> setShowCommentsModal(!showCommentsModal)} className='w-4 h-4' src={close} /></></div>
              <div className='px-3 h-[77%] overflow-y-scroll scroll-mandatory-here'>
                
                {/* Comment Card */}
                {comment.map((val, index) => {
                  console.log(val)
                  return (
                    <div key={index} className='bg-white rounded-md mb-1'> 
                      <div className='flex items-start p-3'>
                        <img class="h-7 w-7 mr-2 rounded-full ring-2 ring-gray-400" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        <div className='text-black'>{val.commenterName}</div>
                      </div>
                      <div className='px-3 pb-2'>{val.text}</div>
                    </div>
                  )
                })}
              
              </div>
            </div>
            <div className='absolute bottom-0 w-full py-2 flex justify-center items-center bg-white'>
              <input className='border border-black w-[72%] rounded-xl py-1 bg-gray-100 text-black px-2' value={newComment} onChange={(e)=> setNewComment(e.target.value)} />
              <div onClick={()=> replay()} className='bg-black ml-2 w-[20%] text-center p-2 rounded-md text-sm text-white'>Send</div>
            </div>
          </div>
          ) : (<></>)
        }
        

        <video
            className='w-[100%] h-[100%]'
            loop
            onClick={onVideoPress}
            ref={videoRef}
            src={props.videoUrl}
          
        />
    </div>
  )
}
