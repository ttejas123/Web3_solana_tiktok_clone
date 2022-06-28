import React, {useRef, useState } from 'react'

export default function Playv(props) {
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
    <div className='w-[100%] h-[100%]'>
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
