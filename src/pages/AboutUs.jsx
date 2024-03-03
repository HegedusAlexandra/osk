import React from 'react'
import paper from '../assets/pictures/paper.jpg'

export default function AboutUs() {
  return (
    <div className='w-[100%] h-[100vh] bg-white/80 overflow-hidden'>
        <img src={paper} className='w-[80%] opacity-60 rotate-[20deg] translate-x-[74vh] -translate-y-[40vw]'/>
    </div>
  )
}
