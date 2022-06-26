import React, {useEffect} from 'react'
import useTiktok from '../hooks/useTiktok'

export default function Mainview() {

  const { getTiktoks } = useTiktok();

  useEffect(() => {
    getTiktoks()
  }, [])
  
  return (
    <div>mainview</div>
  )
}
