import React from 'react'
import Dropdown from './Dropdown'
import FilterWindow from './FilterWindow'

export default function Filter() {
  return (
    <div className='flex flex-row w-[100%] px-[2.5%] pt-[10vh] h-[4vh]'>
    <div className='flex justify-start w-[50%] h-[4vh]'>
        <FilterWindow/>
    </div>
    <div className='flex justify-end w-[50%] h-[4vh] pr-[1vw]'>
        <Dropdown type={'sort'}/>
    </div>
    </div>
  )
}
