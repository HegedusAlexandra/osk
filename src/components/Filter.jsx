import React from 'react'
import Dropdown from './Dropdown'
import FilterWindow from './FilterWindow'

export default function Filter() {
  return (
    <div className='flex flex-row w-[100%] pt-[10vh] pb-[2vh] h-[4vh]'>
    {window.innerWidth > 780 && <div className='flex justify-start w-[50%] h-[4vh]'>
        <FilterWindow />
    </div>}
    <div className='flex justify-end md:w-[50%] w-[96%] h-[4vh] pr-[1vw]'>
        <Dropdown type={'sort'} />
    </div>
    </div>
  )
}
