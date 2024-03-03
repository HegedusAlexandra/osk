import React, { useEffect } from 'react'
import Landing from './Landing'
import Menu from '../components/Menu'

export default function Main() {



useEffect(() => console.log(window.scrollY),[window.scrollY > 700])

  return (
    <div className='absolute z-2 w-[100%] h-[500vh] bg-transparent'>
        <Menu />
        <Landing/>
    </div>
  )
}
